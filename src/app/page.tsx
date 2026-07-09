import { CONFIG, waLink } from "@/lib/config";
import WhatsAppForm from "@/components/WhatsAppForm";
import SimpleWaForm from "@/components/SimpleWaForm";
import QuoteModal from "@/components/QuoteModal";
import RateBoard from "@/components/RateBoard";
import Calculator from "@/components/Calculator";
import Faq from "@/components/Faq";
import { CtaBand } from "@/components/Shared";
import WaIcon from "@/components/WaIcon";

const SERVICES = [
  ["💍", "Old Gold Jewellery", "Rings, chains, bangles, necklaces — any condition, broken or worn. We pay by live 22K/24K rate."],
  ["🪙", "Gold Coins & Bars", "Bring your coins, biscuits and bullion. Instant valuation at pure 24K market price."],
  ["🥈", "Silver Articles", "Silver jewellery, coins and utensils bought at the current daily silver rate."],
  ["🏦", "Release Pledged Gold", "Locked your gold in a bank or pawnshop? We settle your loan and buy your released gold."],
  ["💎", "Diamond & Stone Jewellery", "We fairly value the gold and appraise diamonds & precious stones separately."],
  ["🚗", "Doorstep Service", "Prefer not to travel? Book a free home pickup — our expert evaluates gold at your door."],
];

const STEPS = [
  ["Get in Touch", "Call, WhatsApp or fill the form. Visit a branch or book a free pickup."],
  ["Free Testing", "Your gold is weighed and karat-tested live in front of you with certified machines."],
  ["Get the Best Quote", "We calculate value at today's live rate — no hidden deductions, full transparency."],
  ["Instant Cash", "Accept the offer and receive cash or bank transfer within minutes."],
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

const BRANCHES = [
  ["Bangalore – MG Road", "#12, MG Road, Bengaluru, Karnataka 560001", "Bangalore"],
  ["Bangalore – Jayanagar", "4th Block, Jayanagar, Bengaluru 560011", "Bangalore Jayanagar"],
  ["Chennai – T. Nagar", "Ranganathan St, T. Nagar, Chennai 600017", "Chennai"],
  ["Kochi – MG Road", "MG Road, Ernakulam, Kochi 682035", "Kochi"],
  ["Hyderabad – Ameerpet", "Ameerpet Main Rd, Hyderabad 500016", "Hyderabad"],
  ["Vijayawada – Governorpet", "Eluru Rd, Governorpet, Vijayawada 520002", "Vijayawada"],
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
      {/* Hero */}
      <section className="hero" id="top">
        <div className="container">
          <div>
            <span className="pill">Strength You Can Trust!</span>
            <h1 className="mt-16">
              Sell Your Old Gold for <span>Instant Cash</span>
            </h1>
            <p>
              Jaya Gold Buyers pays you the best live market rate for your old
              gold and silver jewellery — with transparent weighing, no hidden
              deductions, and cash in hand the same day.
            </p>
            <div className="hero-btns">
              <QuoteModal label="Get a Free Quote" />
              <a
                className="btn btn-wa btn-lg"
                href={waLink("Hi Jaya Gold Buyers, I want to sell my gold. Please share today's best rate.")}
                target="_blank"
                rel="noopener"
              >
                <WaIcon /> WhatsApp Us
              </a>
            </div>
            <div className="hero-badges">
              <div className="hero-badge"><b>100%</b><span>Transparent Weighing</span></div>
              <div className="hero-badge"><b>10&nbsp;min</b><span>Instant Cash Payout</span></div>
              <div className="hero-badge"><b>50k+</b><span>Happy Customers</span></div>
            </div>
          </div>
          <WhatsAppForm
            title="Get Today's Best Rate"
            subtitle="Fill in the details — we'll send your quote on WhatsApp instantly."
          />
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="container">
          <div className="trust-item"><span className="ic">💰</span> Highest Payout Guaranteed</div>
          <div className="trust-item"><span className="ic">⚖️</span> Certified Karat Testing</div>
          <div className="trust-item"><span className="ic">🔒</span> 100% Safe &amp; Confidential</div>
          <div className="trust-item"><span className="ic">🚗</span> Free Doorstep Pickup</div>
        </div>
      </div>

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
            {SERVICES.map(([ic, h, p]) => (
              <div className="card" key={h}>
                <div className="ic">{ic}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-grey">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Simple Process</span>
            <h2>Sell Gold in 4 Easy Steps</h2>
          </div>
          <div className="grid grid-4">
            {STEPS.map(([h, p], i) => (
              <div className="step" key={h}>
                <div className="num">{i + 1}</div>
                <h4>{h}</h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live rate + calculator */}
      <section className="section" id="live-rate">
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
            <RateBoard detailed />
            <Calculator />
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
      <section className="section" id="why">
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

      {/* Branches */}
      <section className="section bg-grey" id="branches">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Reach Us</span>
            <h2>Find a Branch Near You</h2>
            <p className="lead">
              Walk in to any of our branches across South India — or book a
              free doorstep pickup.
            </p>
          </div>
          <div className="grid grid-3">
            {BRANCHES.map(([name, addr, q]) => (
              <div className="branch" key={name}>
                <h4>{name}</h4>
                <p>📍 {addr}</p>
                <p>🕘 {CONFIG.hours}</p>
                <p>
                  📞 <a href={`tel:${CONFIG.phone}`}>{CONFIG.phoneDisplay}</a>
                </p>
                <div className="b-actions">
                  <a
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Jaya Gold Buyers " + q)}`}
                  >
                    🗺️ Directions
                  </a>
                  <a
                    className="btn btn-wa"
                    target="_blank"
                    rel="noopener"
                    href={waLink(`Hi Jaya Gold Buyers, I'd like to visit the ${name} branch.`)}
                  >
                    <WaIcon /> Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="rate-wrap" style={{ marginTop: 44 }}>
            <div className="prose">
              <span className="eyebrow">Can&apos;t Come to Us?</span>
              <h2>Book a Free Doorstep Pickup</h2>
              <p>
                Prefer to stay home? Our trained executive comes to you with
                certified testing equipment, values your gold live at your
                doorstep, and pays you on the spot. Available across all our
                service cities.
              </p>
              <ul>
                <li>✅ No travel, no risk of carrying gold</li>
                <li>✅ Live weighing &amp; karat testing at your door</li>
                <li>✅ Instant cash or bank transfer</li>
              </ul>
            </div>
            <SimpleWaForm
              title="Book a Pickup"
              subtitle="Tell us where and when — we'll confirm on WhatsApp."
              intro="Hello Jaya Gold Buyers! I'd like to book a doorstep pickup."
              submitLabel="Request Pickup →"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "city", label: "City", type: "select", options: CONFIG.cities },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" id="faqs">
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Faq items={FAQS} />
          <p style={{ marginTop: 24, textAlign: "center", color: "var(--grey)" }}>
            Still have a question?{" "}
            <a
              href={waLink("Hi Jaya Gold Buyers, I have a question.")}
              target="_blank"
              rel="noopener"
              style={{ color: "var(--red)", fontWeight: 600 }}
            >
              Ask us on WhatsApp →
            </a>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
