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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="brand-logo" src="/img/images/Logo-01.png" alt="Jaya Gold Buyers" />
            </div>
            <p>
              Jaya Gold Buyers is Bengaluru&apos;s trusted destination for
              buying, selling, and releasing gold &amp; silver with
              transparent valuation and instant secure payments.
            </p>
            <div className="socials">
              <a
                href="https://www.facebook.com/profile.php?id=61575721376736&sk=reels_tab"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jayagoldbuyers/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#sell-gold">Live Gold Rate</a></li>
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
              <li>📍 Address: opposite Joy alukkas, 4th Block, Jayanagar, Bengaluru, Karnataka 560011</li>
              <li>📞 <a href="tel:+919108959886">+91 91089 59886</a></li>
              <li>✉️ <a href="mailto:info@jayagoldbuyers.com">info@jayagoldbuyers.com</a></li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Jaya+Gold+Buyers/@12.9262579,77.5856737,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae151d05f34d93:0x47662da8b66cfe2b!8m2!3d12.9262579!4d77.5856737!16s%2Fg%2F11x5ypxggc?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📍 Location &amp; Reviews
                </a>
              </li>
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
