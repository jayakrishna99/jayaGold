import type { Metadata } from "next";
import { CONFIG } from "@/lib/config";
import { PageHero } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Privacy Policy | Jaya Gold Buyers",
  description:
    "How Jaya Gold Buyers collects, uses and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        back
        crumb="Privacy Policy"
        title="Privacy Policy"
        sub="Your privacy matters to us. Here's how we handle your information."
      />
      <section className="section">
        <div className="container prose" style={{ maxWidth: 820 }}>
          <p><b>Last updated:</b> January 2026</p>
          <p>
            Jaya Gold Buyers (&quot;we&quot;, &quot;us&quot;) respects your
            privacy. This policy explains what information we collect and how we
            use it when you use our website or services.
          </p>
          <h3>Information We Collect</h3>
          <p>
            We collect the details you voluntarily provide through our enquiry,
            quote, pickup and referral forms — such as your name, phone number,
            city and gold details — solely to respond to your request. We may
            also collect standard analytics data (pages visited, device type) to
            improve the site.
          </p>
          <h3>How We Use It</h3>
          <p>
            Your information is used to provide quotes, arrange pickups, process
            transactions, and contact you about your enquiry. We do not sell your
            personal data to third parties.
          </p>
          <h3>WhatsApp &amp; Communication</h3>
          <p>
            When you submit a form or contact us via WhatsApp, your message is
            shared with our team to serve your request. Standard messaging service
            terms apply.
          </p>
          <h3>Data Security</h3>
          <p>
            We take reasonable measures to protect your information. Branch visits
            are conducted confidentially and CCTV footage is stored securely.
          </p>
          <h3>Your Rights</h3>
          <p>
            You may request that we update or delete your personal information at
            any time by contacting <b>{CONFIG.email}</b>.
          </p>
          <h3>Contact</h3>
          <p>
            For any privacy questions, reach us at <b>{CONFIG.email}</b> or call{" "}
            <a href={`tel:${CONFIG.phone}`}>{CONFIG.phoneDisplay}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
