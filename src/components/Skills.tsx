import { motion } from 'framer-motion';
import { 
  Code, Terminal, Layout, Cpu, Database, 
  BarChart, Layers, GitBranch, ArrowUpRight 
} from 'lucide-react';

interface SkillItem {
  name: string;
  level: string; // e.g. "Advanced", "Intermediate", "Mastering"
  icon: React.ReactNode;
}

export default function Skills() {
  const coreSkills: SkillItem[] = [
    { name: 'React / Next.js', level: 'Advanced', icon: <Layers size={18} className="text-accent" /> },
    { name: 'JavaScript (ES6+) / TS', level: 'Advanced', icon: <Code size={18} className="text-accent" /> },
    { name: 'Tailwind CSS / Modern CSS', level: 'Advanced', icon: <Layout size={18} className="text-accent" /> },
    { name: 'Git / Version Control', level: 'Advanced', icon: <GitBranch size={18} className="text-accent" /> },
    { name: 'Responsive Web Design', level: 'Advanced', icon: <Terminal size={18} className="text-accent" /> },
  ];

  const masteringSkills: SkillItem[] = [
    { name: 'Python Programing', level: 'Intermediate / Deep Dive', icon: <Code size={18} className="text-accent" /> },
    { name: 'Artificial Intelligence', level: 'Fundamentals', icon: <Cpu size={18} className="text-accent" /> },
    { name: 'Data Science & Analysis', level: 'Pandas, NumPy, Viz', icon: <BarChart size={18} className="text-accent" /> },
    { name: 'SQL & Database Design', level: 'Core Knowledge', icon: <Database size={18} className="text-accent" /> },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-border-card/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-xs tracking-widest text-accent uppercase font-bold"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl mt-2 text-text-primary"
          >
            My Expertise & Focus
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-12 h-[2px] bg-accent mt-4 mx-auto"
          />
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Column 1: Core Development */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="bg-bg-secondary border border-border-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-[3px] h-full bg-accent opacity-50" />
            <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-text-primary">
              Core Development
              <span className="text-xs tracking-wider uppercase font-semibold bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-accent font-mono">
                Active
              </span>
            </h3>

            <div className="space-y-5">
              {coreSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-4 bg-bg-primary rounded-xl border border-border-card hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-bg-secondary rounded-lg border border-border-card group-hover:border-accent/20 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="font-sans font-medium text-sm text-text-primary group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase font-mono text-text-muted bg-bg-secondary border border-border-card px-2 py-0.5 rounded">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Currently Mastering / Learning */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="bg-bg-secondary border border-border-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-[3px] h-full bg-text-secondary opacity-30" />
            <h3 className="font-display font-bold text-2xl mb-8 flex items-center gap-3 text-text-primary">
              Currently Mastering / Learning
              <span className="text-xs tracking-wider uppercase font-semibold bg-white/5 border border-white/10 px-2 py-0.5 rounded text-text-secondary font-mono">
                Expanding
              </span>
            </h3>

            <div className="space-y-5">
              {masteringSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-4 bg-bg-primary rounded-xl border border-border-card hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-bg-secondary rounded-lg border border-border-card group-hover:border-accent/20 transition-colors">
                      {skill.icon}
                    </div>
                    <span className="font-sans font-medium text-sm text-text-primary group-hover:text-accent transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase font-mono text-text-muted bg-bg-secondary border border-border-card px-2 py-0.5 rounded flex items-center gap-1 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                    {skill.level}
                    <ArrowUpRight size={10} className="text-accent" />
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
