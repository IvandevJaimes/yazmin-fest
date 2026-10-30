"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ComponentType, type CSSProperties } from "react";
import {
  type BotanicalMotionProps,
  LavenderWildflowers,
  MagnoliaEucalyptus,
  MasterArrangement,
  PeonyOlive,
  RoseLaurel,
} from "./botanicals";
import { BotanicalReducedMotionContext } from "./botanicals/motion";
import type { BotanicalPosition } from "./botanicals/types";

export type BotanicalDecorationPosition = BotanicalPosition;

export type BotanicalComposition =
  | "peony-olive"
  | "lavender-wildflowers"
  | "magnolia-eucalyptus"
  | "rose-laurel"
  | "master-arrangement";

type BotanicalDecorationProps = {
  composition: BotanicalComposition;
  position: BotanicalDecorationPosition;
  variant: "light" | "dark";
  size?: "default" | "small";
};

const positionClasses: Record<BotanicalDecorationPosition, string> = {
  "top-left": "left-0 top-0 h-48 w-64 sm:h-60 sm:w-80 lg:h-64",
  "top-right": "right-0 top-0 h-48 w-64 sm:h-60 sm:w-80 lg:h-64",
  "bottom-left": "bottom-0 left-0 h-48 w-64 sm:h-60 sm:w-80 lg:h-64",
  "bottom-right": "bottom-0 right-0 h-48 w-64 sm:h-60 sm:w-80 lg:h-64",
  "top-center": "left-1/2 top-0 h-40 w-[min(96vw,34rem)] -translate-x-1/2 sm:h-48",
  "bottom-center": "bottom-0 left-1/2 h-52 w-[min(96vw,34rem)] -translate-x-1/2 sm:h-64",
};

const smallPositionClasses: Record<BotanicalDecorationPosition, string> = {
  "top-left": "left-0 top-8 h-32 w-24 sm:top-10 sm:h-36 sm:w-28",
  "top-right": "right-0 top-8 h-32 w-24 sm:top-10 sm:h-36 sm:w-28",
  "bottom-left": "bottom-8 left-0 h-32 w-24 sm:bottom-10 sm:h-36 sm:w-28",
  "bottom-right": "bottom-8 right-0 h-32 w-24 sm:bottom-10 sm:h-36 sm:w-28",
  "top-center": "left-1/2 top-0 h-24 w-32 -translate-x-1/2",
  "bottom-center": "bottom-0 left-1/2 h-24 w-32 -translate-x-1/2",
};

const illustrations = {
  "peony-olive": PeonyOlive,
  "lavender-wildflowers": LavenderWildflowers,
  "magnolia-eucalyptus": MagnoliaEucalyptus,
  "rose-laurel": RoseLaurel,
  "master-arrangement": MasterArrangement,
} satisfies Record<
  BotanicalComposition,
  ComponentType<BotanicalMotionProps & { position: BotanicalDecorationPosition }>
>;

export function BotanicalDecoration({
  composition,
  position,
  variant,
  size = "default",
}: BotanicalDecorationProps) {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const active = useInView(illustrationRef, { amount: 0.25 });
  const reducedMotion = useReducedMotion() === true;
  const Illustration = illustrations[composition];
  const isCentered = position.endsWith("center");
  const isLavenderCrown = composition === "lavender-wildflowers" && position === "top-center";
  const isMasterCrown = composition === "master-arrangement" && position === "top-center";
  const layoutClass = isLavenderCrown && size === "default"
    ? "left-1/2 top-0 h-20 w-[min(96vw,34rem)] -translate-x-1/2"
    : isMasterCrown && size === "default"
      ? "left-1/2 top-0 h-48 w-[min(96vw,34rem)] -translate-x-1/2 sm:h-56"
      : size === "small"
        ? smallPositionClasses[position]
        : positionClasses[position];
  const palette =
    variant === "light"
      ? {
          ink: "var(--botanical-champagne, #f6e9d3)",
          accent: "var(--botanical-champagne-deep, #e1c49d)",
          opacity: 0.38,
        }
      : {
          ink: "var(--botanical-silver, #969da1)",
          accent: "var(--botanical-silver-soft, #c2c8ca)",
          opacity: 0.3,
        };

  const style = {
    "--botanical-ink": palette.ink,
    "--botanical-accent": palette.accent,
    color: palette.ink,
    opacity: palette.opacity,
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 ${layoutClass}`}
      ref={illustrationRef}
      style={style}
    >
      <BotanicalReducedMotionContext.Provider value={reducedMotion}>
        <motion.svg
          className="h-full w-full overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          viewBox={
            composition === "lavender-wildflowers" && size === "small"
              ? "0 0 170 230"
              : isLavenderCrown
                ? "0 0 420 120"
                : isMasterCrown || (composition === "master-arrangement" && position === "bottom-center")
                  ? "0 0 420 250"
                  : isCentered
                    ? "0 0 420 210"
                    : "0 0 340 260"
          }
        >
          <Illustration
            active={active}
            position={position}
            reducedMotion={reducedMotion}
          />
        </motion.svg>
      </BotanicalReducedMotionContext.Provider>
    </div>
  );
}
