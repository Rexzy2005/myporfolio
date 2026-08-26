import { motion } from 'framer-motion';
import { useEffect, useRef, type PointerEvent } from 'react';
import { FaDiscord, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { personalInfo, socialLinks } from '@/data/constants';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' } as const,
});

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  useEffect(() => () => {
    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current);
    }
  }, []);

  const animateLogo = () => {
    const current = currentPosition.current;
    const target = targetPosition.current;
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;

    backgroundRef.current?.style.setProperty(
      'background-position',
      `calc(50% + ${current.x}px) calc(50% + ${current.y}px)`,
    );

    if (Math.abs(target.x - current.x) > 0.05 || Math.abs(target.y - current.y) > 0.05) {
      animationFrame.current = requestAnimationFrame(animateLogo);
    } else {
      animationFrame.current = null;
    }
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

    targetPosition.current = { x: offsetX * 18, y: offsetY * 14 };
    if (animationFrame.current === null) {
      animationFrame.current = requestAnimationFrame(animateLogo);
    }
  };

  const resetLogoPosition = () => {
    targetPosition.current = { x: 0, y: 0 };
    if (animationFrame.current === null) {
      animationFrame.current = requestAnimationFrame(animateLogo);
    }
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-black overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetLogoPosition}
    >
      {/* Atmospheric violet bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(82,102,235,0.14) 0%, transparent 65%)',
        }}
      />

      {/* Secondary logo background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)), url('/dev-rex.jpg')",
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'min(125vw, 1400px) min(125vw, 1400px)',
          backgroundAttachment: 'fixed',
          filter: 'saturate(0.9) brightness(0.85)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 58% 66% at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.68) 54%, rgba(0,0,0,0.94) 78%, #000000 100%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 w-full py-32 flex flex-col items-center text-center">

          {/* <motion.div
            {...fadeUp(0)}
            className="mb-8 h-[124px] w-[124px] overflow-hidden border border-lead/25 bg-graphite/40 shadow-[0_24px_80px_rgba(82,102,235,0.18)]"
            style={{ borderRadius: '8px' }}
          >
            <img
              src="/dev-rex.jpg"
              alt={personalInfo.name}
              className="h-full w-full object-cover"
            />
          </motion.div> */}

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
          >
            {personalInfo.title}
            <span className="mx-3 text-lead/30">|</span>
            {personalInfo.subtitle}
          </motion.p>

          <motion.p
            {...fadeUp(0.18)}
            className="mt-4 text-[12px] font-[400] text-lead/55 uppercase tracking-[0.22px]"
          >
            React | TypeScript | Next.js | Product Engineering
          </motion.p>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.23)}
            className="mt-7 text-[16px] font-[400] leading-[1.75] text-lead/80 max-w-[560px] tracking-[0.16px]"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-3.5 bg-mercury-blue text-pure-white text-[15px] font-[480] tracking-[0.1px] hover:bg-[#4456d6] active:bg-[#3a49c4] transition-colors duration-150"
              style={{ borderRadius: '32px' }}
            >
              View My Work
            </button>
            <a
              href="/Pererat-Timothy-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-lead/25 text-starlight text-[15px] font-[480] hover:border-lead/50 transition-colors"
              style={{ borderRadius: '32px' }}
            >
              <FiDownload size={15} />
              Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 text-[15px] font-[400] text-lead hover:text-starlight transition-colors tracking-[0.28px]"
            >
              Let's Talk <FiArrowRight size={14} />
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            {...fadeUp(0.38)}
            className="mt-10 flex items-center justify-center gap-4 sm:gap-5"
          >
            {[
              { label: 'GitHub', href: socialLinks.github, Icon: FaGithub },
              { label: 'LinkedIn', href: socialLinks.linkedin, Icon: FaLinkedinIn },
              { label: 'X', href: socialLinks.twitter, Icon: FaXTwitter },
              { label: 'Discord', href: socialLinks.discord, Icon: FaDiscord },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/3 text-lead/80 transition-all duration-200 hover:bg-mercury-blue/10 hover:text-starlight"
              >
                <Icon size={18} />
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
