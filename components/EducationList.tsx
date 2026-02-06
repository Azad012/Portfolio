
import React from 'react';
import { EDUCATIONS } from '../constants';
import { GraduationCap } from 'lucide-react';

const EducationList: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-white">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {EDUCATIONS.map((edu, index) => (
          <div key={index} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800/50 transition-all">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white leading-tight mb-1">{edu.institution}</h3>
                <p className="text-indigo-400 text-sm mb-3 font-medium">{edu.degree}</p>
                <div className="flex items-center text-slate-500 text-xs">
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationList;
