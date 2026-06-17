"use client";

import { useEffect, useRef } from "react";

type Props = {
  src?: string;
  poster?: string;
};

export default function VideoBackground({
  src = "/hero.mp4",
  poster,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {
      /* autoplay can be blocked — fallback gradient shows */
    });
  }, []);

  return (
    <div className="video-bg" aria-hidden="true">
      <video
        ref={ref}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="video-overlay" />
      <div className="video-grain" />
    </div>
  );
}
