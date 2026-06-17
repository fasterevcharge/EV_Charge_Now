"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const PILLARS = [
  {
    title: "Fast Charging",
    body: "DC fast charging up to 250kW — top off in minutes, not hours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L4 14H11L10 22L20 9H13L13 2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Find Stations",
    body: "Locate every Faster station nationwide with live availability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21C12 21 18 14.5 18 10.5C18 7.5 15.5 5 12 5C8.5 5 6 7.5 6 10.5C6 14.5 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Proven Reliability",
    body: "99.9% uptime backed by 24/7 monitoring and expert support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M7 11V7M11 11V7M7 9H11M9 11V14C9 16.2 10.8 18 13 18H14C16.2 18 18 16.2 18 14V11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15 3L17 5L21 1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Payment",
    body: "Tap, charge, go. One card, one app — no fumbling at the plug.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M13 10H21M13 14H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="17" cy="10" r="1" fill="currentColor" />
        <circle cx="17" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Pillars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section dark pillars-section">
      <div className="container">
        <div className="pillars-header">
          <span className="eyebrow">⚡ Four Pillars</span>
          <h2 className="pillars-title">
            Built on what <em>drivers</em> actually need.
          </h2>
        </div>

        <div className="pillars-grid" ref={ref}>
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              className="pillar-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <span className="pillar-num">0{i + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
