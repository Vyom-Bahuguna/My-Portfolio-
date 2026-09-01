import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Users, Globe } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { GithubIcon } from './GithubIcon';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white border-t border-[#0A0A0A]/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Minimal Editorial Projects Header */}
        <div className="flex flex-col items-start mb-16 border-b border-[#0A0A0A]/10 dark:border-white/10 pb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2">
            01 / SHIPPED PRODUCTION WORK
          </span>
          <h2 className="text-4xl sm:text-6xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white">
            SELECTED PROJECTS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans max-w-xl">
            Three independent software platforms designed, engineered, and deployed to active users.
          </p>
        </div>

        {/* 3 Large Editorial Project Cards */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-[#0A0A0A] dark:border-white bg-white dark:bg-[#0A0A0A] p-6 sm:p-10 lg:p-12 transition-colors"
            >
              
              {/* Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0A0A0A]/10 dark:border-white/10 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    0{index + 1} /
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight uppercase text-[#0A0A0A] dark:text-white">
                    {project.name}
                  </h3>
                  {project.formerName && (
                    <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                      ({project.formerName})
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 border border-[#0A0A0A]/20 dark:border-white/20 text-[#0A0A0A] dark:text-white text-xs font-mono font-medium">
                    <Users className="w-3.5 h-3.5 text-amber-500" />
                    <span>{project.userMetric}</span>
                  </span>
                </div>
              </div>

              {/* Main Content Layout Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left Side: Editorial Specs & Details */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-bold block mb-2">
                      {project.role}
                    </span>
                    <p className="text-lg sm:text-xl font-bold text-[#0A0A0A] dark:text-white leading-snug mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Problem & Solution Breakdown */}
                    <div className="space-y-4 p-5 border border-[#0A0A0A]/10 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/50">
                      <div>
                        <span className="text-[11px] font-mono font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider block mb-1">
                          PROBLEM IDENTIFIED:
                        </span>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-[#0A0A0A]/10 dark:border-white/10">
                        <span className="text-[11px] font-mono font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider block mb-1">
                          SOLUTION ENGINEERED:
                        </span>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-[11px] font-mono border border-[#0A0A0A]/15 dark:border-white/15 text-neutral-700 dark:text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] font-mono font-bold text-xs tracking-wider uppercase transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200"
                    >
                      <span>CASE STUDY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-3 border border-[#0A0A0A] dark:border-white text-[#0A0A0A] dark:text-white text-xs font-mono font-semibold uppercase tracking-wider hover:bg-[#0A0A0A] hover:text-white dark:hover:bg-white dark:hover:text-[#0A0A0A] transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>LIVE APP</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-3 border border-[#0A0A0A]/20 dark:border-white/20 text-[#0A0A0A] dark:text-white text-xs font-mono hover:border-[#0A0A0A] dark:hover:border-white transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>CODE</span>
                    </a>
                  </div>

                </div>

                {/* Right Side: Product Screenshot or Video Player */}
                <div className="lg:col-span-6">
                  <div className="relative border border-[#0A0A0A] dark:border-white bg-[#0A0A0A] overflow-hidden">
                    {/* Browser Header */}
                    <div className="h-7 bg-[#0A0A0A] px-3 flex items-center gap-1.5 border-b border-white/10">
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                      <span className="text-[10px] font-mono text-neutral-400 ml-2 truncate">
                        {project.liveUrl}
                      </span>
                    </div>

                    {/* Media Content */}
                    {project.videoUrl ? (
                      <video
                        controls
                        poster={project.mainImage}
                        preload="metadata"
                        className="w-full h-auto object-cover object-top max-h-[380px] bg-black block"
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={project.mainImage}
                        alt={project.name}
                        onClick={() => onSelectProject(project)}
                        className="w-full h-auto object-cover object-top max-h-[380px] cursor-pointer hover:opacity-90 transition-opacity block"
                      />
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

