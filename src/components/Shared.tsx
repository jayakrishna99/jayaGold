import Link from "next/link";
import { CONFIG, waLink } from "@/lib/config";
import WaIcon from "@/components/WaIcon";

export function PageHero({
  crumb,
  title,
  sub,
  back = false,
}: {
  crumb: string;
  title: string;
  sub: string;
  back?: boolean;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        {back && (
          <Link className="back-link page-hero-back" href="/">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
        )}
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
          <a className="btn btn-primary btn-lg" href={`tel:${CONFIG.phone}`}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 5c0 8.28 6.72 15 15 15a2 2 0 0 0 2-2v-2.3a1 1 0 0 0-.76-.97l-3.9-.98a1 1 0 0 0-1 .34l-1.1 1.35a12 12 0 0 1-5.35-5.35l1.35-1.1a1 1 0 0 0 .34-1l-.98-3.9A1 1 0 0 0 8.3 3H6a2 2 0 0 0-2 2Z" />
            </svg>
            Call {CONFIG.phoneDisplay}
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
