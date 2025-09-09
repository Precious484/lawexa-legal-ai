import { useState } from 'react';
import { Check, FileText, Users, Book, CreditCard } from 'lucide-react';

const PricingSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Free Plan',
      subtitle: 'Explore Lawexa Risk-Free',
      icon: FileText,
      prices: {
        monthly: '₦0',
        '6months': '₦0',
        '1year': '₦0'
      },
      period: {
        monthly: '/month • No credit card required',
        '6months': '/6 months • No credit card required',
        '1year': '/yearly • No credit card required'
      },
      perfectFor: '🎯 Perfect for: First-time users wanting to test our platform',
      description: 'Get a generous taste of Lawexa\'s power with monthly usage limits designed to showcase our capabilities. Perfect for exploring before committing - 87% of our users started here first.',
      features: [
        'Access to Lawexa Student (10 queries/month)',
        'Access to Lawexa Assistant (5 Documents/month)', 
        'Laws and Statutes',
        'Knowledge Library Access'
      ],
      buttonText: 'Start Free - No Card Needed',
      buttonStyle: 'bg-lawexa-gold text-black hover:bg-lawexa-gold/90',
      popular: false,
      bottomText: '⚡ Set up in under 60 seconds'
    },
    {
      name: 'Student Plan',
      subtitle: 'Academic Excellence Made Easy',
      icon: Book,
      prices: {
        monthly: '₦4,900',
        '6months': '₦26,460',
        '1year': '₦47,040'
      },
      originalPrices: {
        '6months': '₦29,400',
        '1year': '₦58,800'
      },
      period: {
        monthly: '/monthly',
        '6months': '/6 months',
        '1year': '/yearly'
      },
      perfectFor: '🎯 Perfect for: Law students who want to excel and graduate top of their class',
      description: 'Transform your study experience with AI-powered tools designed specifically for academic success. Plus, get a taste of Lawexa Assistant features to prepare for your career.',
      features: [
        'Database Access & Smart Search',
        'AI Tutor (Your 24/7 Study Companion)',
        'Flashcard Generation',
        'Picture-to-Note Conversion',
        'Legal Contract Review',
        'Course Notes & Study Materials',
        'Exam Practice Mode',
        '2 Documents/Month',
        'Limited Smart Legal Assistant Access'
      ],
      buttonText: 'Claim Student Discount',
      buttonStyle: 'bg-white text-black hover:bg-gray-100',
      popular: false,
      testimonial: {
        quote: '"Before lawexa, I spent 6 hours researching one case. Now I get comprehensive analysis in minutes. My GPA jumped from 3.2 to 4.1!"',
        author: '- Kemi A., Final Year Student, University of Lagos'
      },
      bottomText: '💸 Cancel anytime'
    },
    {
      name: 'Assistant Plan',
      subtitle: 'Your Personal Legal AI',
      icon: Users,
      prices: {
        monthly: '₦25,000',
        '6months': '₦135,000',
        '1year': '₦240,000'
      },
      originalPrices: {
        '6months': '₦150,000',
        '1year': '₦300,000'
      },
      period: {
        monthly: '/monthly',
        '6months': '/6 months',
        '1year': '/yearly'
      },
      perfectFor: '🎯 Perfect for: Professionals, entrepreneurs & everyday Nigerians who need legal clarity',
      description: 'Stop paying ₦50,000+ for simple legal consultations. Get unlimited access to Nigeria\'s most advanced legal AI that works 24/7 for a fraction of the cost of one lawyer visit.',
      features: [
        'Legal Contract Generation',
        'Smart Legal Assistant (Ask anything!)',
        'Contract & Clause Analysis',
        'Contract Chat (Talk to your contracts)',
        'Smart Lawyer connect',
        'Priority Support (Response in 2 hours)'
      ],
      buttonText: 'Get Lawexa Assistant',
      buttonStyle: 'bg-lawexa-gold text-black hover:bg-lawexa-gold/90',
      popular: true,
      savings: '📊 Average User Saves: ₦180,000/month in legal fees',
      testimonial: {
        quote: '"As a small business owner, Lawexa is like having a lawyer on speed dial. I\'ve saved a lot in legal fees honestly!"',
        author: '- Kelvin Obimba, Freelance Graphic Designer'
      }
    },
    {
      name: 'Corporate Plan',
      subtitle: 'Scale Your Legal Operations',
      icon: CreditCard,
      prices: {
        monthly: '₦100,000',
        '6months': '₦540,000',
        '1year': '₦960,000'
      },
      originalPrices: {
        '6months': '₦600,000',
        '1year': '₦1,200,000'
      },
      period: {
        monthly: '/monthly',
        '6months': '/6 months',
        '1year': '/yearly'
      },
      perfectFor: '🎯 Perfect for: Growing teams who need collaborative legal intelligence',
      description: 'Equip your entire team with enterprise-grade legal AI. Perfect for startups, SMEs, and any business serious about legal compliance and efficiency.',
      features: [
        'up to 5 User Accounts',
        'Team Collaboration Workspace',
        'Shared Document Libraries',
        'Admin Dashboard & User Management',
        'Usage Analytics & Reporting',
        'Dedicated Account Manager',
        'Custom Team Training Session',
        'API Access for Business Integration'
      ],
      buttonText: 'Get Corporate Plan',
      buttonStyle: 'bg-white text-black hover:bg-gray-100',
      popular: false,
      testimonial: {
        quote: '"Our team replaced our ₦500,000/month legal retainer with lawexa. We get faster responses on quick legal questions we have concerning our operations and connects us directly to domain expert lawyers for a large fraction of the cost we spent on the retainer"',
        author: '- Jesse E., CEO, Codessy Technologies Limited'
      },
      bottomText: '📈 Free onboarding • Dedicated success manager'
    }
  ];

  const periods = [
    { id: 'monthly', label: 'Monthly', saveLabel: null },
    { id: '6months', label: '6 months', saveLabel: 'Save 10%' },
    { id: '1year', label: 'Yearly', saveLabel: 'Save 20%' }
  ];

  return (
    <section className="py-20 bg-lawexa-dark text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Unlock Your Legal Advantage
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 10,000+ professionals who save 15+ hours per week with AI-powered legal intelligence
          </p>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 rounded-full p-1 flex items-center">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  className={`px-4 py-2 font-semibold rounded-full transition-all duration-300 relative ${
                    selectedPeriod === period.id
                      ? 'bg-lawexa-gold text-black'
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  {period.label}
                  {period.saveLabel && selectedPeriod !== 'monthly' && (
                    <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-lawexa-gold text-black text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      {period.saveLabel}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative bg-gray-900 p-8 rounded-2xl border flex flex-col ${
                  plan.popular
                    ? 'border-l-4 border-l-lawexa-gold border-gray-600'
                    : 'border-gray-600'
                } hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-6 mr-4 py-1 px-4 rounded-full bg-lawexa-gold text-black text-sm font-bold">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-700 mx-auto">
                  <IconComponent className="w-8 h-8 text-lawexa-gold" />
                </div>

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="font-bold text-2xl sm:text-3xl mb-2 text-lawexa-gold">
                    {plan.name}
                  </h3>
                  <p className="font-bold text-lg mb-4 text-white">
                    {plan.subtitle}
                  </p>
                  
                  {/* Price */}
                  <div className="text-5xl font-extrabold text-center mb-2">
                    {plan.originalPrices && plan.originalPrices[selectedPeriod] && selectedPeriod !== 'monthly' && (
                      <span className="text-sm text-gray-500 line-through mr-2">
                        {plan.originalPrices[selectedPeriod]}
                      </span>
                    )}
                    {plan.prices[selectedPeriod]}
                  </div>
                  <p className="text-sm text-gray-400 mb-6">
                    {plan.period[selectedPeriod]}
                  </p>

                  {/* Perfect For & Description */}
                  <p className="text-center font-semibold text-sm mb-4 text-lawexa-gold">
                    {plan.perfectFor}
                  </p>
                  <p className="text-center text-sm mb-6 text-gray-300">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="w-full flex-grow">
                  <h4 className="font-bold mb-2">
                    {plan.name === 'Free Plan' ? 'What You Get:' : 'Everything in Free, PLUS:'}
                  </h4>
                  <ul className="text-sm space-y-2 mb-6 text-gray-300">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 mr-2 text-lawexa-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Savings/Testimonial */}
                {plan.savings && (
                  <div className="bg-gray-800 p-4 rounded-lg mb-6 w-full">
                    <p className="font-bold text-sm text-center text-gray-400">
                      {plan.savings}
                    </p>
                  </div>
                )}

                {plan.testimonial && (
                  <div className="bg-gray-800 p-4 rounded-lg mb-6 w-full">
                    <p className="italic text-sm text-gray-400 mb-2">
                      {plan.testimonial.quote}
                    </p>
                    <p className="font-bold text-sm text-gray-300">
                      {plan.testimonial.author}
                    </p>
                  </div>
                )}

                {/* CTA Button */}
                <div className="w-full mt-auto">
                  <button className={`w-full px-8 py-4 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>

                {/* Bottom Text */}
                {plan.bottomText && (
                  <p className="text-xs text-center text-gray-500 mt-2">
                    {plan.bottomText}
                  </p>
                )}
              </div>
            );
          })}
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