import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [{
    quote: "It feels like the app just understands what I need. I open it boom I see the case we treated in class in trending cases and recommended folder",
    name: "Kehinde",
    title: "Student, 300L Unilag",
    type: "Student",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kehinde"
  }, {
    quote: "I honestly didn't expect it to be this good. I use it for everything. I just open Lawexa AI and get what I need instantly",
    name: "Princess Anyanwu",
    title: "Associate, Midland Partners",
    type: "Lawyer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Princess"
  }, {
    quote: "It explained a legal notice I didn't understand. Lifesaver!",
    name: "Jesse Ezeag",
    title: "CEO, Cocoa Technologies Ltd",
    type: "Professional",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jesse"
  }, {
    quote: "I use it to review agreements before I sign them. It has saved me from bad deals multiple times",
    name: "Anonymous User",
    title: "Business Owner",
    type: "Professional",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anonymous"
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Student':
        return 'bg-blue-100 text-blue-800';
      case 'Lawyer':
        return 'bg-primary/10 text-primary';
      case 'Professional':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">15,000+ Active Users</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Across 130+ Universities
          </p>
          
          {/* University Carousel */}
          <div className="w-full overflow-hidden py-6">
            <div className="relative">
              <div className="flex space-x-8 logo-carousel">
                {[
                  { name: 'University of Lagos', logo: '🏛️' },
                  { name: 'Babcock University', logo: '🎓' },
                  { name: 'Covenant University', logo: '📚' },
                  { name: 'University of Ibadan', logo: '🏛️' },
                  { name: 'Ahmadu Bello University', logo: '🎓' },
                  { name: 'University of Nigeria', logo: '📚' },
                  { name: 'Lagos State University', logo: '🏛️' },
                  { name: 'Obafemi Awolowo University', logo: '🎓' },
                  { name: 'University of Lagos', logo: '🏛️' },
                  { name: 'Babcock University', logo: '🎓' },
                  { name: 'Covenant University', logo: '📚' },
                  { name: 'University of Ibadan', logo: '🏛️' },
                  { name: 'Ahmadu Bello University', logo: '🎓' },
                  { name: 'University of Nigeria', logo: '📚' },
                  { name: 'Lagos State University', logo: '🏛️' },
                  { name: 'Obafemi Awolowo University', logo: '🎓' },
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center space-x-3 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50"
                  >
                    <span className="text-2xl">{logo.logo}</span>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentSlide * (100 / 3)}%)`
          }}>
              {testimonials.map((testimonial, index) => <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-6 shadow-soft card-hover h-full">
                    {/* Type Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(testimonial.type)}`}>
                        {testimonial.type}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center space-x-3">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full bg-gray-200" />
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-medium hover:shadow-large transition-all duration-300">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-medium hover:shadow-large transition-all duration-300">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;