import React from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface CollaboratingSectionProps {
  locale: Locale;
}

export const CollaboratingSection: React.FC<CollaboratingSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].collaborating;

  return (
    <section
      aria-label="Collaborating to Define Your Project's Structural Goals"
      className="w-full overflow-hidden bg-[#111111] py-[54px]"
    >
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col gap-y-8 py-[27px] lg:flex-row lg:items-start lg:justify-between">
        {/* Left Specialty Column (et_pb_column_11): Inner Row 200% width shifted -100% left */}
        <div className="w-full lg:w-[47.25%]">
          <div className="flex w-full lg:ml-[-100%] lg:w-[200%]">
            <div className="w-1/4 bg-[#DB6526] lg:w-1/2" />
            <div className="w-3/4 lg:w-1/2">
              <img
                src={c.photo}
                alt="Rebar structural reinforcement specialist"
                width={768}
                height={1024}
                loading="lazy"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column (et_pb_column_12) */}
        <div className="w-full lg:w-[47.25%]">
          <h2 className="font-baskerville mb-[27px] pb-[10px] text-[20px] leading-[1.3em] font-bold text-white sm:text-[32px] lg:text-[40px]">
            {c.heading}
          </h2>
          <p className="font-opensans mb-[27px] text-[14px] leading-[1.8em] font-medium text-white sm:text-[15px] lg:text-[16px]">
            {c.body}
          </p>
          <div>
            <a
              href={c.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-baskerville inline-block border-2 border-[#948669] bg-transparent px-[24px] py-[16px] text-[14px] font-bold text-[#948669] uppercase transition-colors duration-200 hover:bg-[#948669] hover:text-[#111111]"
            >
              {c.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
