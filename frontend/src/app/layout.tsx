import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faster EV Charge Now",
  description:
    "Faster EV Charge Now — your all-in-one partner in EV charging. Deploy a charging solution that fits your organizational goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
