import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import RevealText from "@/components/RevealText";
import RevealImage from "@/components/RevealImage";
import CursorBolt from "@/components/CursorBolt";
import MagneticButton from "@/components/MagneticButton";
import Pillars from "@/components/Pillars";
import Parallax from "@/components/Parallax";

export default function Home() {
  return (
    <>
      <CursorBolt />
      <Header floating />
      <Hero />
      <Marquee />

      {/* Full-bleed parallax showcase — night station hero shot */}
      <Parallax
        src="/station-night.png"
        alt="Faster EV Charge Now station at night"
        height="100vh"
        align="left"
      >
        <span className="parallax-eyebrow">⚡ A new kind of station</span>
        <h2 className="parallax-title">
          Pull in. <em>Plug in.</em><br />
          Power on.
        </h2>
        <p className="parallax-sub">
          Branded, signal-rich charging hubs designed to feel as premium as the
          cars they fuel.
        </p>
      </Parallax>

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

      {/* Innovation — digital signage image with masked reveal */}
      <section className="section dark innovation">
        <div className="container two-col">
          <div>
            <span className="eyebrow">⚡ PowerAds Signage</span>
            <RevealText as="h2" className="big">
              Every station is a billboard.
            </RevealText>
            <RevealText as="p" delay={0.2}>
              Integrated digital signage shows live station status, energy
              delivered, and CO₂ avoided — turning every charge into a story
              drivers and brands love.
            </RevealText>
            <ul className="bullet-list">
              <li>Live station metrics displayed station-side.</li>
              <li>Premium ad surface for sponsors and partners.</li>
              <li>Drivers see impact data in real time.</li>
            </ul>
            <div className="quote-card glass">
              <p>
                “Drivers stop. They look. They engage. That’s a whole new
                channel on top of the energy business.”
              </p>
              <div className="quote-author">
                <strong>Laurie LeLuck</strong>
                <span>Global Director, Corporate Real Estate</span>
              </div>
            </div>
          </div>
          <RevealImage
            src="/station-signage.png"
            alt="Faster station with PowerAds digital signage showing live stats"
            width={1400}
            height={900}
            className="floating"
            caption="LIVE · STATION 04 · 82% CHARGED"
          />
        </div>
      </section>

      {/* Solar canopy parallax */}
      <Parallax
        src="/solar-canopy.png"
        alt="Solar canopy charging station at golden hour"
        height="90vh"
        align="right"
      >
        <span className="parallax-eyebrow">⚡ Solar-Ready</span>
        <h2 className="parallax-title">
          Powered by <em>the sun.</em><br />
          Buffered by the grid.
        </h2>
        <p className="parallax-sub">
          Solar carports, battery storage, and smart load management — clean
          energy that keeps the meter spinning the right direction.
        </p>
      </Parallax>

      <section className="section dark" id="features">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">⚡ Built around drivers</span>
            <RevealText as="h2" className="big center">
              Find a station. Start a charge. Pay in seconds.
            </RevealText>
          </div>
          <div className="app-showcase">
            <RevealImage
              src="/app-mockup.png"
              alt="Faster app interface alongside a real station — find stations, fleet intelligence, seamless charging"
              width={1600}
              height={1100}
              className="full"
            />
            <div className="app-features">
              <div className="app-feature">
                <span className="app-feature-num">01</span>
                <h3>Find Stations</h3>
                <p>Locate high-speed chargers in real time, nationwide.</p>
              </div>
              <div className="app-feature">
                <span className="app-feature-num">02</span>
                <h3>Fleet Intelligence</h3>
                <p>Track energy, sessions, and spend across your fleet.</p>
              </div>
              <div className="app-feature">
                <span className="app-feature-num">03</span>
                <h3>Seamless Charging</h3>
                <p>Start, pay, and manage from one powerful app.</p>
              </div>
            </div>
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
