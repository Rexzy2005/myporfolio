import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { personalInfo, socialLinks } from '@/data/constants';

const facts = [
  { label: 'Role', value: personalInfo.title },
  { label: 'Speciality', value: personalInfo.subtitle },
  { label: 'Location', value: personalInfo.location },
  { label: 'Status', value: personalInfo.availability },
];

export default function About() {
  return (
    <div className="bg-black">
      <Container id="about">
        <SectionHeading
          tag="About"
          title="The developer behind the code"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">
          {/* Bio */}
          <AnimatedWrapper direction="left">
            <p
              className="max-w-[680px] text-[clamp(19px,2.35vw,24px)] font-[350] leading-[1.55] text-starlight/90"
              style={{ letterSpacing: '0' }}
            >
              {personalInfo.bio}
            </p>
            <p className="mt-7 max-w-[650px] text-[15px] font-[400] leading-[1.85] text-lead tracking-[0.16px]">
              {personalInfo.longBio}
            </p>

            <div className="mt-10">
              <a
                href={`mailto:${socialLinks.email}`}
                className="inline-flex items-center gap-2 text-[14px] font-[400] text-lead hover:text-starlight transition-colors tracking-[0.28px]"
              >
                {socialLinks.email}
                <FiArrowRight size={13} />
              </a>
            </div>
          </AnimatedWrapper>

          {/* Quick facts */}
          <AnimatedWrapper direction="right">
            <div className="border-t border-lead/30">
              {facts.map(({ label, value }) => (
                <motion.div
                  key={label}
                  className="depth-surface flex items-center justify-between py-5 border-b border-lead/30"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <span className="font-mono text-[10px] font-[500] text-lead/70 tracking-[0.12em] uppercase">
                    {label}
                  </span>
                  <span className="max-w-[260px] text-[14px] font-[450] leading-[1.35] text-starlight tracking-[0.04em] text-right">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedWrapper>
        </div>
      </Container>
    </div>
  );
}
