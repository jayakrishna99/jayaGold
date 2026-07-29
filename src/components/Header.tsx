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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-logo" src="/img/images/Logo-01.png" alt="Jaya Gold Buyers" />
        </a>
        <div className="nav-cta">
          <a className="nav-state" href="/#contact">Karnataka | Keralam</a>
          <a className="btn btn-primary" href={`tel:${CONFIG.phone}`}>
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
