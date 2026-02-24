import { FaGithub, FaLinkedinIn, FaXTwitter, FaHeart } from 'react-icons/fa6';
import { socialLinks, navLinks } from '@/data/constants';

const socialIcons = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedinIn, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: socialLinks.twitter, label: 'Twitter' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-glass-border bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="text-2xl font-bold">
              <span className="text-white">Dev</span>
              <span className="text-brand-400">Rex</span>
            </a>
            <p className="mt-2 text-sm text-slate-500">
              Building exceptional digital experiences.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-sm transition-colors text-slate-500 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl transition-all duration-200 text-slate-500 hover:text-neon hover:bg-neon/10"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t text-center text-sm border-glass-border text-slate-600">
          <p className="flex items-center justify-center gap-1">
            &copy; {currentYear} DevRex. Built with <FaHeart className="text-red-500 text-xs" /> by Pererat Timothy
          </p>
        </div>
      </div>
    </footer>
  );
}
