import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isDark, setIsDark] = useState<boolean>(true); // Default to dark for cyber theme

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('./_data/cv.json');
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw new Error('Fallback');
        }
      } catch (err) {
        import('./data').then(mod => {
          setData(mod.portfolioData);
        });
      }
    };
    loadData();
  }, []);

  if (!data) return null;

  const profileImg = data.profile_image || data.profileImage || 'input_file_0.png';

  return (
    <div className="min-h-screen font-mono selection:bg-cyber-cyan selection:text-black">
      
      {/* HUD Header */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center border-b border-cyber-cyan/20 bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 border border-cyber-cyan flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-cyber-cyan/10 group-hover:bg-cyber-cyan/30 transition-all"></div>
             <span className="text-cyber-cyan font-bold text-lg text-glow">SH</span>
           </div>
           <div>
             <div className="text-[10px] text-cyber-cyan font-bold tracking-widest leading-none mb-1">USER_AUTHENTICATED</div>
             <div className="text-xs font-bold uppercase tracking-tighter">{data.name}</div>
           </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse"></span>
              Secure Connection
            </div>
            <div>Node: Dhaka_24.0</div>
          </div>
          
          {/* Cyber Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-2 border border-cyber-cyan/40 px-3 py-1.5 hover:border-cyber-cyan transition-all group"
          >
            <span className="text-[9px] font-bold text-cyber-cyan uppercase group-hover:text-glow">Theme_Swap</span>
            <div className={`w-4 h-4 border border-cyber-cyan flex items-center justify-center ${isDark ? 'bg-cyber-cyan' : ''}`}>
              {!isDark && <div className="w-2 h-2 bg-cyber-cyan"></div>}
            </div>
          </button>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 pb-32">
        
        {/* TERMINAL HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40">
          <div className="lg:col-span-8">
            <div className="mb-6 flex gap-2">
               <span className="text-cyber-cyan font-bold">$</span>
               <span className="text-zinc-500">whoami --verbose</span>
            </div>
            <h1 className="font-display text-6xl md:text-9xl font-black tracking-tighter uppercase mb-10 leading-[0.85]">
              ARCHITECTING<br/>
              <span className="text-cyber-cyan text-glow">RESI</span>LIENCE
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 leading-relaxed mb-12 max-w-2xl font-light">
              Digital infrastructure and forensic expert operating at the intersection of <span className="text-cyber-cyan border-b border-cyber-cyan">Government ICT</span> and <span className="text-cyber-magenta border-b border-cyber-magenta">Cybersecurity protocols</span>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="border-l-2 border-cyber-cyan pl-6">
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2">Designation</div>
                <div className="text-sm font-bold uppercase">{data.title}</div>
              </div>
              <div className="border-l-2 border-cyber-magenta pl-6">
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2">Core_Directive</div>
                <div className="text-sm font-bold uppercase">Digital Forensics</div>
              </div>
              <div className="border-l-2 border-cyber-green pl-6">
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2">Network_Entry</div>
                <a href={`mailto:${data.contact.email}`} className="text-sm font-bold uppercase text-cyber-cyan hover:text-white transition-colors underline decoration-cyber-cyan/30">Connect_Mail</a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 relative">
            <div className="border border-cyber-cyan/30 p-2 bg-cyber-cyan/5 backdrop-blur-sm">
              <div className="aspect-square relative overflow-hidden border border-cyber-cyan/20">
                <img 
                  src={profileImg} 
                  alt={data.name} 
                  className="w-full h-full object-cover grayscale mix-blend-screen brightness-125 contrast-125"
                />
                {/* Glitch Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-cyan/20 to-transparent pointer-events-none"></div>
                <div className="absolute top-4 left-4 bg-cyber-cyan text-black text-[9px] font-bold px-2 py-0.5 uppercase tracking-widest">Live_Signal</div>
                
                {/* Data bits */}
                <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 opacity-40">
                   <div className="w-16 h-1 bg-cyber-cyan"></div>
                   <div className="w-10 h-1 bg-cyber-magenta"></div>
                   <div className="w-20 h-1 bg-cyber-green"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center px-2">
               <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
               <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">AUTH_VERIFIED</span>
            </div>
          </div>
        </section>

        {/* SYSTEM MODULES (EXPERIENCE) */}
        <section className="mb-40">
           <div className="flex items-center gap-6 mb-16">
              <h2 className="font-display text-4xl font-bold uppercase italic text-cyber-cyan tracking-widest text-glow">Deployment_Logs</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-cyber-cyan to-transparent"></div>
           </div>
           
           <div className="space-y-24">
              {data.experience.map((exp: any, i: number) => (
                <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
                  <div className="lg:col-span-1 text-cyber-cyan/40 text-4xl font-black italic">0{i+1}</div>
                  <div className="lg:col-span-11 border border-zinc-800/50 p-8 hover:border-cyber-cyan/50 transition-all bg-zinc-900/10 backdrop-blur-sm relative group-hover:bg-zinc-800/20">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
                       <div>
                         <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-cyber-cyan transition-colors">{exp.role}</h3>
                         <p className="text-xs font-bold text-cyber-magenta uppercase tracking-[0.2em]">{exp.company}</p>
                       </div>
                       <div className="text-right">
                         <div className="text-[10px] font-mono opacity-40 uppercase mb-1">Timeline_Range</div>
                         <div className="text-sm font-bold font-mono text-zinc-400 group-hover:text-white">{exp.period}</div>
                       </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                       {exp.responsibilities.map((res: string, j: number) => (
                         <div key={j} className="text-xs border border-zinc-800 p-4 leading-relaxed text-zinc-400 bg-black/40 group-hover:border-zinc-700">
                           <span className="text-cyber-cyan mr-2 font-black">»</span>
                           {res}
                         </div>
                       ))}
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-cyber-cyan/0 group-hover:border-cyber-cyan transition-all"></div>
                  </div>
                </div>
              ))}
           </div>
        </section>

        {/* CORE ANALYTICS (SKILLS) */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <div className="sticky top-32">
               <h2 className="font-display text-4xl font-bold uppercase italic text-cyber-green tracking-widest text-glow mb-8">Skill_Matrix</h2>
               <p className="text-sm text-zinc-500 leading-relaxed mb-8">
                 Mapping the technical spectrum of defensive and forensic architectures.
               </p>
               <div className="p-6 border border-cyber-green/20 bg-cyber-green/5 text-[10px] font-mono leading-relaxed text-cyber-green/60">
                 [ANALYSIS_MODE_ACTIVE]<br/>
                 SCANNING_HARDWARE... OK<br/>
                 VERIFYING_PROTOCOLS... OK<br/>
                 SKILLSET_INDEXED_AT_100%
               </div>
             </div>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.skills.map((skill: string, i: number) => (
                <div key={i} className="flex items-center justify-between p-6 border border-zinc-800/40 hover:border-cyber-green/40 hover:bg-cyber-green/5 transition-all group">
                  <div className="flex items-center gap-4">
                    <span className="text-cyber-green/40 text-[10px] font-black">#0{i+1}</span>
                    <span className="text-sm font-bold uppercase tracking-widest group-hover:text-cyber-green transition-colors">{skill}</span>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(dot => (
                      <div key={dot} className={`w-1 h-3 ${dot <= 4 ? 'bg-cyber-green/40 group-hover:bg-cyber-green' : 'bg-zinc-800'}`}></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROTOCOLS (EDUCATION) */}
        <section className="mb-40 border-t border-zinc-800 pt-20">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                 <div className="flex items-center gap-4 mb-10">
                    <span className="text-cyber-magenta font-black text-2xl">⚡</span>
                    <h2 className="font-display text-3xl font-bold uppercase tracking-widest">Academic_Protocols</h2>
                 </div>
                 {data.education.map((edu: any, i: number) => (
                   <div key={i} className="relative pl-12 before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-cyber-magenta/20 hover:before:bg-cyber-magenta transition-all">
                      <h3 className="text-2xl font-bold uppercase mb-2 tracking-tight">{edu.degree}</h3>
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">{edu.institution}</p>
                      <div className="inline-block px-4 py-1 border border-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-400">{edu.period}</div>
                   </div>
                 ))}
              </div>
              
              <div className="space-y-12">
                 <div className="flex items-center gap-4 mb-10">
                    <span className="text-cyber-cyan font-black text-2xl">🌐</span>
                    <h2 className="font-display text-3xl font-bold uppercase tracking-widest">Communication_Link</h2>
                 </div>
                 <div className="space-y-6">
                   {data.languages.map((lang: string, i: number) => (
                     <div key={i} className="flex items-center justify-between border-b border-zinc-800/40 pb-4 group">
                        <span className="text-xl font-bold tracking-tight group-hover:text-cyber-cyan transition-colors uppercase">{lang.split(' ')[0]}</span>
                        <div className="flex items-center gap-4">
                           <span className="text-[10px] font-mono opacity-40 italic uppercase">{lang.split(' ')[1]}</span>
                           <div className="w-20 h-1 bg-zinc-800 relative">
                              <div className={`absolute left-0 top-0 h-full bg-cyber-cyan ${lang.includes('Native') ? 'w-full' : 'w-4/5'}`}></div>
                           </div>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </section>

        {/* UPLINK (CONTACT) */}
        <section className="relative overflow-hidden p-12 lg:p-24 border border-cyber-cyan group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/5 blur-3xl group-hover:bg-cyber-cyan/10 transition-all"></div>
           <div className="relative z-10 flex flex-col items-center text-center">
              <div className="text-[10px] font-bold text-cyber-cyan uppercase tracking-[0.5em] mb-10 glitch-hover cursor-default">INITIALIZING_SECURE_CHANNEL</div>
              <h2 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                Establish<br/>
                <span className="text-cyber-cyan text-glow">Uplink.</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
                 <a 
                   href={`mailto:${data.contact.email}`} 
                   className="flex-1 py-6 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-black uppercase tracking-[0.3em] transition-all duration-300 text-center relative overflow-hidden group/btn"
                 >
                   <span className="relative z-10">Send_Transmission</span>
                 </a>
                 <a 
                   href={`https://${data.contact.linkedin}`} 
                   target="_blank"
                   className="flex-1 py-6 border border-zinc-700 text-zinc-500 hover:border-white hover:text-white font-black uppercase tracking-[0.3em] transition-all duration-300 text-center"
                 >
                   Access_Social_Nodes
                 </a>
              </div>
           </div>
        </section>

        {/* HUD FOOTER */}
        <footer className="mt-40 pt-10 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
           <div className="text-[9px] font-bold uppercase tracking-[0.4em]">SADDAM_HOWLADER // CORE_VERSION_4.0_STABLE</div>
           <div className="flex gap-10">
              <a href="#" className="text-[9px] font-bold uppercase tracking-widest hover:text-cyber-cyan transition-colors">Github_Mirror</a>
              <a href="#" className="text-[9px] font-bold uppercase tracking-widest hover:text-cyber-cyan transition-colors">Privacy_Protocol</a>
              <span className="text-[9px] font-bold uppercase tracking-widest">DHAKA_HQ © 2024</span>
           </div>
        </footer>

      </main>
      
      {/* Decorative corners */}
      <div className="fixed top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyber-cyan/10 pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyber-cyan/10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyber-cyan/10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyber-cyan/10 pointer-events-none"></div>
    </div>
  );
};

export default App;