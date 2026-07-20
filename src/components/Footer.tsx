import Link from "next/link";
import { CONFIG } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <div className="logo-f">
              <span className="brand" aria-label="Jaya Gold Buyers">
                <span className="brand-word">JAYA</span>
                <span className="brand-sub">Gold Buyers</span>
              </span>
            </div>
            <p>
              Jaya Gold Buyers — the trusted name for selling old gold &amp;
              silver across South India. Strength You Can Trust!
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="X">𝕏</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#live-rate">Live Gold Rate</a></li>
              <li><a href="#sell-gold">Sell Gold</a></li>
              <li><a href="#release-gold">Release Pledged Gold</a></li>
              <li><a href="#refer">Refer &amp; Earn</a></li>
              <li><a href="#why">Why Jaya</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#faqs">FAQs</a></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/file-complaint">File a Complaint</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>📞 <a href={`tel:${CONFIG.phone}`}>{CONFIG.phoneDisplay}</a></li>
              <li>✉️ {CONFIG.email}</li>
              <li>📍 {CONFIG.address}</li>
              <li>🕘 {CONFIG.hours}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {year} Jaya Gold Buyers. All rights reserved. · Strength You Can
          Trust!
        </div>
      </div>
    </footer>
  );
}
