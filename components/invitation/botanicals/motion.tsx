"use client";

import { motion, type Transition } from "framer-motion";
import { createContext, useContext, type ReactNode } from "react";

export const BotanicalReducedMotionContext = createContext(false);

export type BotanicalMotionProps = {
  active: boolean;
  reducedMotion: boolean;
};

type StemProps = {
  d: string;
  duration?: number;
  delay?: number;
  ease?: Transition["ease"];
  accent?: boolean;
};

type InkPathProps = {
  d: string;
  width?: number;
  accent?: boolean;
  fill?: string;
};

type AntherProps = {
  cx: number;
  cy: number;
  r?: number;
  accent?: boolean;
};

type LeafProps = {
  d: string;
  vein?: string;
  delay?: number;
  origin?: string;
  accent?: boolean;
};

type SwayProps = BotanicalMotionProps & {
  children: ReactNode;
  cycle: 4.2 | 5.7 | 6.8 | 8.1;
  delay?: number;
  origin?: string;
};

type BloomProps = SwayProps & {
  children: ReactNode;
  reveal?: "spring" | "turn" | "bud";
  revealDelay?: number;
};

const viewport = { once: true, amount: 0.25 } as const;

export function InkPath({
  d,
  width = 0.9,
  accent = false,
  fill = "none",
}: InkPathProps) {
  return (
    <path
      d={d}
      fill={fill}
      stroke={accent ? "var(--botanical-accent)" : "var(--botanical-ink)"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={width}
      vectorEffect="non-scaling-stroke"
    />
  );
}

export function Anther({ cx, cy, r = 1.1, accent = false }: AntherProps) {
  const ink = accent ? "var(--botanical-accent)" : "var(--botanical-ink)";

  return <circle cx={cx} cy={cy} fill={ink} r={r} stroke={ink} strokeWidth="0.45" />;
}

export function Stem({
  d,
  duration = 1.8,
  delay = 0,
  ease = [0.42, 0, 0.35, 1],
  accent = false,
}: StemProps) {
  const reducedMotion = useContext(BotanicalReducedMotionContext);

  return (
    <motion.path
      d={d}
      fill="none"
      initial={reducedMotion ? { opacity: 1, pathLength: 1 } : { opacity: 0.18, pathLength: 0 }}
      stroke={accent ? "var(--botanical-accent)" : "var(--botanical-ink)"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.15"
      transition={reducedMotion ? { duration: 0 } : { duration, delay, ease }}
      vectorEffect="non-scaling-stroke"
      viewport={viewport}
      whileInView={reducedMotion ? undefined : { opacity: 1, pathLength: 1 }}
    />
  );
}

export function Leaf({
  d,
  vein,
  delay = 0,
  origin = "50% 100%",
  accent = false,
}: LeafProps) {
  const reducedMotion = useContext(BotanicalReducedMotionContext);
  const stroke = accent ? "var(--botanical-accent)" : "var(--botanical-ink)";

  return (
    <motion.g
      initial={reducedMotion ? false : { opacity: 0, scale: 0.08, rotate: -9 }}
      style={{ transformBox: "fill-box", transformOrigin: origin }}
      transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 72, damping: 13, delay }}
      viewport={viewport}
      whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
    >
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.9"
        vectorEffect="non-scaling-stroke"
      />
      {vein && (
        <path
          d={vein}
          fill="none"
          opacity="0.8"
          stroke={stroke}
          strokeLinecap="round"
          strokeWidth="0.65"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </motion.g>
  );
}

export function Sway({
  active,
  reducedMotion,
  children,
  cycle,
  delay = 0,
  origin = "50% 50%",
}: SwayProps) {
  return (
    <motion.g
      animate={
        active && !reducedMotion
          ? { rotate: [-1.2, 2.1, -1.2], scale: [1, 1.03, 1] }
          : { rotate: 0, scale: 1 }
      }
      style={{ transformBox: "fill-box", transformOrigin: origin }}
      transition={{
        duration: cycle,
        delay: delay + 0.5,
        ease: "easeInOut",
        repeat: active && !reducedMotion ? Infinity : 0,
      }}
    >
      {children}
    </motion.g>
  );
}

export function Bloom({
  active,
  reducedMotion,
  children,
  cycle,
  delay = 0,
  origin = "50% 85%",
  reveal = "spring",
  revealDelay = 0,
}: BloomProps) {
  const motionPreference = useContext(BotanicalReducedMotionContext);
  const revealProps = motionPreference
    ? {
        initial: false,
        animate: { opacity: 1, scale: 1, rotate: 0 },
        transition: { duration: 0 },
      }
    :
    reveal === "turn"
      ? {
          initial: { opacity: 0, rotate: -25, scale: 0 },
          whileInView: { opacity: 1, rotate: 0, scale: [0, 1] },
          transition: {
            type: "spring" as const,
            stiffness: 60,
            damping: 12,
            delay: revealDelay,
          },
        }
      : reveal === "bud"
        ? {
            initial: { opacity: 0, scale: 0.12 },
            whileInView: { opacity: [0, 1], scale: [0.12, 1.08, 0.96, 1] },
            transition: {
              duration: 0.9,
              ease: [0.2, 0.8, 0.2, 1] as const,
              delay: revealDelay,
            },
          }
        : {
            initial: { opacity: 0, scale: 0 },
            whileInView: { opacity: 1, scale: 1 },
            transition: {
              type: "spring" as const,
              stiffness: 60,
              damping: 12,
              delay: revealDelay,
            },
          };

  return (
    <Sway
      active={active}
      cycle={cycle}
      delay={delay}
      origin={origin}
      reducedMotion={motionPreference || reducedMotion}
    >
      <motion.g
        {...revealProps}
        style={{ transformBox: "fill-box", transformOrigin: origin }}
        viewport={viewport}
      >
        {children}
      </motion.g>
    </Sway>
  );
}
