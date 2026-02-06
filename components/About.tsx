
import React from 'react';
import { PROFILE } from '../constants';
import { Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center space-x-2 text-indigo-400 font-mono text-sm">
          <Terminal size={16} />
          <span>whoami</span>
        </div>
        <h2 className="text-3xl font-bold text-white">Engineering Scalable Systems</h2>
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            {PROFILE.summary.split('. ')[0]}.
          </p>
          <p>
            {PROFILE.summary.split('. ').slice(1, 3).join('. ')}.
          </p>
          <p>
            Based in {PROFILE.location}, I'm passionate about building systems that are reliable, performant, and production-ready.
          </p>
        </div>
      </div>
      
      <div className="relative aspect-square md:aspect-auto md:h-[400px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-8 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 w-full h-full opacity-40">
           <div className="bg-indigo-500/10 rounded-xl border border-indigo-500/20"></div>
           <div className="bg-indigo-500/20 rounded-xl border border-indigo-500/30 translate-y-8"></div>
           <div className="bg-indigo-500/15 rounded-xl border border-indigo-500/20 -translate-y-8"></div>
           <div className="bg-indigo-500/5 rounded-xl border border-indigo-500/10"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
           <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-indigo-500/50">
             <span className="text-3xl font-bold text-white">AA</span>
           </div>
           <div className="space-y-2">
             <div className="h-2 w-32 bg-slate-700 rounded-full mx-auto"></div>
             <div className="h-2 w-24 bg-slate-800 rounded-full mx-auto"></div>
             <div className="h-2 w-28 bg-slate-700 rounded-full mx-auto"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
