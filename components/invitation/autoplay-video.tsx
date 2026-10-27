"use client";

import { useEffect, useRef } from "react";

type AutoplayVideoProps = {
  label: string;
  poster: string;
  src: string;
};

export function AutoplayVideo({ label, poster, src }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let isInView = false;

    const syncPlayback = () => {
      if (motionPreference.matches || document.hidden || !isInView) {
        video.pause();
        return;
      }

      void video.play().catch(() => {
        // Autoplay is browser-controlled; the poster remains available if blocked.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);
    motionPreference.addEventListener("change", syncPlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      motionPreference.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <video
      aria-label={label}
      className="aspect-[9/16] w-full rounded-2xl bg-leaf object-cover"
      controls={false}
      height={832}
      loop
      muted
      playsInline
      poster={poster}
      preload="metadata"
      ref={videoRef}
      src={src}
      width={464}
    >
      Tu navegador no puede reproducir este video.
    </video>
  );
}
