"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  caption?: string;
};

export default function RevealImage({
  src,
  alt,
  width,
  height,
  className = "",
  caption,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <motion.div
      ref={ref}
      className={`reveal-image ${className}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="reveal-image-mask"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1] }}
      >
        <motion.div className="reveal-image-inner" style={{ scale: imgScale }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </motion.div>
      </motion.div>
      {caption && <span className="reveal-image-caption">{caption}</span>}
    </motion.div>
  );
}
