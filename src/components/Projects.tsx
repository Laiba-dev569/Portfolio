import { motion } from 'framer-motion';
import { ExternalLink, Orbit, Brain, Sun, Sparkles } from 'lucide-react';
import { Github } from './Icons';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  icon: React.ReactNode;
  category: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Antigravity To-Do List',
      subtitle: 'Task Management under Zero Gravity',
      description: 'A custom productivity interface designed for astronauts to log and track mission checklists under zero-gravity conditions, featuring floating prioritization metrics.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Drag-and-Drop', 'LocalStorage'],
      github: 'https://github.com/Laiba-dev569/Antigravity-to-do-list',
      demo: '#',
      icon: <Orbit className="text-accent w-6 h-6" />,
      category: 'Productivity Utilities'
    },
    {
      title: 'Astra AI Companion',
      subtitle: 'Multimodal Cognitive Assistant',
      description: 'An AI assistant designed for space missions. Integrates localized cognitive support, real-time life-support telemetry monitoring, and biometric analysis pipelines.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Llama-3 LLM', 'WebRTC'],
      github: 'https://github.com/Laiba-dev569/astra-ai-companion',
      demo: '#',
      icon: <Brain className="text-accent w-6 h-6" />,
      category: 'Artificial Intelligence'
    },
    {
      title: 'NASA Space Weather App',
      subtitle: 'Solar Activity Alert Dashboard',
      description: 'A space weather forecasting dashboard tracking active solar flares, Coronal Mass Ejections (CMEs), Kp-index changes, and magnetosphere health alerts.',
      tags: ['React', 'Tailwind CSS', 'NASA DONKI API', 'Chart.js', 'WebSockets'],
      github: 'https://github.com/Laiba-dev569/nasa-space-weather-app',
      demo: '#',
      icon: <Sun className="text-accent w-6 h-6" />,
      category: 'Data Science & APIs'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    const rotX = -(y / (box.height / 2)) * 10; // Max 10 degrees tilt
    const rotY = (x / (box.width / 2)) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.boxShadow = `0 15px 35px var(--color-accent-glow)`;
    card.style.borderColor = `var(--color-accent)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = 'none';
    card.style.borderColor = 'var(--color-border-card)';
  };

  return (
    <section id="projects" className="py-24 border-t border-border-card/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-16 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs tracking-widest text-accent uppercase font-bold"
          >
            Curated Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl mt-2 text-text-primary"
          >
            Featured Experiments
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-12 h-[2px] bg-accent mt-4 mx-auto md:mx-0"
          />
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="flex flex-col h-full bg-bg-secondary border border-border-card rounded-2xl p-8 transition-all duration-300 ease-out group relative overflow-hidden [transform-style:preserve-3d]"
            >
              {/* Subtle accent hover indicator in corner */}
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-accent transition-all duration-300 group-hover:h-full" />
              <div className="absolute top-0 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-bg-primary rounded-xl border border-border-card group-hover:border-accent/40 transition-colors duration-300">
                  {project.icon}
                </div>
                <div className="flex space-x-3 text-text-muted">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text-primary transition-colors duration-300"
                    title="View Source Code"
                  >
                    <Github size={18} />
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      className="hover:text-accent transition-colors duration-300"
                      title="View Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-grow">
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-bold bg-accent/5 border border-accent/15 px-2 py-0.5 rounded">
                  {project.category}
                </span>
                
                <h3 className="font-display font-semibold text-xl text-text-primary group-hover:text-accent transition-colors duration-300 flex items-center gap-2 mt-4 mb-1">
                  {project.title}
                  <Sparkles size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                
                <h4 className="font-sans text-xs text-text-muted font-medium mb-4">
                  {project.subtitle}
                </h4>

                <p className="font-sans text-sm text-text-secondary font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex}
                    className="text-[10px] tracking-wider font-semibold font-mono bg-bg-primary border border-border-card text-text-muted px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
