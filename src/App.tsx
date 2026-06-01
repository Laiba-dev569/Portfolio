import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen relative font-sans selection:bg-accent/30 selection:text-text-primary">
      {/* Dynamic light subtle ambient noise/effects in background (optional, premium touch) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#8ca89e_1px,transparent_1px)] [background-size:16px_16px] z-0" />
      
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10">
        {/* Hero Banner Section */}
        <Hero />
        
        {/* Grid of Projects */}
        <Projects />
        
        {/* Core & Mastering Skills split grid */}
        <Skills />
      </main>

      {/* Styled Footer */}
      <Footer />
    </div>
  );
}
