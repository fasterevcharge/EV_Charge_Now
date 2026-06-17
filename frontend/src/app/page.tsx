import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import RevealText from "@/components/RevealText";
import CursorBolt from "@/components/CursorBolt";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <>
      <CursorBolt />
      <Header floating />
      <Hero />
      <Marquee />

      <section className="section dark" id="what-we-do">
        <div className="container two-col">
          <div>
            <span className="eyebrow">⚡ What we do</span>
            <RevealText as="h2" className="big">
              We simplify your transition to electric.
            </RevealText>
            <RevealText as="p" delay={0.2}>
              With more charging ports deployed than anyone in the industry, we
              bring unmatched expertise and a complete portfolio of reliable
              hardware, intelligent software and dependable services.
            </RevealText>
          </div>
          <div className="stat-grid">
            <div className="stat">
              <span className="stat-num">250<span className="unit">kW</span></span>
              <span className="stat-label">DC Fast Charge</span>
            </div>
            <div className="stat">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Driver Support</span>
            </div>
            <div className="stat">
              <span className="stat-num">99.9<span className="unit">%</span></span>
              <span className="stat-label">Network Uptime</span>
            </div>
            <div className="stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">Scale Ready</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" id="how-we-work">
        <div className="container two-col reverse">
          <div>
            <span className="eyebrow">⚡ How we work with you</span>
            <RevealText as="h2" className="big">
              We are charging solution enablers.
            </RevealText>
            <RevealText as="p" delay={0.2}>
              Whether you’re looking to attract drivers, operate a fleet at peak
              efficiency, or build a charging business of your own — we help you
              deliver a world-class EV charging program.
            </RevealText>
            <MagneticButton href="#contact" className="cta-magnetic small">
              Connect With an Expert
            </MagneticButton>
          </div>
          <div className="orb" aria-hidden="true">
            <div className="orb-core" />
            <div className="orb-ring" />
            <div className="orb-ring slow" />
          </div>
        </div>
      </section>

      <section className="section dark innovation">
        <div className="container two-col">
          <div>
            <RevealText as="h2" className="big">
              Innovation at our core
            </RevealText>
            <RevealText as="p" delay={0.2}>
              We engineer the most advanced EVSE technology from the ground up —
              fully integrated systems optimized for performance and value.
            </RevealText>
            <ul className="bullet-list">
              <li>Unified EV charge management at any scale.</li>
              <li>Software beyond OCPP — Waitlist, AI automation, Fleet Ops.</li>
              <li>Co-developed technology defining the future.</li>
            </ul>
            <div className="quote-card glass">
              <p>
                “It’s amazing to log in, pull the metrics I want, and see live
                data on our entire portfolio of stations.”
              </p>
              <div className="quote-author">
                <strong>Laurie LeLuck</strong>
                <span>Global Director, Corporate Real Estate</span>
              </div>
            </div>
          </div>
          <div className="image-card dashboard floating" aria-hidden="true" />
        </div>
      </section>

      <section className="section dark reliability">
        <div className="container two-col reverse">
          <div>
            <RevealText as="h2" className="big">
              End-to-end reliability
            </RevealText>
            <RevealText as="p" delay={0.2}>
              Trust underpins customer success — and we deliver it through
              complimentary 24/7 driver support and expert guidance for
              everything from site walks to long-term program optimization.
            </RevealText>
            <ul className="bullet-list">
              <li>24/7 driver support included.</li>
              <li>Expert-led site walks and installations.</li>
              <li>Long-term program optimization.</li>
            </ul>
          </div>
          <div className="image-card fleet floating" aria-hidden="true" />
        </div>
      </section>

      <section className="section dark driver">
        <div className="container two-col">
          <div>
            <RevealText as="h2" className="big">
              World-class driver experience
            </RevealText>
            <RevealText as="p" delay={0.2}>
              Connect with EV drivers when they want to charge. Reach millions
              of drivers via our mobile app and in-dash integrations.
            </RevealText>
            <div className="hero-ctas">
              <MagneticButton href="#app" className="cta-magnetic small">
                Get the App
              </MagneticButton>
              <a href="#stations" className="cta-ghost">
                Find Stations →
              </a>
            </div>
          </div>
          <div className="image-card charger floating" aria-hidden="true" />
        </div>
      </section>

      <Marquee />

      <section className="cta-band dark">
        <div className="container cta-band-inner">
          <RevealText as="h2" className="huge">
            Ready to charge faster?
          </RevealText>
          <RevealText as="p" delay={0.2}>
            Talk to our team about deploying Faster EV Charge Now at your
            location.
          </RevealText>
          <MagneticButton href="#contact" className="cta-magnetic large">
            Connect With an Expert
          </MagneticButton>
        </div>
      </section>

      <Footer />
    </>
  );
}
