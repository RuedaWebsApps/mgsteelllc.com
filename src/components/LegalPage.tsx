import { getLegalDoc, legalPath, legalLabel, LEGAL_KINDS, type LegalKind, type Locale } from '../legal/legalDocs';
import { LEGAL_BIZ } from '../legal/legalConfig';

interface LegalPageProps {
  kind: LegalKind;
  locale: Locale;
}

export function LegalPage({ kind, locale }: LegalPageProps) {
  const doc = getLegalDoc(kind, locale, LEGAL_BIZ);
  const isEs = locale === 'es';

  return (
    <div className="bg-white py-12 text-[#111111] sm:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4">
          <a
            href={isEs ? '/es' : '/'}
            className="font-baskerville text-xs font-bold uppercase tracking-wider text-[#948669] hover:underline"
          >
            ← {isEs ? 'Volver a MG STEEL, LLC' : 'Back to MG STEEL, LLC'}
          </a>
          <a
            href={isEs ? legalPath(kind, 'en') : legalPath(kind, 'es')}
            className="font-opensans rounded border border-[#948669] px-2.5 py-1 text-xs font-semibold text-[#948669] hover:bg-[#948669] hover:text-white"
          >
            {isEs ? 'EN' : 'ES'}
          </a>
        </div>

        <nav aria-label={isEs ? 'Documentos legales' : 'Legal documents'} className="mb-8 flex flex-wrap gap-2">
          {LEGAL_KINDS.map((k) => (
            <a
              key={k}
              href={legalPath(k, locale)}
              aria-current={k === kind ? 'page' : undefined}
              className={`font-opensans rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors sm:text-sm ${
                k === kind
                  ? 'border-[#111111] bg-[#111111] text-white'
                  : 'border-[#948669]/50 bg-transparent text-[#111111] hover:border-[#948669] hover:text-[#948669]'
              }`}
            >
              {legalLabel(k, locale)}
            </a>
          ))}
        </nav>

        <h1 className="font-baskerville text-3xl font-bold text-[#111111] sm:text-4xl">{doc.title}</h1>
        <p className="font-opensans mt-2 text-sm text-[#666666]">
          {doc.updatedLabel}: {doc.updated} • 102 Arena Caliente Rd, Elgin, TX 78621
        </p>

        <div className="font-opensans mt-8 space-y-4 text-[15px] leading-relaxed text-[#333333]">
          {doc.sections.map((s, i) => (
            <section key={i} className={s.h ? 'pt-4' : ''}>
              {s.h && <h2 className="font-baskerville mb-2 text-xl font-bold text-[#948669]">{s.h}</h2>}
              {s.p?.map((para, j) => (
                <p key={j} className="mb-3">
                  {para}
                </p>
              ))}
              {s.ul && (
                <ul className="mb-3 list-disc space-y-1.5 pl-6">
                  {s.ul.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
