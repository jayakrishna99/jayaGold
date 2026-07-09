"use client";
import { useState } from "react";
import { useLiveRates } from "@/lib/useLiveRates";
import { waLink } from "@/lib/config";
import WaIcon from "@/components/WaIcon";

const PURITY_KEY = { "24": "g24", "22": "g22", "18": "g18", silver: "silver" } as const;

export default function Calculator() {
  const { rates } = useLiveRates();
  const [weight, setWeight] = useState("10");
  const [purity, setPurity] = useState<keyof typeof PURITY_KEY>("22");

  const rate = rates[PURITY_KEY[purity]];
  const value = Math.round((parseFloat(weight) || 0) * rate);
  const display = "₹" + value.toLocaleString("en-IN");

  return (
    <div className="calc">
      <span className="eyebrow">Gold Rate Calculator</span>
      <h2 style={{ fontSize: "1.5rem", marginBottom: 6 }}>Estimate Your Payout</h2>
      <p className="lead" style={{ fontSize: ".95rem", marginBottom: 18 }}>
        Enter the weight and purity of your gold to see an instant estimate.
      </p>
      <div className="form-row">
        <div className="field">
          <label>Weight (grams)</label>
          <input
            type="number"
            min="0"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Purity</label>
          <select
            value={purity}
            onChange={(e) => setPurity(e.target.value as keyof typeof PURITY_KEY)}
          >
            <option value="24">24K Gold</option>
            <option value="22">22K Gold</option>
            <option value="18">18K Gold</option>
            <option value="silver">Silver</option>
          </select>
        </div>
      </div>
      <div className="calc-out">
        <span>Estimated Value</span>
        <div className="amt">{display}</div>
        <span>
          *Indicative — final value confirmed after live testing at branch
        </span>
      </div>
      <div className="hero-btns mt-24">
        <a
          className="btn btn-wa btn-lg"
          href={waLink(
            "Hi Jaya Gold Buyers, I checked the calculator and want to sell my gold. Please confirm the rate."
          )}
          target="_blank"
          rel="noopener"
        >
          <WaIcon /> Confirm on WhatsApp
        </a>
      </div>
    </div>
  );
}
