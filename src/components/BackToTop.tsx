"use client";
import { useEffect, useState } from "react";

/**
 * "Back to top" button that appears once the footer scrolls into view and
 * smoothly returns the user to the top of the page.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector<HTMLElement>(".footer");
    if (!footer) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  function toTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      className={`back-to-top${visible ? " show" : ""}`}
      onClick={toTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V6" />
        <path d="M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}
