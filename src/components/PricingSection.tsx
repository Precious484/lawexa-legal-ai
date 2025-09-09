import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free Plan',
      subtitle: 'Explore Lawexa Risk-Free',
      price: 'FREE',
      period: '',
      description: 'Perfect for trial development',
      features: [
        'Ask a questions About Nigeria Cases',
        'Download cases',
        'Convert Image/files to notes',
        'Create Basic Flashcards',
        'Limited Chat with legal documents',
        'Access to Lawexa Student Kit',
        'Lawexa Questions bank',
        'Questions from practice',
        'Lawexa Student Archive',
        'Create forms & Wills Materials',
        'Connect to Law students Nearby',
        'LawBreakers',
        'Limited Smart Legal Assistant Access'
      ],
      buttonText: 'Start Free Trial Forever',
      buttonStyle: 'btn-gold',
      popular: false
    },
    {
      name: 'Student Plan',
      subtitle: 'Academic Excellence Made',
      price: '₦4,900',
      period: '/month',
      description: 'Perfect for Law students who want everything to excel academically and pass',
      features: [
        'Everything in Free, PLUS:',
        'Perfect for Law students who want everything to excel academically and pass',
        'Unlimited smart legal guidance',
        'Course Notes & Slide Materials',
        'Understand the Principles, Parties and court Rulings',
        'Lawexa Questions bank',
        'Questions from past Questions, Text Book and case law',
        'LawBreakers Quiz'
      ],
      buttonText: 'Start Student Free-Trial',
      buttonStyle: 'btn-dark',
      popular: true
    },
    {
      name: 'Assistant Plan',
      subtitle: 'Your Personal AI',
      price: '₦25,900',
      period: '/month',
      description: 'Perfect for Professionals, Entrepreneurs, Business owners and individuals dealing with legal documents',
      features: [
        'Perfect for Professionals',
        'Entrepreneurs, Business owners',
        'Everything In Student, PLUS:',
        'Document Risk Assessment',
        'Contract Clause Analysis',
        'Legal Advice Recommendation',
        'Priority Support (Response in 1 hours)',
        'AI Legal Content Generator',
        'Perfect AI Tutor',
        'Content Legal Claims'
      ],
      buttonText: 'Try For 1 Week ₦1000',
      buttonStyle: 'btn-gold',
      popular: false
    },
    {
      name: 'Corporate Plan',
      subtitle: 'Scale Your Legal Operations',
      price: '₦100,000',
      period: '/month',
      description: 'Perfect for Advising teams who need unlimited access. Everything In Assistant, PLUS:',
      features: [
        'Perfect for Advising teams who need unlimited access',
        'Everything In Assistant, PLUS:',
        'Up to 15 user Accounts',
        'Document Database & Analytics',
        'AI-Powered Case Management',
        'More Legal & Business Features',
        'Custom Team Training Session',
        'We come for Business consultation call',
        'Our Legal Specialist Dedicated Account Manager'
      ],
      buttonText: 'Call Corporate Info',
      buttonStyle: 'btn-outline border-white text-white hover:bg-white hover:text-foreground',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-lawexa-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Unlock Your Legal Advantage
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 15,000+ professionals who save 5+ hours per week with AI-powered legal intelligence
          </p>
          
          {/* Tab Pills */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="bg-primary px-4 py-2 rounded-full">
              <span className="text-primary-foreground font-medium">Monthly</span>
            </div>
            <div className="bg-blue-600 px-4 py-2 rounded-full">
              <span className="text-white font-medium">3-months</span>
            </div>
            <div className="bg-blue-800 px-4 py-2 rounded-full">
              <span className="text-white font-medium">Yearly</span>
            </div>
            <div className="bg-yellow-600 px-4 py-2 rounded-full">
              <span className="text-white font-medium">Most Popular</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-gray-900 rounded-2xl p-6 ${
                plan.popular ? 'ring-2 ring-primary' : ''
              } hover:scale-105 transition-transform duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{plan.subtitle}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <p className="text-sm text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full ${plan.buttonStyle}`}>
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            All plans include 24/7 customer support and regular feature updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;