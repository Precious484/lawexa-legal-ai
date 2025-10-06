import { useState, useEffect } from 'react';
import HeroChatInput from './HeroChatInput';
import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';
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
        setCurrentIndex(prev => (prev + 1) % words.length);
        setIsTyping(true);
      }
    };
    typeWord();
  }, [currentIndex, isTyping]);
  const avatars = [avatar1, avatar2, avatar3];
  return <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-16">
      {/* Video Background with solid black background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/hero-video.mov" type="video/mp4" />
          <source src="/hero-video.mov" type="video/quicktime" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            <span className="text-primary">Legal Intelligence</span>
            <br />
            <span className="text-primary">For </span>
            <span className="inline-block min-w-[200px] text-left">
              <span className="animated-underline active">{currentWord}</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">Ask any legal question, Understand Contracts and more In minutes. 
No Law Degree Required</p>

          {/* Interactive Chat Input */}
          <HeroChatInput />

          {/* Trusted By Section */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => <img key={index} src={avatar} alt={`User ${index + 1}`} className="w-10 h-10 rounded-full border-2 border-white bg-white" />)}
            </div>
            <p className="text-gray-100 drop-shadow-md">
              Trusted by <span className="text-white font-semibold">15,000+</span> students, professionals, and everyday users
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;