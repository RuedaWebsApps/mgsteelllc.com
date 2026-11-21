import React from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface FoundationsSectionProps {
  locale: Locale;
}

export const FoundationsSection: React.FC<FoundationsSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].foundations;

  return (
    <section
      aria-label="Building Projects with Unyielding Foundations"
      className="w-full bg-black pt-[12%] pb-[54px] lg:pt-[90px]"
    >
      {/* Row 4 (et_pb_row_4): 1/2 + 1/2 */}
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col py-[27px] lg:flex-row lg:items-start lg:justify-between">
        {/* Left Column (et_pb_column_6) */}
        <div className="w-full pb-[45px] lg:w-[47.25%] lg:pr-[5%] lg:pb-[90px]">
          <h2 className="font-baskerville mb-[27px] pb-[10px] text-[20px] leading-[1.3em] font-bold text-white sm:text-[32px] lg:text-[40px]">
            {c.heading}
          </h2>
          <p className="font-opensans text-[14px] leading-[1.8em] font-medium text-white sm:text-[15px] lg:text-[16px]">
            {c.body}
          </p>
        </div>

        {/* Right Column (et_pb_column_7): Layered construction photos + geometric accent */}
        <div className="relative w-full lg:w-[47.25%]">
          <div className="w-[75%]">
            <img
              src={c.mainPhoto}
              alt="MG Steel construction crew"
              width={600}
              height={600}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </div>

          <img
            src={c.overlapPhoto}
            alt="Rebar foundation trench"
            width={300}
            height={233}
            loading="lazy"
            className="absolute top-0 left-0 h-auto w-[50%] -translate-x-[20px] translate-y-[95%] shadow-[0_42px_48px_-6px_rgba(0,0,0,0.3)] sm:-translate-x-[40px] sm:translate-y-full"
          />

          <div className="relative z-10 mt-[-25%] ml-auto w-[50%]">
            <img
              src={c.geometricAccent}
              alt=""
              aria-hidden="true"
              width={516}
              height={516}
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
