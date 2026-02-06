
import React from 'react';
import { Mail, Linkedin, MapPin, Send, FileText } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="rounded-3xl bg-indigo-600 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
      
      <div className="grid md:grid-cols-2 gap-12 relative z-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's build something great together.</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            I'm currently looking for new opportunities as a Backend or Full Stack Developer. Whether you have a question or just want to say hi, my inbox is open!
          </p>
          
          <div className="space-y-6">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center space-x-4 text-white hover:translate-x-2 transition-transform">
              <div className="p-3 bg-white/10 rounded-lg">
                <Mail size={24} />
              </div>
              <span className="font-medium">{PROFILE.email}</span>
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-white hover:translate-x-2 transition-transform">
              <div className="p-3 bg-white/10 rounded-lg">
                <Linkedin size={24} />
              </div>
              <span className="font-medium">LinkedIn Profile</span>
            </a>
            <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-white hover:translate-x-2 transition-transform">
              <div className="p-3 bg-white/10 rounded-lg">
                <FileText size={24} />
              </div>
              <span className="font-medium">Download Resume</span>
            </a>
            <div className="flex items-center space-x-4 text-white">
              <div className="p-3 bg-white/10 rounded-lg">
                <MapPin size={24} />
              </div>
              <span className="font-medium">{PROFILE.location}</span>
            </div>
          </div>
        </div>

        <form className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4 shadow-xl">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Message</label>
            <textarea 
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full py-3 bg-white text-indigo-600 font-bold rounded-lg flex items-center justify-center hover:bg-indigo-50 transition-colors"
          >
            Send Message <Send size={18} className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
