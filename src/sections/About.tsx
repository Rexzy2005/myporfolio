import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowRight, FiArrowUp } from 'react-icons/fi';
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
  const [isExpanded, setIsExpanded] = useState(false);

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
            <p className="max-w-[650px] text-[15px] font-[400] leading-[1.85] text-lead tracking-[0.16px]">
              I'm Pererat Timothy, also known as Rexzy, a Software Engineer driven by building meaningful products and engineering systems that solve real-world problems. I'm the Founder of FYB Studio, a design platform for final-year students. I'm also the Co-founder, COO &amp; CTO of GeoPonix, where I work as a Hardware Engineer and Mobile Developer building precision-agriculture and agro-intelligence solutions, and the CTO of Kenule Africa, where we're building technology-driven products and empowering young people with practical tech skills.
            </p>
            {isExpanded && (
              <div className="mt-7 max-w-[650px] space-y-7 text-[15px] font-[400] leading-[1.85] text-lead tracking-[0.16px]">
                <p>
                  Beyond my roles, I've worked across web, mobile, SaaS, blockchain, and cloud infrastructure, building solutions that turn complex ideas into practical, scalable products.
                </p>
                <p>
                  I'm a builder at heart. I believe in continuous growth, constant learning, and challenging myself to explore the unfamiliar. I enjoy taking ideas worth building and turning them into real, working products.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsExpanded((expanded) => !expanded)}
              aria-expanded={isExpanded}
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-[400] text-lead hover:text-starlight transition-colors"
            >
              {isExpanded ? 'Read less' : 'Read more'}
              {isExpanded ? <FiArrowUp size={13} /> : <FiArrowDown size={13} />}
            </button>

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
