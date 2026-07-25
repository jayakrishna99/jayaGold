import { CONFIG, waLink } from "@/lib/config";
import HeroCarousel from "@/components/HeroCarousel";
import StepsAccordion from "@/components/StepsAccordion";
import SimpleWaForm from "@/components/SimpleWaForm";
import RateBoard from "@/components/RateBoard";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import ReviewsShowcase from "@/components/ReviewsShowcase";
import { CtaBand } from "@/components/Shared";

const whyIconProps = {
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const WHY = [
  {
    icon: (
      <svg {...whyIconProps} aria-hidden="true">
        <path d="M3 17l6-6 4 4 7-8" />
        <path d="M15 6.5h5V11.5" />
      </svg>
    ),
    title: "Maximum Market Value",
    text: "Get the best value based on live gold rates.",
  },
  {
    icon: (
      <svg {...whyIconProps} aria-hidden="true">
        <path d="M1.5 12S5 5.5 12 5.5 22.5 12 22.5 12 19 18.5 12 18.5 1.5 12 1.5 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Transparent Valuation",
    text: "Fair, honest testing with no hidden deductions.",
  },
  {
    icon: (
      <svg {...whyIconProps} aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M15.2 15.2 21 21" />
        <path d="M8 10.5h5" />
      </svg>
    ),
    title: "Advanced Purity Testing",
    text: "Accurate, non-destructive gold analysis.",
  },
  {
    icon: (
      <svg {...whyIconProps} aria-hidden="true">
        <rect x="4" y="10.5" width="16" height="10" rx="2" />
        <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
      </svg>
    ),
    title: "Instant Secure Payment",
    text: "Fast and safe bank transfers.",
  },
  {
    icon: (
      <svg {...whyIconProps} aria-hidden="true">
        <circle cx="12" cy="9" r="5.5" />
        <path d="M8.3 13.8 7 21l5-2.6L17 21l-1.3-7.2" />
      </svg>
    ),
    title: "Gold & Silver Experts",
    text: "Buy, sell, and release valuables with confidence.",
  },
  {
    icon: (
      <svg {...whyIconProps} aria-hidden="true">
        <path d="M12 3l7 2.8V11c0 4.4-2.9 7.4-7 9-4.1-1.6-7-4.6-7-9V5.8Z" />
        <path d="M9 11.6l2.1 2.1L15.2 9.6" />
      </svg>
    ),
    title: "Trusted Customer Service",
    text: "Professional guidance with complete transparency.",
  },
];

const FAQS = [
  { q: "What documents are required to sell gold at Jaya Gold Buyers?", a: "To sell your gold, please carry a valid government-issued ID such as Aadhaar Card, Passport, Driving Licence, or Voter ID. KYC verification is mandatory as per applicable regulations." },
  { q: "Can I sell gold without a BIS Hallmark?", a: "Yes. We purchase both hallmarked and non-hallmarked gold. Our advanced purity testing equipment accurately evaluates your gold before offering a price." },
  { q: "How do you check the purity of my gold?", a: "We use modern, non-destructive spectrometer technology that tests your gold without causing any damage. The evaluation is transparent, and you can watch the entire process." },
  {
    q: "How is the value of my gold calculated?",
    a: "The final value depends on:",
    points: ["Gold purity (Karat)", "Net gold weight", "Live market gold rate", "Current buying price"],
  },
  { q: "Do you buy old, broken or damaged jewellery?", a: "Yes. We purchase old jewellery, broken ornaments, unused jewellery, single earrings, chains, bangles, rings, coins and other gold items based on their gold value." },
  { q: "Can I sell gold that is pledged with a bank or finance company?", a: "Yes. Jaya Gold Buyers can assist in releasing pledged gold from eligible banks and financial institutions, subject to verification and documentation." },
  { q: "How long does the entire process take?", a: "Most transactions are completed within 05 minutes, including purity testing, KYC verification and payment." },
  { q: "How will I receive my payment?", a: "Payments are made securely through bank transfer in compliance with government regulations after completing the verification process." },
  { q: "Do you charge any hidden fees?", a: "No. We believe in complete transparency. You'll receive a detailed valuation before proceeding, with no hidden surprises." },
  { q: "Can I sell gold without the original purchase bill?", a: "Yes. The purchase invoice is not mandatory. Valid identity proof and successful ownership verification are sufficient." },
  { q: "Do you buy gold coins and biscuits?", a: "Yes. We purchase eligible gold coins, gold bars and gold biscuits after purity verification." },
  { q: "Do you buy silver items as well?", a: "Yes. We also buy silver jewellery, silver articles, silver coins and other genuine silver items." },
  { q: "What are your business hours?", a: "Our branch timings may vary by location. Please contact your nearest Jaya Gold Buyers branch or call us before your visit for the latest timings." },
  { q: "Is the gold testing process safe?", a: "Absolutely. Our testing process is completely non-destructive and does not scratch, melt or damage your jewellery." },
  {
    q: "Why should I choose Jaya Gold Buyers?",
    a: "Customers choose Jaya Gold Buyers because of:",
    points: [
      "Transparent gold valuation",
      "Live market-based pricing",
      "Advanced German purity testing technology",
      "Fast and secure payment",
      "Professional customer service",
      "Trusted and ethical buying process",
    ],
  },
  { q: "Do I have to sell after the valuation?", a: "No. Our gold evaluation is obligation-free. You are free to accept or decline our offer after receiving the valuation." },
  { q: "Can someone else sell my gold on my behalf?", a: "Only the legal owner or an authorised person with valid documentation and required identification can complete the transaction." },
  { q: "Is my personal information kept confidential?", a: "Yes. All customer information and KYC documents are handled securely and kept confidential in accordance with applicable privacy regulations." },
];

export default function Home() {
  return (
    <>
      {/* Hero carousel — PDF pages 1, 4, 5 */}
      <HeroCarousel />

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-item">
            <span className="ic">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2.5" y="6" width="19" height="12" rx="2" />
                <circle cx="12" cy="12" r="2.7" />
                <path d="M6 9.5h.01M18 14.5h.01" />
              </svg>
            </span>{" "}
            Highest Payout Guaranteed
          </div>
          <div className="trust-item">
            <span className="ic">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 4.5v14.5" />
                <path d="M8.5 19h7" />
                <path d="M5 7h14" />
                <path d="M6.5 7 4.1 12a2.55 2.55 0 0 0 4.8 0Z" />
                <path d="M17.5 7l-2.4 5a2.55 2.55 0 0 0 4.8 0Z" />
              </svg>
            </span>{" "}
            Certified Karat Testing
          </div>
          <div className="trust-item">
            <span className="ic">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3l7 2.8V11c0 4.4-2.9 7.4-7 9-4.1-1.6-7-4.6-7-9V5.8Z" />
                <path d="M9 11.6l2.1 2.1L15.2 9.6" />
              </svg>
            </span>{" "}
            100% Safe &amp; Confidential
          </div>
          <div className="trust-item">
            <span className="ic">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.5 8.5h11v7h-11z" />
                <path d="M13.5 11h4.2l3 3v1.5h-2.4" />
                <circle cx="7" cy="17" r="1.8" />
                <circle cx="16.6" cy="17" r="1.8" />
                <path d="M8.8 17h6" />
              </svg>
            </span>{" "}
            Free Doorstep Pickup
          </div>
        </div>
      </div>

      {/* Gold rate promo banner */}
      <section className="section gold-promo" id="gold-rate-promo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="gold-promo-bg"
          src="/img/gold-rate-banner-2.png"
          alt="Check the live gold and silver rate on the Jaya Gold Buyers app"
        />
        <div className="container gold-promo-wrap">
          <div className="gold-promo-copy">
            <h2>
              Check Live
              <br />
              Gold/Silver Rate
            </h2>
            <p className="gold-promo-sub">
              Guaranteed rate
              <br />
              across all our Bengaluru.
            </p>
            <div className="gold-promo-btns">
              <a href="#live-rate" className="btn btn-outline">
                Check Gold Rate
              </a>
              <a
                href={waLink("Hi Jaya Gold Buyers, I'd like to enquire about gold rates.")}
                target="_blank"
                rel="noopener"
                className="btn btn-outline"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Six easy steps — sticky heading left, numbered accordion right */}
      <section className="section bg-white" id="how-it-works">
        <div className="container steps-grid steps-grid-3">
          <div className="steps-head">
            <h2>
              <span className="accent">Need to Release or Sell Gold in Bengaluru?</span>
              <br />
              In 6 Easy Steps.
            </h2>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="steps-model"
            src="/img/steps-model-2.png"
            alt="Sell your gold in seven easy steps at Jaya Gold Buyers"
          />
          <StepsAccordion />
        </div>
      </section>

      {/* FAQs — left-aligned heading, list below (PDF p.2 bottom) */}
      <section className="section has-orbs bg-coral" id="faqs">
        <span className="plx-orb orb-a" data-plx="0.22" aria-hidden="true" />
        <span className="plx-orb orb-b" data-plx="-0.14" aria-hidden="true" />
        <div className="container faq-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="faq-img"
            src="/img/faq-section-2.png"
            alt="Jaya Gold Buyers — here to answer your gold questions"
          />
          <div className="faq-col">
            <span className="eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <Faq items={FAQS} />
            <p className="faq-more">
              Still have a question?{" "}
              <a
                href={waLink("Hi Jaya Gold Buyers, I have a question.")}
                target="_blank"
                rel="noopener"
              >
                Ask us on WhatsApp →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Why Jaya */}
      <section className="section bg-dark" id="why">
        <div className="container why-wrap">
          <div className="why-copy">
            <h2 className="why-heading">
              Why
              <br />
              Jaya Gold
              <br />
              Buyers?
            </h2>
            <div className="why-cta">
              <span className="why-cta-label">To Know More:</span>
              <a
                className="btn btn-primary why-brochure"
                href={waLink("Hi Jaya Gold Buyers, please share your brochure.")}
                target="_blank"
                rel="noopener"
              >
                Download Brochure
              </a>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="why-media"
            src="/img/why-us.png"
            alt="Jaya Gold Buyers customer checking live gold rates on the app"
          />
          <div className="why-grid">
            {WHY.map((w) => (
              <div className="why-card" key={w.title}>
                <div className="why-ic">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ReviewsShowcase />

      {/* Live rate + calculator */}
      <section className="section bg-coral" id="live-rate">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Know Your Value</span>
            <h2>Today&apos;s Live Gold Rate</h2>
            <p className="lead">
              Transparent, up-to-the-minute rates — the same price you&apos;ll
              get at every Jaya branch. Estimate your payout before you visit.
            </p>
          </div>
          <div className="rate-wrap">
            <div data-plx="0.06">
              <RateBoard detailed />
            </div>
            <div data-plx="-0.05">
              <Calculator />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section bg-grey" id="contact">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Get In Touch</span>
            <h2>We&apos;re Here to Help</h2>
            <p className="lead">
              Have questions about selling gold, releasing pledged
              jewellery, or checking today&apos;s gold value? Our team is
              ready to assist you with expert guidance and transparent
              service.
            </p>
          </div>
          <div className="rate-wrap">
            <div className="contact-info">
              <div className="contact-cards">
                <div className="contact-card">
                  <span className="contact-card-ic">📍</span>
                  <div>
                    <h4>Visit Our Branch</h4>
                    <p>
                      Jaya Gold Buyers
                      <br />
                      {CONFIG.address}
                    </p>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="contact-card-ic">📞</span>
                  <div>
                    <h4>Get in Touch</h4>
                    <p>
                      Phone: <a href="tel:+919108959886">+91 91089 59886</a>
                      <br />
                      Email:{" "}
                      <a href="mailto:info@jayagoldbuyers.com">
                        info@jayagoldbuyers.com
                      </a>
                      <br />
                      Website:{" "}
                      <a
                        href="https://www.jayagoldbuyers.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.jayagoldbuyers.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="contact-card-ic">🕘</span>
                  <div>
                    <h4>Business Hours</h4>
                    <p>
                      Monday – Saturday: 11 AM – 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="map-card">
                <iframe
                  src="https://www.google.com/maps?q=Jaya+Gold+Buyers,+4th+Block,+Jayanagar,+Bengaluru&z=17&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jaya Gold Buyers Location"
                />
                <div className="map-card-info">
                  <a
                    href="https://www.google.com/maps/place/Jaya+Gold+Buyers/@12.9262579,77.5856737,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae151d05f34d93:0x47662da8b66cfe2b!8m2!3d12.9262579!4d77.5856737!16s%2Fg%2F11x5ypxggc?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Location &amp; Reviews →
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
