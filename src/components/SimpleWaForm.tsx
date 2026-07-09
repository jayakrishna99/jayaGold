"use client";
import { useState, FormEvent } from "react";
import { waLink } from "@/lib/config";

export type WaField =
  | { name: string; label: string; type?: "text" | "tel" | "number"; placeholder?: string; required?: boolean }
  | { name: string; label: string; type: "select"; options: string[] };

type Props = {
  title: string;
  subtitle?: string;
  intro: string; // first line of the WhatsApp message
  fields: WaField[];
  submitLabel: string;
  successText?: string;
};

/** Configurable WhatsApp form for pledged-gold, pickup, referral, etc. */
export default function SimpleWaForm({
  title,
  subtitle,
  intro,
  fields,
  submitLabel,
  successText = "Opening WhatsApp… we'll respond right away.",
}: Props) {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    let msg = intro + "\n";
    fields.forEach((fl) => {
      const el = f.elements.namedItem(fl.name) as
        | HTMLInputElement
        | HTMLSelectElement
        | null;
      if (el && el.value) msg += `${fl.label}: ${el.value}\n`;
    });
    window.open(waLink(msg), "_blank", "noopener");
    setDone(true);
    f.reset();
  }

  return (
    <div className="quote-card">
      <h3>{title}</h3>
      {subtitle && <p className="small">{subtitle}</p>}
      <form onSubmit={onSubmit}>
        {fields.map((fl) =>
          fl.type === "select" ? (
            <div className="field" key={fl.name}>
              <label>{fl.label}</label>
              <select name={fl.name} defaultValue={fl.options[0]}>
                {fl.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          ) : (
            <div className="field" key={fl.name}>
              <label>{fl.label}</label>
              <input
                type={fl.type || "text"}
                name={fl.name}
                placeholder={fl.placeholder}
                required={fl.required}
                min={fl.type === "number" ? 0 : undefined}
              />
            </div>
          )
        )}
        <button className="btn btn-primary btn-lg" style={{ width: "100%" }}>
          {submitLabel}
        </button>
        {done && <div className="form-msg ok">{successText}</div>}
      </form>
    </div>
  );
}
