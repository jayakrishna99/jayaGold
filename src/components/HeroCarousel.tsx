"use client";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  img: string;
  alt: string;
  theme: "coral" | "dark";
  full?: boolean; // full-bleed banner with its own artwork/text
  headline: string[]; // bold headline lines
  sub?: string; // supporting line under the headline
};

const SLIDES: Slide[] = [
  {
    img: "/img/banner1.png",
    alt: "Sell your gold and silver jewellery for instant cash at Jaya Gold Buyers, Bengaluru",
    theme: "coral",
    full: true,
    headline: ["Bengaluru's Trusted Gold & Silver Destination!"],
    sub: "Release, Buy & sell. Fair Value. Transparent Service.",
  },
  {
    img: "/img/banner2.png",
    alt: "Looking for gold buyers in Bengaluru? Jaya Gold Buyers offers fair valuation",
    theme: "coral",
    full: true,
    headline: ["Looking for Gold Buyers in Bengaluru?"],
  },
  {
    img: "/img/banner3.png",
    alt: "Your gold deserves more than just a price at Jaya Gold Buyers",
    theme: "coral",
    full: true,
    headline: ["Your Gold Deserves More Than Just a Price."],
    sub: "Release, Buy & Sell with Fair Valuation & Trusted Service.",
  },
  {
    img: "/img/banner4.png",
    alt: "Fair value and trusted service every time at Jaya Gold Buyers",
    theme: "coral",
    full: true,
    headline: ["Fair Value. Trusted Service. Every Time."],
    sub: "Release, Buy & Sell Gold & Silver with Confidence.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (d: number) => setActive((a) => (a + d + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [paused, go]);

  return (
    <section
      className={`hero hero--${SLIDES[active].theme}`}
      id="top"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container hero-carousel" data-plx-scroll="0.28">
        {SLIDES.map((s, i) => (
          <div
            className={`hero-slide${i === active ? " active" : ""}${s.full ? " full" : ""}`}
            key={s.img}
            aria-hidden={i !== active}
          >
            <span className="hero-banner-bg" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-banner" src={s.img} alt={s.alt} />
            <div className="hero-banner-copy">
              <h2>
                {s.headline.map((line, j) => (
                  <span key={j}>
                    <b>{line}</b>
                    {j < s.headline.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              {s.sub && <p className="hero-banner-sub">{s.sub}</p>}
            </div>
          </div>
        ))}
        <div className="hero-dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.img}
              className={i === active ? "on" : ""}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
      <button className="hero-arrow prev" aria-label="Previous slide" onClick={() => go(-1)}>
        ‹
      </button>
      <button className="hero-arrow next" aria-label="Next slide" onClick={() => go(1)}>
        ›
      </button>
    </section>
  );
}
