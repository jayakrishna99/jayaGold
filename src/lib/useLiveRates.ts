"use client";
import { useEffect, useState } from "react";
import { BASE_RATES } from "./config";

export type Rates = { g24: number; g22: number; g18: number; silver: number };

/**
 * Simulated "live" gold-rate feed: applies a small deterministic ±0.4% drift
 * every 15s so the board feels live without an external API. Swap the body of
 * refresh() with a fetch() to a real gold-price API for production.
 */
export function useLiveRates() {
  const [rates, setRates] = useState<Rates>(BASE_RATES);
  const [updated, setUpdated] = useState<string>("");

  useEffect(() => {
    let tick = 0;
    const drift = (base: number, seed: number) =>
      Math.round(base + Math.sin((tick + seed) * 1.3) * base * 0.004);

    const refresh = () => {
      tick++;
      setRates({
        g24: drift(BASE_RATES.g24, 1),
        g22: drift(BASE_RATES.g22, 2),
        g18: drift(BASE_RATES.g18, 3),
        silver: drift(BASE_RATES.silver, 4),
      });
      setUpdated(new Date().toLocaleTimeString("en-IN"));
    };

    refresh();
    const id = setInterval(refresh, 15000);
    return () => clearInterval(id);
  }, []);

  return { rates, updated };
}

export const fmt = (n: number) => "₹" + n.toLocaleString("en-IN");
