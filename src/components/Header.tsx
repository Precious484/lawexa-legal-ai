import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Features', href: '/features' }
  ];

  const productLinks = [
    { name: 'Lawexa Student', href: '/products/student' },
    { name: 'Lawexa Assistant', href: '/products/assistant' },
    { name: 'Lawexa API', href: '/products/api' }
  ];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-medium' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl text-primary">🏛️</span>
            <span className="text-xl font-bold text-primary">LAWEXA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link key={link.name} to={link.href} className="text-foreground hover:text-primary transition-colors duration-200">
                {link.name}
              </Link>
            ))}
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                Products <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-large z-50"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  {productLinks.map(product => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="block px-4 py-3 text-foreground hover:bg-gray-50 hover:text-primary transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-white">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-gold">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="text-foreground hover:text-primary transition-colors duration-200" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Products Section */}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-gray-500 mb-2">Products</p>
                {productLinks.map(product => (
                  <Link
                    key={product.name}
                    to={product.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Link to="/login">
                  <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-white w-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="btn-gold w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>;
};
export default Header;