"use client";
import { useEffect, useState } from "react";

const MIN_SHOW_MS = 1800;

export default function Loader() {
  const [phase, setPhase] = useState<"show" | "fade" | "gone">("show");

  useEffect(() => {
    const start = Date.now();
    let t1: ReturnType<typeof setTimeout>, t2: ReturnType<typeof setTimeout>;
    const finish = () => {
      const wait = Math.max(0, MIN_SHOW_MS - (Date.now() - start));
      t1 = setTimeout(() => {
        setPhase("fade");
        t2 = setTimeout(() => {
          setPhase("gone");
          window.dispatchEvent(new Event("jaya:loader-done"));
        }, 700);
      }, wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`loader${phase === "fade" ? " fade" : ""}`} aria-hidden="true">
      <div className="loader-inner">
        <svg className="ele" viewBox="0 0 220 150" role="img" aria-label="Loading">
          {/* ground shadow */}
          <ellipse cx="108" cy="140" rx="74" ry="6" fill="rgba(38,35,35,.08)" />
          <g className="ele-bob">
            {/* far-side legs */}
            <rect className="leg leg-b" x="62" y="88" width="13" height="47" rx="6" fill="#E97974" />
            <rect className="leg leg-a" x="118" y="88" width="13" height="47" rx="6" fill="#E97974" />
            {/* tail */}
            <path d="M38 62 q-13 10 -7 27" stroke="#FF8A8A" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* body */}
            <ellipse cx="95" cy="72" rx="60" ry="42" fill="#FF8A8A" />
            {/* golden caparison */}
            <path d="M58 38 q37 -15 74 0 l-7 31 q-30 11 -60 0 z" fill="#F8ED8E" />
            <path d="M58 38 q37 -15 74 0 l-2 9 q-35 -13 -70 0 z" fill="#E8B84B" />
            {/* near-side legs */}
            <rect className="leg leg-a" x="76" y="90" width="14" height="48" rx="6" fill="#FF8A8A" />
            <rect className="leg leg-b" x="132" y="90" width="14" height="48" rx="6" fill="#FF8A8A" />
            {/* head */}
            <circle cx="163" cy="58" r="30" fill="#FF8A8A" />
            {/* ear */}
            <ellipse className="ear" cx="150" cy="58" rx="15" ry="20" fill="#E97974" />
            {/* tusk */}
            <path d="M170 80 q7 8 16 7" stroke="#FCFCF4" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            {/* trunk */}
            <path
              className="trunk"
              d="M186 50 q15 23 5 45 q-5 11 -16 9"
              stroke="#FF8A8A"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
            />
            {/* eye */}
            <circle cx="169" cy="49" r="3.2" fill="#262323" />
          </g>
        </svg>
        <div className="loader-brand">
          <span className="brand-word">JAYA</span>
          <span className="brand-sub">Gold Buyers</span>
        </div>
        <div className="loader-dots">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
