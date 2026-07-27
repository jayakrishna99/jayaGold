import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";
import Loader from "@/components/Loader";
import LeadPopup from "@/components/LeadPopup";
import ScrollReveal from "@/components/ScrollReveal";
import Parallax from "@/components/Parallax";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Jaya Gold Buyers | Sell Gold for Cash in Bangalore | Best Gold Buyers",
  description:
    "Jaya Gold Buyers — trusted gold buyers in Bangalore. We buy old gold & silver jewellery at the best live rates with instant cash. Strength You Can Trust!",
  openGraph: {
    title: "Sell Gold for Cash in Bangalore | Jaya Gold Buyers",
    description:
      "Instant cash for your old gold & silver. Best live rates, transparent weighing, doorstep pickup.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Aktiv Grotesk via Adobe Fonts: paste your kit link here, e.g.
            <link rel="stylesheet" href="https://use.typekit.net/XXXXXXX.css" />
            The CSS already uses font-family "aktiv-grotesk". */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader />
        <LeadPopup />
        <ScrollReveal />
        <Parallax />
        <Header />
        <StickyMenu />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
