
import React from 'react';
import { Mail, Linkedin, Github, ChevronRight, FileDown } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 flex flex-col items-center text-center">
      {/* Background Glow */}
      <div className="absolute top-0 -z-10 w-full h-96 bg-indigo-500/5 blur-[120px] rounded-full"></div>
      
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
        </span>
        <span>Open for Opportunities</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
        {PROFILE.name}
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
        Backend Developer specializing in <span className="text-indigo-400">Java</span>, <span className="text-indigo-400">Spring Boot</span>, and <span className="text-indigo-400">Microservices</span> architecture.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="#contact" 
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg flex items-center transition-all shadow-lg shadow-indigo-600/20"
        >
          Get in touch <ChevronRight size={18} className="ml-1" />
        </a>
        <a 
          href={PROFILE.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-medium rounded-lg flex items-center transition-all"
        >
          Resume <FileDown size={18} className="ml-2" />
        </a>
        <div className="flex space-x-3">
          <a href={`mailto:${PROFILE.email}`} className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-all">
            <Mail size={20} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-all">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-all">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
