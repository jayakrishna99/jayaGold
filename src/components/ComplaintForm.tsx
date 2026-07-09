"use client";
import { useState, FormEvent } from "react";
import { CONFIG } from "@/lib/config";

/** Complaint form that POSTs to the /api/lead backend route. */
export default function ComplaintForm() {
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
      city: get("city"),
      ctype: get("ctype"),
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
      <h3>Raise a Complaint</h3>
      <p className="small">
        Share the details below. Our grievance team responds within 48 hours.
      </p>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label>Full Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-row">
          <div className="field">
            <label>Phone</label>
            <input type="tel" name="phone" required />
          </div>
          <div className="field">
            <label>Branch / City</label>
            <input type="text" name="city" />
          </div>
        </div>
        <div className="field">
          <label>Complaint Type</label>
          <select name="ctype" defaultValue="Service Quality">
            <option>Service Quality</option>
            <option>Rate / Valuation</option>
            <option>Payment</option>
            <option>Staff Behaviour</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label>Describe the Issue</label>
          <textarea name="message" rows={4} required placeholder="Tell us what happened…" />
        </div>
        <button
          className="btn btn-primary btn-lg"
          style={{ width: "100%" }}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Submitting…" : "Submit Complaint"}
        </button>
        <p className="form-note">
          You can also email {CONFIG.email} or call our helpline.
        </p>
        {status === "ok" && (
          <div className="form-msg ok">
            Thank you! Your complaint has been received. Our team will contact you
            within 48 hours.
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
