import React from 'react';
import { PortfolioData } from '../types';
import { 
  MapPin, Phone, Globe, 
  Monitor, ExternalLink, FolderGit2, BookOpen, Shield, Terminal
} from 'lucide-react';

interface BentoGridProps {
  data: PortfolioData;
}

const BentoGrid: React.FC<BentoGridProps> = ({ data }) => {
  const skills = Array.isArray(data.skills) ? data.skills : [];
  const projects = data.projects || [];
  const languages = data.languages || [];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
      {/* Identity & Contact */}
      <div className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center backdrop-blur-xl group hover:border-cyan-500/50 transition-all text-left">
        <div className="flex items-center gap-2 mb-4 opacity-50">
          <Globe className="w-4 h-4 text-cyan-400" />
          <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Identity</h3>
        </div>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          IT professional specializing in <span className="text-white font-semibold">Infrastructure</span> and <span className="text-white font-semibold">Cybersecurity</span>. 
          Currently <span className="text-cyan-400">{data.title}</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
           <div className="flex items-center gap-3">
             <MapPin className="w-4 h-4 text-cyan-400" />
             <span className="truncate text-xs">{data.contact.address.split(',')[0]}</span>
           </div>
           <div className="flex items-center gap-3">
             <Phone className="w-4 h-4 text-pink-400" />
             <span className="text-xs">{data.contact.phone}</span>
           </div>
        </div>
      </div>

      {/* Deployment Log */}
      <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden relative backdrop-blur-xl group hover:border-cyan-500/50 transition-all text-left">
        <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">Deployment Log</h3>
        <div className="space-y-6">
          {data.experience.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l border-white/10 group/item">
              <div className="text-[9px] font-bold text-slate-500 mb-1">{exp.period}</div>
              <h4 className="text-white font-bold text-sm">{exp.role}</h4>
              <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-wide">{exp.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl group hover:border-emerald-500/50 transition-all text-left">
        <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">Stack</h3>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 8).map((skill: any, i: number) => (
            <span key={i} className="text-[9px] font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 uppercase">
              {typeof skill === 'string' ? skill : skill.category}
            </span>
          ))}
        </div>
      </div>

      {/* Academic Base */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl group hover:border-indigo-500/50 transition-all text-left">
        <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">Academic</h3>
        <div className="space-y-4">
          {data.education.slice(0, 3).map((edu, i) => (
            <div key={i} className="flex flex-col border-b border-white/5 pb-2 last:border-0">
              <h4 className="text-white font-bold text-[10px] leading-tight">{edu.degree}</h4>
              <p className="text-[8px] text-slate-500 mt-0.5 uppercase tracking-widest truncate">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Proficiency */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center backdrop-blur-xl group hover:border-purple-500/50 transition-all text-left">
         <div className="flex items-center gap-2 mb-4 opacity-50">
           <Monitor className="w-4 h-4 text-purple-400" />
           <h3 className="text-purple-400 text-xs font-bold uppercase tracking-widest">Proficiency</h3>
         </div>
         <div className="space-y-2">
            {languages.map((lang, i) => (
              <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase">
                <span className="text-white">{lang.split(' ')[0]}</span>
                <span className="text-purple-500 font-mono text-[8px]">{lang.split('(')[1]?.replace(')', '') || 'Native'}</span>
              </div>
            ))}
         </div>
      </div>

      {/* Self Projects - Styled like Academic Base */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl group hover:border-orange-500/50 transition-all text-left">
        <div className="flex items-center gap-2 mb-6 opacity-50">
          <FolderGit2 className="w-4 h-4 text-orange-400" />
          <h3 className="text-orange-400 text-xs font-bold uppercase tracking-widest">Self Projects</h3>
        </div>
        <div className="space-y-4">
          {projects.slice(0, 3).map((project, i) => (
            <div key={i} className="flex flex-col border-b border-white/5 pb-2 last:border-0 group/proj">
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-1 group/link"
              >
                <h4 className="text-white font-bold text-[10px] leading-tight group-hover/link:text-orange-400 transition-colors uppercase">
                  {project.name || `Project_Slot_${i+1}`}
                </h4>
                <ExternalLink className="w-2.5 h-2.5 text-orange-500/30 group-hover/link:text-orange-400 transition-colors flex-shrink-0" />
              </a>
              <p className="text-[8px] text-slate-500 mt-1 uppercase tracking-widest line-clamp-1">
                {project.description || 'System_Repository_Pending'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;