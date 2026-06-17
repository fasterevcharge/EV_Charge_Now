"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function CursorBolt() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="cursor-bolt"
      style={{ x: sx, y: sy }}
      aria-hidden="true"
    >
      ⚡
    </motion.div>
  );
}
