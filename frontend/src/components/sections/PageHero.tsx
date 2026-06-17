"use client";

import { motion } from "motion/react";
import Image from "next/image";
import MagneticButton from "@/components/motion/MagneticButton";

export type CTA = { label: string; href: string };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  backgroundImage?: string;
  backgroundAlt?: string;
};

/**
 * Inner-page hero (not the cinematic homepage hero).
 * Optional background image with overlay; centered eyebrow / title / subtitle / CTAs.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  backgroundAlt = "",
}: Props) {
  return (
    <section className="page-hero">
      {backgroundImage && (
        <div className="page-hero-bg" aria-hidden="true">
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
      )}

      <div className="container page-hero-inner">
        {eyebrow && (
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          className="page-hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="page-hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            className="page-hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            {primaryCta && (
              <MagneticButton href={primaryCta.href} className="cta-magnetic">
                {primaryCta.label}
              </MagneticButton>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="cta-ghost">
                {secondaryCta.label} →
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
