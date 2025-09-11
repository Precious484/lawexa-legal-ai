import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Search, FileText, Users, Shield, Zap, Clock, Globe } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Legal Research",
      description: "Advanced artificial intelligence that understands legal context and provides intelligent case analysis, precedent identification, and comprehensive legal research across multiple jurisdictions.",
      category: "Research"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Case Discovery",
      description: "Discover relevant cases, statutes, and legal precedents with intelligent search algorithms that understand legal language and context for more accurate results.",
      category: "Research"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Document Automation",
      description: "Generate contracts, legal briefs, and other documents using AI-powered templates with intelligent customization based on your specific requirements.",
      category: "Productivity"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Workspace",
      description: "Work together seamlessly with team members, share research findings, collaborate on documents, and manage projects with integrated communication tools.",
      category: "Collaboration"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption, multi-factor authentication, and comprehensive audit trails ensure your sensitive legal data is protected at all times.",
      category: "Security"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Updates",
      description: "Stay current with automatic updates on legal changes, new case law, and regulatory requirements relevant to your practice areas.",
      category: "Updates"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Tracking & Billing",
      description: "Integrated time tracking with automatic billing generation, client management, and detailed reporting for efficient practice management.",
      category: "Productivity"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Jurisdiction Support",
      description: "Access legal information and research capabilities across 50+ countries with localized legal knowledge bases and jurisdiction-specific insights.",
      category: "Global"
    }
  ];

  const categories = Array.from(new Set(features.map(f => f.category)));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Complete Feature Set
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powerful Features
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover the comprehensive suite of AI-powered tools and features designed to transform your legal practice and accelerate your success.
            </p>
          </div>
        </div>
      </section>

      {/* Features by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {categories.map((category, categoryIndex) => (
            <div key={category} className={`mb-16 ${categoryIndex !== 0 ? 'pt-16 border-t border-border' : ''}`}>
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                  {category}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {category === 'Research' && 'Research & Discovery'}
                  {category === 'Productivity' && 'Productivity & Efficiency'}
                  {category === 'Collaboration' && 'Team Collaboration'}
                  {category === 'Security' && 'Security & Compliance'}
                  {category === 'Updates' && 'Real-time Intelligence'}
                  {category === 'Global' && 'Global Coverage'}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {features
                  .filter(feature => feature.category === category)
                  .map((feature, index) => (
                    <Card key={index} className="border-border hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
                      <CardHeader>
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-2xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
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
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience All Features
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your free trial today and discover how our comprehensive feature set can transform your legal practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-medium transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;