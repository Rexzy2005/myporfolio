import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { socialLinks, navLinks } from '@/data/constants';

const socialIcons = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: socialLinks.twitter, label: 'Twitter' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) =>
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-deep-space border-t border-lead/15">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-10 border-b border-lead/15">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="text-[17px] font-[480] text-starlight hover:text-pure-white transition-colors tracking-[0.01em]"
          >
            DevRex
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-[13px] font-[400] text-lead hover:text-starlight transition-colors tracking-[0.26px]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lead/50 hover:text-starlight transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] font-[400] text-lead/40 tracking-[0.24px]">
            &copy; {currentYear} DevRex. All rights reserved.
          </p>
          <p className="text-[12px] font-[400] text-lead/30 tracking-[0.24px]">
            Built by Pererat Timothy
          </p>
        </div>
      </div>
    </footer>
  );
}
