import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Theme state with localstorage persistence
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 70; // approximate height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Scroll Indicator Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-50 origin-[0%]"
        style={{ scaleX }}
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border-card/50 py-4 shadow-lg shadow-black/10' 
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleScrollTo(e, '#home')}
            className="font-display font-bold text-xl tracking-wider text-text-primary hover:text-accent transition-colors duration-300"
          >
            L<span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="relative text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-text-secondary hover:text-accent border border-border-card/85 bg-bg-secondary rounded-full transition-all duration-300 cursor-pointer focus:outline-none flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <a
              href="mailto:mushtaqlaiba8@gmail.com"
              className="text-xs tracking-widest uppercase border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent px-4 py-2 rounded-full transition-all duration-300"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary/95 border-b border-border-card/50"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-base text-text-secondary hover:text-text-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Theme Toggle in Mobile */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between text-base text-text-secondary hover:text-accent transition-colors py-2 cursor-pointer focus:outline-none border-b border-border-card/30 pb-2"
              >
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                <span className="p-1.5 border border-border-card bg-bg-secondary rounded-full flex items-center justify-center text-accent">
                  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                </span>
              </button>

              <a
                href="mailto:mushtaqlaiba8@gmail.com"
                className="inline-block text-center text-xs tracking-widest uppercase border border-accent/40 text-accent hover:bg-accent/10 px-4 py-2.5 rounded-full transition-all duration-300 mt-2"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
