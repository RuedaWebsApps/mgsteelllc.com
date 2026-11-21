import React, { useRef, useState } from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface SpecialistVideoSectionProps {
  locale: Locale;
}

export const SpecialistVideoSection: React.FC<SpecialistVideoSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].specialistVideo;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section
      aria-label="A Leading Structural Reinforcement Specialist"
      className="w-full bg-[#111111] py-[54px]"
    >
      {/* Row 7 (et_pb_row_7): margin-left auto, margin-right 0, width 80% */}
      <div className="mr-0 ml-auto w-[90%] pt-[27px] pb-0 lg:w-[80%]">
        <h2 className="font-baskerville max-w-[800px] pb-[10px] text-[20px] leading-[1.3em] font-bold text-white sm:text-[32px] lg:text-[40px]">
          {c.heading}
        </h2>
      </div>

      {/* Row 8 (et_pb_row_8): 1/4 | 1/4 | 1/2 */}
      <div className="mr-0 ml-auto flex w-[90%] flex-col gap-8 py-[27px] lg:w-[80%] lg:flex-row lg:items-start">
        <div className="w-full lg:w-[22%]">
          <p className="font-opensans text-[14px] leading-[1.8em] font-medium text-white">
            {c.col1Copy}
          </p>
        </div>

        <div className="w-full lg:w-[22%]">
          <p className="font-opensans text-[14px] leading-[1.8em] font-medium text-white">
            {c.col2Copy}
          </p>
        </div>

        <div className="w-full lg:w-[50%]">
          <div className="relative w-[75%] overflow-hidden bg-black sm:w-[56%] lg:mb-[-10vw]">
            <video
              ref={videoRef}
              src={c.videoSrc}
              poster={c.videoPoster}
              controls={playing}
              playsInline
              preload="metadata"
              className="block h-auto w-full object-cover"
              onPlay={() => setPlaying(true)}
            />

            {!playing && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play MG Steel structural reinforcement video"
                className="group absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 transition-colors duration-300 hover:bg-black/60"
              >
                <span className="flex h-[84px] w-[84px] items-center justify-center rounded-full border-[5px] border-white text-white transition-transform duration-200 group-hover:scale-105">
                  <svg className="ml-1.5 h-9 w-9 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
