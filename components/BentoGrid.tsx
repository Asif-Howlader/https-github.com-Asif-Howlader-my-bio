
import React from 'react';
import { PortfolioData } from '../types';

interface BentoGridProps {
  data: PortfolioData;
}

const BentoGrid: React.FC<BentoGridProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
      
      {/* Bio / About - Medium Span */}
      <div className="md:col-span-2 lg:col-span-2 glass bento-card p-8 rounded-3xl flex flex-col justify-center">
        <h3 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Location & Contact</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Based in <span className="text-white font-semibold">Madaripur & Dhaka, Bangladesh</span>. 
          Currently serving as an <span className="text-white font-semibold">IT Officer</span> for a Govt. ICT Project, specialized in Digital Forensics and Cybersecurity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">📍</div>
             <span>Master Colony, Madaripur</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">📞</div>
             <span>{data.contact.phone}</span>
           </div>
        </div>
      </div>

      {/* Experience - Large Span */}
      <div className="md:col-span-3 lg:col-span-2 lg:row-span-2 glass bento-card p-8 rounded-3xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
        <h3 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">Experience</h3>
        <div className="space-y-8">
          {data.experience.map((exp, i) => (
            <div key={i} className="relative pl-6 border-l border-white/10 group">
              <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></div>
              <div className="text-xs font-bold text-slate-500 mb-1">{exp.period}</div>
              <h4 className="text-white font-bold">{exp.role}</h4>
              <p className="text-sm text-slate-400 mb-2">{exp.company}</p>
              <div className="flex flex-wrap gap-1">
                {exp.responsibilities.slice(0, 3).map((r, j) => (
                  <span key={j} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">{r}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills - Square */}
      <div className="glass bento-card p-8 rounded-3xl">
        <h3 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {data.skills.flatMap(s => s.skills).slice(0, 8).map((skill, i) => (
            <span key={i} className="text-xs font-semibold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
              {skill}
            </span>
          ))}
          <span className="text-[10px] text-slate-500 mt-1 italic">+ many more</span>
        </div>
      </div>

      {/* Education - Large */}
      <div className="md:col-span-2 lg:col-span-2 glass bento-card p-8 rounded-3xl">
        <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">Education</h3>
        <div className="space-y-6">
          {data.education.map((edu, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">
                {edu.period.split('/')[2].slice(0, 4)}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm leading-tight">{edu.degree}</h4>
                <p className="text-xs text-slate-400">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools - Highlighted */}
      <div className="md:col-span-1 lg:col-span-1 glass bento-card p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800">
        <h3 className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">Toolkit</h3>
        <div className="space-y-4">
           {data.toolsets.slice(0, 2).map((ts, i) => (
             <div key={i}>
                <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">{ts.category}</div>
                <div className="flex flex-wrap gap-1">
                  {ts.items.map((item, j) => (
                    <span key={j} className="text-[10px] text-slate-300">{item}</span>
                  ))}
                </div>
             </div>
           ))}
        </div>
      </div>

       {/* Training Count - Small Card */}
       <div className="glass bento-card p-8 rounded-3xl flex flex-col justify-center items-center text-center">
        <div className="text-4xl font-extrabold text-blue-400 mb-1">{data.training.length}</div>
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Certifications Earned</div>
      </div>

      {/* Reference Snippet */}
      <div className="md:col-span-2 lg:col-span-1 glass bento-card p-8 rounded-3xl">
        <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">References</h3>
        <p className="text-xs text-slate-400 italic">"Professional excellence in cybersecurity and IT administration."</p>
        <div className="mt-4 pt-4 border-t border-white/5">
           <div className="text-xs font-bold text-white">{data.references[1].name}</div>
           <div className="text-[10px] text-slate-500">{data.references[1].role}</div>
        </div>
      </div>

      {/* Languages */}
      <div className="lg:col-span-1 glass bento-card p-8 rounded-3xl flex flex-col justify-center">
         <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Languages</h3>
         <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-white">Bengali</span>
              <span className="text-blue-400">Native</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-white">English</span>
              <span className="text-slate-500">Professional</span>
            </div>
         </div>
      </div>

    </div>
  );
};

export default BentoGrid;
