import { FiMapPin, FiBriefcase, FiCode, FiUsers } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { personalInfo } from '@/data/constants';
import { cn } from '@/utils/cn';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  {
    icon: FiBriefcase,
    value: personalInfo.yearsOfExperience,
    label: 'Years Experience',
    suffix: '+',
  },
  {
    icon: FiCode,
    value: personalInfo.projectsDelivered,
    label: 'Projects Delivered',
    suffix: '+',
  },
  {
    icon: FiUsers,
    value: personalInfo.happyClients,
    label: 'Happy Clients',
    suffix: '+',
  },
];

export default function About() {
  return (
    <Container id="about">
      <SectionHeading
        title="About Me"
        subtitle="Get to know the developer behind the code"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left — Profile image */}
        <AnimatedWrapper direction="left">
          <div className="relative mx-auto lg:mx-0 w-72 sm:w-80 aspect-[3/4]">
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-500 to-neon opacity-10 blur-xl" />
            {/* Image frame */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-brand-500/20 bg-surface-800">
              <img
                src="/dev-rex.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg text-sm font-medium glass text-neon border-neon/20">
              <FiMapPin className="inline mr-1" />
              {personalInfo.location}
            </div>
          </div>
        </AnimatedWrapper>

        {/* Right — Bio & Stats */}
        <div>
          <AnimatedWrapper direction="right">
            <h3 className="text-2xl font-bold mb-4 text-white">
              I&apos;m {personalInfo.name}, a{' '}
              <span className="text-gradient">{personalInfo.title}</span>
            </h3>
            <p className="text-lg leading-relaxed mb-4 text-slate-400">
              {personalInfo.bio}
            </p>
            <p className="text-base leading-relaxed text-slate-500">
              {personalInfo.longBio}
            </p>
          </AnimatedWrapper>

          {/* Stats */}
          <AnimatedWrapper direction="up" delay={0.3}>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map(({ icon: Icon, value, label, suffix }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-2xl transition-all glass hover:bg-white/5"
                >
                  <Icon className="mx-auto mb-2 text-neon" size={24} />
                  <div className="text-3xl font-bold text-white">
                    <CountUp target={value} />
                    {suffix}
                  </div>
                  <p className="text-xs mt-1 text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </Container>
  );
}
