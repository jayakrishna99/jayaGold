"use client";
import { useEffect, useState } from "react";

const MIN_SHOW_MS = 1800;

export default function Loader() {
  const [phase, setPhase] = useState<"show" | "fade" | "gone">("show");

  useEffect(() => {
    const start = Date.now();
    let t1: ReturnType<typeof setTimeout>, t2: ReturnType<typeof setTimeout>;
    const finish = () => {
      const wait = Math.max(0, MIN_SHOW_MS - (Date.now() - start));
      t1 = setTimeout(() => {
        setPhase("fade");
        t2 = setTimeout(() => {
          setPhase("gone");
          window.dispatchEvent(new Event("jaya:loader-done"));
        }, 700);
      }, wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div className={`loader${phase === "fade" ? " fade" : ""}`} aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-brand" role="img" aria-label="Jaya Gold Buyers — Loading">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="loader-logo" src="/img/images/elephentwithoutbg.gif" alt="Jaya Gold Buyers" />
        </div>
      </div>
    </div>
  );
}
