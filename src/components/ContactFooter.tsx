import React from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white border-t border-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#0A0A0A]/10 dark:border-white/10">
        
        {/* Left Column */}
        <div className="md:col-span-7">
          <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2 block">
            06 / GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white mb-2">
            VYOM BAHUGUNA
          </h2>
          <p className="text-xs font-mono text-neutral-500 mb-6 uppercase tracking-wider">
            FOUNDER · PRODUCT BUILDER · AI/ML ENTHUSIAST · DEHRADUN, INDIA
          </p>

          <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 italic max-w-lg">
            "{PERSONAL_INFO.philosophy}"
          </p>
        </div>

        {/* Right Column: Contact Actions */}
        <div className="md:col-span-5 flex flex-col items-start md:items-end space-y-3 font-mono text-xs">
          
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-3 px-6 py-3 border border-[#0A0A0A] dark:border-white bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] font-bold uppercase transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200 w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-[#0A0A0A] dark:border-white text-[#0A0A0A] dark:text-white font-bold uppercase hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-all w-full sm:w-auto"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GITHUB PROFILE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <div className="inline-flex items-center gap-2 text-neutral-500 font-mono text-xs uppercase pt-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>DEHRADUN, UTTARAKHAND, INDIA</span>
          </div>

        </div>

      </div>

      {/* Editorial Footer Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono gap-4 uppercase tracking-wider">
        <span>© 2026 VYOM BAHUGUNA. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
};

