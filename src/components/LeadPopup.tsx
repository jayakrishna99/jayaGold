"use client";
import { useEffect, useState, FormEvent } from "react";

/** Lead-capture popup that opens as soon as the splash loader finishes. */
export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("jaya:loader-done", show);
    return () => window.removeEventListener("jaya:loader-done", show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const get = (n: string) =>
      (f.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | null)?.value.trim() ?? "";
    setState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          phone: get("phone"),
          email: get("email"),
          message: get("message"),
          ctype: "sell-gold-popup",
        }),
      });
      if (!res.ok) throw new Error();
      setState("done");
      setTimeout(() => setOpen(false), 2000);
    } catch {
      setState("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label="Sell gold enquiry">
        <button className="close" aria-label="Close" onClick={() => setOpen(false)}>
          ×
        </button>
        <h3>Looking to sell gold?</h3>
        <p className="small">Share your details with us.</p>
        <form onSubmit={onSubmit}>
          <div className="field">
            <label>Name *</label>
            <input type="text" name="name" required autoFocus />
          </div>
          <div className="field">
            <label>Mobile *</label>
            <input
              type="tel"
              name="phone"
              required
              inputMode="numeric"
              pattern="[0-9+\- ]{10,14}"
              title="Enter a valid 10-digit mobile number"
            />
          </div>
          <div className="field">
            <label>Email (optional)</label>
            <input type="email" name="email" />
          </div>
          <div className="field">
            <label>Tell us more (optional)</label>
            <textarea name="message" rows={3} placeholder="e.g. 20g gold jewellery, pledged gold to release…" />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn btn-ghost" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
              {state === "sending" ? "Submitting…" : "Submit"}
            </button>
          </div>
          {state === "done" && (
            <div className="form-msg ok">Thank you! We&apos;ll call you back shortly.</div>
          )}
          {state === "error" && (
            <div className="form-msg err">Something went wrong — please try again or call us.</div>
          )}
        </form>
      </div>
    </div>
  );
}
