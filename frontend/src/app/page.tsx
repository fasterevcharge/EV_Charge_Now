import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Your all-in-one partner in EV charging</h1>
            <p>
              Deploy a charging solution that fits your organizational goals —
              from first installation to nationwide scale.
            </p>
            <div className="hero-ctas">
              <Link href="#contact" className="cta-primary">
                Connect With an Expert
              </Link>
              <Link href="#products" className="cta-ghost">
                Explore Products →
              </Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-shape" />
            <div className="bolt">⚡</div>
          </div>
        </div>
        <div className="hero-stripe" aria-hidden="true" />
      </section>

      <section className="section" id="what-we-do">
        <div className="container two-col">
          <div>
            <span className="eyebrow">⚡ What we do</span>
            <h2>We simplify your transition to electric.</h2>
            <p>
              With more charging ports deployed than anyone in the industry, we
              bring unmatched expertise and a complete portfolio of reliable
              hardware, intelligent software and dependable services — delivering
              an EV charging solution tailored for your organization.
            </p>
          </div>
          <div className="grid-decoration" aria-hidden="true">
            <div className="dot" />
            <div className="plus">+</div>
            <div className="dot accent" />
            <div className="plus">+</div>
            <div className="dot" />
            <div className="dot accent" />
            <div className="plus">+</div>
            <div className="dot" />
            <div className="plus accent">+</div>
          </div>
        </div>
      </section>

      <section className="section alt" id="how-we-work">
        <div className="container two-col reverse">
          <div>
            <span className="eyebrow">⚡ How we work with you</span>
            <h2>We are charging solution enablers.</h2>
            <p>
              Whether you’re looking to attract drivers to your place of
              business, operate a fleet at maximum efficiency, or build a
              charging business of your own — Faster EV Charge Now helps you
              deliver a world-class EV charging program.
            </p>
            <Link href="#contact" className="cta-primary">
              Connect With an Expert
            </Link>
          </div>
          <div className="circuit" aria-hidden="true" />
        </div>
      </section>

      <section className="section innovation">
        <div className="container two-col">
          <div>
            <h2>Innovation at our core</h2>
            <p>
              We engineer the most advanced EVSE technology from the ground up,
              giving you fully integrated systems optimized for performance and
              value.
            </p>
            <ul className="bullet-list">
              <li>Unified EV charge management at any scale.</li>
              <li>
                Software that goes beyond OCPP — Waitlist, AI automation, Fleet
                Operations.
              </li>
              <li>
                Co-developed technology that defines the future of the industry.
              </li>
            </ul>
            <div className="quote-card">
              <p>
                “It’s amazing to be able to log in, put in the metrics I want to
                pull, and see live data on our portfolio of stations.”
              </p>
              <div className="quote-author">
                <strong>Laurie LeLuck</strong>
                <span>Global Director, Corporate Real Estate</span>
              </div>
            </div>
          </div>
          <div className="image-card dashboard" aria-hidden="true" />
        </div>
      </section>

      <section className="section reliability">
        <div className="container two-col reverse">
          <div>
            <h2>End-to-end reliability</h2>
            <p>
              Trust underpins customer success — and we deliver it through
              complimentary 24/7 driver support and expert guidance for
              everything from site walks to long-term program optimization.
            </p>
            <ul className="bullet-list">
              <li>24/7 driver support included.</li>
              <li>Expert-led site walks and installations.</li>
              <li>Long-term program optimization.</li>
            </ul>
          </div>
          <div className="image-card fleet" aria-hidden="true" />
        </div>
      </section>

      <section className="section driver">
        <div className="container two-col">
          <div>
            <h2>World-class driver experience</h2>
            <p>
              Connect with EV drivers when they want to charge. Reach millions
              of EV drivers and draw them to your stations via our mobile app
              and in-dash integrations.
            </p>
            <div className="hero-ctas">
              <Link href="#app" className="cta-primary">
                Get the App
              </Link>
              <Link href="#stations" className="cta-ghost">
                Find Stations →
              </Link>
            </div>
          </div>
          <div className="image-card charger" aria-hidden="true" />
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <h2>Ready to charge faster?</h2>
          <p>
            Talk to our team about deploying Faster EV Charge Now at your
            location.
          </p>
          <Link href="#contact" className="cta-primary large">
            Connect With an Expert
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
