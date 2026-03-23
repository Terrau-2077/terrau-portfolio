import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '../data/content';

export default function Articles() {
  const [isVisible, setIsVisible] = useState(false);
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
      id="articles"
      ref={sectionRef}
      className="min-h-screen py-32 px-6 bg-neutral-900/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-widest uppercase text-neutral-500">
            Writing
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mt-2">
            Articles
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl">
            Thoughts on AI, technology, and the journey of learning in public.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <article
              key={article.id}
              onClick={() => navigate(`/article/${article.id}`)}
              className={`group relative p-6 md:p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800/50 hover:border-neutral-700 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs text-neutral-400 bg-neutral-800 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-medium text-neutral-100 group-hover:text-white transition-colors mb-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} className="text-neutral-400" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="px-8 py-3 text-sm font-medium text-neutral-300 border border-neutral-700 rounded-full hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
