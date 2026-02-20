import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { projects, type Project } from '@/data/projects';
import { cn } from '@/utils/cn';

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'web3', label: 'Web3' },
  { key: 'backend', label: 'Backend' },
];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={onClick}
      className="cursor-pointer overflow-hidden group rounded-2xl p-6 bg-black border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.08),0_0_60px_rgba(255,255,255,0.04)]"
    >
      {/* Image placeholder */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
          <span className="text-5xl font-bold text-white/20 group-hover:text-white/40 transition-all duration-300">
            {project.title.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm tracking-wide">
            View Case Study →
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-white/90">
        {project.title}
      </h3>
      <p className="text-sm mb-4 line-clamp-2 text-slate-400">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 text-white/70 border border-white/10">
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 text-white/40 border border-white/10">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-black border border-white/15 shadow-[0_0_40px_rgba(255,255,255,0.06)]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl transition-colors text-white/40 hover:text-white hover:bg-white/10"
        >
          <FiX size={24} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-lg bg-white/10 text-white/80 border border-white/10 mb-3">{project.category}</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-slate-400">
            {project.fullDescription}
          </p>
        </div>

        {/* Case Study sections */}
        <div className="space-y-6">
          {[
            { title: 'The Problem', content: project.problem },
            { title: 'My Approach', content: project.approach },
            { title: 'The Outcome', content: project.outcome },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-2 text-white/80">
                {section.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-400">
                {section.content}
              </p>
            </div>
          ))}

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white/80">
              Key Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-slate-400"
                >
                  <span className="text-white/50 mt-1">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white/80">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 text-white/70 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4">
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <FiExternalLink />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <FiGithub />
                Source Code
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Container id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of projects that showcase my skills and approach to problem-solving"
      />

      {/* Category filter */}
      <AnimatedWrapper>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200',
                activeCategory === cat.key
                  ? 'bg-white text-black'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </AnimatedWrapper>

      {/* Project grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <AnimatedWrapper key={project.id} delay={i * 0.1}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </AnimatedWrapper>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Container>
  );
}
