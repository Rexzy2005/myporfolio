import { motion } from 'framer-motion';
import { FaDiscord, FaEnvelope, FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedWrapper from '@/components/ui/AnimatedWrapper';
import { socialLinks } from '@/data/constants';

const socialItems = [
  {
    icon: FaWhatsapp,
    href: `https://wa.me/2348133153568?text=${encodeURIComponent('Hi Pererat, I would like to discuss a project opportunity.')}`,
    message: 'Discuss a project',
  },
  {
    icon: FaLinkedinIn,
    href: `https://www.linkedin.com/in/pererat-timothy-b33a51375/?text=${encodeURIComponent('Hi Pererat, I would love to connect and discuss an opportunity.')}`,
    message: 'Connect professionally',
  },
  {
    icon: FaXTwitter,
    href: `https://x.com/compose/post?text=${encodeURIComponent('Hi Pererat, I would love to connect and discuss an opportunity.')}`,
    message: 'Send a quick message',
  },
  {
    icon: FaDiscord,
    href: `https://discord.com/users/dev_rex?text=${encodeURIComponent('Hi Pererat, I would love to connect and discuss an opportunity.')}`,
    message: 'Chat in real time',
  },
  {
    icon: FaEnvelope,
    href: `mailto:${socialLinks.email}?subject=${encodeURIComponent('Project Inquiry')}&body=${encodeURIComponent('Hi Pererat, I would like to discuss a project opportunity.')}`,
    message: 'Send a formal email',
  },
];

export default function Contact() {
  return (
    <div className="bg-black">
      <Container id="contact">
        <SectionHeading
          tag="Contact"
          title="Let’s connect"
          subtitle="Open to collaboration, product work, and new opportunities. Reach out on any of the channels below."
        />

        <div className="mx-auto max-w-5xl">
          <AnimatedWrapper direction="up">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 place-items-center justify-items-center">
              {socialItems.map(({ icon: Icon, href, message }) => (
                <motion.a
                  key={message}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full max-w-[260px] flex-col items-center justify-center gap-4 rounded-2xl border border-lead/15 bg-white/[0.02] px-5 py-7 text-center transition-colors duration-200 hover:border-mercury-blue/40 hover:bg-mercury-blue/5"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.03] text-starlight transition-colors group-hover:bg-mercury-blue/10 group-hover:text-pure-white">
                    <Icon size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.24px] text-lead/55">{message}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[12px] font-[400] text-mercury-blue">
                    Open <FiArrowRight size={12} />
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatedWrapper>
        </div>
      </Container>
    </div>
  );
}
