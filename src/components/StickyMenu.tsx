"use client";
import { useState } from "react";
import { CONFIG, waLink } from "@/lib/config";
import WaIcon from "@/components/WaIcon";

export default function StickyMenu() {
  const [open, setOpen] = useState(false); // mobile: expand action buttons
  const [waOpen, setWaOpen] = useState(false); // whatsapp mini form
  const [msg, setMsg] = useState("");

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
    <div className="sticky-menu">
      <div className="container">
        <div className="sm-card">
          <div className={`sm-actions${open ? " open" : ""}`}>
            <a className="sm-tile sm-tile-red" href="#branches" onClick={close}>
              <span className="sm-ic">📍</span>
              <span>
                Find Nearest
                <br />
                Branch
              </span>
            </a>
            <a className="sm-tile sm-tile-gold" href="#live-rate" onClick={close}>
              <span className="sm-ic">₹</span>
              <span>
                Live Gold
                <br />
                Rate
              </span>
            </a>
            <a className="sm-btn" href="#sell-gold" onClick={close}>
              Sell Gold
            </a>
            <a className="sm-btn sm-btn-light" href="#release-gold" onClick={close}>
              Release Gold
            </a>
          </div>

          <div className="sm-contact">
            <button
              className="sm-wa"
              aria-label="Send us a WhatsApp message"
              onClick={() => setWaOpen((o) => !o)}
            >
              <WaIcon size={28} />
            </button>
            <a className="sm-phone" href={`tel:${CONFIG.phone}`}>
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
