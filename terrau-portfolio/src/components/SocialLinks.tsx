import { useEffect, useRef, useState } from 'react';
import { Twitter, Instagram, Youtube, Send, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: '小红书',
    username: '@Terrau',
    url: 'https://www.xiaohongshu.com/user/profile/68948f4d0000000028016ea3',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-2h-2v2zm0-4h2V7h-2v6z"/>
      </svg>
    ),
    color: 'hover:text-red-500 hover:border-red-500/30',
    bgColor: 'group-hover:bg-red-500/10',
  },
  {
    name: '抖音',
    username: '@Terrau',
    url: 'https://www.douyin.com/user/MS4wLjABAAAAM3tgB_Ly70EKi6j750dgMdT8sHb0RBZOnjnvqshHXsI',
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ),
    color: 'hover:text-pink-500 hover:border-pink-500/30',
    bgColor: 'group-hover:bg-pink-500/10',
  },
];

export default function SocialLinks() {
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
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-32 px-6 bg-neutral-900/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs tracking-widest uppercase text-neutral-500">
            Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mt-2">
            Let's Connect
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
            Follow me on social media for daily AI insights, learning resources,
            and behind-the-scenes content.
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-6 bg-neutral-900/50 rounded-2xl border border-neutral-800/50 transition-all duration-500 ${social.color} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className={`p-4 rounded-xl bg-neutral-800 transition-colors ${social.bgColor}`}>
                <social.icon />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-neutral-100 mb-1">{social.name}</h3>
                <p className="text-sm text-neutral-500">{social.username}</p>
              </div>
              <svg
                className="w-5 h-5 text-neutral-600 group-hover:text-neutral-400 group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Email CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800/50">
            <div className="p-4 bg-neutral-800 rounded-xl">
              <Mail size={24} className="text-neutral-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-100 mb-1">
                Get in Touch
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                For collaborations, speaking opportunities, or just to say hi
              </p>
            </div>
            <a
              href="mailto:Terrau2077@163.com"
              className="px-6 py-3 text-sm font-medium text-neutral-100 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
            >
              Terrau2077@163.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
