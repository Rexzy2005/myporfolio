import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects, type Project } from '@/data/projects';
import { socialLinks } from '@/data/constants';

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  // Every 3rd item (0, 3, 6) spans full width on desktop for a dynamic "Bento Box" style layout.
  const isWide = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.15 }}
      className={`group relative flex flex-col ${
        isWide ? 'lg:flex-row lg:col-span-2' : 'lg:col-span-1'
      } bg-surface-900 border border-white/5 rounded-[2rem] overflow-hidden hover:border-brand-500/30 transition-colors duration-500 shadow-xl`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/5 transition-colors duration-500 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-500/20 transition-colors duration-700" />

      {/* Image Container */}
      <div className={`relative ${isWide ? 'lg:w-[55%] min-h-[300px]' : 'w-full aspect-[4/3]'} overflow-hidden bg-surface-950 border-b lg:border-b-0 ${isWide ? 'lg:border-r' : ''} border-white/5`}>
        <div className="absolute inset-0 bg-brand-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
      </div>

      {/* Content Container */}
      <div className={`flex flex-col p-8 md:p-10 relative z-10 flex-grow ${isWide ? 'lg:w-[45%]' : 'w-full'}`}>
        <div className="flex items-center gap-3 mb-5">
          <span className="px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-brand-400 bg-brand-500/10 rounded-full uppercase border border-brand-500/20">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-800 text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-surface-800 text-slate-500 border border-white/5">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-500 text-white hover:bg-brand-400 transition-all hover:-translate-y-1 shadow-lg hover:shadow-brand-500/25"
              aria-label="View Live Project"
            >
              <FiExternalLink size={20} />
            </a>
          )}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-3 rounded-xl bg-surface-800 text-white hover:bg-surface-700 border border-white/5 transition-all hover:-translate-y-1"
            aria-label="View Source Code"
          >
            <FiGithub size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-surface-950">
      <Container>
        <SectionHeading
          title="Selected Works"
          subtitle="A collection of products I've built, focusing on clean code, seamless UX, and solving real problems."
        />

        {/* Dynamic Bento Grid Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Call to Action for GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 group relative w-full bg-surface-900 border border-white/5 rounded-[2rem] p-10 md:p-14 text-center flex flex-col items-center hover:border-brand-500/30 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <FiGithub className="text-brand-400 mb-6 group-hover:scale-110 transition-transform duration-500" size={48} />
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 relative z-10">
            More open-source work
          </h3>
          <p className="text-slate-400 text-sm lg:text-base max-w-xl mb-8 relative z-10">
            Check out my GitHub profile to explore my contributions, side projects, and experimental repositories.
          </p>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-surface-950 font-bold hover:bg-brand-500 hover:text-white transition-all duration-300 shadow-lg relative z-10"
          >
            Visit GitHub <FiArrowUpRight size={18} />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
