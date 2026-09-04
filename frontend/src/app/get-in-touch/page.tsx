import type { Metadata } from "next";
import { Suspense } from "react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { inquiry } from "@/content/site";

export const metadata: Metadata = {
  title: "Get in Touch — Faster EV ChargeNow",
  description: inquiry.hero.subtitle,
  robots: { index: false, follow: false },
};

export default function GetInTouchPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={inquiry.hero.eyebrow}
        title={inquiry.hero.title}
        subtitle={inquiry.hero.subtitle}
      />

      <section className="section dark">
        <div className="container narrow">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </PageShell>
  );
}
