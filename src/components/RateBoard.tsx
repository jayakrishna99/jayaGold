"use client";
import { useLiveRates, fmt } from "@/lib/useLiveRates";

export default function RateBoard({ detailed = false }: { detailed?: boolean }) {
  const { rates, updated } = useLiveRates();
  const rows: [string, string, number][] = detailed
    ? [
        ["Gold 24K", "99.9% pure", rates.g24],
        ["Gold 22K", "91.6% · hallmark", rates.g22],
        ["Gold 18K", "75.0%", rates.g18],
        ["Silver", "99.9%", rates.silver],
      ]
    : [
        ["Gold 24K", "(per gram)", rates.g24],
        ["Gold 22K", "(per gram)", rates.g22],
        ["Gold 18K", "(per gram)", rates.g18],
        ["Silver", "(per gram)", rates.silver],
      ];

  return (
    <div className="rate-board">
      <h3>
        <span className="live-dot" />{" "}
        {detailed ? (
          <>
            Live Rates{" "}
            <small style={{ opacity: 0.6, fontWeight: 400 }}>(per gram)</small>
          </>
        ) : (
          "Today's Live Gold Rate"
        )}
      </h3>
      {rows.map(([k, sub, v]) => (
        <div className="rate-row" key={k}>
          <span className="k">
            {k} <small>{sub}</small>
          </span>
          <span className="v">{fmt(v)}</span>
        </div>
      ))}
      <p className="rate-updated">
        {updated
          ? `Last updated: ${updated} · Rates indicative, confirmed at branch`
          : "Updating…"}
      </p>
    </div>
  );
}
