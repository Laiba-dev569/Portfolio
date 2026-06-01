import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-border-card/30 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Credits */}
        <div className="text-center md:text-left">
          <p className="font-display font-semibold text-sm tracking-wider text-text-primary">
            LAIBA<span className="text-accent">.</span>PORTFOLIO
          </p>
          <p className="font-sans text-xs text-text-muted mt-1 font-light">
            © {currentYear} • Handcrafted with React & Tailwind CSS.
          </p>
        </div>

        {/* Center: Anti-gravity Signature */}
        <div className="flex items-center space-x-1.5 text-xs text-text-muted select-none">
          <span>G =</span>
          <span className="text-accent inline-block -translate-y-[2px] animate-bounce">0</span>
          <span className="font-light tracking-wide">• Zero Gravity Sandbox</span>
        </div>

        {/* Right Side: Social Media links & Back to Top */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-4">
            <a
              href="https://github.com/Laiba-dev569"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/laiba-mushtaq-580781181/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mushtaqlaiba8@gmail.com"
              className="text-text-muted hover:text-text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="p-2.5 bg-bg-secondary hover:bg-accent/10 border border-border-card hover:border-accent text-text-muted hover:text-accent rounded-full transition-all duration-300 group cursor-pointer focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
