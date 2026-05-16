import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { experiences } from '@/data/experience';

function ExperienceRow({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <AnimatedWrapper delay={index * 0.05}>
      <div className="border-b border-lead/20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-7 text-left group"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 min-w-0">
            <span
              className="text-[clamp(17px,2.4vw,22px)] font-[480] text-starlight leading-[1.2] group-hover:text-pure-white transition-colors duration-150"
              style={{ letterSpacing: '0.01em' }}
            >
              {experience.role}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-[13px] font-[400] text-lead tracking-[0.26px]">
                {experience.company}
              </span>
              <span className="text-[11px] font-[400] text-lead/40 tracking-[0.22px] uppercase">
                {experience.location}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 shrink-0 ml-6">
            <span className="hidden sm:block text-[12px] font-[400] text-lead/50 tracking-[0.24px]">
              {experience.startDate} to {experience.endDate}
            </span>
            <FiChevronDown
              size={16}
              className={`text-lead transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
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
              <div className="pb-10 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-6 lg:gap-14">
                <div className="sm:hidden">
                  <p className="text-[11px] font-[400] text-lead/50 tracking-[0.22px] uppercase">
                    {experience.startDate} to {experience.endDate}
                  </p>
                </div>
                <div className="hidden lg:block">
                  <p className="text-[11px] font-[400] text-lead tracking-[0.22px] uppercase">
                    {experience.startDate}
                  </p>
                  <p className="mt-1 text-[11px] font-[400] text-lead/40 tracking-[0.22px] uppercase">
                    {experience.endDate}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-[400] leading-[1.7] text-lead tracking-[0.16px] mb-6">
                    {experience.description}
                  </p>
                  <ul className="space-y-3 mb-7">
                    {experience.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] font-[400] text-lead leading-[1.6] tracking-[0.26px]"
                      >
                        <span className="text-mercury-blue mt-0.5 shrink-0 select-none">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[11px] font-[400] tracking-[0.22px] text-lead border border-lead/25 bg-graphite/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedWrapper>
  );
}

export default function Experience() {
  return (
    <div className="bg-deep-space">
      <Container id="experience">
        <SectionHeading
          tag="Experience"
          title="Professional journey"
          subtitle="My career milestones and the roles that shaped my craft."
        />

        <div className="border-t border-lead/20">
          {experiences.map((exp, i) => (
            <ExperienceRow key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
