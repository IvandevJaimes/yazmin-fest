"use client";

import { useEffect, useState } from "react";
import { invitation } from "@/lib/invitation";

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const units: { key: keyof TimeRemaining; label: string }[] = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];

function calculateTimeRemaining(): TimeRemaining | null {
  const secondsLeft = Math.floor(
    (new Date(invitation.countdownDate).getTime() - Date.now()) / 1000,
  );

  if (secondsLeft <= 0) return null;

  return {
    days: Math.floor(secondsLeft / 86_400),
    hours: Math.floor((secondsLeft % 86_400) / 3_600),
    minutes: Math.floor((secondsLeft % 3_600) / 60),
    seconds: secondsLeft % 60,
  };
}

export function Countdown() {
  const [remaining, setRemaining] = useState<TimeRemaining | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const update = () => {
      setRemaining(calculateTimeRemaining());
      setHasMounted(true);
    };
    update();

    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (!hasMounted) {
    return (
      <div
        aria-hidden="true"
        className="mt-10 grid grid-cols-4 divide-x divide-line"
      >
        {units.map(({ key, label }) => (
          <div className="px-2 text-center sm:px-5" key={key}>
            <span className="block font-display text-4xl font-medium leading-none text-wine sm:text-6xl">
              —
            </span>
            <span className="mt-2 block text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-muted sm:text-xs sm:tracking-[0.2em]">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (!remaining) {
    return (
      <p className="mt-10 text-center font-display text-3xl text-wine sm:text-4xl">
        ¡Llegó el momento!
      </p>
    );
  }

  return (
    <div
      aria-label="Cuenta regresiva hasta el comienzo de la celebración"
      aria-live="off"
      className="mt-10 grid grid-cols-4 divide-x divide-line"
      role="timer"
    >
      {units.map(({ key, label }) => (
        <div className="px-2 text-center sm:px-5" key={key}>
          <span className="block font-display text-4xl font-medium tabular-nums leading-none text-wine sm:text-6xl">
            {String(remaining[key]).padStart(2, "0")}
          </span>
          <span className="mt-2 block text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-muted sm:text-xs sm:tracking-[0.2em]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
