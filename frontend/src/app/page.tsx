import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Marquee from "@/components/layout/Marquee";

import Hero from "@/components/sections/Hero";
import Pillars from "@/components/sections/Pillars";
import SplitSection from "@/components/sections/SplitSection";
import ContentBlock from "@/components/sections/ContentBlock";
import CTABand from "@/components/sections/CTABand";

import Parallax from "@/components/motion/Parallax";

import { home } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Header floating />
      <Hero />
      <Marquee />

      {/* Charging Made Simple */}
      <SplitSection
        image={{ src: "/station-night.png", alt: "Tap-to-pay charging station at dusk" }}
      >
        <ContentBlock
          eyebrow={home.simple.eyebrow}
          title={home.simple.title}
          bullets={home.simple.bullets}
        />
      </SplitSection>

      {/* Full-bleed parallax: branded night station */}
      <Parallax
        src="/station-night.png"
        alt="Faster station at night"
        height="90vh"
        align="left"
      >
        <span className="parallax-eyebrow">{home.fast.eyebrow}</span>
        <h2 className="parallax-title">
          Up to <em>360 kW.</em><br />
          0–80% in 22 min.
        </h2>
        <p className="parallax-sub">{home.fast.body}</p>
      </Parallax>

      <Pillars />

      {/* Two-sides cards */}
      <section className="section dark">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">{home.twoSides.eyebrow}</span>
            <h2 className="pillars-title">{home.twoSides.title}</h2>
          </div>
          <div className="two-sides-grid">
            {home.twoSides.cards.map((card) => (
              <a key={card.title} href={card.href} className="two-sides-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="card-cta">{card.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PowerAds / Signage parallax — uses the signage image artistically */}
      <SplitSection
        reverse
        image={{ src: "/station-signage.png", alt: "Station signage showing live metrics" }}
      >
        <ContentBlock
          eyebrow={home.mission.eyebrow}
          title={home.mission.title}
          body={home.mission.body}
        />
      </SplitSection>

      <Parallax
        src="/solar-canopy.png"
        alt="Solar canopy charging station at golden hour"
        height="80vh"
        align="right"
      >
        <span className="parallax-eyebrow">{home.vision.eyebrow}</span>
        <h2 className="parallax-title">
          Charging as <em>intuitive</em><br />
          as parking.
        </h2>
        <p className="parallax-sub">{home.vision.body}</p>
      </Parallax>

      <Marquee />

      <CTABand
        title="Ready to charge faster?"
        body="Whether you drive, host, or partner — EV ChargeNow makes it simple."
        cta={{ label: "Get in Touch", href: "/get-in-touch" }}
      />

      <Footer />
    </>
  );
}
