"use client";
import { useEffect, useState } from "react";
import { CONFIG, waLink } from "@/lib/config";
import WaIcon from "@/components/WaIcon";

function RateIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17l6-6 4 4 7-8" />
      <path d="M14 7h6v6" />
    </svg>
  );
}

function CoinsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v5.5c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 11.5V17c0 1.66 3.13 3 7 3s7-1.34 7-3v-5.5" />
    </svg>
  );
}

function UnlockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4.5" y="11" width="15" height="9" rx="2" />
      <path d="M8 11V7.5A4 4 0 0 1 15.9 6.6" />
    </svg>
  );
}

const ACTIONS = [
  { icon: <RateIcon />, label: "Live Gold Rate", href: "#live-rate" },
  { icon: <CoinsIcon />, label: "Sell Gold & Silver", href: "#sell-gold" },
  { icon: <UnlockIcon />, label: "Release Gold & Silver", href: "#release-gold" },
];

export default function StickyMenu() {
  const [show, setShow] = useState(false); // appears after scrolling past the hero
  const [open, setOpen] = useState(false); // mobile: expand action buttons
  const [waOpen, setWaOpen] = useState(false); // whatsapp mini form
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      const limit = hero ? hero.offsetHeight * 0.72 : window.innerHeight * 0.6;
      setShow(window.scrollY > limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const sendWa = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      waLink(msg.trim() || "Hi Jaya Gold Buyers, I want to sell my gold."),
      "_blank",
      "noopener"
    );
    setWaOpen(false);
    setMsg("");
  };

  return (
    <div className={`sticky-menu${show ? " show" : ""}`}>
      <div className="container">
        <div className="sm-card">
          <div className={`sm-actions${open ? " open" : ""}`}>
            {ACTIONS.map((a) => (
              <a className="sm-btn" href={a.href} key={a.href} onClick={close}>
                <span className="sm-btn-ic" aria-hidden="true">{a.icon}</span>
                <span>{a.label}</span>
              </a>
            ))}
          </div>

          <div className="sm-contact">
            <span className="sm-dots">⋮</span>
            <button
              className="sm-wa"
              aria-label="Send us a WhatsApp message"
              onClick={() => setWaOpen((o) => !o)}
            >
              <WaIcon size={24} />
            </button>
            <a className="sm-phone" href={`tel:${CONFIG.phone}`}>
              <span className="sm-phone-ic" aria-hidden="true">📞</span>
              {CONFIG.phoneDisplay}
            </a>
            <button
              className="sm-toggle"
              aria-label="More options"
              onClick={() => setOpen((o) => !o)}
            >
              ☰
            </button>
          </div>

          {waOpen && (
            <form className="sm-wa-form" onSubmit={sendWa}>
              <textarea
                autoFocus
                rows={3}
                placeholder="Your message…"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <button className="btn btn-wa" type="submit">
                Send on WhatsApp →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
