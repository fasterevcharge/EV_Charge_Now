import type { Metadata } from "next";
import "./globals.css";
import { brand, home } from "@/content/site";

export const metadata: Metadata = {
  title: `${brand.name} — Charging Infrastructure for Everyday Destinations`,
  description: home.hero.subtitle,
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
