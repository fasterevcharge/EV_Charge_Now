"use client";

import { motion } from "motion/react";
import { ticker } from "@/content/site";

export default function Marquee() {
  const loop = [...ticker, ...ticker];
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <span key={i} className="marquee-item">
            {t} <span className="marquee-bolt" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
