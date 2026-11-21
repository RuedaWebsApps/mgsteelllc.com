import React from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface TrustedLeaderSectionProps {
  locale: Locale;
}

export const TrustedLeaderSection: React.FC<TrustedLeaderSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].trustedLeader;

  return (
    <section
      aria-label="A Trusted Leader in Structural Reinforcement"
      className="w-full overflow-hidden bg-[#111111] pt-[8vw] pb-[100px]"
    >
      {/* Row 9 (et_pb_row_9): 2/3 | 1/3 */}
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col gap-8 pt-0 pb-[27px] lg:flex-row lg:items-start lg:justify-between">
        {/* Left 2/3 Column (et_pb_column_17): background photo + geometric overlay */}
        <div
          className="relative min-h-[260px] w-full bg-contain bg-center bg-no-repeat lg:min-h-[320px] lg:w-[64.833%]"
          style={{ backgroundImage: `url('${c.leftPhoto}')` }}
        >
          <img
            src={c.leftGeometricAccent}
            alt=""
            aria-hidden="true"
            width={720}
            height={480}
            loading="lazy"
            className="mt-[-24%] block h-auto w-[54%] object-contain"
          />
        </div>

        {/* Right 1/3 Column (et_pb_column_18): photo bleeding -30vw right */}
        <div className="w-full lg:w-[29.666%]">
          <div className="lg:mr-[-30vw]">
            <img
              src={c.rightPhoto}
              alt="MG Steel field crew"
              width={600}
              height={450}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Row 10 (et_pb_row_10): 1/2 | 1/4 | 1/4 */}
      <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col gap-8 py-[27px] lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full lg:w-[47.25%]">
          <h2 className="font-baskerville pb-[10px] text-[20px] leading-[1.3em] font-bold text-white sm:text-[32px] lg:text-[40px]">
            {c.heading}
          </h2>
        </div>

        <div className="w-full lg:w-[20.875%]">
          <p className="font-opensans text-[14px] leading-[1.8em] font-medium text-white">
            {c.col2Copy}
          </p>
        </div>

        <div className="w-full lg:w-[20.875%]">
          <p className="font-opensans text-[14px] leading-[1.8em] font-medium text-white">
            {c.col3Copy}
          </p>
        </div>
      </div>
    </section>
  );
};
