import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Compare = () => {
  const comparisonData = [
    { feature: 'AI Legal Tutor', lawexa: true, aiLegalCo: false, lawMate: true, legalBot: false },
    { feature: 'Cases & Statutes Library', lawexa: true, aiLegalCo: true, lawMate: false, legalBot: false },
    { feature: 'Picture to Note', lawexa: true, aiLegalCo: false, lawMate: false, legalBot: true },
    { feature: 'Trending Folders', lawexa: true, aiLegalCo: false, lawMate: false, legalBot: false },
    { feature: 'AI Legal Assistant', lawexa: true, aiLegalCo: true, lawMate: true, legalBot: true },
    { feature: 'Clause Explainer', lawexa: true, aiLegalCo: true, lawMate: false, legalBot: false },
    { feature: 'Automated Lawyer Connect', lawexa: true, aiLegalCo: false, lawMate: false, legalBot: false },
    { feature: 'Legal Pulse', lawexa: true, aiLegalCo: true, lawMate: false, legalBot: true },
    { feature: '24/7 Support', lawexa: true, aiLegalCo: true, lawMate: true, legalBot: false }
  ];

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Link to="/">
            <Button variant="outline" className="mb-8 inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Lawexa vs. The Rest
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Lawexa's comprehensive features stack up against the competition
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-large border border-border bg-card">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Feature
                </th>
                <th scope="col" className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Lawexa
                </th>
                <th scope="col" className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  AI Legal Co.
                </th>
                <th scope="col" className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  LawMate
                </th>
                <th scope="col" className="px-6 py-4 text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Legal-Bot
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {comparisonData.map((item, index) => (
                <tr key={index} className="hover:bg-muted/50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                    {item.feature}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                    {item.lawexa ? (
                      <span className="text-primary font-bold text-xl">✓</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                    {item.aiLegalCo ? (
                      <span className="text-primary font-bold text-xl">✓</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                    {item.lawMate ? (
                      <span className="text-primary font-bold text-xl">✓</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                    {item.legalBot ? (
                      <span className="text-primary font-bold text-xl">✓</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-8">
            Ready to experience the difference? Get started with Lawexa today.
          </p>
          <Button className="btn-dark text-lg px-8 py-4">
            Try Lawexa Free
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Compare;