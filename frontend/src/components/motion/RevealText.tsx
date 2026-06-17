"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Props = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
};

export default function RevealText({
  children,
  className = "",
  as = "h2",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const words = children.split(" ");

  const MotionTag = motion[as] as typeof motion.h2;

  return (
    <div ref={ref} className={`reveal-wrap ${className}`}>
      <MotionTag aria-label={children} className="reveal-text">
        {words.map((w, i) => (
          <span key={i} className="reveal-word">
            <motion.span
              initial={{ y: "110%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + i * 0.06,
              }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </MotionTag>
    </div>
  );
}
