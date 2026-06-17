"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import VideoBackground from "./VideoBackground";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="hero-cinema" ref={ref}>
      <VideoBackground src="/hero.mp4" />

      <motion.div className="hero-top" style={{ opacity }}>
        <nav className="hero-nav">
          <a href="#about">ABOUT</a>
          <a href="#play">PLAY</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </motion.div>

      <motion.div className="hero-center" style={{ y, opacity, scale }}>
        <motion.h1
          className="wordmark"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="word">FA</span>
          <motion.span
            className="bolt-letter"
            initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            ⚡
          </motion.span>
          <span className="word">TER</span>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          EV CHARGE NOW
        </motion.p>

        <motion.div
          className="hero-cta-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <MagneticButton href="#contact" className="cta-magnetic">
            Charge Now
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div className="hero-bottom" style={{ opacity }}>
        <span className="est">EST. 2026</span>
        <span className="scroll-cue">
          SCROLL <span className="arrow">↓</span>
        </span>
      </motion.div>
    </section>
  );
}
