import { CONFIG } from "@/lib/config";

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>📍 Bangalore · Chennai · Kerala · Andhra · Telangana</span>
          <div className="tb-links">
            <a href={`tel:${CONFIG.phone}`}>📞 {CONFIG.phoneDisplay}</a>
            <a href="#live-rate">📈 Live Gold Rate</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <a className="brand" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo-horizontal.jpeg" alt="Jaya Gold Buyers" />
          </a>
          <div className="nav-cta">
            <a className="btn btn-primary" href={`tel:${CONFIG.phone}`}>
              📞 Call Now
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
