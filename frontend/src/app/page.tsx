import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import RevealText from "@/components/RevealText";
import CursorBolt from "@/components/CursorBolt";
import MagneticButton from "@/components/MagneticButton";
import Pillars from "@/components/Pillars";

export default function Home() {
  return (
    <>
      <CursorBolt />
      <Header floating />
      <Hero />
      <Marquee />

      <Pillars />

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
          <div className="photo-card floating">
            <Image
              src="/charger-hardware.jpg"
              alt="Faster EV Charge Now station"
              width={900}
              height={1100}
              priority={false}
            />
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
              <li>Integrated PowerAds digital signage on every station.</li>
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
          <div className="photo-card floating">
            <Image
              src="/poweradds-catalog.png"
              alt="PowerAds integrated digital signage on Faster EV stations"
              width={1200}
              height={900}
            />
          </div>
        </div>
      </section>

      <section className="section dark reliability">
        <div className="container two-col reverse">
          <div>
            <RevealText as="h2" className="big">
              Solar-ready, grid-smart.
            </RevealText>
            <RevealText as="p" delay={0.2}>
              From solar carports to grid-balanced fleet hubs, Faster
              integrates renewable energy into every deployment — so your
              stations stay online and your bills stay low.
            </RevealText>
            <ul className="bullet-list">
              <li>Solar-integrated carports and canopies.</li>
              <li>Battery-buffered fast charging.</li>
              <li>Smart load management across the site.</li>
            </ul>
          </div>
          <div className="photo-card floating">
            <Image
              src="/solar-carport.png"
              alt="Solar carport with EV chargers"
              width={1200}
              height={800}
            />
          </div>
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
