import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { languages, technicalSkills, softSkills, type Skill } from '@/data/skills';
import { cn } from '@/utils/cn';

type Tab = 'languages' | 'technical' | 'soft';

const tabs: { key: Tab; label: string; data: Skill[] }[] = [
  { key: 'languages', label: 'Languages', data: languages },
  { key: 'technical', label: 'Technical Skills', data: technicalSkills },
  { key: 'soft', label: 'Soft Skills', data: softSkills },
];

const proficiencyColors: Record<string, string> = {
  expert: 'text-green-400',
  advanced: 'text-blue-400',
  proficient: 'text-cyan-400',
  intermediate: 'text-yellow-400',
  familiar: 'text-orange-400',
};

function SkillNode({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        animate={isHovered ? { scale: 1.1, y: -4 } : { scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl cursor-pointer transition-all duration-300 glass hover:bg-white/10"
        style={{
          boxShadow: isHovered ? `0 0 20px ${skill.color}30, 0 0 60px ${skill.color}15` : 'none',
          borderColor: isHovered ? `${skill.color}40` : undefined,
        }}
      >
        <skill.icon
          size={32}
          style={{ color: isHovered ? skill.color : undefined }}
          className="transition-colors duration-300 text-slate-400"
        />
        <span className="mt-2 text-xs font-medium text-center leading-tight px-1 text-slate-400">
          {skill.name}
        </span>
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-4 rounded-xl text-sm pointer-events-none bg-surface-800 border border-glass-border shadow-xl"
          >
            <div className="flex items-center gap-2 mb-2">
              <skill.icon size={16} style={{ color: skill.color }} />
              <span className="font-semibold text-white">
                {skill.name}
              </span>
              <span className={cn('ml-auto text-xs font-medium capitalize', proficiencyColors[skill.proficiency])}>
                {skill.proficiency}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {skill.description}
            </p>
            {skill.years > 0 && (
              <p className="mt-2 text-xs text-slate-500">
                {skill.years}+ years experience
              </p>
            )}
            {/* Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 rotate-45 bg-surface-800 border-r border-b border-glass-border" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SkillGroup({ label, skills }: { label: string; skills: Skill[] }) {
  return (
    <div className="mb-8">
      {label && (
        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-center text-slate-500">
          {label}
        </h4>
      )}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
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

  // Group technical skills by subcategory
  const groupedTechnical = activeTab === 'technical'
    ? technicalSkills.reduce<Record<string, Skill[]>>((acc, skill) => {
        const key = skill.subcategory || 'Other';
        if (!acc[key]) acc[key] = [];
        acc[key].push(skill);
        return acc;
      }, {})
    : null;

  return (
    <Container id="skills">
      <SectionHeading
        title="Skills & Expertise"
        subtitle="Technologies, languages, and skills I've mastered over 5+ years of professional development"
      />

      {/* Tab buttons */}
      <AnimatedWrapper>
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl p-1.5 gap-1 glass">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'relative px-3 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium rounded-xl transition-all duration-300',
                  activeTab === tab.key
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500 rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </AnimatedWrapper>

      {/* Skill nodes */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
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

      {/* Legend */}
      <AnimatedWrapper delay={0.4}>
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs">
          {Object.entries(proficiencyColors).map(([level, color]) => (
            <span key={level} className="flex items-center gap-1.5">
              <span className={cn('w-2 h-2 rounded-full', color.replace('text-', 'bg-'))} />
              <span className="capitalize text-slate-500">
                {level}
              </span>
            </span>
          ))}
        </div>
      </AnimatedWrapper>
    </Container>
  );
}
