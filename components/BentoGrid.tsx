import React from 'react';
import { PortfolioData, SkillGroup } from '../types';
import { 
  MapPin, 
  Phone, 
  Shield, 
  Terminal, 
  Globe, 
  BookOpen, 
  Award, 
  Users,
  Wrench,
  Monitor
} from 'lucide-react';

interface BentoGridProps {
  data: PortfolioData;
}

const BentoGrid: React.FC<BentoGridProps> = ({ data }) => {
  const skills = data.skills || [];
  const flatSkills = Array.isArray(skills) 
    ? (skills.length > 0 && typeof skills[0] === 'string' 
        ? (skills as string[]) 
        : (skills as SkillGroup[]).flatMap(s => s.skills || []))
    : [];

  const experience = data.experience || [];
  const education = data.education || [];
  const toolsets = data.toolsets || [];
  const training = data.training || [];
  const languages = data.languages || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
      
      {/* Bio / About */}
      <div className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center backdrop-blur-xl group hover:border-cyan-500/50 transition-all">
        <div className="flex items-center gap-2 mb-4 opacity-50">
          <Globe className="w-4 h-4 text-cyan-400" />
          <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Global Identity</h3>
        </div>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Based in <span className="text-white font-semibold">Bangladesh</span>. 
          Currently serving as an <span className="text-white font-semibold">{data.title}</span> for high-impact projects, specialized in <span className="text-cyan-400">Digital Forensics</span> and <span className="text-pink-500">Cybersecurity</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
               <MapPin className="w-4 h-4" />
             </div>
             <span className="truncate">{data.contact.address.split(',')[0]}</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
               <Phone className="w-4 h-4" />
             </div>
             <span>{data.contact.phone}</span>
           </div>
        </div>
      </div>

      {/* Experience */}
      <div className="md:col-span-3 lg:col-span-2 lg:row-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl overflow-hidden relative backdrop-blur-xl group hover:border-cyan-500/50 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/10 blur-3xl rounded-full"></div>
        <div className="flex items-center gap-2 mb-6 opacity-50">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Deployment Log</h3>
        </div>
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l border-white/10 group/item">
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-700 group-hover/item:bg-cyan-500 transition-colors"></div>
              <div className="text-[10px] font-bold text-slate-500 mb-1">{exp.period}</div>
              <h4 className="text-white font-bold">{exp.role}</h4>
              <p className="text-xs text-slate-400 mb-2 uppercase tracking-wide">{exp.company}</p>
              <div className="flex flex-wrap gap-1">
                {(exp.responsibilities || []).slice(0, 2).map((r, j) => (
                  <span key={j} className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">{r}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl group hover:border-emerald-500/50 transition-all">
        <div className="flex items-center gap-2 mb-6 opacity-50">
          <Shield className="w-4 h-4 text-emerald-400" />
          <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Defense Stack</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {flatSkills.slice(0, 10).map((skill, i) => (
            <span key={i} className="text-[10px] font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 uppercase tracking-tighter">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="md:col-span-2 lg:col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl group hover:border-indigo-500/50 transition-all">
        <div className="flex items-center gap-2 mb-6 opacity-50">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Academic Base</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-xs">
                {edu.period.split(' ')[0]}
              </div>
              <div>
                <h4 className="text-white font-bold text-xs leading-tight">{edu.degree}</h4>
                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="md:col-span-1 lg:col-span-1 bg-zinc-900 border border-white/10 p-8 rounded-3xl group hover:border-amber-500/50 transition-all">
        <div className="flex items-center gap-2 mb-4 opacity-50">
          <Wrench className="w-4 h-4 text-amber-400" />
          <h3 className="text-amber-400 text-xs font-bold uppercase tracking-widest">Hardware / Tooling</h3>
        </div>
        <div className="space-y-4">
           {toolsets.slice(0, 2).map((ts, i) => (
             <div key={i}>
                <div className="text-[9px] font-bold text-slate-500 uppercase mb-2">{ts.category}</div>
                <div className="flex flex-wrap gap-1 text-[10px] text-slate-300">
                  {ts.items.join(', ')}
                </div>
             </div>
           ))}
        </div>
      </div>

       {/* Training Count */}
       <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center items-center text-center backdrop-blur-xl group hover:border-cyan-500/50 transition-all">
        <Award className="w-6 h-6 text-cyan-400 mb-2" />
        <div className="text-4xl font-black text-cyan-400 mb-1">{training.length}</div>
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Verified_Certs</div>
      </div>

      {/* Reference Snippet */}
      <div className="md:col-span-2 lg:col-span-1 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl group hover:border-slate-500/50 transition-all">
        <div className="flex items-center gap-2 mb-4 opacity-50">
          <Users className="w-4 h-4 text-slate-400" />
          <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">Validation</h3>
        </div>
        {data.references && data.references[0] ? (
          <>
            <p className="text-[10px] text-slate-400 italic leading-relaxed">"Demonstrated exceptional technical proficiency in national IT assets."</p>
            <div className="mt-4 pt-4 border-t border-white/5">
               <div className="text-xs font-bold text-white">{data.references[0].name}</div>
               <div className="text-[9px] text-slate-500 uppercase">{data.references[0].role}</div>
            </div>
          </>
        ) : (
          <p className="text-[10px] text-slate-500">Contact for verification.</p>
        )}
      </div>

      {/* Languages */}
      <div className="lg:col-span-1 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center backdrop-blur-xl group hover:border-cyan-500/50 transition-all">
         <div className="flex items-center gap-2 mb-4 opacity-50">
           <Monitor className="w-4 h-4 text-slate-400" />
           <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">OS_Local</h3>
         </div>
         <div className="space-y-2">
            {languages.map((lang, i) => (
              <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase">
                <span className="text-white">{lang.split(' ')[0]}</span>
                <span className="text-cyan-500">{lang.split(' ')[1] || 'Expert'}</span>
              </div>
            ))}
         </div>
      </div>

    </div>
  );
};

export default BentoGrid;