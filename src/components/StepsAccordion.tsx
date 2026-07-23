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
        title: "Find the Branch",
        big: "Opposite Joy Alukkas, Jayanagar",
        body: `${CONFIG.address}. Walk in any time, or call ahead to confirm directions.`,
        cta: { label: "📞 Call Now", href: `tel:${CONFIG.phone}` },
      },
      {
        title: "Carry ID Proof",
        body: "A Passport or Aadhaar Card as photo ID proof, plus a local address proof.",
      },
    ],
  },
  {
    kicker: "At Our Branch",
    steps: [
      {
        title: "Check Gold Purity",
        body: "Tamper-proof testing for an accurate valuation — checked right in front of you.",
      },
      {
        title: "Check Gold Rate",
        big: "Live, Transparent Rate",
        body: "Based on your gold's tested purity, we give you a quotation at our transparent, live gold rate.",
        cta: { label: "Check Live Gold Rate Now", href: "#live-rate" },
      },
      {
        title: "KYC Verification",
        body: "A mandatory KYC check — photo ID and address proof (your Aadhaar Card covers both) — plus a verification phone call to your family, our added fraud and safety measure.",
      },
      {
        title: "Instant Payment",
        body: "For your security, we transfer the money to your bank account — you can confirm the transfer before leaving our branch. Your money is transferred instantly.",
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
