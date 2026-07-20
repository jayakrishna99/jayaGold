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
        <svg className="ele" viewBox="0 0 260 170" role="img" aria-label="Loading">
          {/* ground */}
          <ellipse cx="130" cy="158" rx="95" ry="6" fill="rgba(38,35,35,.08)" />
          <line className="ground" x1="18" y1="156" x2="242" y2="156" stroke="#DCD3C4" strokeWidth="2" strokeLinecap="round" />
          <g className="ele-bob">
            {/* far-side legs */}
            <rect className="leg leg-b" x="52" y="92" width="15" height="58" rx="7" fill="#7A6F69" />
            <rect className="leg leg-a" x="142" y="94" width="15" height="56" rx="7" fill="#7A6F69" />
            {/* tail */}
            <path className="tail" d="M36 66 q-12 16 -4 36" stroke="#8F847E" strokeWidth="5" fill="none" strokeLinecap="round" />
            <circle className="tail" cx="33" cy="103" r="3.4" fill="#6E635D" />
            {/* body + head silhouette */}
            <path
              d="M34 64
                 C38 46 68 34 104 33
                 C134 32 158 35 172 40
                 C190 45 202 52 208 62
                 C213 70 214 79 210 87
                 C205 95 197 99 188 97
                 C180 104 164 108 140 109
                 C106 110 68 106 52 99
                 C40 93 31 79 34 64 Z"
              fill="#8F847E"
            />
            {/* golden caparison */}
            <path d="M88 36 C112 30 140 31 158 38 L151 68 C129 61 106 61 94 66 Z" fill="#F8ED8E" />
            <path d="M88 36 C112 30 140 31 158 38 L156 46 C133 38 110 38 90 44 Z" fill="#E8B84B" />
            <path d="M94 66 L151 68 L149 74 L96 72 Z" fill="#E8B84B" />
            {/* near-side legs */}
            <rect className="leg leg-a" x="70" y="96" width="17" height="58" rx="7" fill="#8F847E" />
            <rect className="leg leg-b" x="160" y="97" width="17" height="57" rx="7" fill="#8F847E" />
            {/* toenails */}
            <path className="leg leg-a" d="M72 148 h13" stroke="#E8E0D4" strokeWidth="4" strokeLinecap="round" />
            <path className="leg leg-b" d="M162 148 h13" stroke="#E8E0D4" strokeWidth="4" strokeLinecap="round" />
            {/* tusk */}
            <path d="M204 88 q9 8 19 6" stroke="#FBF6E8" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            {/* trunk */}
            <path
              className="trunk"
              d="M206 80 C216 96 215 116 206 132 C202 140 195 145 188 143"
              stroke="#8F847E"
              strokeWidth="13"
              fill="none"
              strokeLinecap="round"
            />
            {/* ear */}
            <path
              className="ear"
              d="M168 50 C184 48 194 58 190 73 C186 88 172 95 161 90 C153 86 153 70 157 60 C160 53 164 51 168 50 Z"
              fill="#776C66"
            />
            <path className="ear" d="M166 56 C176 55 184 62 181 72 C178 82 169 87 163 83 C158 80 159 68 162 61 Z" fill="#6E635D" opacity=".55" />
            {/* eye */}
            <circle cx="198" cy="60" r="2.8" fill="#262323" />
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
