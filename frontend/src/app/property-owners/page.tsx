import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/sections/PageHero";
import SplitSection from "@/components/sections/SplitSection";
import ContentBlock from "@/components/sections/ContentBlock";
import CTABand from "@/components/sections/CTABand";
import Marquee from "@/components/layout/Marquee";
import { propertyOwners } from "@/content/site";

export const metadata: Metadata = {
  title: "Property Owners — Faster EV ChargeNow",
  description: propertyOwners.hero.subtitle,
};

const IMAGES = ["/solar-canopy.png", "/station-signage.png", "/station-night.png"];

export default function PropertyOwnersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={propertyOwners.hero.eyebrow}
        title={propertyOwners.hero.title}
        subtitle={propertyOwners.hero.subtitle}
        primaryCta={propertyOwners.hero.primaryCta}
        backgroundImage="/solar-canopy.png"
        backgroundAlt="Solar canopy with EV chargers"
      />

      {propertyOwners.benefits.map((benefit, i) => (
        <SplitSection
          key={benefit.eyebrow}
          reverse={i % 2 === 1}
          image={{ src: IMAGES[i % IMAGES.length], alt: benefit.title }}
        >
          <ContentBlock
            eyebrow={benefit.eyebrow}
            title={benefit.title}
            body={benefit.body}
            bullets={"bullets" in benefit ? benefit.bullets : undefined}
          />
        </SplitSection>
      ))}

      <section className="section dark" id="partnership">
        <div className="container narrow">
          <ContentBlock
            align="center"
            eyebrow={propertyOwners.partnership.eyebrow}
            title={propertyOwners.partnership.title}
            body={propertyOwners.partnership.body}
          />
        </div>
      </section>

      <Marquee />

      <section className="section dark">
        <div className="container narrow">
          <ContentBlock
            align="center"
            eyebrow={propertyOwners.future.eyebrow}
            title={propertyOwners.future.title}
            body={propertyOwners.future.body}
          />
        </div>
      </section>

      <CTABand
        title={propertyOwners.closing}
        cta={{ label: "Partner With Us", href: "/get-in-touch?type=Property+Owner+%26+Site+Host+Partnership" }}
      />
    </PageShell>
  );
}
