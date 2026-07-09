"use client";
import { useState, FormEvent } from "react";
import { waLink } from "@/lib/config";

/** "Get a Free Quote" button that opens a modal WhatsApp lead form. */
export default function QuoteModal({
  label = "Get a Free Quote",
  className = "btn btn-yellow btn-lg",
}: {
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const get = (n: string) =>
      (f.elements.namedItem(n) as HTMLInputElement | null)?.value ?? "";
    let msg = "Hello Jaya Gold Buyers! I want to sell my gold.\n";
    if (get("name")) msg += `Name: ${get("name")}\n`;
    if (get("phone")) msg += `Phone: ${get("phone")}\n`;
    if (get("weight")) msg += `Approx weight: ${get("weight")} g\n`;
    msg += "Please share the best rate.";
    window.open(waLink(msg), "_blank", "noopener");
    setDone(true);
    f.reset();
  }

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {label}
      </button>
      {open && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="modal">
            <button className="close" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
            <h3>Get a Free Quote</h3>
            <p className="small" style={{ color: "var(--grey)", marginBottom: 16 }}>
              We&apos;ll send your rate on WhatsApp instantly.
            </p>
            <form onSubmit={onSubmit}>
              <div className="field">
                <label>Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" name="phone" required />
              </div>
              <div className="field">
                <label>Approx. Weight (g)</label>
                <input type="number" name="weight" min="0" />
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                Send on WhatsApp →
              </button>
              {done && (
                <div className="form-msg ok">Opening WhatsApp…</div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
