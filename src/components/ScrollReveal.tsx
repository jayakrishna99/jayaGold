"use client";
import { useEffect } from "react";

/**
 * Progressive scroll transitions: each section rises and fades in as it
 * enters the viewport. Applied via JS so the site stays fully visible
 * without JavaScript.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("section:not(.hero), .trust-strip, .footer")
    );
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    for (const el of targets) {
      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
      el.classList.add("reveal");
      if (alreadyVisible) {
        el.classList.add("in-view"); // no flicker for above-the-fold content
      } else {
        io.observe(el);
      }
    }

    return () => io.disconnect();
  }, []);

  return null;
}
