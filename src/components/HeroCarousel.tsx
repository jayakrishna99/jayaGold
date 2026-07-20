"use client";
import { useCallback, useEffect, useState } from "react";

type Slide = {
  img: string;
  alt: string;
  theme: "coral" | "dark";
  full?: boolean; // full-bleed banner with its own artwork/text
  overlay?: string[]; // text drawn over a full banner
  title?: string[];
  sub?: string[];
  cta?: { label: string; href: string } | null;
};

const SLIDES: Slide[] = [
  {
    img: "/img/banner-hero.jpg",
    alt: "Sell your gold for instant cash at Jaya Gold Buyers, Bangalore",
    theme: "coral",
    full: true,
    overlay: ["Looking for Gold Buyers in", "Bangalore?"],
  },
  {
    img: "/img/hero-model.jpg",
    alt: "Sell your gold and silver jewellery for instant cash at Jaya Gold Buyers",
    theme: "coral",
    title: ["Bengaluru's", "Trusted Gold & Silver", "Destination!"],
    sub: ["Pledge · Release · Buy · Sell", "Fair Value. Transparent Service."],
    cta: null,
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
            {s.full ? (
              <>
                <span className="hero-banner-bg" aria-hidden="true" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="hero-banner" src={s.img} alt={s.alt} />
                {s.overlay && (
                  <div className="hero-banner-copy">
                    {s.overlay.map((line, j) => (
                      <span key={j}>
                        {j === s.overlay!.length - 1 ? <b>{line}</b> : line}
                        {j < s.overlay!.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="hero-model" src={s.img} alt={s.alt} />
                <div className="hero-copy">
                  <h1>
                    {s.title?.map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < (s.title?.length ?? 0) - 1 && <br />}
                      </span>
                    ))}
                  </h1>
                  <p className="hero-sub">
                    {s.sub?.map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < (s.sub?.length ?? 0) - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  {s.cta && (
                    <a className="btn btn-outline hero-cta" href={s.cta.href}>
                      {s.cta.label}
                    </a>
                  )}
                </div>
              </>
            )}
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
