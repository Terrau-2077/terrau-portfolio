import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Layers, Zap, BarChart } from 'lucide-react';
import { projects } from '../data/content';

// 图标映射
const iconMap: Record<string, any> = {
  Zap: Zap,
  Layers: Layers,
  BarChart: BarChart,
  ExternalLink: ExternalLink,
};

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
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
            Work
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mt-2">
            Portfolio
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl">
            A collection of projects I'm working on and have completed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon] || Zap;
            return (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800/50 hover:border-neutral-700 transition-all duration-500 cursor-pointer overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color}`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium text-neutral-400 bg-neutral-800 rounded-full">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-medium text-neutral-100 mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs text-neutral-500 bg-neutral-800/50 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
