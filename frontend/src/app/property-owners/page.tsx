import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/sections/PageHero";
import SplitSection from "@/components/sections/SplitSection";
import ContentBlock from "@/components/sections/ContentBlock";
import CTABand from "@/components/sections/CTABand";
import Marquee from "@/components/layout/Marquee";
import { propertyOwners } from "@/content/site";

export const metadata: Metadata = {
  title: "Property Owners — EV ChargeNow",
  description: propertyOwners.hero.subtitle,
};

const IMAGES = ["/solar-canopy.png", "/station-signage.png", "/station-night.png"];

export default function PropertyOwnersPage() {
  const [revenue, foot, appeal] = propertyOwners.benefits;
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

      <SplitSection
        image={{ src: IMAGES[0], alt: "Solar canopy charging" }}
      >
        <ContentBlock
          eyebrow={revenue.eyebrow}
          title={revenue.title}
          body={revenue.body}
        />
      </SplitSection>

      <SplitSection
        reverse
        image={{ src: IMAGES[1], alt: "Drivers engaging with stations" }}
      >
        <ContentBlock
          eyebrow={foot.eyebrow}
          title={foot.title}
          body={foot.body}
          bullets={foot.bullets}
        />
      </SplitSection>

      <SplitSection
        image={{ src: IMAGES[2], alt: "Branded modern charging hub" }}
      >
        <ContentBlock
          eyebrow={appeal.eyebrow}
          title={appeal.title}
          body={appeal.body}
          bullets={appeal.bullets}
        />
      </SplitSection>

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
