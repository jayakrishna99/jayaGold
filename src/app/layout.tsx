import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMenu from "@/components/StickyMenu";

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
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <StickyMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
