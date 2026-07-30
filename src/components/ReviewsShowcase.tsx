"use client";
import { useEffect, useState } from "react";

type Slide = {
  av: string;
  name: string;
  city: string;
  quote: string;
  caption: string;
  img: string;
  pos: string;
};

const SLIDES: Slide[] = [
  { av: "R", name: "Ramesh K.", city: "Bangalore", quote: "Got ₹8,000 more than the shop next door!", caption: "SOLD IN 15 MINUTES!", img: "/img/images/Ratings-01.png", pos: "22% 12%" },
  { av: "S", name: "Sowmya P.", city: "Chennai", quote: "They released my pledged gold the same day.", caption: "PLEDGE RELEASED FAST!", img: "/img/images/Ratings-02.png", pos: "18% 22%" },
  { av: "A", name: "Anil M.", city: "Kochi", quote: "Doorstep pickup, fair rate, zero hassle.", caption: "SOLD FROM HOME!", img: "/img/images/Ratings-03.png", pos: "20% 15%" },
  { av: "K", name: "Kavya S.", city: "Vijayawada", quote: "Live rate tracking made it easy to decide.", caption: "BEST RATE IN TOWN!", img: "/img/images/Ratings-04.png", pos: "78% 30%" },
];

const STATS: [string, string][] = [
  ["50k+", "Happy Customers"],
  ["6", "Branches & Growing"],
  ["4.9★", "Average Rating"],
];

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.9 29.6 4.8 24 4.8c-7.5 0-14 4.2-17.3 10.4Z" />
      <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.6c-2.1 1.4-4.8 2.2-7.7 2.2-5.2 0-9.6-3.3-11.2-7.9l-6.5 5c3.2 6.4 9.9 10.9 17.7 10.9Z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.6 5.6C41.4 36 44 30.5 44 24c0-1.3-.1-2.7-.4-3.5Z" />
    </svg>
  );
}

const N = SLIDES.length;
const posClass = ["pos-m2", "pos-m1", "pos-0", "pos-p1", "pos-p2"];

export default function ReviewsShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % N), 4000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (i: number) => setActive(((i % N) + N) % N);

  return (
    <section className="section bg-cream-deep" id="reviews">
      <div className="container">
        <div className="rate-wrap reviews-grid">
          <div className="reviews-intro">
            <h2 className="reviews-title">
              Real Customers,
              <br />
              Real Experiences.
            </h2>

            <div className="reviews-trust">
              <h3 className="reviews-trust-title">
                Trusted by Customers.
                <br />
                Valued for Transparency.
              </h3>
              <p className="lead">
                Whether you&apos;re selling old gold, releasing jewellery, or
                exchanging precious metals, our commitment remains the
                same&mdash;to provide a transparent, respectful, and
                rewarding experience every time you visit Jaya Gold Buyers.
              </p>
              <p className="trust-tagline">
                Experience the difference. Visit Jaya Gold Buyers today.
              </p>
            </div>

            <div className="reviews-stats">
              {STATS.map(([n, l]) => (
                <div className="stat-box" key={l}>
                  <b>{n}</b>
                  <span>{l}</span>
                </div>
              ))}
            </div>

            <a
              className="google-badge"
              href="https://www.google.com/maps/place/Jaya+Gold+Buyers/@12.9262579,77.5856737,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae151d05f34d93:0x47662da8b66cfe2b!8m2!3d12.9262579!4d77.5856737!16s%2Fg%2F11x5ypxggc?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleIcon />
              <span>
                <b>4.9</b> <span className="google-stars">★★★★★</span>
                <small>93 Google Reviews</small>
              </span>
            </a>
          </div>

          <div
            className="reviews-stack"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <button
              type="button"
              className="story-nav story-nav-prev"
              aria-label="Previous review"
              onClick={() => go(active - 1)}
            >
              <ChevronIcon dir="left" />
            </button>

            {SLIDES.map((s, i) => {
              let diff = i - active;
              if (diff > N / 2) diff -= N;
              if (diff < -N / 2) diff += N;
              const cls = posClass[diff + 2];
              const isMain = diff === 0;
              return (
                <div
                  key={s.name}
                  className={`story-card ${cls}${isMain ? " story-main" : ""}`}
                  onClick={() => !isMain && go(i)}
                  role={!isMain ? "button" : undefined}
                  aria-label={!isMain ? `Show review from ${s.name}` : undefined}
                >
                  <img src={s.img} alt={`${s.name}, ${s.city}`} style={{ objectPosition: s.pos }} />
                  {isMain ? (
                    <div className="story-progress" />
                  ) : (
                    <div className="story-shade" />
                  )}
                </div>
              );
            })}

            <button
              type="button"
              className="story-nav story-nav-next"
              aria-label="Next review"
              onClick={() => go(active + 1)}
            >
              <ChevronIcon dir="right" />
            </button>

            <div className="story-dots">
              {SLIDES.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  className={`story-dot${i === active ? " active" : ""}`}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
