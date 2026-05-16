import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '@/data/constants';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' } as const,
});

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-deep-space overflow-hidden"
    >
      {/* Atmospheric violet bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(82,102,235,0.14) 0%, transparent 65%)',
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-32 flex flex-col items-center text-center">

          {/* Availability badge */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 mb-12 px-4 py-2 border border-lead/30 bg-graphite/30">
            <span className="w-1.5 h-1.5 rounded-full bg-mercury-blue" />
            <span className="text-[11px] text-lead tracking-[0.22px] uppercase font-[400]">
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.08)}
            className="text-[clamp(40px,7vw,68px)] leading-[1.1] text-starlight"
            style={{ fontWeight: 360, letterSpacing: '0.5px' }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            {...fadeUp(0.14)}
            className="mt-5 text-[clamp(15px,2vw,19px)] text-lead font-[400]"
            style={{ letterSpacing: '0.02em' }}
          >
            {personalInfo.title}
            <span className="mx-3 text-lead/30">·</span>
            {personalInfo.subtitle}
          </motion.p>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.21)}
            className="mt-7 text-[16px] font-[400] leading-[1.75] text-lead/80 max-w-[480px] tracking-[0.16px]"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.28)} className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-3.5 bg-mercury-blue text-pure-white text-[15px] font-[480] tracking-[0.1px] hover:bg-[#4456d6] active:bg-[#3a49c4] transition-colors duration-150"
              style={{ borderRadius: '32px' }}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 text-[15px] font-[400] text-lead hover:text-starlight transition-colors tracking-[0.28px]"
            >
              Let's Talk <FiArrowRight size={14} />
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            {...fadeUp(0.36)}
            className="mt-10 flex items-center gap-8"
          >
            {[
              { label: 'GitHub', href: 'https://github.com/Rexzy2005' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pererat-timothy-b33a51375' },
              { label: 'Email', href: 'mailto:timothypererat2004@gmail.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-[13px] font-[400] text-lead/50 hover:text-starlight transition-colors tracking-[0.28px]"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 border-t border-lead/20"
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-lead/20">
            {[
              { value: `${personalInfo.yearsOfExperience}+`, label: 'Years Experience' },
              { value: `${personalInfo.projectsDelivered}+`, label: 'Projects Delivered' },
              { value: `${personalInfo.happyClients}+`, label: 'Happy Clients' },
            ].map(({ value, label }) => (
              <div key={label} className="py-8 px-4 sm:px-10 text-center">
                <p
                  className="text-[30px] leading-none text-starlight"
                  style={{ fontWeight: 360, letterSpacing: '0.01em' }}
                >
                  {value}
                </p>
                <p className="mt-2 text-[11px] font-[400] text-lead/60 tracking-[0.22px] uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
