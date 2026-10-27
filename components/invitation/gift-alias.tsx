"use client";

import { useEffect, useRef, useState } from "react";

type GiftAliasProps = {
  alias: string;
};

export function GiftAlias({ alias }: GiftAliasProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showTemporaryStatus(nextStatus: "copied" | "error") {
    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    setStatus(nextStatus);
    resetTimeout.current = setTimeout(() => {
      setStatus("idle");
      resetTimeout.current = null;
    }, 2400);
  }

  useEffect(
    () => () => {
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
    },
    [],
  );

  async function copyAlias() {
    try {
      if (navigator.clipboard?.writeText) {
        let timeout: ReturnType<typeof setTimeout> | undefined;

        try {
          await Promise.race([
            navigator.clipboard.writeText(alias),
            new Promise<never>((_, reject) => {
              timeout = setTimeout(
                () => reject(new Error("Clipboard timed out")),
                1500,
              );
            }),
          ]);
          showTemporaryStatus("copied");
          return;
        } finally {
          if (timeout) clearTimeout(timeout);
        }
      }

      throw new Error("Clipboard API unavailable");
    } catch {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = alias;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.setAttribute("aria-hidden", "true");
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";
      document.body.appendChild(temporaryInput);
      temporaryInput.select();

      const copied = document.execCommand("copy");
      temporaryInput.remove();
      showTemporaryStatus(copied ? "copied" : "error");
    }
  }

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <p className="font-display text-3xl font-medium tracking-wide text-wine sm:text-4xl">
        {alias}
      </p>
      <button
        className="inline-flex min-h-12 items-center justify-center rounded-lg border border-berry px-5 py-3 text-sm font-semibold text-berry transition-[color,background-color,transform] hover:-translate-y-0.5 hover:bg-berry hover:text-paper active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
        onClick={copyAlias}
        type="button"
      >
        {status === "copied" ? "Alias copiado" : "Copiar alias"}
      </button>
      <p aria-live="polite" className="min-h-5 text-xs text-muted" role="status">
        {status === "error"
          ? "No se pudo copiar. Podés seleccionar el alias y copiarlo manualmente."
          : status === "copied"
            ? "Ya podés pegarlo en tu app bancaria."
            : ""}
      </p>
    </div>
  );
}
