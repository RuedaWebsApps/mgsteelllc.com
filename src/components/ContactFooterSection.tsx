import React, { useState } from 'react';
import { SITE_CONTENT, SITE_INFO, type Locale } from '../content/siteData';
import { submitContactForm } from '../lib/contactAdapter';
import { LEGAL_KINDS, legalLabel, legalPath } from '../legal/legalDocs';

interface ContactFooterSectionProps {
  locale: Locale;
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({ locale }) => {
  const { contact, footer } = SITE_CONTENT[locale];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    if (captcha.trim() !== '' && captcha.trim() !== '23') {
      setStatus('error');
      setFeedbackMsg(
        locale === 'es'
          ? 'Por favor verifica la suma (15 + 8 = 23).'
          : 'Please check the math captcha (15 + 8 = 23).',
      );
      return;
    }

    setStatus('submitting');
    const res = await submitContactForm({
      name: name.trim(),
      email: email.trim(),
      phone: '',
      service: 'MG Steel Structural Reinforcement Inquiry',
      message: message.trim(),
      locale,
      website_hp: honeypot,
    });

    setFeedbackMsg(res.message);
    if (res.ok) {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
      setCaptcha('');
    } else {
      setStatus('error');
    }
  };

  return (
    <>
      <section
        id="contact"
        aria-label="Contact Us"
        className="w-full overflow-hidden bg-[#111111] pt-0 pb-[54px] text-white"
      >
        {/* Row 13 (et_pb_row_13): Top-left geometric square */}
        <div className="w-full py-0">
          <div className="w-[14%] sm:w-[8%]">
            <img
              src={contact.topLeftAccent}
              alt=""
              aria-hidden="true"
              width={202}
              height={202}
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Row 14 (et_pb_row_14): 1/3 Contact Info | 1/3 Photo 1 | 1/3 Photo 2 */}
        <div className="mx-auto grid w-[80%] max-w-[1080px] grid-cols-1 gap-8 pt-[27px] pb-0 lg:grid-cols-3 lg:gap-x-[5.5%]">
          {/* Col 1: Contact Us + right-aligned Email/Phone/Address */}
          <div>
            <h3 className="font-baskerville mb-[20px] pb-[10px] text-left text-[16px] leading-[1.4em] font-bold text-[#948669] sm:text-[20px] lg:text-[24px]">
              {contact.heading}
            </h3>

            <div className="font-opensans space-y-5 text-right text-[15px] leading-[1.3em] text-white sm:text-[18px]">
              <h4>
                <strong className="font-bold">{contact.emailLabel}</strong>{' '}
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="text-white transition-colors hover:text-[#948669]"
                >
                  {contact.emailValue}
                </a>
              </h4>
              <h4>
                <strong className="font-bold">{contact.phoneLabel}</strong>{' '}
                <a
                  href={contact.phoneHref}
                  className="text-white transition-colors hover:text-[#948669]"
                >
                  {contact.phoneValue}
                </a>
              </h4>
              <h4>
                <strong className="font-bold">{contact.addressLabel}</strong>{' '}
                <span>{contact.addressValue}</span>
              </h4>
            </div>
          </div>

          {/* Col 2: Crew Photo */}
          <div>
            <img
              src={contact.photo1}
              alt="MG Steel crew on site"
              width={300}
              height={225}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </div>

          {/* Col 3: Post-Tension Cables Photo */}
          <div>
            <img
              src={contact.photo2}
              alt="Post-tension cables on site"
              width={300}
              height={225}
              loading="lazy"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Row 15 (et_pb_row_15): Contact Form + Bottom-Right Geometric Accent */}
        <div className="mx-auto w-[80%] max-w-[1080px] py-[27px]">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Anti-spam honeypot */}
            <input
              type="text"
              name="website_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            {/* Row 1: Name & Email Address (#eeeeee light gray inputs, height 51px) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="mg-name" className="sr-only">
                  {contact.form.namePlaceholder}
                </label>
                <input
                  id="mg-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={contact.form.namePlaceholder}
                  className="font-opensans h-[51px] w-full border-0 bg-[#eeeeee] px-4 text-[14px] text-[#333333] placeholder-[#777777] focus:ring-2 focus:ring-[#948669] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="mg-email" className="sr-only">
                  {contact.form.emailPlaceholder}
                </label>
                <input
                  id="mg-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={contact.form.emailPlaceholder}
                  className="font-opensans h-[51px] w-full border-0 bg-[#eeeeee] px-4 text-[14px] text-[#333333] placeholder-[#777777] focus:ring-2 focus:ring-[#948669] focus:outline-none"
                />
              </div>
            </div>

            {/* Row 2: Message (#eeeeee textarea, height 150px) */}
            <div>
              <label htmlFor="mg-message" className="sr-only">
                {contact.form.messagePlaceholder}
              </label>
              <textarea
                id="mg-message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={contact.form.messagePlaceholder}
                className="font-opensans min-h-[150px] w-full resize-y border-0 bg-[#eeeeee] p-4 text-[14px] text-[#333333] placeholder-[#777777] focus:ring-2 focus:ring-[#948669] focus:outline-none"
              />
            </div>

            {/* Submit Row with Divi Math Captcha (15 + 8 =) & White Outlined Submit Button */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-1">
              <div className="flex items-center gap-2">
                <label htmlFor="mg-captcha" className="font-opensans text-[13px] text-[#666666]">
                  15 + 8 =
                </label>
                <input
                  id="mg-captcha"
                  type="text"
                  inputMode="numeric"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  aria-label="Math verification 15 + 8"
                  className="font-opensans h-[51px] w-[54px] border-0 bg-[#eeeeee] text-center text-[15px] text-[#333333] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="font-opensans h-[51px] cursor-pointer rounded-[3px] border-2 border-white bg-transparent px-7 text-[20px] font-medium text-white transition-colors duration-200 hover:bg-white/10 disabled:opacity-60"
              >
                {status === 'submitting' ? contact.form.submittingText : contact.form.submitButton}
              </button>
            </div>

            <p className="font-opensans text-right text-[11px] leading-relaxed text-white/40">
              {contact.form.tcpaNotice}
            </p>

            {status === 'success' && (
              <p className="font-opensans text-right text-[14px] text-[#ba9923]" role="status">
                {feedbackMsg}
              </p>
            )}
            {status === 'error' && (
              <p className="font-opensans text-right text-[14px] text-[#DB6526]" role="alert">
                {feedbackMsg}
              </p>
            )}
          </form>

          {/* Bottom-Right Geometric Accent (.et_pb_image_13) */}
          <div className="mt-4 ml-auto w-[15%] translate-x-1/2">
            <img
              src={contact.bottomRightAccent}
              alt=""
              aria-hidden="true"
              width={320}
              height={320}
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer Bottom Bar (#main-footer) */}
      <footer id="main-footer" className="w-full bg-[#171717] text-[#666666]">
        <div id="footer-bottom" className="bg-black/32 py-[15px]">
          <div className="mx-auto flex w-[80%] max-w-[1080px] flex-col items-center justify-between gap-3 sm:flex-row">
            <div id="footer-info" className="font-opensans text-[14px] text-[#666666]">
              {footer.credits}
            </div>

            <nav aria-label="Legal Policies" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {LEGAL_KINDS.map((kind) => (
                <a
                  key={kind}
                  href={legalPath(kind, locale)}
                  className="font-opensans text-[12px] text-[#666666] transition-colors hover:text-[#948669]"
                >
                  {legalLabel(kind, locale)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};
