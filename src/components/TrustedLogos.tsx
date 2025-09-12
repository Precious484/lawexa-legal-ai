import { useEffect, useState } from 'react';

const TrustedLogos = () => {
  const logos = [
    { name: 'University of Lagos', logo: '🏛️' },
    { name: 'Babcock University', logo: '🎓' },
    { name: 'Covenant University', logo: '📚' },
    { name: 'University of Ibadan', logo: '🏛️' },
    { name: 'Ahmadu Bello University', logo: '🎓' },
    { name: 'University of Nigeria', logo: '📚' },
    { name: 'Lagos State University', logo: '🏛️' },
    { name: 'Obafemi Awolowo University', logo: '🎓' },
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden bg-background py-8">
      <div className="flex items-center justify-center mb-4">
        <p className="text-muted-foreground text-sm md:text-base">
          Trusted by <span className="text-foreground font-semibold">15,000+</span> students, professionals, and everyday users
        </p>
      </div>
      
      <div className="relative">
        <div className="flex space-x-8 logo-carousel">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center space-x-3 px-6 py-3 bg-muted/50 rounded-lg border border-border"
            >
              <span className="text-2xl">{logo.logo}</span>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default TrustedLogos;