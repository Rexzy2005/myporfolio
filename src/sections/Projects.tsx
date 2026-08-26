import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiChevronDown } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { projects, type Project } from '@/data/projects';
import { socialLinks } from '@/data/constants';

const categoryLabels: Record<Project['category'], string> = {
  fullstack: 'Full-Stack',
  frontend: 'Frontend',
  web3: 'Web3',
  backend: 'Backend',
  'machine-learning': 'Machine Learning',
};
const additionalCategoryLabels = {
  'mobile-app': 'Mobile App',
  'machine-learning': 'Machine Learning',
} as const;

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const num = String(index + 1).padStart(2, '0');
  const displayCategories = project.categories
    ? project.categories.map((category) => additionalCategoryLabels[category])
    : [categoryLabels[project.category]];

  return (
    <AnimatedWrapper delay={index * 0.05}>
      <div className="border-b border-lead/20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-7 text-left group"
        >
          <div className="flex items-center gap-6 sm:gap-8 min-w-0">
            <span className="text-[12px] font-[400] text-lead/40 tracking-[0.24px] shrink-0 tabular-nums">
              {num}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 min-w-0">
              <span
                className="text-[clamp(18px,2.8vw,26px)] font-[480] text-starlight leading-[1.2] group-hover:text-pure-white transition-colors duration-150"
                style={{ letterSpacing: '0.01em' }}
              >
                {project.title}
              </span>
              <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                {displayCategories.map((category) => (
                  <span key={category} className="text-[11px] font-[400] text-lead/50 tracking-[0.22px] uppercase shrink-0">
                    {category}
                  </span>
                ))}
                {project.status && (
                  <span className="text-[11px] font-[400] text-lead/50 tracking-[0.22px] uppercase shrink-0">
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          </div>
          <FiChevronDown
            size={16}
            className={`text-lead shrink-0 ml-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16">
                {/* Info */}
                <div>
                  <p className="text-[16px] font-[400] leading-[1.7] text-lead tracking-[0.16px] mb-8">
                    {project.shortDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      ['Role', project.role],
                      ['Year', project.year],
                      ['Status', project.status],
                    ].map(([label, value]) => (
                      value && (
                        <div key={label} className="border-t border-lead/20 pt-3">
                          <p className="text-[10px] text-lead/45 uppercase tracking-[0.2px] mb-1">{label}</p>
                          <p className="text-[13px] text-starlight tracking-[0.16px]">{value}</p>
                        </div>
                      )
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[11px] font-[400] tracking-[0.22px] text-lead border border-lead/25 bg-graphite/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-mercury-blue text-pure-white text-[13px] font-[480] tracking-[0.26px] hover:bg-[#4456d6] transition-colors"
                        style={{ borderRadius: '32px' }}
                      >
                        View Live <FiArrowUpRight size={13} />
                      </a>
                    )}
                    {(project.sourceUrl || socialLinks.github) && (
                      <a
                        href={project.sourceUrl || socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[13px] font-[400] text-lead hover:text-starlight transition-colors tracking-[0.26px]"
                      >
                        <FiGithub size={13} /> Source
                      </a>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="overflow-hidden bg-graphite/20 border border-lead/15 aspect-video lg:aspect-auto lg:min-h-[200px]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedWrapper>
  );
}

export default function Projects() {
  return (
    <div className="bg-black">
      <Container id="projects">
        <SectionHeading
          tag="Work"
          title="My Works"
          subtitle="Products I have built, focusing on clean code, seamless UX, and real-world impact."
        />

        <div className="border-t border-lead/20">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
