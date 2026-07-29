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
              <img className="brand-logo" src="/img/logo-footer.png" alt="Jaya Gold Buyers" />
            </div>
            <p>
              Jaya Gold Buyers is Bengaluru&apos;s trusted destination for
              buying, selling, and releasing gold &amp; silver with
              transparent valuation and instant secure payments.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">◎</a>
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
