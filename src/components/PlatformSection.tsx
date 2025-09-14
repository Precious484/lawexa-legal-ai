import { useState } from 'react';
import { Button } from '@/components/ui/button';
const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState('study');
  const [activeFeature, setActiveFeature] = useState(0);
  const [showComparison, setShowComparison] = useState(false);
  const studyFeatures = [{
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
    title: 'AI Legal Tutor',
    description: 'Get instant, clear answers to your legal questions with relevant authorities. Upload and Chat with any Material so you never get stuck on complex concepts again.',
    image: 'https://placehold.co/400x260/FFD700/1a1a1a?text=AI+Legal+Tutor'
  }, {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>,
    title: 'Cases and Statutes Library',
    description: 'Search over 20,000 cases and statutes with easy-to-understand summaries so you can skip reading those boring 50-paged court decisions.',
    image: 'https://placehold.co/400x260/FFD700/1a1a1a?text=Cases+and+Statutes'
  }, {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>,
    title: 'Picture to Note, Flashcards and Quizzes',
    description: 'Take a photo of your handwritten notes and Lawexa converts them into a full study note with relevant legal authorities, Flashcard or Quiz to test your knowledge.',
    image: 'https://placehold.co/400x260/FFD700/1a1a1a?text=Flashcards+%26+Quizzes'
  }, {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>,
    title: 'Trending and Recommended Folders',
    description: 'See what your classmates are studying and stay ahead of the curve by catching up on important topics you might have missed in our curated exam-ready folders',
    image: 'https://placehold.co/400x260/FFD700/1a1a1a?text=Trending+Folders'
  }];
  const legalFeatures = [{
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16h.01" />
        </svg>,
    title: 'AI Legal Assistant',
    description: 'Skip confusing jargon and get straightforward answers on any legal question, with clear step-by-step legal guidance you can follow',
    image: 'https://placehold.co/400x260/FFD700/1a1a1a?text=AI+Legal+Assistant'
  }, {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
    title: 'Legal Clause Explainer and Risk Assessment',
    description: 'Upload any contract and get instant clause explanation, detect hidden risks or unfavourable terms, before signing any document. Protect yourself from costly surprises',
    image: 'https://placehold.co/400x260/FFD700/1a1a1a?text=Legal+Clause+Explainer'
  }, {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>,
    title: 'Automated Lawyer Connect',
    description: 'Get automatically matched with qualified lawyers near you, within your budget, and with the right expertise for your specific legal needs.',
    image: 'https://placehold.co/400x260/FFD700/1a1a1a?text=Automated+Lawyer+Connect'
  }, {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 14h14l-2-14M11 9v4M13 9v4" />
        </svg>,
    title: 'Legal Pulse (Social Commentary)',
    description: 'Stay informed with legal insights on trending news and social issues. Understand the legal implications of current events and viral topics.',
    image: 'https://placehold.co/400x260/FFD700/1a1a1a?text=Legal+Pulse'
  }];
  const comparisonData = [{
    feature: 'Nigerian Law Database',
    lawexa: true,
    lawPavilion: true,
    chatGPT: false,
    gemini: false,
    harvey: false,
    caseRadar: true
  }, {
    feature: 'AI-Powered Legal Analysis',
    lawexa: true,
    lawPavilion: false,
    chatGPT: true,
    gemini: true,
    harvey: true,
    caseRadar: false
  }, {
    feature: 'Contract Generation',
    lawexa: true,
    lawPavilion: false,
    chatGPT: false,
    gemini: false,
    harvey: true,
    caseRadar: false
  }, {
    feature: 'Legal Document Analysis',
    lawexa: true,
    lawPavilion: false,
    chatGPT: true,
    gemini: true,
    harvey: true,
    caseRadar: false
  }, {
    feature: 'Nigerian Court Decisions',
    lawexa: true,
    lawPavilion: true,
    chatGPT: false,
    gemini: false,
    harvey: false,
    caseRadar: true
  }, {
    feature: 'Real-time Legal Updates',
    lawexa: true,
    lawPavilion: true,
    chatGPT: false,
    gemini: false,
    harvey: false,
    caseRadar: true
  }, {
    feature: 'Student-Friendly Pricing',
    lawexa: true,
    lawPavilion: false,
    chatGPT: false,
    gemini: false,
    harvey: false,
    caseRadar: false
  }, {
    feature: 'Academic Tools & Resources',
    lawexa: true,
    lawPavilion: false,
    chatGPT: false,
    gemini: false,
    harvey: false,
    caseRadar: false
  }, {
    feature: 'Lawyer Connect Feature',
    lawexa: true,
    lawPavilion: false,
    chatGPT: false,
    gemini: false,
    harvey: false,
    caseRadar: false
  }, {
    feature: 'Local Language Support',
    lawexa: true,
    lawPavilion: false,
    chatGPT: true,
    gemini: true,
    harvey: false,
    caseRadar: false
  }];
  const currentFeatures = activeTab === 'study' ? studyFeatures : legalFeatures;
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setActiveFeature(0);
    setShowComparison(false);
  };
  const handleFeatureHover = (index: number) => {
    setActiveFeature(index);
  };
  if (showComparison) {
    return <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showComparison ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border border-border rounded-xl shadow-large bg-card p-6 mt-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How Lawexa Compares
            </h3>
            <Button onClick={() => setShowComparison(false)} variant="outline" size="sm" className="text-sm">
              ← Hide Comparison
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Features</th>
                  <th className="text-center p-4 font-semibold bg-primary text-primary-foreground rounded-t-lg">Lawexa</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">Law Pavilion</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">ChatGPT</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">Gemini</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">Harvey</th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">NWLR</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => <tr key={index} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}>
                    <td className="p-4 font-medium text-foreground">{item.feature}</td>
                    <td className="p-4 text-center">
                      {item.lawexa ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                    </td>
                    <td className="p-4 text-center">
                      {item.lawPavilion ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                    </td>
                    <td className="p-4 text-center">
                      {item.chatGPT ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                    </td>
                    <td className="p-4 text-center">
                      {item.gemini ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                    </td>
                    <td className="p-4 text-center">
                      {item.harvey ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                    </td>
                    <td className="p-4 text-center">
                      {item.caseRadar ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>;
  }
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header and Tabs */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            The All-In-One Platform
          </h1>
          
          <div className="flex items-center justify-center space-x-2 p-1 bg-muted rounded-full mb-12 shadow-soft inline-flex">
            <button onClick={() => handleTabChange('study')} className={`px-6 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 transform ${activeTab === 'study' ? 'bg-primary text-primary-foreground scale-105' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-102'}`}>
              For Study
            </button>
            <button onClick={() => handleTabChange('legal')} className={`px-6 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 transform ${activeTab === 'legal' ? 'bg-primary text-primary-foreground scale-105' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:scale-102'}`}>
              For Legal Help
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto transition-opacity duration-300">
          {/* Features List */}
          <div className="w-full lg:w-1/2 p-4 lg:p-8">
            <div className="space-y-4">
              {currentFeatures.map((feature, index) => <div key={feature.title} className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 transform-gpu ${index === activeFeature ? 'bg-primary/5 border-primary/20 shadow-soft translate-y-[-2px]' : 'bg-card border-border hover:bg-muted/50 hover:translate-y-[-2px] hover:shadow-soft'}`} onMouseEnter={() => handleFeatureHover(index)} onClick={() => handleFeatureHover(index)}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Laptop Mockup */}
          <div className="w-full lg:w-1/2 p-4 lg:p-8 flex items-center justify-center relative">
            <img src="https://placehold.co/800x600/1a1a1a/666?text=Laptop+Frame" alt="Laptop Frame" className="w-full h-auto rounded-lg shadow-large" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[52%] w-[70%] h-[60%] overflow-hidden rounded-lg shadow-soft">
              <div className="w-full h-full bg-cover bg-center transition-all duration-400 ease-in-out" style={{
              backgroundImage: `url('${currentFeatures[activeFeature]?.image}')`,
              transform: 'scale(1)',
              opacity: 1
            }} />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          
        </div>

        {/* Comparison Section */}
        <div className="text-center mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            See how Lawexa stacks up.
          </h2>
          <Button onClick={() => setShowComparison(!showComparison)} variant="outline" className="px-8 py-4 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            {showComparison ? 'Hide' : 'Compare Our Features'}
            <span className="ml-2 font-light">{showComparison ? '↑' : '↓'}</span>
          </Button>
        </div>
        
        {/* Expandable Comparison Table */}
        {showComparison && <div className="mt-8 animate-fade-in">
            {showComparison && <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showComparison ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="border border-border rounded-xl shadow-large bg-card p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-4 font-semibold text-foreground">Features</th>
                          <th className="text-center p-4 font-semibold bg-primary text-primary-foreground rounded-t-lg">Lawexa</th>
                          <th className="text-center p-4 font-semibold text-muted-foreground">Law Pavilion</th>
                          <th className="text-center p-4 font-semibold text-muted-foreground">ChatGPT</th>
                          <th className="text-center p-4 font-semibold text-muted-foreground">Gemini</th>
                          <th className="text-center p-4 font-semibold text-muted-foreground">Harvey</th>
                          <th className="text-center p-4 font-semibold text-muted-foreground">Case Radar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((item, index) => <tr key={index} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}>
                            <td className="p-4 font-medium text-foreground">{item.feature}</td>
                            <td className="p-4 text-center">
                              {item.lawexa ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                            </td>
                            <td className="p-4 text-center">
                              {item.lawPavilion ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                            </td>
                            <td className="p-4 text-center">
                              {item.chatGPT ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                            </td>
                            <td className="p-4 text-center">
                              {item.gemini ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                            </td>
                            <td className="p-4 text-center">
                              {item.harvey ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                            </td>
                            <td className="p-4 text-center">
                              {item.caseRadar ? <span className="text-green-500 font-bold text-xl">✓</span> : <span className="text-red-500 font-bold text-xl">✗</span>}
                            </td>
                          </tr>)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>}
          </div>}
      </div>
    </section>;
};
export default PlatformSection;