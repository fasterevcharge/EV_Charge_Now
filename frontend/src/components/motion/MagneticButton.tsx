"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
};

export default function MagneticButton({
  children,
  href = "#",
  className = "",
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    x.set(mx * strength);
    y.set(my * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`magnetic ${className}`}
    >
      <span>{children}</span>
    </motion.a>
  );
}
