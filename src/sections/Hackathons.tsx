import { FiAward, FiArrowUpRight } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { hackathons } from '@/data/hackathons';

export default function Hackathons() {
  return (
    <div className="bg-black">
      <Container id="hackathons">
        <SectionHeading
          tag="Hackathons"
          title="Competitive product builds"
          subtitle="Hackathons where I shipped real products under time pressure, contributed to product direction, and helped teams place."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {hackathons.map((hackathon, index) => (
            <AnimatedWrapper key={hackathon.id} delay={index * 0.08}>
              <article className="h-full border border-lead/20 bg-midnight-slate/70 overflow-hidden">
                <div className="aspect-[16/10] bg-graphite/30 border-b border-lead/15 overflow-hidden">
                  <img
                    src={hackathon.image}
                    alt={`${hackathon.product} hackathon product`}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-mercury-blue/15 text-ghost-blue border border-mercury-blue/30 text-[11px] font-[480] uppercase tracking-[0.22px]">
                      <FiAward size={13} />
                      {hackathon.placement}
                    </span>
                    <span className="text-[11px] text-lead/60 uppercase tracking-[0.22px]">
                      {hackathon.date}
                    </span>
                  </div>

                  <div className="mb-5">
                    <p className="text-[12px] text-lead/60 uppercase tracking-[0.24px] mb-2">
                      {hackathon.name} by {hackathon.organizer}
                    </p>
                    <h3
                      className="text-[clamp(22px,3vw,30px)] leading-[1.15] text-starlight"
                      style={{ fontWeight: 380, letterSpacing: '0.01em' }}
                    >
                      {hackathon.product}
                    </h3>
                    <p className="mt-3 text-[13px] text-lead/70 tracking-[0.22px]">
                      {hackathon.role}
                    </p>
                  </div>

                  <p className="text-[15px] leading-[1.75] text-lead tracking-[0.16px]">
                    {hackathon.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {hackathon.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-[13px] leading-[1.6] text-lead"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mercury-blue" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {hackathon.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] text-lead border border-lead/20 bg-graphite/25 tracking-[0.18px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <a
                      href={hackathon.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-[480] text-starlight hover:text-pure-white transition-colors"
                    >
                      Open product <FiArrowUpRight size={13} />
                    </a>
                    <a
                      href={hackathon.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-[400] text-lead hover:text-starlight transition-colors"
                    >
                      Event post <FiArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </article>
            </AnimatedWrapper>
          ))}
        </div>
      </Container>
    </div>
  );
}
