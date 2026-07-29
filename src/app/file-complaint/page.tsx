import type { Metadata } from "next";
import ComplaintForm from "@/components/ComplaintForm";
import { PageHero } from "@/components/Shared";

export const metadata: Metadata = {
  title: "File a Complaint | Jaya Gold Buyers",
  description:
    "Not satisfied with your experience? File a complaint with Jaya Gold Buyers and we'll make it right.",
};

export default function FileComplaint() {
  return (
    <>
      <PageHero
        back
        crumb="File a Complaint"
        title="File a Complaint"
        sub="Your feedback helps us serve you better. Tell us what went wrong and we'll resolve it quickly."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 640 }}>
          <ComplaintForm />
        </div>
      </section>
    </>
  );
}
