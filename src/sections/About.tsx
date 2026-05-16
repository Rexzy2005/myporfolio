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
    <div className="bg-midnight-slate">
      <Container id="about">
        <SectionHeading
          tag="About"
          title="The developer behind the code"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">
          {/* Left — bio */}
          <AnimatedWrapper direction="left">
            <p
              className="text-[clamp(18px,2.2vw,21px)] font-[300] leading-[1.65] text-starlight/90"
              style={{ letterSpacing: '0.01em' }}
            >
              {personalInfo.bio}
            </p>
            <p className="mt-6 text-[16px] font-[400] leading-[1.75] text-lead tracking-[0.16px]">
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

          {/* Right — quick facts */}
          <AnimatedWrapper direction="right">
            <div className="border-t border-lead/30">
              {facts.map(({ label, value }) => (
                <motion.div
                  key={label}
                  className="flex items-center justify-between py-5 border-b border-lead/30"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <span className="text-[11px] font-[400] text-lead tracking-[0.22px] uppercase">
                    {label}
                  </span>
                  <span className="text-[15px] font-[400] text-starlight tracking-[0.16px] text-right">
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
