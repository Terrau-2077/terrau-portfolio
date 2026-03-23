import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Articles from './components/Articles';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';
import ProjectDetail from './components/ProjectDetail';
import './index.css';

function HomePage() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'articles', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Articles />
        <Portfolio />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // 当路由改变时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen bg-neutral-950 text-neutral-100 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
