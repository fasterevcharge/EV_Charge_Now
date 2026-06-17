import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/sections/PageHero";
import SplitSection from "@/components/sections/SplitSection";
import ContentBlock from "@/components/sections/ContentBlock";
import FeatureGrid from "@/components/sections/FeatureGrid";
import CTABand from "@/components/sections/CTABand";
import Marquee from "@/components/layout/Marquee";
import { drivers, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Drivers — EV ChargeNow",
  description: drivers.hero.subtitle,
};

export default function DriversPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={drivers.hero.eyebrow}
        title={drivers.hero.title}
        subtitle={drivers.hero.subtitle}
        primaryCta={drivers.hero.primaryCta}
        backgroundImage="/station-night.png"
        backgroundAlt="EV ChargeNow station at night"
      />

      <SplitSection
        image={{ src: "/app-mockup.png", alt: "Find stations in the app" }}
      >
        <ContentBlock
          eyebrow={drivers.whereLife.eyebrow}
          title={drivers.whereLife.title}
          body={drivers.whereLife.body}
        />
      </SplitSection>

      <SplitSection
        reverse
        image={{ src: "/station-signage.png", alt: "Fast 320kW charging" }}
      >
        <ContentBlock
          eyebrow={drivers.fast.eyebrow}
          title={drivers.fast.title}
          body={drivers.fast.body}
        />
      </SplitSection>

      <section className="section dark">
        <div className="container narrow">
          <ContentBlock
            align="center"
            eyebrow={drivers.noBarriers.eyebrow}
            title={drivers.noBarriers.title}
            body={drivers.noBarriers.body}
          />
        </div>
      </section>

      <FeatureGrid
        eyebrow={drivers.benefits.eyebrow}
        title={drivers.benefits.title}
        items={drivers.benefits.items}
        columns={4}
      />

      <Marquee />

      <FeatureGrid
        eyebrow={drivers.steps.eyebrow}
        title={drivers.steps.title}
        items={drivers.steps.items}
        columns={3}
      />

      <section className="section dark" id="overlap">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">{drivers.overlap.eyebrow}</span>
            <h2 className="pillars-title">{drivers.overlap.title}</h2>
          </div>
          <div className="overlap-grid">
            {drivers.overlap.items.map((item) => (
              <div key={item.range} className="overlap-card">
                <span className="overlap-range">{item.range}</span>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Find a station near you."
        body="Locate fast, convenient charging at the places you already visit."
        cta={{ label: "Contact Our Team", href: `mailto:${contact.email}` }}
      />
    </PageShell>
  );
}
