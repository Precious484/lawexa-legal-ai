import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, MessageCircle, Scale, Users, Smartphone, Globe, ArrowRight, Check } from 'lucide-react';

const Products = () => {
  useEffect(() => {
    document.title = 'Products - Lawexa | AI-Powered Legal Solutions';
  }, []);

  const products = [
    {
      icon: BookOpen,
      name: 'Lawexa Student',
      tagline: 'Your AI Study Companion',
      description: 'Transform your legal education with AI-powered study tools designed specifically for African law students.',
      features: [
        'AI Tutor for instant legal guidance',
        'Case law database with 20,000+ Nigerian cases',
        'Smart flashcard generation from your notes',
        'Picture-to-note conversion with legal authorities',
        'Exam practice modes with past questions',
        'Course materials from top universities'
      ],
      pricing: 'Starting at ₦4,900/month',
      cta: 'Start Learning',
      color: 'from-blue-600 to-blue-800',
      image: 'https://placehold.co/600x400/374151/FFD700?text=Student+Platform'
    },
    {
      icon: MessageCircle,
      name: 'Lawexa Assistant',
      tagline: 'Your Personal Legal AI',
      description: 'Get instant legal guidance, contract analysis, and professional legal support 24/7 without the hefty legal fees.',
      features: [
        'Smart legal assistant for any question',
        'Contract review and risk assessment',
        'Legal document generation',
        'Clause-by-clause contract analysis',
        'Direct lawyer matching and connection',
        'Priority support within 2 hours'
      ],
      pricing: 'Starting at ₦25,000/month',
      cta: 'Get Assistant',
      color: 'from-purple-600 to-purple-800',
      image: 'https://placehold.co/600x400/374151/FFD700?text=AI+Assistant'
    },
    {
      icon: Users,
      name: 'Lawexa Corporate',
      tagline: 'Enterprise Legal Intelligence',
      description: 'Scale your legal operations with enterprise-grade AI tools designed for teams and organizations.',
      features: [
        'Multi-user team workspace',
        'Shared document libraries and templates',
        'Advanced analytics and reporting',
        'Custom integrations via API',
        'Dedicated account manager',
        'Team training and onboarding'
      ],
      pricing: 'Starting at ₦100,000/month',
      cta: 'Contact Sales',
      color: 'from-green-600 to-green-800',
      image: 'https://placehold.co/600x400/374151/FFD700?text=Corporate+Solution'
    }
  ];

  const platforms = [
    {
      icon: Smartphone,
      name: 'Mobile Apps',
      description: 'Access Lawexa on the go with our native iOS and Android applications.',
      availability: 'Available on App Store and Google Play'
    },
    {
      icon: Globe,
      name: 'Web Platform',
      description: 'Full-featured web application accessible from any device with a browser.',
      availability: 'Access at app.lawexa.com'
    },
    {
      icon: Scale,
      name: 'API Integration',
      description: 'Integrate Lawexa\'s legal intelligence into your existing workflows.',
      availability: 'Enterprise plans only'
    }
  ];

  const stats = [
    { number: '20,000+', label: 'Legal Cases' },
    { number: '130+', label: 'Universities' },
    { number: '15,000+', label: 'Active Users' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-lawexa-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI-Powered Legal Solutions
                <span className="text-lawexa-gold"> For Everyone</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                From law students to corporate teams, discover the perfect Lawexa solution for your legal intelligence needs.
              </p>
              <button className="bg-lawexa-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-lawexa-gold/90 hover:scale-105 transition-all duration-300">
                Explore All Products
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-lawexa-gold mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Our Products
            </h2>
            <div className="space-y-20">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                    {/* Content */}
                    <div className="lg:w-1/2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{product.name}</h3>
                          <p className="text-lawexa-gold font-semibold">{product.tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-bold text-foreground mb-4">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <Check className="w-5 h-5 text-lawexa-gold flex-shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <button className="bg-lawexa-gold text-black px-6 py-3 rounded-xl font-bold hover:bg-lawexa-gold/90 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                          {product.cta} <ArrowRight className="w-4 h-4" />
                        </button>
                        <p className="text-gray-600 font-semibold">{product.pricing}</p>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="lg:w-1/2">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full rounded-2xl shadow-large hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Available Everywhere
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {platforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                    <div className="w-16 h-16 bg-lawexa-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{platform.name}</h3>
                    <p className="text-gray-600 mb-3">{platform.description}</p>
                    <p className="text-sm text-lawexa-gold font-semibold">{platform.availability}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-lawexa-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Seamless Integration
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Lawexa integrates with your existing workflow and tools to provide legal intelligence exactly where you need it.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 bg-gray-800 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3 text-lawexa-gold">API Access</h3>
                  <p className="text-gray-300">Integrate our legal AI into your applications with our robust RESTful API.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3 text-lawexa-gold">Webhooks</h3>
                  <p className="text-gray-300">Get real-time notifications and updates directly in your existing systems.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-2xl">
                  <h3 className="text-xl font-bold mb-3 text-lawexa-gold">Single Sign-On</h3>
                  <p className="text-gray-300">Enterprise-grade security with SSO integration for seamless access control.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the Lawexa solution that fits your needs and start transforming how you work with legal information today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-lawexa-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-lawexa-gold/90 hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-lawexa-gold hover:text-lawexa-gold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;