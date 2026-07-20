"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";

type Step = {
  title: string;
  big?: string;
  body: string;
  cta?: { label: string; href: string };
  dark?: boolean;
};

const GROUPS: { kicker: string; steps: Step[] }[] = [
  {
    kicker: "At Home",
    steps: [
      {
        title: "Find a Branch",
        big: "6 Branches & Growing",
        body: "Across Bengaluru and South India — walk in to the nearest branch, or book a free doorstep pickup.",
        cta: { label: "📞 Call to Locate a Branch", href: `tel:${CONFIG.phone}` },
      },
      {
        title: "Carry ID Proof",
        body: "Any government photo ID works — Aadhaar, PAN, Passport or Driving Licence. A quick, confidential KYC as per regulations; your details stay strictly private.",
      },
    ],
  },
  {
    kicker: "At Our Branch",
    steps: [
      {
        title: "Check Gold Purity",
        body: "Your gold is weighed and karat-tested live in front of you on certified spectrometer machines — no drilling, no damage.",
      },
      {
        title: "Check Gold Rate",
        big: "Same Rate. Every Branch.",
        body: "Our live gold rate is displayed openly and applied directly to your tested purity — the rate you see is the rate you get.",
        cta: { label: "Check Live Rate", href: "#live-rate" },
        dark: true,
      },
      {
        title: "Instant Payment",
        body: "Choose instant cash or immediate bank transfer — paid the moment you accept our offer.",
      },
    ],
  },
];

function Chevron() {
  return (
    <svg width="14" height="9" viewBox="0 0 14 9" aria-hidden="true">
      <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default function StepsAccordion() {
  const [open, setOpen] = useState(0);
  let idx = -1;

  return (
    <div className="steps-acc">
      {GROUPS.map((g) => (
        <div key={g.kicker}>
          <div className="sa-kicker">
            <span>{g.kicker}</span>
            <span aria-hidden="true">···</span>
          </div>
          {g.steps.map((s) => {
            idx += 1;
            const i = idx;
            const isOpen = open === i;
            return (
              <div className={`sa-item${isOpen ? " open" : ""}${s.dark ? " dark" : ""}`} key={s.title}>
                <button
                  className="sa-head"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="sa-num">{i + 1}</span>
                  <span className="sa-title">{s.title}</span>
                  <span className="sa-chev">
                    <Chevron />
                  </span>
                </button>
                <div className="sa-body">
                  <div className="sa-body-in">
                    {s.big && <div className="sa-big">{s.big}</div>}
                    <p>{s.body}</p>
                    {s.cta && (
                      <a className="btn btn-outline" href={s.cta.href}>
                        {s.cta.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
