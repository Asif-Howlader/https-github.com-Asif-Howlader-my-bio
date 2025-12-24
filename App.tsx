import React, { useEffect, useState } from 'react';
import { portfolioData } from './data';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
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
          setData(portfolioData);
        }
      } catch (err) {
        setData(portfolioData);
      }
    };
    loadData();
  }, []);

  if (!data) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="dark:bg-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <span className="font-bold tracking-tight text-xl uppercase">Saddam<span className="text-blue-600">.</span></span>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <img 
                  src={data.profile_image} 
                  alt={data.name} 
                  className="w-48 h-48 rounded-2xl object-cover shadow-2xl border-4 border-white dark:border-slate-800"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">{data.name}</h1>
              <p className="text-blue-600 font-medium text-lg mt-1">{data.title}</p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-slate-800 pb-2">Connect</h2>
              <div className="space-y-4 text-sm font-medium">
                <a href={`mailto:${data.contact.email}`} className="flex items-center gap-3 text-gray-600 dark:text-slate-400 hover:text-blue-600 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  {data.contact.email}
                </a>
                <div className="flex items-center gap-3 text-gray-600 dark:text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  {data.contact.phone}
                </div>
                <div className="flex items-start gap-3 text-gray-600 dark:text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <span className="leading-tight">{data.contact.address}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-slate-800 pb-2">Linguistic Profile</h2>
              <div className="grid grid-cols-1 gap-3">
                {data.languages.map((lang: string, i: number) => (
                  <div key={i} className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                    <span className="text-gray-700 dark:text-slate-300">{lang.split(' ')[0]}</span>
                    <span className="text-blue-500">{lang.split(' ')[1]?.replace('(', '').replace(')', '') || 'Fluent'}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-24">
            
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white section-heading mb-8">Professional Summary</h2>
              <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
                Strategic IT Professional with a focused background in <span className="text-blue-600 font-bold">Digital Forensics</span> and 
                <span className="text-blue-600 font-bold"> Cybersecurity</span>. 
                Dedicated to fortifying ICT infrastructure and implementing advanced security protocols. 
                Currently managing critical government technology assets in Bangladesh.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white section-heading mb-12">Professional Experience</h2>
              <div className="space-y-16">
                {data.experience.map((exp: any, i: number) => (
                  <div key={i} className="group relative">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                        <p className="text-blue-600 font-semibold uppercase text-xs tracking-widest mt-1">{exp.company}</p>
                      </div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest md:text-right mt-2 md:mt-0">
                        {exp.period} <br className="hidden md:block" /> {exp.location}
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                      {exp.responsibilities.map((resp: string, j: number) => (
                        <li key={j} className="text-sm text-gray-600 dark:text-slate-400 flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white section-heading mb-10">Technical Skill Index</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {data.skills.map((skill: string, i: number) => (
                  <div key={i} className="p-4 bg-gray-100 dark:bg-slate-800 rounded-xl hover:bg-blue-600 hover:text-white transition-all text-sm font-bold uppercase tracking-wide text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white section-heading mb-10">Academic Background</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.education.map((edu: any, i: number) => (
                  <div key={i} className="p-6 border border-gray-100 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/50 shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">{edu.degree}</h3>
                    <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-50 dark:border-slate-800 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <span>{edu.location}</span>
                      <span className="text-blue-600">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>

      <footer className="border-t border-gray-100 dark:border-slate-800 py-12 mt-12 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs text-gray-400 dark:text-slate-500 font-bold uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} Saddam Howlader • Secured Infrastructure Baseline
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;