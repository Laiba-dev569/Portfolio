import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  // Floating star dust background particle canvas engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = containerRef.current?.clientWidth || window.innerWidth;
    let height = canvas.height = containerRef.current?.clientHeight || window.innerHeight;

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // Mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Setup particles
    interface StarParticle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      vx: number;
      vy: number;
      opacity: number;
      speed: number;
    }

    const particles: StarParticle[] = [];
    const count = 75;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        density: Math.random() * 30 + 10,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.25,
        speed: 0.15
      });
    }

    let animationFrameId: number;

    const animateParticles = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        // Self drift velocity
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction (Repulsion force)
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 120;

        if (distance < repelRadius) {
          const force = (repelRadius - distance) / repelRadius;
          const forceX = (dx / distance) * force * p.density * 0.15;
          const forceY = (dy / distance) * force * p.density * 0.15;

          p.x -= forceX;
          p.y -= forceY;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Grab current accent theme color or fallback to neon green
        ctx.fillStyle = `rgba(173, 255, 47, ${p.opacity})`; 
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  // Letter by letter bouncy reveal variants
  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.4 }
    }
  };

  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 150, damping: 12 }
    }
  };

  const nameLetters = Array.from("Laiba");

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      const navHeight = 70;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* High-Performance Star Dust Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
      />

      {/* Decorative Radial mesh glow backdrops */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[450px] h-[450px] rounded-full bg-accent/5 filter blur-[120px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[450px] h-[450px] rounded-full bg-accent/5 filter blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline Badge with active micro-scale pulse */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-accent/5 border border-accent/20 px-3.5 py-1.5 rounded-full mb-8 text-accent text-xs tracking-wider uppercase font-semibold select-none cursor-default"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>Building for the Future of Web & AI</span>
          </motion.div>

          {/* Heading with bouncy staggered name letters */}
          <motion.h1 
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-text-primary mb-6 flex items-center justify-center flex-wrap select-none"
          >
            Hi, I'm&nbsp;
            <motion.span 
              variants={letterContainerVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex overflow-hidden"
            >
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-text-secondary inline-block origin-bottom"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-lg md:text-xl lg:text-2xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed mb-10"
          >
            A <span className="text-text-primary font-medium">Frontend Developer</span> craftfully building advanced space-exploration interfaces, solar forecasting dashboards, and real-time gravity simulation systems using <span className="text-accent font-medium">Artificial Intelligence & Physics Engineering</span>.
          </motion.p>

          {/* Social Links & Action Call */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/Laiba-dev569"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-text-primary text-bg-primary hover:bg-accent hover:text-bg-primary font-medium text-sm px-6 py-3 rounded-full shadow-lg transition-all duration-300 w-full sm:w-auto justify-center group"
            >
              <Github size={16} />
              <span>Explore GitHub</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, borderColor: 'var(--text-primary)' }}
              whileTap={{ scale: 0.98 }}
              href="https://www.linkedin.com/in/laiba-mushtaq-580781181/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-border-card text-text-secondary hover:text-text-primary font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Linkedin size={16} />
              <span>Connect on LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Scrolling Down Arrow */}
          <motion.button
            variants={itemVariants}
            onClick={handleScrollToProjects}
            className="text-text-muted hover:text-accent transition-colors duration-300 cursor-pointer flex flex-col items-center gap-2 group mt-4 focus:outline-none"
          >
            <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown size={14} className="group-hover:text-accent" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
