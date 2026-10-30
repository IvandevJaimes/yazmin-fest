import { invitation, mapEmbedUrl } from "@/lib/invitation";
import { DressCodeFeature } from "./dress-code-feature";
import { ScrollReveal } from "./scroll-reveal";

export function EventDetails() {
  return (
    <section
      aria-label="Detalles del evento"
      className="bg-paper relative isolate flex min-h-svh items-center overflow-hidden px-6 py-16 sm:py-20"
      id="detalles"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid divide-y divide-line border-y border-line md:grid-cols-[0.8fr_1fr_1.2fr] md:divide-x md:divide-y-0">
          <ScrollReveal
            className="flex flex-col items-center justify-center py-9 text-center md:px-8"
            delayMs={0}
          >
            <time
              className="font-display text-8xl font-medium leading-[0.8] text-berry"
              dateTime={invitation.date}
            >
              20
            </time>
            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-wine">
              Noviembre {invitation.yearLabel}
            </span>
          </ScrollReveal>

          <ScrollReveal
            className="flex flex-col justify-center gap-7 py-9 text-center md:px-8"
            delayMs={90}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
                Ingreso de invitados
              </p>
              <time
                className="mt-2 block font-display text-4xl text-ink sm:text-5xl"
                dateTime={invitation.date + "T" + invitation.guestArrival + ":00-03:00"}
              >
                {invitation.guestArrival} hs
              </time>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
                Entrada de Yazmin
              </p>
              <time
                className="mt-2 block font-display text-4xl text-ink sm:text-5xl"
                dateTime={invitation.date + "T" + invitation.celebrantEntrance + ":00-03:00"}
              >
                {invitation.celebrantEntrance} hs
              </time>
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="flex flex-col items-center justify-center py-9 text-center md:px-8"
            delayMs={180}
          >
            <p className="font-display text-3xl font-medium text-ink sm:text-4xl">
              {invitation.venue}
            </p>
            <address className="mt-3 max-w-xs not-italic text-sm leading-6 text-muted">
              {invitation.address}
            </address>
            <iframe
              allowFullScreen
              className="mt-6 aspect-video w-full overflow-hidden rounded-xl border border-line bg-pinkwash"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapEmbedUrl}
              title={`Mapa de ${invitation.venue}, ${invitation.address}`}
            />
          </ScrollReveal>
        </div>
        <DressCodeFeature />
      </div>
    </section>
  );
}
