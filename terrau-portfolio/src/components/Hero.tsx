import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative inline-block">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-neutral-800">
              <img
                src="/avatar.jpg"
                alt="Terrau"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-neutral-950 animate-pulse" />
          </div>
        </div>

        {/* Name & Title */}
        <div
          className={`space-y-4 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Terrau
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-light">
            AI Practitioner · Student · Content Creator
          </p>
        </div>

        {/* Tagline */}
        <div
          className={`mt-8 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-neutral-500 leading-relaxed">
            Exploring the intersection of AI technology and creative expression.
            Currently navigating the journey of learning while building.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-2 text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown
              size={20}
              className="animate-bounce group-hover:translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
