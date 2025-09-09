import { useState } from 'react';
import { Button } from '@/components/ui/button';

const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState('study');

  const studyFeatures = [
    {
      icon: '🤖',
      title: 'AI Legal Tutor',
      description: 'Get instant, clear answers to your legal questions with relevant authorities. Upload and Chat with any Material so you never get stuck on complex concepts again'
    },
    {
      icon: '📚',
      title: 'Cases and Statutes Library',
      description: 'Search over 20,000 cases and statutes with easy to understand summary and principles so you can skip reading those 50-page court decisions'
    },
    {
      icon: '📸',
      title: 'Picture to Note, Flashcards and Quizzes',
      description: 'Take a photo of your handwritten notes and Lawexa converts them into a full study note with relevant legal authorities, Flashcard or Quiz to test your knowledge'
    },
    {
      icon: '📂',
      title: 'Trending and Recommended Folders',
      description: 'See what your classmates are studying and stay ahead of the curve by catching up on important topics you might have missed in our curated exam-ready folders'
    }
  ];

  const legalFeatures = [
    {
      icon: '⭐',
      title: 'AI Legal Assistant',
      description: 'Skip confusing jargon and get straightforward answers on any legal question, with clear step by step legal guidance you can follow'
    },
    {
      icon: '📄',
      title: 'Legal Clause Explainer and Risk Assessment',
      description: 'Upload any contract and get instant clause explanations along hidden risks or unfavourable terms, before signing any document. Protect yourself from costly surprises'
    },
    {
      icon: '🤝',
      title: 'Automated Lawyer Connect',
      description: 'Get automatically matched with qualified lawyers near you within your budget, and with the right expertise for your specific legal needs'
    },
    {
      icon: '📣',
      title: 'Legal Pulse (Social Commentary)',
      description: 'Stay informed with legal insights on trending news and social issues. Understand the legal implications of current events and viral topics'
    }
  ];

  const currentFeatures = activeTab === 'study' ? studyFeatures : legalFeatures;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            The All-In-One Platform
          </h2>
          
          {/* Tab Pills */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <button
              onClick={() => setActiveTab('study')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'study'
                  ? 'bg-primary text-primary-foreground shadow-gold'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              For Study
            </button>
            <button
              onClick={() => setActiveTab('legal')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'legal'
                  ? 'bg-primary text-primary-foreground shadow-gold'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              For Legal Help
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Platform Mockup */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-large">
              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="text-2xl font-bold text-primary mb-2">We've Made</div>
                <div className="text-2xl font-bold text-foreground">Law Easy</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary text-primary-foreground p-4 rounded-lg text-center">
                  <div className="font-semibold">Cases</div>
                  <div className="text-sm opacity-90">20k+</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="font-semibold text-foreground">AI Tutor</div>
                  <div className="text-sm text-muted-foreground">24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {currentFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-soft card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="btn-dark text-lg px-8 py-4">
            {activeTab === 'study' ? 'Try Lawexa Student Free >' : 'Get Legal Help Now - Free >'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;