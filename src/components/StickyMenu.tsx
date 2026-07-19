"use client";
import { useEffect, useState } from "react";
import { CONFIG, waLink } from "@/lib/config";
import WaIcon from "@/components/WaIcon";

const ACTIONS = [
  { icon: "📍", label: "Find Nearest Branch", href: "#branches" },
  { icon: "📈", label: "Live Gold Rate", href: "#live-rate" },
  { icon: "🪙", label: "Sell Gold & Silver", href: "#sell-gold" },
  { icon: "🔓", label: "Release Gold & Silver", href: "#release-gold" },
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
              <WaIcon size={26} />
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
