import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-black">
        <Header />
      </div>
      <div className="pt-16">
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;