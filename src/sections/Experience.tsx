import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { cn } from '@/utils/cn';
import { useInView } from 'react-intersection-observer';

function TimelineItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start mb-12 last:mb-0">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full">
        {/* Left content */}
        <div className={cn('flex', isLeft ? 'justify-end' : 'justify-end')}>
          {isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl max-w-md w-full glass hover:bg-white/5"
            >
              <TimelineContent experience={experience} />
            </motion.div>
          ) : (
            <div className="flex items-center justify-end h-full">
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-sm font-medium text-slate-500"
              >
                {experience.startDate} — {experience.endDate}
              </motion.span>
            </div>
          )}
        </div>

        {/* Center dot & line */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
            className={cn(
              'w-4 h-4 rounded-full border-2 z-10',
              index === 0
                ? 'bg-neon border-neon glow-sm'
                : 'bg-surface-800 border-brand-500'
            )}
          />
          {index < experiences.length - 1 && (
            <div className="w-px flex-1 mt-2 bg-glass-border" />
          )}
        </div>

        {/* Right content */}
        <div className={cn('flex', isLeft ? 'justify-start' : 'justify-start')}>
          {!isLeft ? (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl max-w-md w-full glass hover:bg-white/5"
            >
              <TimelineContent experience={experience} />
            </motion.div>
          ) : (
            <div className="flex items-center h-full">
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-sm font-medium text-slate-500"
              >
                {experience.startDate} — {experience.endDate}
              </motion.span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4 w-full">
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 300 }}
            className={cn(
              'w-3 h-3 rounded-full border-2 z-10 mt-2',
              index === 0
                ? 'bg-neon border-neon glow-sm'
                : 'bg-surface-800 border-brand-500'
            )}
          />
          {index < experiences.length - 1 && (
            <div className="w-px flex-1 mt-2 bg-glass-border" />
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 p-5 rounded-2xl glass hover:bg-white/5"
        >
          <span className="text-xs font-medium text-slate-500">
            {experience.startDate} — {experience.endDate}
          </span>
          <TimelineContent experience={experience} />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineContent({
  experience,
}: {
  experience: typeof experiences[0];
}) {
  return (
    <>
      <h3 className="text-lg font-bold text-white">
        {experience.role}
      </h3>
      <p className="text-sm font-medium mt-0.5 text-brand-400">
        {experience.company} · {experience.location}
      </p>
      <p className="text-sm mt-3 text-slate-400">
        {experience.description}
      </p>
      <ul className="mt-3 space-y-1.5">
        {experience.achievements.map((achievement, i) => (
          <li
            key={i}
            className="text-xs flex items-start gap-2 text-slate-500"
          >
            <span className="text-neon mt-0.5">▸</span>
            {achievement}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {experience.techUsed.map((tech) => (
          <Badge key={tech} variant="brand">{tech}</Badge>
        ))}
      </div>
    </>
  );
}

export default function Experience() {
  return (
    <Container id="experience">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey and career milestones"
      />
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </Container>
  );
}
