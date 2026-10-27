import { Countdown } from "./countdown";
import { BotanicalDecoration } from "./botanical-decoration";
import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";

export function CountdownSection() {
  return (
    <section
      aria-labelledby="countdown-title"
      className="bg-pinkwash relative isolate flex min-h-svh items-center overflow-hidden px-6 py-16 sm:py-20"
    >
      <BotanicalDecoration composition="peony-olive" position="top-left" variant="dark" />
      <BotanicalDecoration composition="peony-olive" position="bottom-right" variant="dark" />
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <ScrollReveal variant="heading">
          <SectionTitle id="countdown-title">Ya falta poquito</SectionTitle>
        </ScrollReveal>
        <ScrollReveal delayMs={110} variant="countdown">
          <Countdown />
        </ScrollReveal>
      </div>
    </section>
  );
}
