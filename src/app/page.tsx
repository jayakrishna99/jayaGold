import { waLink } from "@/lib/config";
import HeroCarousel from "@/components/HeroCarousel";
import StepsAccordion from "@/components/StepsAccordion";
import SimpleWaForm from "@/components/SimpleWaForm";
import RateBoard from "@/components/RateBoard";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import { CtaBand } from "@/components/Shared";

const svcIconProps = {
  viewBox: "0 0 24 24",
  width: 26,
  height: 26,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const SERVICES = [
  {
    icon: (
      <svg {...svcIconProps} aria-hidden="true">
        <circle cx="12" cy="15" r="5.5" />
        <path d="M9.4 6.6 12 3.4l2.6 3.2" />
        <path d="M9.4 6.6h5.2L12 9.8z" />
      </svg>
    ),
    title: "Old Gold Jewellery",
    text: "Rings, chains, bangles, necklaces — any condition, broken or worn. We pay by live 22K/24K rate.",
  },
  {
    icon: (
      <svg {...svcIconProps} aria-hidden="true">
        <circle cx="12" cy="7.3" r="3.4" />
        <path d="M5.2 13.5h5.6l1.3 5H3.9z" />
        <path d="M13.2 13.5h5.6l1.3 5h-8.2z" />
      </svg>
    ),
    title: "Gold Coins & Bars",
    text: "Bring your coins, biscuits and bullion. Instant valuation at pure 24K market price.",
  },
  {
    icon: (
      <svg {...svcIconProps} aria-hidden="true">
        <path d="M11 4l1.6 4.6 4.6 1.6-4.6 1.6L11 16.4l-1.6-4.6L4.8 10.2l4.6-1.6z" />
        <path d="M18.2 15.4l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
      </svg>
    ),
    title: "Silver Articles",
    text: "Silver jewellery, coins and utensils bought at the current daily silver rate.",
  },
  {
    icon: (
      <svg {...svcIconProps} aria-hidden="true">
        <rect x="4.5" y="11" width="15" height="9" rx="2" />
        <path d="M8 11V7.5A4 4 0 0 1 15.9 6.6" />
        <path d="M12 14.5v2" />
      </svg>
    ),
    title: "Release Pledged Gold",
    text: "Locked your gold in a bank or pawnshop? We settle your loan and buy your released gold.",
  },
  {
    icon: (
      <svg {...svcIconProps} aria-hidden="true">
        <path d="M7.5 4.5h9L21 9.5 12 20 3 9.5z" />
        <path d="M3 9.5h18" />
        <path d="M12 20 8.5 9.5 12 4.5l3.5 5z" />
      </svg>
    ),
    title: "Diamond & Stone Jewellery",
    text: "We fairly value the gold and appraise diamonds & precious stones separately.",
  },
  {
    icon: (
      <svg {...svcIconProps} aria-hidden="true">
        <path d="M2.5 8.5h11v7h-11z" />
        <path d="M13.5 11h4.2l3 3v1.5h-2.4" />
        <circle cx="7" cy="17" r="1.8" />
        <circle cx="16.6" cy="17" r="1.8" />
        <path d="M8.8 17h6" />
      </svg>
    ),
    title: "Doorstep Service",
    text: "Prefer not to travel? Book a free home pickup — our expert evaluates gold at your door.",
  },
];

const RELEASE_STEPS = [
  ["Share Loan Details", "Bring your pledge receipt and loan documents, or send them on WhatsApp for a quick assessment."],
  ["We Value the Gold", "We calculate your gold's worth at today's live rate and the exact amount needed to close your loan."],
  ["We Settle the Loan", "Our team visits the bank/lender with you, pays off the outstanding loan and releases your gold."],
  ["You Get the Balance", "We buy the released gold and pay you the difference instantly in cash or bank transfer."],
];

const WHY = [
  ["📈", "Best Market Price", "We consistently pay the highest rate in the city — transparent, live and verifiable."],
  ["👁️", "Full Transparency", "Live weighing and karat testing in front of you. No cutting, no hidden charges."],
  ["⚡", "Instant Payment", "Cash or instant bank transfer the moment you accept — no waiting periods."],
  ["🛡️", "Fully Secure", "CCTV-monitored branches, trained staff and complete confidentiality of your visit."],
  ["🏆", "Trusted by Thousands", "50,000+ happy customers across South India rate us their most trusted gold buyer."],
  ["🤝", "No Obligation", "Get a free valuation with zero pressure. Sell only if you're 100% satisfied."],
];

const STATS = [
  ["50k+", "Happy Customers"],
  ["6", "Branches & Growing"],
  ["₹500Cr+", "Gold Transacted"],
  ["4.9★", "Average Rating"],
];

const TESTIMONIALS = [
  ["R", "Ramesh K.", "Bangalore", "Got ₹8,000 more than the shop next door. Weighing was done right in front of me and cash was instant."],
  ["S", "Sowmya P.", "Chennai", "They released my pledged gold from the bank and paid me the balance the same day. Very professional team."],
  ["A", "Anil M.", "Kochi", "Booked a home pickup, the executive tested everything at my doorstep. Fair rate, zero hassle."],
];

const REFER_STEPS = [
  ["📲", "1. Share", "Share your referral via WhatsApp with friends or family who want to sell their gold."],
  ["🤝", "2. They Sell", "Your referral sells their gold at any Jaya branch or through a doorstep pickup."],
  ["💵", "3. You Earn", "Once the deal is complete, your cash reward is credited to you. Simple as that."],
];

const FAQS = [
  { q: "How is the price of my gold decided?", a: "Your payout equals the weight of your gold × its tested purity × today's live rate. We weigh and karat-test everything live in front of you with certified equipment — no hidden deductions." },
  { q: "What documents do I need to sell gold?", a: "A valid government-issued photo ID (Aadhaar, PAN, Passport or Driving Licence) is required as per regulations. For pledged gold, also bring the pledge receipt and loan documents." },
  { q: "Do you pay in cash or bank transfer?", a: "Both. You can choose instant cash or an immediate bank transfer — whichever you prefer, paid the moment you accept the offer." },
  { q: "Why is one shop's rate lower than another's?", a: "Some buyers advertise a high rate but then deduct for 'wastage', 'making charges' or 'melting loss'. We apply the displayed rate directly to your gold's tested purity — the rate you see is the rate you get." },
  { q: "Can you release my pledged / pawned gold?", a: "Yes. We settle your outstanding gold loan with the bank or pawnshop, release your gold, and pay you the balance amount instantly. See the Release Pledged Gold section above." },
  { q: "Is my visit confidential?", a: "Absolutely. All branches are CCTV-secured and your personal details and transaction are kept strictly confidential." },
  { q: "Do you offer doorstep service?", a: "Yes — book a free pickup and our executive will value your gold at your home with the same transparency and instant payment." },
  { q: "Is there any charge for valuation?", a: "No. Valuation is completely free and there is zero obligation to sell." },
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

      {/* Seven easy steps — sticky heading left, numbered accordion right */}
      <section className="section bg-white" id="how-it-works">
        <div className="container steps-grid steps-grid-3">
          <div className="steps-head">
            <h2>
              <span className="accent">Sell Gold in Bengaluru with</span>
              <br />
              Five Easy Steps
            </h2>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="steps-model"
            src="/img/steps-model.jpg"
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
            src="/img/faq-left.png"
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

      {/* Sell gold */}
      <section className="section" id="sell-gold">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Sell Gold</span>
            <h2>Everything We Buy &amp; Every Way We Help</h2>
            <p className="lead">
              From a single ring to pledged gold locked in a bank — Jaya Gold
              Buyers turns your gold into fair, instant cash.
            </p>
          </div>
          <div className="grid grid-3">
            {SERVICES.map((s) => (
              <div className="card" key={s.title}>
                <div className="ic">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Release pledged gold */}
      <section className="section bg-grey" id="release-gold">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Release Pledged Gold</span>
            <h2>Free Your Gold in 4 Steps</h2>
            <p className="lead">
              Locked your gold in a bank, NBFC or pawnshop? We clear the loan
              and pay you the balance — hassle-free.
            </p>
          </div>
          <div className="grid grid-4">
            {RELEASE_STEPS.map(([h, p], i) => (
              <div className="step" key={h}>
                <div className="num">{i + 1}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className="rate-wrap mt-24" style={{ marginTop: 44 }}>
            <div className="prose">
              <h3 style={{ marginTop: 0 }}>Why Pay Interest on Gold You Want to Sell?</h3>
              <p>
                Gold loan interest quietly eats into your monthly savings — and
                if you default, you may recover only a fraction of your
                gold&apos;s real value. Selling through Jaya lets you close the
                loan and unlock the true market worth of your jewellery today.
              </p>
              <ul>
                <li>✅ We settle loans from multiple lenders</li>
                <li>✅ Transparent live-rate valuation</li>
                <li>✅ Full support with release paperwork</li>
                <li>✅ Instant payout of the balance amount</li>
              </ul>
            </div>
            <SimpleWaForm
              title="Get a Pledged-Gold Assessment"
              subtitle="Send your loan details — we'll estimate your balance amount."
              intro="Hello Jaya Gold Buyers! I want to release my pledged gold."
              submitLabel="Get Assessment on WhatsApp →"
              fields={[
                { name: "name", label: "Full Name", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "weight", label: "Pledged Weight (g)", type: "number" },
                { name: "lender", label: "Pledged With", type: "select", options: ["Bank", "NBFC / Finance Co.", "Pawnshop", "Multiple"] },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Jaya */}
      <section className="section bg-dark" id="why">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Jaya Gold Buyers</span>
            <h2>Strength You Can Trust</h2>
          </div>
          <div className="grid grid-3">
            {WHY.map(([ic, h, p]) => (
              <div className="card" key={h}>
                <div className="ic">{ic}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-4" style={{ marginTop: 26 }}>
            {STATS.map(([n, l]) => (
              <div className="card text-center" key={l}>
                <h2 style={{ color: "var(--red)" }}>{n}</h2>
                <p>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-grey">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Customer Stories</span>
            <h2>What Our Customers Say</h2>
          </div>
          <div className="grid grid-3">
            {TESTIMONIALS.map(([av, name, city, quote]) => (
              <div className="tcard" key={name}>
                <div className="stars">★★★★★</div>
                <p>&quot;{quote}&quot;</p>
                <div className="who">
                  <div className="av">{av}</div>
                  <div>
                    <b>{name}</b>
                    <br />
                    <span>{city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refer & earn */}
      <section className="section" id="refer">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Refer &amp; Earn</span>
            <h2>Earn in 3 Simple Steps</h2>
            <p className="lead">
              Know someone who wants to sell gold? Refer them and earn a{" "}
              <b>₹500 cash reward</b> on every successful deal.
            </p>
          </div>
          <div className="rate-wrap">
            <div className="refer-steps" style={{ gridTemplateColumns: "1fr" }}>
              {REFER_STEPS.map(([ic, h, p]) => (
                <div className="card" key={h}>
                  <div className="ic">{ic}</div>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <SimpleWaForm
              title="Refer & Earn"
              subtitle="Enter your details and your friend's contact — we'll take it from there."
              intro="Hello Jaya Gold Buyers! I'd like to refer someone."
              submitLabel="Submit Referral →"
              fields={[
                { name: "name", label: "Your Name", required: true },
                { name: "phone", label: "Your Phone", type: "tel", required: true },
                { name: "friend", label: "Friend's Name & Number", placeholder: "e.g. Priya – 98xxxxxxx0" },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
