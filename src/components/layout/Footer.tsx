import SocialLinks from '@/components/ui/SocialLinks';
import { nav, profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-[0.9375rem] tracking-tight text-fg">
              rexzy<span className="text-accent-soft">.dev</span>
            </p>
            <p className="mt-2 max-w-xs text-small text-fg-muted">
              {profile.name}. {profile.title}.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-small">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-fg-muted transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-small text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {profile.name}. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <a href="#home" className="text-fg-muted transition-colors hover:text-fg">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
