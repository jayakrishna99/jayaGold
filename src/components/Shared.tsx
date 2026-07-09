import Link from "next/link";
import { CONFIG, waLink } from "@/lib/config";
import WaIcon from "@/components/WaIcon";

export function PageHero({
  crumb,
  title,
  sub,
}: {
  crumb: string;
  title: string;
  sub: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link> / {crumb}
        </div>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="section cta-band">
      <div className="container">
        <h2>Ready to Turn Your Gold into Cash?</h2>
        <p>Call now or drop us a WhatsApp — get today&apos;s best rate in seconds.</p>
        <div className="hero-btns">
          <a className="btn btn-yellow btn-lg" href={`tel:${CONFIG.phone}`}>
            📞 Call {CONFIG.phoneDisplay}
          </a>
          <a
            className="btn btn-wa btn-lg"
            href={waLink("Hi Jaya Gold Buyers, I'd like a quote to sell my gold.")}
            target="_blank"
            rel="noopener"
          >
            <WaIcon /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
