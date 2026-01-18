import React from 'react';
// 1. Import the standard icons from 'fa' (Font Awesome 5)
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaArrowRight, 
  FaFileDownload 
} from 'react-icons/fa';
import Image from 'next/image';

// 2. Import the X icon from 'fa6' (Font Awesome 6)
import { FaXTwitter } from 'react-icons/fa6';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-emerald-500/30 overflow-hidden relative flex justify-center py-20 px-4">
      
      {/* --- BACKGROUND ATMOSPHERE (The "Eye Satisfying" Glow) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top Right Violet Glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
        {/* Bottom Left Emerald Glow */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
        {/* Subtle Noise Texture overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[600px] animate-fade-in-up">
        
        {/* 1. HERO SECTION */}
        <div className="flex flex-col items-center text-center mb-16">
          
          {/* Unique Profile Image Housing */}
          <div className="relative group mb-8">
            {/* Rotating Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 via-violet-500 to-orange-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            
            {/* The Image */}
            <div className="relative w-40 h-40 rounded-full p-[4px] bg-[#0a0a0a]">
              <Image 
                src="/akash_final.jpeg" 
                alt="Aakash Gohil" 
                className="w-full h-full rounded-full object-cover transition-all duration-500 ease-out"
                width={400}
                height={400}
              />
            </div>
            
            {/* Status Indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-4 border-[#0a0a0a] rounded-full" title="Available for work"></div>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-3">
            Aakash Gohil
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-medium text-emerald-100 tracking-wide">Software Engineer</span>
          </div>
        </div>

        {/* 2. BIO & DESC */}
        <div className="mb-14 space-y-6">
          <p className="text-lg text-slate-400 leading-relaxed font-light">
            I&apos;m a <span className="text-white font-medium">full stack software engineer</span> based in India, with a passion for building scalable applications and solving complex problems. By day, I build robust web solutions that can handle anything the internet throws at them. By night, I'm a digital explorer, crafting side projects and chasing new tech trends.
          </p>
          
          {/* The "Joke Algorithm" - Styled as a code block/comment */}
          <div className="relative p-5 bg-[#111] border-l-2 border-violet-500 rounded-r-xl overflow-hidden group">
             <div className="absolute inset-0 bg-violet-500/5 group-hover:bg-violet-500/10 transition-colors"></div>
             <p className="relative z-10 text-slate-300 font-mono text-sm">
               {/* <span className="text-violet-400 opacity-70">// Fun Fact</span><br/> */}
               When I'm not busy deploying or debugging, you might find me trying to optimize my joke algorithm, it's still running with <span className="text-emerald-400 font-bold">O(n!)</span> complexity, but I'm working on it!
             </p>
          </div>
        </div>

        {/* 3. SOCIAL DOCK */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl">
            {[
              { Icon: FaGithub, href: "https://github.com/akash8347", color: "hover:text-white" },
              { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/akash-gohil-196879229/", color: "hover:text-blue-400" },
              { Icon: FaXTwitter, href: "https://x.com", color: "hover:text-white" }, // Updated color for X
              { Icon: FaEnvelope, href: "mailto:akashgohil.av@gmail.com", color: "hover:text-emerald-400" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"             
                rel="noopener noreferrer"   
                className={`p-2 text-slate-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
              >
                <social.Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* 4. WORK EXPERIENCE (The "Git Stream" Look) */}
        <div className="relative">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 ml-2">Experience Timeline</h3>
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[19px] top-10 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-violet-500 to-transparent opacity-30"></div>

          <div className="space-y-12">
            
            {/* JOB 1: PRESENT */}
            <div className="relative pl-12 group">
              {/* Timeline Node (Logo Placeholder) */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#1a1a1a] border border-emerald-500/30 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform duration-300">
                 {/* Replaced with simple dot/initial as requested if no logo image */}
                 <div className="w-3 h-3 bg-emerald-500 rounded-full"></div> 
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Software Engineer</h2>
                <span className="text-xs font-mono text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded">July 2025 - Present</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-400 text-sm mb-1">
                <span className="font-medium text-slate-300">NJ Group</span>
                <a href="https://www.njgroup.in" target="_blank" rel="noreferrer" className="group/link flex items-center gap-1 text-slate-500 hover:text-white transition-colors">
                   <span className="text-xs">Visit</span>
                   <FaArrowRight size={10} className="-rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* JOB 2: INTERN */}
            <div className="relative pl-12 group">
              {/* Timeline Node */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center z-10 group-hover:border-violet-500/50 transition-colors duration-300">
                 <div className="w-3 h-3 bg-slate-600 rounded-full group-hover:bg-violet-500 transition-colors"></div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h2 className="text-xl font-bold text-slate-300 group-hover:text-violet-400 transition-colors">Software Engineer Intern - Full Stack</h2>
                <span className="text-xs font-mono text-slate-500">Jan 2025 - June 2025</span>
              </div>
              
              <div className="flex items-center gap-3 text-slate-400 text-sm mb-1">
                <span className="font-medium text-slate-300">NJ Group</span>
                <a href="https://www.njgroup.in" target="_blank" rel="noreferrer" className="group/link flex items-center gap-1 text-slate-500 hover:text-white transition-colors">
                   <span className="text-xs">Visit</span>
                   <FaArrowRight size={10} className="-rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 5. FOOTER / RESUME */}
        <div className="mt-20 flex justify-center pb-10">
           <button className="group relative px-8 py-3 rounded-full bg-white text-black font-bold tracking-wide overflow-hidden transition-all hover:w-[220px] w-[200px] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-300 via-transparent to-violet-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2">
                View Full Resume <FaFileDownload />
              </span>
           </button>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;