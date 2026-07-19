"use client";
import { useEffect } from "react";

/**
 * Lightweight parallax: elements tagged with data-plx (depth relative to
 * viewport centre) or data-plx-scroll (fraction of raw scroll, for the hero)
 * translate at different speeds while scrolling, creating depth.
 * Skipped on small screens and for reduced-motion users.
 */
export default function Parallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 900) return;

    type Item = { el: HTMLElement; f: number; mode: "center" | "scroll"; top: number; h: number };
    let items: Item[] = [];

    const docTop = (el: HTMLElement) => {
      let t = 0;
      let n: HTMLElement | null = el;
      while (n) {
        t += n.offsetTop;
        n = n.offsetParent as HTMLElement | null;
      }
      return t;
    };

    const collect = () => {
      items = Array.from(
        document.querySelectorAll<HTMLElement>("[data-plx], [data-plx-scroll]")
      ).map((el) => ({
        el,
        f: parseFloat(el.dataset.plx ?? el.dataset.plxScroll ?? "0"),
        mode: el.dataset.plxScroll !== undefined ? "scroll" : "center",
        top: docTop(el),
        h: el.offsetHeight,
      }));
    };

    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      const y = window.scrollY;
      for (const it of items) {
        const shift =
          it.mode === "scroll"
            ? y * it.f
            : -((it.top - y + it.h / 2) - vh / 2) * it.f;
        it.el.style.setProperty("--plx", `${shift.toFixed(1)}px`);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    const onResize = () => {
      collect();
      onScroll();
    };

    collect();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize, { once: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  }, []);

  return null;
}
