"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import VideoBackground from "./VideoBackground";
import MagneticButton from "@/components/motion/MagneticButton";
import { brand, home } from "@/content/site";

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

      <motion.div className="hero-center" style={{ y, opacity, scale }}>
        <motion.h1
          className="wordmark"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/wordmark.png"
            alt={brand.name}
            width={1600}
            height={267}
            priority
            className="wordmark-img"
          />
        </motion.h1>

        <motion.div
          className="hero-headline-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
        >
          <h2 className="hero-headline">{home.hero.title}</h2>
          <p className="hero-sub">{home.hero.subtitle}</p>
        </motion.div>

        <motion.div
          className="hero-cta-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <MagneticButton href={home.hero.primaryCta.href} className="cta-magnetic">
            {home.hero.primaryCta.label}
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
