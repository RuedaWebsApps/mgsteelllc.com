import React from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface HeroSectionProps {
  locale: Locale;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].hero;

  return (
    <section
      aria-label="Hero Banner"
      className="mg-hero-bg relative w-full pt-[calc(80px+54px)] pb-0"
    >
      {/* Row 0 (et_pb_row_0): Top-right orange geometric block */}
      <div className="pointer-events-none absolute top-[80px] right-0 w-[80%] max-w-[1080px] py-0">
        <div className="ml-auto w-[24%]">
          <img
            src={c.topRightAccent}
            alt=""
            aria-hidden="true"
            width={720}
            height={720}
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Row 1 (et_pb_row_1): H1 MG STEEL LLC */}
      <div className="relative z-10 mx-auto w-[80%] max-w-[1080px] pt-[27px] pb-0">
        <h1 className="font-baskerville max-w-[700px] pb-[10px] text-[24px] leading-[1.4em] font-bold text-white sm:text-[40px] lg:text-[60px]">
          {c.title}
        </h1>
      </div>

      {/* Row 2 (et_pb_row_2): 1/2 Tan Info Box + protruding bottom-left white square */}
      <div className="relative z-10 mx-auto flex w-[80%] max-w-[1080px] flex-col py-0 lg:flex-row">
        <div className="relative w-full lg:w-1/2">
          <div className="font-opensans bg-[#948669] p-[20px] text-[14px] leading-[1.8em] font-medium text-black sm:p-[30px] lg:p-[40px] lg:text-[16px]">
            <p>{c.boxCopy}</p>
          </div>
          <img
            src={c.bottomLeftAccent}
            alt=""
            aria-hidden="true"
            width={160}
            height={160}
            className="pointer-events-none absolute bottom-0 left-0 hidden h-auto w-[16%] -translate-x-full translate-y-full sm:block"
          />
        </div>
        <div className="hidden lg:block lg:w-1/2" />
      </div>

      {/* Row 3 (et_pb_row_3): Right-aligned white pill CTA button under the tan box */}
      <div className="relative z-10 mx-auto flex w-[80%] max-w-[1080px] flex-col py-0 lg:flex-row">
        <div className="mt-[19px] flex w-full justify-end lg:w-1/2">
          <a
            href={c.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-baskerville inline-block rounded-[65px] bg-white px-[24px] py-[16px] text-[14px] font-bold text-[#111111] uppercase transition-transform duration-200 hover:scale-[1.03]"
          >
            {c.ctaText}
          </a>
        </div>
        <div className="hidden lg:block lg:w-1/2" />
      </div>
    </section>
  );
};
