import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { articles } from '../data/content';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const article = articles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Article not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs text-neutral-400 bg-neutral-800 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 mb-12 pb-12 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {article.content.split('\n').map((paragraph, index) => {
              // 处理标题 (## 开头)
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-medium mt-12 mb-6 text-neutral-100">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              // 处理子标题 (### 开头)
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-medium mt-8 mb-4 text-neutral-200">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              // 处理列表项 (* 开头)
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-neutral-400 ml-4 mb-2">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              // 处理代码块 (``` 开头或结尾)
              if (paragraph.startsWith('```') || paragraph === '```') {
                return null;
              }
              // 处理空行
              if (!paragraph.trim()) {
                return <div key={index} className="h-4" />;
              }
              // 普通段落
              return (
                <p key={index} className="text-neutral-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-12 border-t border-neutral-800">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to all articles</span>
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
