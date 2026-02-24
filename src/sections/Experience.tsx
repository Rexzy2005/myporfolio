import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { experiences } from '@/data/experience';
import { cn } from '@/utils/cn';

function TimelineItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  // Scroll-linked progress: 0 when item top enters bottom of viewport, 1 when item top reaches center
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'start 0.4'],
  });

  // Derived animated values tied to scroll
  const dotScale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const lineScaleY = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const cardXLeft = useTransform(scrollYProgress, [0.1, 0.5], [-30, 0]);
  const cardXRight = useTransform(scrollYProgress, [0.1, 0.5], [30, 0]);
  const cardY = useTransform(scrollYProgress, [0.1, 0.5], [20, 0]);
  const pulseScale = useTransform(scrollYProgress, [0.2, 0.6], [0, 2]);
  const pulseOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 0.5, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <div ref={itemRef} className="relative flex items-start mb-12 last:mb-0">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full">
        {/* Left content */}
        <div className={cn('flex', isLeft ? 'justify-end' : 'justify-end')}>
          {isLeft ? (
            <motion.div
              style={{ opacity: cardOpacity, x: cardXLeft }}
              className="p-6 rounded-2xl max-w-md w-full bg-surface-900 border border-white/5 hover:bg-surface-800 transition-colors duration-300"
            >
              <TimelineContent experience={experience} />
            </motion.div>
          ) : (
            <div className="flex items-center justify-end h-full">
              <motion.span
                style={{ opacity: cardOpacity }}
                className="text-sm font-medium text-slate-500"
              >
                {experience.startDate} — {experience.endDate}
              </motion.span>
            </div>
          )}
        </div>

        {/* Center dot & line */}
        <div className="relative flex flex-col items-center">
          {/* Outer pulse ring */}
          <motion.div
            style={{ scale: pulseScale, opacity: pulseOpacity }}
            className="absolute top-0 w-4 h-4 rounded-full bg-neon z-0"
          />
          {/* Glow ring */}
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute top-[-2px] left-[-2px] w-5 h-5 rounded-full bg-neon/20 blur-sm z-0"
          />
          {/* Dot */}
          <motion.div
            style={{ scale: dotScale, opacity: dotOpacity }}
            className="w-4 h-4 rounded-full border-2 z-10 bg-neon border-neon shadow-[0_0_8px_rgba(0,240,255,0.5)]"
          />
          {/* Animated line */}
          {index < experiences.length - 1 && (
            <div className="w-px flex-1 mt-2 bg-glass-border relative overflow-hidden">
              <motion.div
                style={{ scaleY: lineScaleY }}
                className="absolute inset-0 origin-top bg-gradient-to-b from-neon/80 to-brand-500/30"
              />
            </div>
          )}
        </div>

        {/* Right content */}
        <div className={cn('flex', isLeft ? 'justify-start' : 'justify-start')}>
          {!isLeft ? (
            <motion.div
              style={{ opacity: cardOpacity, x: cardXRight }}
              className="p-6 rounded-2xl max-w-md w-full bg-surface-900 border border-white/5 hover:bg-surface-800 transition-colors duration-300"
            >
              <TimelineContent experience={experience} />
            </motion.div>
          ) : (
            <div className="flex items-center h-full">
              <motion.span
                style={{ opacity: cardOpacity }}
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
          {/* Outer pulse ring (mobile) */}
          <motion.div
            style={{ scale: pulseScale, opacity: pulseOpacity }}
            className="absolute top-2 w-3 h-3 rounded-full bg-neon z-0"
          />
          {/* Dot (mobile) */}
          <motion.div
            style={{ scale: dotScale, opacity: dotOpacity }}
            className="w-3 h-3 rounded-full border-2 z-10 mt-2 bg-neon border-neon shadow-[0_0_8px_rgba(0,240,255,0.5)]"
          />
          {/* Animated line (mobile) */}
          {index < experiences.length - 1 && (
            <div className="w-px flex-1 mt-2 bg-glass-border relative overflow-hidden">
              <motion.div
                style={{ scaleY: lineScaleY }}
                className="absolute inset-0 origin-top bg-gradient-to-b from-neon/80 to-brand-500/30"
              />
            </div>
          )}
        </div>
        <motion.div
          style={{ opacity: cardOpacity, y: cardY }}
          className="flex-1 p-5 rounded-2xl bg-surface-900 border border-white/5 hover:bg-surface-800 transition-colors duration-300"
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
