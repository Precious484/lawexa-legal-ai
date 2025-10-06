import { useEffect, useState } from 'react';

const UniversityCarousel = () => {
  const [currentOffset, setCurrentOffset] = useState(0);

  const universities = [
    // Mixed universities and organizations
    'University of Lagos',
    'Aluko & Oyebode',
    'University of Ibadan',
    'Moland Partners',
    'Ahmadu Bello University',
    'Templars Law',
    'University of Nigeria',
    'Banwo & Ighodalo',
    'Obafemi Awolowo University',
    'American Tower Company',
    'University of Benin',
    'Udo Udoma & Belo-Osagie',
    'Lagos State University',
    'G. Elias & Co',
    'Covenant University',
    'The Temple Company',
    'Babcock University',
    'Olaniwun Ajayi LP',
    'Lead City University',
    'Codessy Technologies',
    'Afe Babalola University',
    'Jackson, Etti & Edu',
    'University of Abuja',
    'Advocaat Law Practice',
    'Federal University of Technology',
    'Perchstone & Graeys',
    'Rivers State University',
    'Bloomfield Law Practice',
    'University of Port Harcourt',
    'Kenna Partners',
    'Delta State University',
    'Ajumogobia & Okeke',
    'Nnamdi Azikiwe University',
    'Fola Arthur & Associates',
    'University of Calabar',
    'A.O. Alegeh & Co',
    'Bayero University',
    'Olalekan Omisore & Co',
    'University of Maiduguri',
    'Graydot Solicitors',
    'University of Ghana',
    'Total Nigeria',
    'Kwame Nkrumah University',
    'Shell Nigeria',
    'University of Cape Coast',
    'MTN Nigeria',
    'Ashesi University',
    'Dangote Group',
    'Ghana Institute of Management',
    'Access Bank',
    'University of Oxford',
    'GTBank',
    'University of Cambridge',
    'FirstBank Nigeria',
    'Harvard University',
    'Zenith Bank',
    'London School of Economics',
    'UBA Group',
    'King\'s College London',
    'Fidelity Bank',
    'University of Edinburgh',
    'Stanbic IBTC',
    'University of Manchester',
    'Ecobank Nigeria',
    'University of Delhi',
    'Nigerian Breweries',
    'Jawaharlal Nehru University',
    'Nestle Nigeria',
    'Indian Institute of Technology',
    'Unilever Nigeria',
    'Bangalore University',
    'Stanford University',
    'Mumbai University',
    'Yale University',
    'Columbia University',
    'University of Chicago',
    'New York University',
    'University of California'
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedUniversities = [...universities, ...universities];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffset(prev => {
        const newOffset = prev - 0.1;
        // Reset when we've scrolled through the first set
        if (newOffset <= -50) {
          return 0;
        }
        return newOffset;
      });
    }, 80); // Slower, smoother movement

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-transparent py-4">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      
      <div 
        className="flex space-x-8 whitespace-nowrap transition-transform duration-75 ease-linear"
        style={{ transform: `translateX(${currentOffset}%)` }}
      >
        {duplicatedUniversities.map((university, index) => (
          <div
            key={`${university}-${index}`}
            className="flex-shrink-0 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/50 shadow-sm"
          >
            <span className="text-sm font-medium text-slate-600">
              {university}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityCarousel;