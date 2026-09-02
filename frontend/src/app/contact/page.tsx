import type { Metadata } from "next";
import { Suspense } from "react";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — EV ChargeNow",
  description: contact.hero.subtitle,
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
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
