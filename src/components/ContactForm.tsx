"use client";
import { useState, FormEvent } from "react";
import { CONFIG } from "@/lib/config";

/** General enquiry form for the Contact section — POSTs to the /api/lead backend route. */
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const get = (n: string) =>
      (f.elements.namedItem(n) as HTMLInputElement | null)?.value ?? "";
    const payload = {
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      ctype: "Contact Enquiry",
      message: get("message"),
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      f.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="quote-card">
      <h3>Send Us a Message</h3>
      <p className="small">
        Fill out the contact form below, and we&apos;ll get back to you as
        soon as possible.
      </p>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Your name" required />
        </div>
        <div className="form-row">
          <div className="field">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="10-digit mobile" required />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="you@example.com" />
          </div>
        </div>
        <div className="field">
          <label>Message</label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="How can we help you?"
          />
        </div>
        <button
          className="btn btn-primary btn-lg"
          style={{ width: "100%" }}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        <p className="form-note">
          Your trust is our priority. We look forward to serving you at Jaya
          Gold Buyers.
        </p>
        {status === "ok" && (
          <div className="form-msg ok">
            Thank you! Your message has been received. Our team will get back
            to you shortly.
          </div>
        )}
        {status === "error" && (
          <div className="form-msg" style={{ background: "#fdecec", color: "#b60f15" }}>
            Something went wrong. Please call us at {CONFIG.phoneDisplay}.
          </div>
        )}
      </form>
    </div>
  );
}
