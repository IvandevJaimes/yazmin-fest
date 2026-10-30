import Image from "next/image";
import botanicalCorners from "@/assets/botanical-corners-v3.png";
import portrait from "@/assets/WhatsApp Image 2026-10-27 at 11.01.55(6).jpeg";
import { invitation } from "@/lib/invitation";
import { RsvpConfirmation } from "./rsvp-confirmation";

export function InvitationHero() {
  return (
    <section
      aria-labelledby="invitation-title"
      className="bg-background relative isolate min-h-[100svh] overflow-hidden"
      id="inicio"
    >
      <div className="hero-portrait absolute bottom-0 left-1/2 z-0 h-[56svh] max-h-[34rem] w-full max-w-[64rem] -translate-x-1/2 overflow-hidden sm:h-[60svh]">
        <Image
          alt=""
          className="object-cover object-[center_30%]"
          fill
          priority
          sizes="100vw"
          src={portrait}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[13.5rem] w-[130vw] max-w-none -translate-x-1/2 sm:h-[20rem] sm:w-full sm:max-w-5xl"
      >
        <Image
          alt=""
          className="object-contain opacity-100"
          fill
          sizes="100vw"
          src={botanicalCorners}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center px-6 pb-8 pt-12 text-center sm:pb-10 sm:pt-14">
        <div className="hero-copy flex w-full flex-col items-center">
          <h1
            aria-label={invitation.title + ", mis quince"}
            className="flex flex-col items-center text-wine"
            id="invitation-title"
          >
            <span className="font-display text-[clamp(2.75rem,12vw,5.25rem)] font-medium uppercase leading-[0.8] tracking-[0.14em] text-ink">
              Mis XV
            </span>
            <span className="mt-4 mb-6 font-script text-[clamp(3.5rem,14vw,3.75rem)] leading-[0.92] text-berry">
              {invitation.name}
            </span>
          </h1>
          <p className="mt-2 max-w-sm text-sm leading-6 text-muted sm:text-base">
            Te invito a celebrar conmigo una noche muy especial.
          </p>

          <div className="mt-6 flex w-full max-w-xs flex-col items-center gap-3">
            <RsvpConfirmation />
          </div>
        </div>

        <a
          aria-label="Ver los detalles de la invitación"
          className="relative mt-auto min-h-11 rounded-lg bg-paper/95 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-wine underline decoration-rose underline-offset-4"
          href="#detalles"
        >
          Ver detalles
        </a>
      </div>
    </section>
  );
}
