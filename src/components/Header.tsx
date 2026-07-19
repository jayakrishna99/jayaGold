"use client";
import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="container nav">
        <a className="brand" href="/#top" aria-label="Jaya Gold Buyers">
          <span className="brand-word">JAYA</span>
          <span className="brand-sub">Gold Buyers</span>
        </a>
        <div className="nav-cta">
          <span className="nav-state">Karnataka</span>
          <a className="btn btn-primary" href={`tel:${CONFIG.phone}`}>
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
