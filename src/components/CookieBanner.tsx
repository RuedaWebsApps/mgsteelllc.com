import { useState, useEffect } from 'react';
import { legalPath, type Locale } from '../legal/legalDocs';

interface CookieBannerProps {
  locale: Locale;
}

const STORAGE_KEY = 'mgsteel_cookie_notice_v1';

export function CookieBanner({ locale }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const isEs = locale === 'es';

  useEffect(() => {
    try {
      const accepted = window.localStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        setVisible(true);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const handleChoice = (choice: string) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label={isEs ? 'Aviso de cookies y privacidad' : 'Cookie and privacy notice'}
      className="fixed bottom-4 left-4 right-4 z-40 mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 rounded-xl border border-[#948669]/50 bg-[#111111]/95 p-4 text-white shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:px-6 sm:py-4"
    >
      <p className="font-opensans text-xs leading-relaxed text-white/85 sm:text-sm">
        {isEs ? (
          <>
            Usamos almacenamiento técnico esencial para el funcionamiento del sitio y respetamos tu privacidad (sin cookies publicitarias). Consulta nuestra{' '}
            <a href={legalPath('cookies', locale)} className="font-semibold text-[#948669] underline hover:text-white">
              Política de Cookies
            </a>{' '}
            y{' '}
            <a href={legalPath('privacy', locale)} className="font-semibold text-[#948669] underline hover:text-white">
              Política de Privacidad
            </a>
            .
          </>
        ) : (
          <>
            We use essential technical storage to operate this site and respect your privacy (no ad tracking cookies). Read our{' '}
            <a href={legalPath('cookies', locale)} className="font-semibold text-[#948669] underline hover:text-white">
              Cookie Policy
            </a>{' '}
            and{' '}
            <a href={legalPath('privacy', locale)} className="font-semibold text-[#948669] underline hover:text-white">
              Privacy Policy
            </a>
            .
          </>
        )}
      </p>
      <div className="flex shrink-0 items-center gap-2 self-end sm:self-center">
        <button
          type="button"
          onClick={() => handleChoice('accepted')}
          className="font-baskerville cursor-pointer rounded-full bg-[#948669] px-5 py-2 text-xs font-bold uppercase text-[#111111] transition-colors hover:bg-white sm:text-sm"
        >
          {isEs ? 'Aceptar' : 'Got It'}
        </button>
      </div>
    </aside>
  );
}
