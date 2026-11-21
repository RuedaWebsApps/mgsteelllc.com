import React, { useEffect, useState } from 'react';
import { SITE_CONTENT, SITE_INFO, type Locale } from '../content/siteData';

interface NavbarProps {
  locale: Locale;
}

export const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'h-[54px] bg-[#0a0a0a] shadow-[0_0_7px_rgba(0,0,0,0.3)]'
          : 'h-[80px] bg-[#111111]'
      }`}
    >
      <div className="mx-auto flex h-full w-[80%] max-w-[1080px] items-center justify-between">
        <a
          href={locale === 'es' ? '/es' : '/'}
          className="flex h-full items-center py-1 focus:outline-none"
          aria-label={SITE_INFO.name}
        >
          <img
            src={SITE_INFO.logo}
            alt={SITE_INFO.name}
            width={80}
            height={80}
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'max-h-[48px]' : 'max-h-[68px]'
            }`}
          />
        </a>

        <nav aria-label="Primary Navigation" className="flex items-center gap-5">
          <a
            href={locale === 'es' ? '/es' : '/'}
            className="font-opensans text-[14px] font-semibold text-[#ba9923] transition-opacity hover:opacity-80"
          >
            {c.nav.home}
          </a>
          <a
            href={c.nav.langSwitchHref}
            className="font-opensans rounded border border-[#948669]/45 px-2 py-0.5 text-[11px] font-semibold text-[#948669] transition-colors hover:bg-[#948669] hover:text-[#111111]"
            aria-label={`Switch language to ${c.nav.langSwitchLabel}`}
          >
            {c.nav.langSwitchLabel}
          </a>
        </nav>
      </div>
    </header>
  );
};
