import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/sections/PageHero";
import ContentBlock from "@/components/sections/ContentBlock";
import SplitSection from "@/components/sections/SplitSection";
import CTABand from "@/components/sections/CTABand";
import RevealText from "@/components/motion/RevealText";
import { about, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "About — EV ChargeNow",
  description: about.hero.subtitle,
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        backgroundImage="/station-night.png"
        backgroundAlt="Charging hub at night"
      />

      <section className="section dark">
        <div className="container narrow">
          <span className="eyebrow">{about.story.eyebrow}</span>
          <RevealText as="h2" className="big">
            {about.story.title}
          </RevealText>
          <div className="story-paragraphs">
            {about.story.paragraphs.map((p, i) => (
              <RevealText as="p" key={i} delay={0.1 + i * 0.1}>
                {p}
              </RevealText>
            ))}
          </div>
        </div>
      </section>

      <SplitSection image={{ src: "/solar-canopy.png", alt: "Solar canopy hub" }}>
        <ContentBlock
          eyebrow={about.mission.eyebrow}
          title={about.mission.title}
          body={about.mission.body}
        />
      </SplitSection>

      <SplitSection reverse image={{ src: "/station-signage.png", alt: "Live station signage" }}>
        <ContentBlock
          eyebrow={about.vision.eyebrow}
          title={about.vision.title}
          body={about.vision.body}
        />
      </SplitSection>

      <CTABand
        title="Help us build the network."
        cta={{ label: "Contact Our Team", href: `mailto:${contact.email}` }}
      />
    </PageShell>
  );
}
