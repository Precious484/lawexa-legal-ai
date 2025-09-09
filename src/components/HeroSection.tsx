import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const words = ['You', 'Students', 'Lawyers', 'Everyday People', 'All'];
  
  useEffect(() => {
    const typeWord = async () => {
      const word = words[currentIndex];
      
      if (isTyping) {
        // Type out the word
        for (let i = 0; i <= word.length; i++) {
          setCurrentWord(word.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 150));
        }
        
        // Pause at complete word
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsTyping(false);
      } else {
        // Delete the word
        for (let i = word.length; i >= 0; i--) {
          setCurrentWord(word.slice(0, i));
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        // Move to next word
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    };

    typeWord();
  }, [currentIndex, isTyping]);

  const avatars = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob'
  ];

  return (
    <section className="relative min-h-screen bg-lawexa-dark hero-grid flex items-center justify-center text-white overflow-hidden pt-16">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">Legal Intelligence</span>
            <br />
            <span className="text-primary">For </span>
            <span className="inline-block min-w-[200px] text-left">
              <span className="animated-underline active">{currentWord}</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ask Any Legal Question, Understand Contracts And More In Minutes — No Law Degree Required
          </p>

          {/* CTA Button */}
          <Button className="btn-gold text-lg px-8 py-4 mb-12">
            Try For Free
          </Button>

          {/* Trusted By Section */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`User ${index + 1}`}
                  className="w-10 h-10 rounded-full border-2 border-white bg-white"
                />
              ))}
            </div>
            <p className="text-gray-300">
              Trusted by <span className="text-white font-semibold">15,000+</span> students, professionals, and everyday users
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;