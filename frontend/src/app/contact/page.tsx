import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/sections/PageHero";
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
        <div className="container">
          <div className="contact-grid">
            {contact.cards.map((card) => (
              <div key={card.title} className="contact-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <a href={card.cta.href} className="cta-magnetic small">
                  {card.cta.label}
                </a>
              </div>
            ))}
          </div>

          <div className="contact-email-band">
            <span className="eyebrow">⚡ Direct line</span>
            <a href={`mailto:${contact.email}`} className="contact-email">
              {contact.email}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
