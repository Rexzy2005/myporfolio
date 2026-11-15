import { FiArrowUpRight, FiAward } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { hackathons } from '@/data/hackathons';

function HackathonCard({ hackathon, index }: { hackathon: (typeof hackathons)[number]; index: number }) {
  return (
    <AnimatedWrapper delay={index * 0.06} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden border border-lead/20 bg-midnight-slate/55 transition-colors duration-300 hover:border-lead/40">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-lead/15 bg-graphite/30">
          <img
            src={hackathon.image}
            alt={`${hackathon.name} banner for ${hackathon.product}`}
            className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
              hackathon.imageFit === 'contain' ? 'object-contain p-4 sm:p-5' : 'object-cover object-top'
            }`}
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <p className="text-[11px] uppercase tracking-[0.14em] text-lead/75">
              {hackathon.name} <span className="px-1 text-lead/35">·</span> {hackathon.organizer}
            </p>
            <p className="text-[10px] uppercase tracking-[0.12em] text-lead/55">{hackathon.date}</p>
          </div>

          <h3 className="mt-5 text-[25px] leading-tight text-starlight" style={{ fontWeight: 380, letterSpacing: '0.005em' }}>
            {hackathon.product}
          </h3>

          <div className="mt-4 flex items-center gap-3 border-y border-lead/15 py-3">
            <FiAward className="shrink-0 text-mercury-blue" size={17} />
            <div>
              <p className="text-[9px] uppercase tracking-[0.16em] text-lead/55">Placement</p>
              <p className="mt-0.5 text-[13px] text-starlight">{hackathon.placement}</p>
            </div>
          </div>

          {hackathon.track && <p className="mt-4 text-[12px] text-ghost-blue">{hackathon.track}</p>}

          <p className="mt-4 text-[13px] leading-[1.7] text-lead">{hackathon.summary}</p>

          <div className="mt-auto pt-5">
            <p className="text-[10px] uppercase tracking-[0.14em] text-lead/50">Role</p>
            <p className="mt-1 text-[12px] text-lead/85">{hackathon.role}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-lead/15 pt-4">
              <a
                href={hackathon.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-[480] text-starlight transition-colors hover:text-ghost-blue"
              >
                View project <FiArrowUpRight size={13} />
              </a>
              <a
                href={hackathon.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] text-lead transition-colors hover:text-starlight"
              >
                Event details <FiArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </article>
    </AnimatedWrapper>
  );
}

export default function Hackathons() {
  return (
    <div className="bg-black">
      <Container id="hackathons">
        <SectionHeading
          tag="Hackathons"
          title="Competitive product builds"
          subtitle="Products I built with teams during focused, time-limited challenges."
        />

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {hackathons.map((hackathon, index) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} index={index} />
          ))}
        </div>
      </Container>
    </div>
  );
}
