"use client";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    img: "/img/hero-model.jpg",
    alt: "Sell your gold and silver jewellery for instant cash at Jaya Gold Buyers",
    theme: "coral",
    title: ["Bengaluru's", "Trusted Gold & Silver", "Destination!"],
    sub: ["Pledge · Release · Buy · Sell", "Fair Value. Transparent Service."],
    cta: null,
  },
  {
    img: "/img/hero-slide2.jpg",
    alt: "Check the live gold and silver rate at Jaya Gold Buyers",
    theme: "coral",
    title: ["Check Live", "Gold & Silver Rate"],
    sub: ["Guaranteed rate across", "all our Bengaluru branches."],
    cta: { label: "Check Gold Rate", href: "#live-rate" },
  },
  {
    img: "/img/hero-slide3.jpg",
    alt: "Why choose Jaya Gold Buyers",
    theme: "dark",
    title: ["Why", "Jaya Gold Buyers?"],
    sub: ["Fair value, certified testing and", "instant payment — every time."],
    cta: { label: "Know More", href: "#why" },
  },
] as const;

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
            className={`hero-slide${i === active ? " active" : ""}`}
            key={s.img}
            aria-hidden={i !== active}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-model" src={s.img} alt={s.alt} />
            <div className="hero-copy">
              <h1>
                {s.title.map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < s.title.length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p className="hero-sub">
                {s.sub.map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < s.sub.length - 1 && <br />}
                  </span>
                ))}
              </p>
              {s.cta && (
                <a className="btn btn-outline hero-cta" href={s.cta.href}>
                  {s.cta.label}
                </a>
              )}
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
