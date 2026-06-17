"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export type FeatureItem = {
  title: string;
  body: string;
  num?: string;
  icon?: React.ReactNode;
};

type Props = {
  eyebrow?: string;
  title: string;
  items: readonly FeatureItem[];
  columns?: 2 | 3 | 4;
};

/**
 * Numbered/iconed feature card grid.
 * Used for: pillars, driver benefits, three-step flow, dwell-time tiers.
 */
export default function FeatureGrid({
  eyebrow,
  title,
  items,
  columns = 4,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section dark feature-grid-section">
      <div className="container">
        <div className="section-header center">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="pillars-title">{title}</h2>
        </div>

        <div
          ref={ref}
          className={`feature-grid cols-${columns}`}
          data-columns={columns}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              whileHover={{ y: -8 }}
            >
              {item.icon && <div className="feature-icon">{item.icon}</div>}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {item.num && <span className="feature-num">{item.num}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
