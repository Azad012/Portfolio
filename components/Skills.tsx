
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Backend', 'Database', 'Tools', 'Frontend'];
  
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Technical Toolbox</h2>
        <p className="text-slate-400">A comprehensive list of technologies I work with daily.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-indigo-400 font-medium text-sm uppercase tracking-wider pl-1">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <div 
                  key={skill.name}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 hover:border-indigo-500/50 hover:bg-slate-800/50 transition-all cursor-default"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
