
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationList from './components/EducationList';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import { MessageSquareText } from 'lucide-react';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-20">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <ExperienceTimeline />
        </section>

        <section id="education">
          <EducationList />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Azad Ansari. Built with React & Gemini.</p>
      </footer>

      {/* Floating AI Action Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 p-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/20 transition-all transform hover:scale-110 active:scale-95 z-40 group"
      >
        <MessageSquareText size={24} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Ask my AI Assistant
        </span>
      </button>

      {isChatOpen && <AIAssistant onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default App;
