import { useEffect, useState } from 'react';

const UniversityCarousel = () => {
  const [currentOffset, setCurrentOffset] = useState(0);

  const universities = [
    'University of Lagos',
    'University of Ibadan',
    'Ahmadu Bello University',
    'University of Nigeria',
    'Obafemi Awolowo University',
    'University of Benin',
    'Lagos State University',
    'Covenant University',
    'Babcock University',
    'Lead City University',
    'Afe Babalola University',
    'University of Abuja',
    'Federal University of Technology',
    'Rivers State University',
    'University of Port Harcourt',
    'Delta State University',
    'Nnamdi Azikiwe University',
    'University of Calabar',
    'Bayero University',
    'University of Maiduguri'
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedUniversities = [...universities, ...universities];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffset(prev => {
        const newOffset = prev - 1;
        // Reset when we've scrolled through the first set
        if (newOffset <= -50) {
          return 0;
        }
        return newOffset;
      });
    }, 50); // Smooth, slow movement

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