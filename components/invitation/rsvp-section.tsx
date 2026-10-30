import { BotanicalDecoration } from "./botanical-decoration";
import { RsvpConfirmation } from "./rsvp-confirmation";
import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";

export function RsvpSection() {
  return (
    <section
      aria-labelledby="rsvp-title"
      className="relative isolate flex min-h-svh items-center overflow-hidden px-6 py-16 text-paper sm:py-20"
      id="confirmar"
      style={{ backgroundColor: "var(--silver-dark)" }}
    >
      <BotanicalDecoration composition="rose-laurel" position="top-left" variant="light" />
      <BotanicalDecoration composition="rose-laurel" position="top-right" variant="light" />
      <BotanicalDecoration composition="rose-laurel" position="bottom-left" variant="light" />
      <BotanicalDecoration composition="rose-laurel" position="bottom-right" variant="light" />
      <ScrollReveal
        className="relative z-10 mx-auto w-full max-w-3xl text-center"
        variant="closing"
      >
        <SectionTitle
          className="text-5xl leading-[0.95] text-paper sm:text-6xl"
          id="rsvp-title"
        >
          ¿Me acompañás?
        </SectionTitle>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-paper/90 sm:text-base">
          Confirmá tu asistencia por WhatsApp. Elegí el número que te quede más cómodo.
        </p>

        <div className="mx-auto mt-9 w-full max-w-sm">
          <RsvpConfirmation variant="light" />
        </div>
        <p className="mt-6 text-xs text-paper/80">
          ¡Ojalá puedas venir a celebrar conmigo!
        </p>
      </ScrollReveal>
    </section>
  );
}
