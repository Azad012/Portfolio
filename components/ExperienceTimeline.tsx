
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-indigo-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Briefcase size={18} />
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="font-bold text-lg text-white">{exp.role}</h3>
                <span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">{exp.period}</span>
              </div>
              <p className="text-slate-300 font-medium mb-1">{exp.company}</p>
              <p className="text-slate-500 text-sm mb-4">{exp.location}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Focused on delivering high-quality web solutions using modern frontend and full-stack technologies.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
