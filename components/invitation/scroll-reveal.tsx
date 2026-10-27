"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

let revealObserver: IntersectionObserver | null = null;

function getRevealObserver() {
  if (!("IntersectionObserver" in window)) return null;

  revealObserver ??= new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.motionVisible = "true";
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "64px 0px 64px 0px", threshold: 0.01 },
  );

  return revealObserver;
}

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  style?: CSSProperties;
  variant?:
    | "rise"
    | "portrait"
    | "opening"
    | "heading"
    | "countdown"
    | "gift"
    | "closing"
    | "signature"
    | "botanical";
};

export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  style,
  variant = "rise",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const observer = getRevealObserver();
    if (!observer) {
      element.dataset.motionVisible = "true";
      element.dataset.motionReady = "true";
      return;
    }

    const reveal = () => {
      element.dataset.motionVisible = "true";
      observer.unobserve(element);
      window.removeEventListener("scroll", revealIfVisible);
      window.removeEventListener("resize", revealIfVisible);
    };

    const revealIfVisible = () => {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.96 && bounds.bottom > 0) {
        reveal();
      }
    };

    const respectMotionPreference = () => {
      if (motionPreference.matches) {
        reveal();
      }
    };
    motionPreference.addEventListener("change", respectMotionPreference);

    const bounds = element.getBoundingClientRect();
    if (
      motionPreference.matches ||
      (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0)
    ) {
      reveal();
    } else {
      element.dataset.motionReady = "true";
      observer.observe(element);
      window.addEventListener("scroll", revealIfVisible, { passive: true });
      window.addEventListener("resize", revealIfVisible);
    }

    element.dataset.motionReady = "true";
    return () => {
      observer.unobserve(element);
      window.removeEventListener("scroll", revealIfVisible);
      window.removeEventListener("resize", revealIfVisible);
      motionPreference.removeEventListener("change", respectMotionPreference);
    };
  }, []);

  return (
    <div
      className={className}
      data-invitation-reveal
      data-motion-ready="false"
      data-motion-visible="false"
      data-motion-variant={variant}
      ref={elementRef}
      style={{ ...style, "--motion-delay": `${delayMs}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
