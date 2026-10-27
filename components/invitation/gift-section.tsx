import { invitation } from "@/lib/invitation";
import { BotanicalDecoration } from "./botanical-decoration";
import { GiftAlias } from "./gift-alias";
import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";

export function GiftSection() {
  return (
    <section
      aria-labelledby="gift-title"
      className="bg-paper relative isolate flex min-h-svh items-center overflow-hidden px-6 py-16 sm:py-20"
      id="regalo"
    >
      <BotanicalDecoration composition="magnolia-eucalyptus" position="top-center" variant="dark" />
      <BotanicalDecoration composition="magnolia-eucalyptus" position="bottom-left" variant="dark" />
      <BotanicalDecoration composition="magnolia-eucalyptus" position="bottom-right" variant="dark" />
      <ScrollReveal
        className="relative z-10 mx-auto w-full max-w-2xl text-center"
        variant="gift"
      >
        <SectionTitle id="gift-title">Un detalle para Yazmin</SectionTitle>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
          Si querés hacerme un regalo, podés usar este alias.
        </p>
        <GiftAlias alias={invitation.giftAlias} />
      </ScrollReveal>
    </section>
  );
}
