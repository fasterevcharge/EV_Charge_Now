"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  height?: string;
  children?: React.ReactNode;
  align?: "left" | "right" | "center";
};

export default function Parallax({
  src,
  alt,
  height = "100vh",
  children,
  align = "left",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={ref}
      className="parallax-section"
      style={{ height }}
    >
      <motion.div className="parallax-image-wrap" style={{ y, scale }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
        <div className="parallax-overlay" />
      </motion.div>
      <motion.div
        className={`parallax-content align-${align}`}
        style={{ y: textY, opacity: textOpacity }}
      >
        {children}
      </motion.div>
    </section>
  );
}
