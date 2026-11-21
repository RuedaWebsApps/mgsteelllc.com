import React from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface ExperienceBridgeSectionProps {
  locale: Locale;
}

export const ExperienceBridgeSection: React.FC<ExperienceBridgeSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].experienceBridge;

  return (
    <section
      aria-label="Experience That Upholds Grand Projects"
      className="mg-bridge-bg relative w-full pt-0 pb-[54px]"
    >
      {/* Row 5 (et_pb_row_5): Top-left geometric stepped squares */}
      <div className="pointer-events-none absolute top-0 left-0 w-[30%] py-0">
        <img
          src={c.topLeftAccent}
          alt=""
          aria-hidden="true"
          width={800}
          height={480}
          loading="lazy"
          className="mt-[-20%] block h-auto w-full object-contain"
        />
      </div>

      {/* Row 6 (et_pb_row_6): 1/2 empty + 1/2 #e3e3e3 gray card */}
      <div className="relative z-10 mx-auto flex w-[80%] max-w-[1080px] flex-col pt-0 pb-[27px] lg:flex-row lg:justify-between">
        <div className="hidden lg:block lg:w-[47.25%]" />
        <div className="w-full bg-[#e3e3e3] px-[20px] py-[45px] sm:px-[30px] sm:py-[90px] lg:w-[47.25%] lg:px-[40px] lg:py-[180px]">
          <h2 className="font-baskerville pb-[10px] text-[20px] leading-[1.3em] font-bold text-[#333333] sm:text-[32px] lg:text-[40px]">
            {c.heading}
          </h2>
        </div>
      </div>
    </section>
  );
};
