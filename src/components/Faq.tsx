"use client";
import { useState } from "react";

export type QA = { q: string; a: string; points?: string[] };

export default function Faq({
  items,
  initialCount,
}: {
  items: QA[];
  /** When set, only the first N questions show until "Show more" is clicked. */
  initialCount?: number;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const [expanded, setExpanded] = useState(false);

  const collapsible = initialCount != null && items.length > initialCount;
  const visible = collapsible && !expanded ? items.slice(0, initialCount) : items;

  return (
    <>
      {visible.map((item, i) => (
        <div className={`faq-item${open === i ? " open" : ""}`} key={i}>
          <button
            className="faq-q"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q} <span className="plus">+</span>
          </button>
          <div className="faq-a">
            <p>{item.a}</p>
            {item.points && (
              <ul>
                {item.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
      {collapsible && (
        <button
          className="faq-showmore"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more"}
          <span className="faq-showmore-ic" aria-hidden="true">
            {expanded ? "−" : "+"}
          </span>
        </button>
      )}
    </>
  );
}
