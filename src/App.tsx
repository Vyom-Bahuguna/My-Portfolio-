import { useState, useEffect } from 'react';
import { OpeningAnimation } from './components/OpeningAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { AboutTechSection } from './components/AboutTechSection';
import { IITMandiSection } from './components/IITMandiSection';
import { DigitalCampaignSection } from './components/DigitalCampaignSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactFooter } from './components/ContactFooter';
import type { Project } from './types';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Theme Toggler Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Section Observer Effect for Active Navbar Link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'skills', 'iit-mandi', 'campaign', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreWorkClick = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white font-sans selection:bg-[#0A0A0A] selection:text-white">
      
      {/* 1. Creative Opening Animation */}
      {showIntro && <OpeningAnimation onComplete={() => setShowIntro(false)} />}

      {/* 2. Top Editorial Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      {/* Main Content Layout */}
      <main>
        {/* 3. Editorial Hero Section */}
        <Hero onExploreClick={handleExploreWorkClick} />

        {/* 4. Three Equal Vertical Production Projects (SAMETO -> INSTITUTE HELPER -> READIFY) */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Comprehensive Categorized Technical Skills */}
        <AboutTechSection />

        {/* 6. IIT Mandi Himshikhar Program & Academic Education */}
        <IITMandiSection />

        {/* 7. Digital Campaign & Content Experience (Politically Neutral) */}
        <DigitalCampaignSection />

        {/* 8. Achievements & Extracurricular Honors */}
        <AchievementsSection />
      </main>

      {/* 9. Academic Contact & Footer */}
      <ContactFooter />

      {/* 10. Hybrid Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}

export default App;
