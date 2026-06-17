"use client";

import { motion } from "motion/react";

const ITEMS = [
  "⚡ 250 KW DC FAST",
  "24/7 DRIVER SUPPORT",
  "AI-POWERED FLEET OPS",
  "NATIONWIDE NETWORK",
  "OCPP COMPLIANT",
  "ZERO-DOWNTIME UPTIME",
  "REAL-TIME ANALYTICS",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <span key={i} className="marquee-item">
            {t} <span className="marquee-bolt">⚡</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
