"use client";
import { FormEvent, useState } from "react";
import { CONFIG, waLink } from "@/lib/config";

/** Pledge / Release / Buy & Sell hero-style band — form left, model centre,
 *  tagline + CTAs right. Design from Website.pdf page 2. */
export default function PledgeHero() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const get = (n: string) =>
      (f.elements.namedItem(n) as HTMLInputElement | null)?.value || "";
    const name = get("name");
    const grams = get("grams");
    const mobile = get("mobile");
    let msg = "Hi Jaya Gold Buyers, I'd like to sell my gold.\n";
    if (name) msg += `Name: ${name}\n`;
    if (grams) msg += `Quantity (grams): ${grams}\n`;
    if (mobile) msg += `Mobile: ${mobile}\n`;
    window.open(waLink(msg), "_blank", "noopener");
    setDone(true);
    f.reset();
  }

  return (
    <section className="pledge" id="sell-gold" aria-label="Sell your gold">
      <div className="container pledge-wrap">
        {/* Form card */}
        <div className="pledge-form-col">
          <form className="pledge-card" onSubmit={onSubmit}>
            <div className="field">
              <input type="text" name="name" placeholder="Full Name" required />
            </div>
            <div className="field">
              <input type="number" name="grams" placeholder="Quantity (in grams)" min={0} />
            </div>
            <div className="field">
              <label>Mobile Number</label>
              <input type="tel" name="mobile" required />
            </div>
            <p className="pledge-consent">
              I hereby authorise, Jaya Gold Buyers to call me on this number.
            </p>
            <button className="pledge-submit" type="submit">
              Sell Gold
              <span className="pledge-rupee" aria-hidden="true">₹</span>
            </button>
            {done && (
              <div className="form-msg ok">Opening WhatsApp… we&apos;ll respond right away.</div>
            )}
            <a className="pledge-call" href={`tel:${CONFIG.phone}`}>
              <span className="pledge-call-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5c0 8.28 6.72 15 15 15a2 2 0 0 0 2-2v-2.3a1 1 0 0 0-.76-.97l-3.9-.98a1 1 0 0 0-1 .34l-1.1 1.35a12 12 0 0 1-5.35-5.35l1.35-1.1a1 1 0 0 0 .34-1l-.98-3.9A1 1 0 0 0 8.3 3H6a2 2 0 0 0-2 2Z" />
                  <path d="M15.5 4.5a5 5 0 0 1 4 4" opacity=".55" />
                </svg>
              </span>
              <span className="pledge-call-txt">
                <span className="pledge-call-lbl">OR CALL</span>
                <span className="pledge-call-num">{CONFIG.phoneDisplay}</span>
              </span>
            </a>
          </form>
        </div>

        {/* Model */}
        <div className="pledge-model" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/steps-model-2.png" alt="" />
        </div>

        {/* Tagline + CTAs */}
        <div className="pledge-copy">
          <h2 className="pledge-tagline">
            Release,<br />
            Buy &amp; Sell.<br />
            In <b>Bengaluru.</b>
          </h2>
          <div className="pledge-cta">
            <a className="btn btn-primary" href="#contact">Get a free quote</a>
            <a
              className="btn btn-yellow"
              href={waLink("Hi, I'd like to know more about selling gold.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
