"use client";
import { useState } from "react";

export type QA = { q: string; a: string };

export default function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      {items.map((item, i) => (
        <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
          <button
            className="faq-q"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q} <span className="plus">+</span>
          </button>
          <div className="faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </>
  );
}
