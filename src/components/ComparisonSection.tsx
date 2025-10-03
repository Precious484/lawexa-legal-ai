import { useState } from 'react';
import { Button } from '@/components/ui/button';
const ComparisonSection = () => {
  const [showComparison, setShowComparison] = useState(false);
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
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            See how Lawexa stacks up.
          </h2>
          <Button onClick={() => setShowComparison(!showComparison)} variant="outline" className="px-8 py-4 font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            {showComparison ? 'Hide' : 'Compare Our Features'}
            <span className="ml-2 font-light">{showComparison ? '↑' : '↓'}</span>
          </Button>
        </div>
        
        {/* Expandable Comparison Table */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showComparison ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="border border-border rounded-xl shadow-large bg-card p-6 mt-8">
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
        </div>
      </div>
    </section>;
};
export default ComparisonSection;