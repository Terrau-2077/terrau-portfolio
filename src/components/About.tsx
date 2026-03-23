import { useEffect, useRef, useState } from 'react';
import { Brain, BookOpen, Video, Sparkles } from 'lucide-react';

const roles = [
  { icon: Brain, title: 'AI Practitioner', description: 'Exploring machine learning and neural networks' },
  { icon: BookOpen, title: 'Student', description: 'Balancing academia with real-world projects' },
  { icon: Video, title: 'Content Creator', description: 'Sharing AI insights on social media' },
  { icon: Sparkles, title: 'Entrepreneur', description: 'Building a personal brand in the AI space' },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-widest uppercase text-neutral-500">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mt-2">
            Who I Am
          </h2>
        </div>

        {/* Bio */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            Hey there! I'm <span className="text-neutral-100 font-medium">Terrau</span>,
            an AI enthusiast navigating the exciting crossroads of technology and creativity.
          </p>
          <p className="text-neutral-400 leading-relaxed mt-4">
            By day, I'm a student diving deep into the fundamentals of artificial intelligence.
            By night (and all hours in between), I'm creating content about AI on social media,
            breaking down complex concepts into digestible insights for the community.
          </p>
          <p className="text-neutral-400 leading-relaxed mt-4">
            This dual journey of learning and sharing has taught me that the best way to
            understand something is to teach it. That's why I started my content creation
            journey — to document my growth while helping others embark on their AI adventures.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className={`group p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800/50 hover:border-neutral-700 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-800 rounded-xl group-hover:bg-neutral-700 transition-colors">
                  <role.icon size={24} className="text-neutral-400" />
                </div>
                <div>
                  <h3 className="font-medium text-neutral-100 mb-1">{role.title}</h3>
                  <p className="text-sm text-neutral-500">{role.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mt-16 p-8 bg-neutral-900/30 rounded-2xl border border-neutral-800/50 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-medium text-neutral-100">∞</div>
              <div className="text-sm text-neutral-500 mt-1">Learning Journey</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-medium text-neutral-100">24/7</div>
              <div className="text-sm text-neutral-500 mt-1">Student Mode</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-medium text-neutral-100">Daily</div>
              <div className="text-sm text-neutral-500 mt-1">Content Flow</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-medium text-neutral-100">∞</div>
              <div className="text-sm text-neutral-500 mt-1">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
