import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Search, FileText, Users, Shield, Zap, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Legal Tutor",
      description: "Your 24/7 study companion that explains complex Nigerian law concepts in simple terms. Perfect for law students preparing for exams or professionals needing quick legal clarification.",
      category: "For Study"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Nigerian Case Law Search",
      description: "Instantly find relevant Nigerian cases, statutes, and legal precedents with our intelligent search that understands legal language and context.",
      category: "For Study"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Contract Analysis & Generation",
      description: "Upload any contract and get instant analysis for potential issues, or generate custom legal documents tailored to Nigerian law requirements.",
      category: "For Legal Help"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect with Expert Lawyers",
      description: "When you need human expertise, get instantly connected with verified Nigerian lawyers who specialize in your specific legal area.",
      category: "For Legal Help"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal Rights Checker",
      description: "Input your situation and immediately understand your legal rights and obligations under Nigerian law. No legal jargon, just clear explanations.",
      category: "For Legal Help"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Flashcard Generation",
      description: "Convert your legal notes or textbook pages into smart flashcards automatically. Study more efficiently with AI-generated questions and answers.",
      category: "For Study"
    }
  ];

  const categories = Array.from(new Set(features.map(f => f.category)));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Lawexa Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Legal Intelligence That Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From law students to legal professionals, discover how Lawexa's AI-powered features are transforming legal education and practice across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Features by Category */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {categories.map((category, categoryIndex) => (
            <div key={category} className={`mb-8 ${categoryIndex !== 0 ? 'pt-8' : ''}`}>
              <div className="text-center mb-6">
                <Badge className="mb-2 bg-accent/10 text-accent border-accent/20">
                  {category}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {category === 'For Study' && 'Perfect for Law Students'}
                  {category === 'For Legal Help' && 'Perfect for Legal Professionals & Individuals'}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features
                  .filter(feature => feature.category === category)
                  .map((feature, index) => (
                    <Card key={index} className="border-border hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Try Lawexa Today
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Join 15,000+ students and professionals who are already getting smarter about Nigerian law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <button className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-colors">
                  Start Free Trial
                </button>
              </Link>
              <Link to="/pricing">
                <button className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;