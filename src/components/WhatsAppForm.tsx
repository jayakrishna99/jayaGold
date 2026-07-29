"use client";
import { useState, FormEvent, ReactNode } from "react";
import { waLink } from "@/lib/config";

type Props = {
  title: string;
  subtitle?: string;
  submitLabel?: string;
  fields?: ReactNode; // custom fields override
  note?: string;
  variant?: "card" | "bare";
};

/**
 * Generic WhatsApp lead form. Collects name/phone/city/item/weight and opens
 * WhatsApp with a prefilled message.
 */
export default function WhatsAppForm({
  title,
  subtitle,
  submitLabel = "Get My Quote on WhatsApp →",
  note = "By submitting you agree to be contacted about your enquiry.",
  variant = "card",
}: Props) {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const get = (n: string) =>
      (f.elements.namedItem(n) as HTMLInputElement | null)?.value ?? "";

    const name = get("name");
    const phone = get("phone");
    const city = get("city");
    const item = get("item");
    const weight = get("weight");

    let msg = "Hello Jaya Gold Buyers! I want to sell my gold.\n";
    if (name) msg += `Name: ${name}\n`;
    if (phone) msg += `Phone: ${phone}\n`;
    if (city) msg += `City: ${city}\n`;
    if (item) msg += `Item: ${item}\n`;
    if (weight) msg += `Approx weight: ${weight} g\n`;
    msg += "Please share the best rate.";

    window.open(waLink(msg), "_blank", "noopener");
    setDone(true);
    f.reset();
  }

  const Inner = (
    <>
      <h3>{title}</h3>
      {subtitle && <p className="small">{subtitle}</p>}
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
            <label>City</label>
            <select name="city" defaultValue="Bangalore">
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Kochi</option>
              <option>Hyderabad</option>
              <option>Vijayawada</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label>Item</label>
            <select name="item" defaultValue="Gold Jewellery">
              <option>Gold Jewellery</option>
              <option>Gold Coins/Bars</option>
              <option>Silver</option>
              <option>Pledged/Pawned Gold</option>
            </select>
          </div>
          <div className="field">
            <label>Approx. Weight (g)</label>
            <input type="number" name="weight" placeholder="e.g. 25" min="0" />
          </div>
        </div>
        <button className="btn btn-primary btn-lg" style={{ width: "100%" }}>
          {submitLabel}
        </button>
        {note && <p className="form-note">{note}</p>}
        {done && (
          <div className="form-msg ok">
            Opening WhatsApp… we&apos;ll respond right away.
          </div>
        )}
      </form>
    </>
  );

  if (variant === "bare") return Inner;
  return <div className="quote-card">{Inner}</div>;
}
