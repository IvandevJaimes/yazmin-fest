import { BotanicalDecoration } from "./botanical-decoration";
import { ScrollReveal } from "./scroll-reveal";

export function DressCodeFeature() {
  return (
    <div
      aria-labelledby="dress-code-title"
      className="relative isolate mt-10 overflow-hidden px-6 py-8 sm:mt-14 sm:px-10 sm:py-10"
      role="group"
    >
      <BotanicalDecoration
        composition="lavender-wildflowers"
        position="top-right"
        size="small"
        variant="dark"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-14">
        <ScrollReveal className="text-center md:text-left" variant="heading">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-berry">
            Código de vestimenta
          </p>
          <h2
            className="mt-3 font-display text-5xl font-medium leading-[0.9] text-wine sm:text-7xl"
            id="dress-code-title"
          >
            Elegante
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Vení con vestimenta elegante.
          </p>
        </ScrollReveal>

        <ScrollReveal
          className="text-center md:border-l md:border-silver md:py-3 md:pl-12"
          delayMs={120}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Tonos a evitar
          </p>
          <p className="mt-3 text-sm leading-6 text-ink sm:text-base">
            Por favor, evitá vestir de beige o plateado.
          </p>
          <div className="mx-auto mt-5 flex max-w-sm flex-wrap justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="block size-14 shrink-0 rounded-full border-2 border-line"
                style={{
                  backgroundColor: "#d9c4a6",
                  width: 56,
                  height: 56,
                  display: "block",
                }}
              />
              <span className="text-sm font-medium text-ink">Beige</span>
            </div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="block size-14 shrink-0 rounded-full border-2 border-silver"
                style={{
                  background:
                    "linear-gradient(135deg, #f7f8f9 0%, #aeb4b8 35%, #7f898f 52%, #eceeef 100%)",
                  width: 56,
                  height: 56,
                  display: "block",
                }}
              />
              <span className="text-sm font-medium text-ink">Plateado</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
