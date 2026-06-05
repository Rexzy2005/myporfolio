import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { personalInfo, socialLinks } from '@/data/constants';
import { experiences } from '@/data/experience';
import { hackathons } from '@/data/hackathons';

const coreStrengths = [
  'Frontend architecture for production web apps',
  'Full-stack product development with Next.js and TypeScript',
  'Web3 wallet interfaces and transaction approval flows',
  'Product engineering, rapid prototyping, and team collaboration',
  'AI annotation, prompt workflows, and quality review',
];

export default function Resume() {
  const featuredExperience = experiences.slice(0, 3);

  return (
    <div className="bg-black">
      <Container id="resume">
        <SectionHeading
          tag="Resume"
          title="Professional resume"
          subtitle="A structured resume built from the same portfolio content, ready to view online or download as a PDF."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <AnimatedWrapper direction="left">
            <div className="border border-lead/20 bg-deep-space/70 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="h-[92px] w-[92px] object-cover border border-lead/25 bg-graphite/40"
                  style={{ borderRadius: '8px' }}
                />
                <div>
                  <p className="text-[12px] uppercase tracking-[0.24px] text-lead/55 mb-4">
                    Candidate profile
                  </p>
                  <h3
                    className="text-[clamp(25px,4vw,36px)] leading-[1.1] text-starlight"
                    style={{ fontWeight: 360 }}
                  >
                    {personalInfo.name}
                  </h3>
                  <p className="mt-3 text-[15px] text-lead tracking-[0.16px]">
                    {personalInfo.title} focused on frontend, full-stack product development, and Web3 product interfaces.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-[1.75] text-lead tracking-[0.16px]">
                {personalInfo.resumeSummary}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/Pererat-Timothy-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-mercury-blue text-pure-white text-[13px] font-[480] hover:bg-[#4456d6] transition-colors"
                  style={{ borderRadius: '32px' }}
                >
                  <FiDownload size={14} />
                  Download PDF
                </a>
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-lead/25 text-starlight text-[13px] font-[480] hover:border-lead/50 transition-colors"
                  style={{ borderRadius: '32px' }}
                >
                  View Resume
                  <FiArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper direction="right">
            <div className="space-y-8">
              <div>
                <p className="text-[12px] uppercase tracking-[0.24px] text-lead/55 mb-4">
                  Core strengths
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coreStrengths.map((strength) => (
                    <div key={strength} className="border border-lead/20 bg-graphite/25 p-4">
                      <p className="text-[13px] leading-[1.55] text-starlight tracking-[0.16px]">
                        {strength}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-[0.24px] text-lead/55 mb-4">
                  Recent roles
                </p>
                <div className="border-t border-lead/20">
                  {featuredExperience.map((experience) => (
                    <div key={experience.id} className="py-5 border-b border-lead/20">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <p className="text-[16px] text-starlight tracking-[0.16px]">{experience.role}</p>
                        <p className="text-[12px] text-lead/60 tracking-[0.2px]">
                          {experience.startDate} to {experience.endDate}
                        </p>
                      </div>
                      <p className="mt-1 text-[13px] text-lead/70 tracking-[0.16px]">
                        {experience.company} | {experience.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[12px] uppercase tracking-[0.24px] text-lead/55 mb-4">
                  Hackathon proof
                </p>
                <div className="flex flex-wrap gap-3">
                  {hackathons.map((hackathon) => (
                    <a
                      key={hackathon.id}
                      href={hackathon.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-lead/20 bg-graphite/20 px-4 py-3 text-[13px] text-lead hover:text-starlight hover:border-lead/40 transition-colors"
                    >
                      {hackathon.product} | {hackathon.placement}
                      <FiArrowUpRight size={13} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-lead/15">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="inline-flex items-center gap-2 text-[14px] text-lead hover:text-starlight transition-colors"
                >
                  {socialLinks.email}
                  <FiArrowUpRight size={13} />
                </a>
                <a
                  href={`tel:${socialLinks.phone}`}
                  className="mt-3 block text-[14px] text-lead hover:text-starlight transition-colors"
                >
                  WhatsApp: {socialLinks.phone}
                </a>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </Container>
    </div>
  );
}
