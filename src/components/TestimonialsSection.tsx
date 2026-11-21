import React, { useEffect, useState } from 'react';
import { SITE_CONTENT, type Locale } from '../content/siteData';

interface TestimonialsSectionProps {
  locale: Locale;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ locale }) => {
  const c = SITE_CONTENT[locale].testimonials;
  const slides = c.slides;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeIndex] || slides[0];

  return (
    <section
      aria-label="Testimonials"
      className="relative w-full bg-white pt-0 pb-[54px]"
    >
      {/* Row 11 (et_pb_row_11): Top-right overlapping blue/white geometric block */}
      <div className="mx-auto w-[80%] max-w-[1080px] py-0">
        <div className="mb-[-10%] ml-auto w-[30%] -translate-y-1/2">
          <img
            src={c.topRightAccent}
            alt=""
            aria-hidden="true"
            width={480}
            height={320}
            loading="lazy"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Row 12 (et_pb_row_12): Quote Icon + Testimonial Slider */}
      <div className="mx-auto w-[80%] max-w-[1080px] py-[27px] text-center">
        {/* Centered FontAwesome fa-quote-left 48px icon */}
        <div className="mb-6 flex justify-center text-black" aria-hidden="true">
          <svg className="h-[48px] w-[48px] fill-current" viewBox="0 0 512 512">
            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
          </svg>
        </div>

        {/* Slide Content */}
        <div className="mx-auto max-w-[740px] pt-4 pb-[70px]">
          <p className="font-opensans mb-6 text-[15px] leading-[1.8em] font-normal text-black sm:text-[16px] lg:text-[20px]">
            {currentSlide.quote}
          </p>
          <p className="font-opensans text-[15px] italic text-black">
            {currentSlide.author}
          </p>
        </div>

        {/* Black Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5" role="tablist" aria-label="Testimonial slides">
          {slides.map((s, idx) => (
            <button
              key={s.author}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={`h-[7px] w-[7px] cursor-pointer rounded-full bg-black transition-opacity ${
                idx === activeIndex ? 'opacity-100' : 'opacity-40 hover:opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
