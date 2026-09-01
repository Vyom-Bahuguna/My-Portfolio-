import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { DIGITAL_CAMPAIGN } from '../data/portfolioData';

export const DigitalCampaignSection: React.FC = () => {
  const showcaseItems = [
    {
      title: 'Social Channel Architecture',
      category: 'Brand Launch',
      description: 'Established official campaign presence on Instagram and Facebook from zero initial audience.'
    },
    {
      title: 'Short-Form Video Editing',
      category: 'Video Production',
      description: 'Edited dynamic clips and event reels optimizing engagement metrics across mobile feeds.'
    },
    {
      title: 'Digital Graphic Posters',
      category: 'Graphic Design',
      description: 'Designed high-contrast event graphics, quotes, and public announcement banners.'
    },
    {
      title: 'Editorial Content Management',
      category: 'Strategy & Ops',
      description: 'Maintained continuous publication calendar and monitored audience sentiment analytics.'
    }
  ];

  return (
    <section id="campaign" className="py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white border-t border-[#0A0A0A]/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 border-b border-[#0A0A0A]/10 dark:border-white/10 pb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2 block">
            04 / DIGITAL COMMUNICATIONS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white">
            CAMPAIGN MANAGEMENT
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans">
            Managed end-to-end social media strategy, video editing, poster design, and distribution for a state-level campaign for over 6 months, and currently still actively maintaining the platforms.
          </p>
        </div>

        {/* Disclaimer Note */}
        <div className="mb-10 p-5 border border-[#0A0A0A]/20 dark:border-white/20 bg-neutral-50 dark:bg-neutral-900/50">
          <p className="text-xs leading-relaxed font-mono text-neutral-700 dark:text-neutral-300">
            <strong className="font-bold text-[#0A0A0A] dark:text-white uppercase">Note:</strong> {DIGITAL_CAMPAIGN.disclaimer}
          </p>
        </div>

        {/* 4 Compact Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {showcaseItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="p-6 border border-[#0A0A0A] dark:border-white bg-white dark:bg-[#0A0A0A]"
            >
              <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider block mb-2">
                {item.category}
              </span>
              <h3 className="text-base font-bold font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Account Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 border border-[#0A0A0A] dark:border-white bg-white dark:bg-[#0A0A0A]">
          <span className="text-xs font-mono font-bold text-neutral-500 uppercase">
            VERIFIED CAMPAIGN CHANNELS:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {DIGITAL_CAMPAIGN.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#0A0A0A] dark:border-white text-[#0A0A0A] dark:text-white text-xs font-mono font-bold uppercase hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
              >
                <span>{link.label}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

