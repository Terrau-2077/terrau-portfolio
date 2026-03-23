import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { projects } from '../data/content';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Project not found</h1>
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
          {/* Header Section */}
          <div className="mb-12">
            {/* Status */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 text-sm font-medium text-neutral-400 bg-neutral-800 rounded-full">
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-neutral-400 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm text-neutral-400 bg-neutral-800 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-neutral-800 rounded-full text-neutral-100 hover:bg-neutral-700 transition-colors"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Overview */}
          <section className="mb-12 p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
            <h2 className="text-xl font-medium mb-4">Overview</h2>
            <p className="text-neutral-300 leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-xl font-medium mb-6">Key Features</h2>
            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-300">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <section className="p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
              <h2 className="text-lg font-medium mb-4">Challenges</h2>
              <p className="text-neutral-400 leading-relaxed">
                {project.challenges}
              </p>
            </section>
            <section className="p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
              <h2 className="text-lg font-medium mb-4">Solutions</h2>
              <p className="text-neutral-400 leading-relaxed">
                {project.solutions}
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-neutral-800">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Back to all projects</span>
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
