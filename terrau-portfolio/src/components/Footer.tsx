import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-neutral-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-500">
            © {currentYear} Terrau. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span>Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>and AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
