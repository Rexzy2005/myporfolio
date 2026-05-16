import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { languages, technicalSkills, softSkills, type Skill } from '@/data/skills';
import { cn } from '@/utils/cn';

type Tab = 'languages' | 'technical' | 'soft';

const tabs: { key: Tab; label: string; data: Skill[] }[] = [
  { key: 'languages', label: 'Languages', data: languages },
  { key: 'technical', label: 'Technical', data: technicalSkills },
  { key: 'soft', label: 'Soft Skills', data: softSkills },
];

function SkillNode({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const [arrowStyle, setArrowStyle] = useState<React.CSSProperties>({});

  const updatePosition = useCallback(() => {
    if (!nodeRef.current) return;
    const rect = nodeRef.current.getBoundingClientRect();
    const W = 220;
    const pad = 12;
    const vw = window.innerWidth;
    let left = rect.width / 2 - W / 2;
    const absL = rect.left + left;
    const absR = absL + W;
    let arrowL = '50%';
    if (absL < pad) {
      const shift = pad - absL;
      left += shift;
      arrowL = `${Math.max(16, W / 2 - shift)}px`;
    } else if (absR > vw - pad) {
      const shift = absR - (vw - pad);
      left -= shift;
      arrowL = `${Math.min(W - 16, W / 2 + shift)}px`;
    }
    setTooltipStyle({ left: `${left}px`, transform: 'none' });
    setArrowStyle({ left: arrowL, transform: 'translateX(-50%) rotate(45deg)' });
  }, []);

  return (
    <motion.div
      ref={nodeRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25, delay: index * 0.025 }}
      onMouseEnter={() => { updatePosition(); setIsHovered(true); }}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        animate={isHovered ? { y: -2 } : { y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className={cn(
          'flex flex-col items-center justify-center w-[96px] h-[96px] sm:w-[104px] sm:h-[104px] cursor-default transition-colors duration-200 border border-lead/20',
          isHovered ? 'bg-graphite border-lead/40' : 'bg-midnight-slate'
        )}
      >
        <skill.icon
          size={24}
          style={{ color: isHovered ? skill.color : '#70707d' }}
          className="transition-colors duration-200"
        />
        <span className="mt-2.5 text-[10px] font-[400] text-center leading-tight px-2 text-lead tracking-[0.02em]">
          {skill.name}
        </span>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.12 }}
            className="absolute z-50 bottom-full mb-3 w-[220px] p-4 pointer-events-none bg-graphite border border-lead/30"
            style={tooltipStyle}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] font-[480] text-starlight" style={{ letterSpacing: '0.01em' }}>
                {skill.name}
              </span>
              <span className="text-[10px] font-[400] text-lead uppercase tracking-[0.1em]">
                {skill.proficiency}
              </span>
            </div>
            <p className="text-[12px] leading-[1.55] text-lead tracking-[0.24px]">{skill.description}</p>
            {skill.years > 0 && (
              <p className="mt-2 text-[10px] text-lead/50 tracking-[0.2em] uppercase">{skill.years}+ yrs</p>
            )}
            <div
              className="absolute -bottom-[9px] w-4 h-4 bg-graphite border-r border-b border-lead/30"
              style={arrowStyle}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SkillGroup({ label, skills }: { label: string; skills: Skill[] }) {
  return (
    <div className="mb-12">
      {label && (
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] font-[400] text-lead/60 uppercase tracking-[0.22px] shrink-0">{label}</span>
          <div className="flex-1 h-px bg-lead/15" />
        </div>
      )}
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, i) => (
          <SkillNode key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<Tab>('languages');

  const activeData = tabs.find((t) => t.key === activeTab)!;

  const groupedTechnical =
    activeTab === 'technical'
      ? technicalSkills.reduce<Record<string, Skill[]>>((acc, skill) => {
          const key = skill.subcategory || 'Other';
          if (!acc[key]) acc[key] = [];
          acc[key].push(skill);
          return acc;
        }, {})
      : null;

  return (
    <div className="bg-deep-space">
      <Container id="skills">
        <SectionHeading tag="Skills" title="Technologies and expertise" />

        <AnimatedWrapper>
          <div className="inline-flex gap-0 mb-14 border border-lead/20 overflow-hidden" style={{ borderRadius: '32px' }}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'px-6 py-2.5 text-[13px] font-[400] tracking-[0.26px] transition-colors duration-150',
                  activeTab === tab.key
                    ? 'bg-mercury-blue text-pure-white'
                    : 'bg-transparent text-lead hover:text-starlight'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedWrapper>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            {groupedTechnical ? (
              Object.entries(groupedTechnical).map(([group, skills]) => (
                <SkillGroup key={group} label={group} skills={skills} />
              ))
            ) : (
              <SkillGroup label="" skills={activeData.data} />
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatedWrapper delay={0.1}>
          <div className="mt-8 pt-8 border-t border-lead/15">
            <p className="text-[11px] text-lead/40 tracking-[0.24px]">Hover any icon for details</p>
          </div>
        </AnimatedWrapper>
      </Container>
    </div>
  );
}
