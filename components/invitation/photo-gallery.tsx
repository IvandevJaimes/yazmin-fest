import Image, { type StaticImageData } from "next/image";
import FieldPortrait from "@/assets/WhatsApp Image 2026-10-30 at 16.35.26.jpeg";
import FieldPortraitWithBouquet from "@/assets/WhatsApp Image 2026-10-30 at 16.35.26 (1).jpeg";
import FieldCloseup from "@/assets/WhatsApp Image 2026-10-30 at 16.35.27.jpeg";
import FieldBouquetPortrait from "@/assets/WhatsApp Image 2026-10-30 at 16.35.28.jpeg";
import ParkPortrait from "@/assets/WhatsApp Image 2026-10-30 at 16.35.29.jpeg";
import ParkBouquetPortrait from "@/assets/WhatsApp Image 2026-10-30 at 16.35.30.jpeg";
import ParkGoldenHourPortrait from "@/assets/WhatsApp Image 2026-10-30 at 16.35.30 (1).jpeg";
import { BotanicalDecoration } from "./botanical-decoration";
import { PhotoLightbox, PhotoLightboxTrigger } from "./photo-lightbox";
import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";

const photoSources: { image: StaticImageData; alt: string }[] = [
  {
    image: FieldPortrait,
    alt: "Yazmin posa de perfil entre los trigales al atardecer.",
  },
  {
    image: FieldPortraitWithBouquet,
    alt: "Yazmin mira el campo de espaldas mientras sostiene su ramo.",
  },
  {
    image: FieldCloseup,
    alt: "Retrato de Yazmin entre las espigas, con su sombrero y vestido blanco.",
  },
  {
    image: FieldBouquetPortrait,
    alt: "Yazmin sostiene un ramo de flores blancas entre los trigales.",
  },
  {
    image: ParkPortrait,
    alt: "Yazmin posa de cuerpo entero en un parque arbolado.",
  },
  {
    image: ParkBouquetPortrait,
    alt: "Yazmin sonríe en el parque mientras sostiene su ramo.",
  },
  {
    image: ParkGoldenHourPortrait,
    alt: "Yazmin posa con su ramo bajo los árboles durante la hora dorada.",
  },
];

export function PhotoGallery() {
  return (
    <section
      aria-labelledby="memories-title"
      className="bg-paper relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20"
      id="fotos"
    >
      <BotanicalDecoration
        composition="lavender-wildflowers"
        position="top-left"
        size="small"
        variant="dark"
      />
      <BotanicalDecoration
        composition="lavender-wildflowers"
        position="bottom-right"
        size="small"
        variant="dark"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        <ScrollReveal variant="heading">
          <SectionTitle id="memories-title">
            Un adelanto de esta historia
          </SectionTitle>
        </ScrollReveal>

        <div className="mt-9 w-full md:mt-12">
          <ul
            aria-label="Galería de fotos de Yazmin"
            className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-4"
          >
            {photoSources.map(({ image, alt }, index) => {
              const isFinalPhoto = index === photoSources.length - 1;

              return (
                <li
                  className={isFinalPhoto ? "col-span-2 md:col-span-3" : ""}
                  key={image.src}
                >
                  <PhotoLightboxTrigger
                    alt={alt}
                    className="group relative block w-full overflow-hidden rounded-2xl bg-pinkwash"
                    height={image.height}
                    photoSrc={image.src}
                    style={{ aspectRatio: `${image.width} / ${image.height}` }}
                    width={image.width}
                  >
                    <Image
                      alt={alt}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:group-hover:scale-100"
                      fill
                      sizes={
                        isFinalPhoto
                          ? "(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc(100vw - 48px), 1280px"
                          : "(max-width: 767px) calc(50vw - 21px), (max-width: 1279px) calc(33vw - 24px), 416px"
                      }
                      src={image}
                    />
                  </PhotoLightboxTrigger>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <PhotoLightbox />
    </section>
  );
}
