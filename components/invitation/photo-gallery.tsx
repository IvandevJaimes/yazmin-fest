import Image, { type StaticImageData } from "next/image";
import ServerPhotoAlbum from "react-photo-album/server";
import type { Photo, RenderImage } from "react-photo-album";
import "react-photo-album/masonry.css";
import ImageAtField from "@/assets/WhatsApp Image 2026-10-27 at 11.01.55(6).jpeg";
import ImageAtSunset from "@/assets/WhatsApp Image 2026-10-27 at 11.01.55(7).jpeg";
import ImageWithFlowers from "@/assets/WhatsApp Image 2026-10-27 at 11.01.55(8).jpeg";
import ImageBackToField from "@/assets/WhatsApp Image 2026-10-27 at 11.01.56(5).jpeg";
import ImageInField from "@/assets/WhatsApp Image 2026-10-27 at 11.01.56(6).jpeg";
import ImageInGoldenLight from "@/assets/WhatsApp Image 2026-10-27 at 11.01.56(7).jpeg";
import ImageInPark from "@/assets/WhatsApp Image 2026-10-27 at 11.01.56(8).jpeg";
import ImageUnderTrees from "@/assets/WhatsApp Image 2026-10-27 at 11.01.56(9).jpeg";
import ImageParkPortrait from "@/assets/WhatsApp Image 2026-10-27 at 11.01.57(2).jpeg";
import ImageParkWide from "@/assets/WhatsApp Image 2026-10-27 at 11.01.57(3).jpeg";
import { AutoplayVideo } from "./autoplay-video";
import { BotanicalDecoration } from "./botanical-decoration";
import { PhotoLightbox, PhotoLightboxTrigger } from "./photo-lightbox";
import { ScrollReveal } from "./scroll-reveal";
import { SectionTitle } from "./section-title";

const photoSources: { image: StaticImageData; alt: string }[] = [
  {
    image: ImageAtField,
    alt: "Yazmin entre el pasto alto, con sombrero y vestido blanco.",
  },
  {
    image: ImageAtSunset,
    alt: "Yazmin posa en el campo bajo la luz del atardecer.",
  },
  {
    image: ImageWithFlowers,
    alt: "Yazmin sostiene un ramo de flores en el campo.",
  },
  {
    image: ImageBackToField,
    alt: "Yazmin de espaldas, mirando el campo con su ramo.",
  },
  {
    image: ImageInField,
    alt: "Yazmin sonríe en el campo con un ramo de flores.",
  },
  {
    image: ImageInGoldenLight,
    alt: "Yazmin, de espaldas, en el campo al atardecer.",
  },
  {
    image: ImageInPark,
    alt: "Yazmin posa en un parque arbolado con su ramo.",
  },
  {
    image: ImageUnderTrees,
    alt: "Yazmin posa bajo los árboles en el parque.",
  },
  {
    image: ImageParkPortrait,
    alt: "Yazmin sostiene su ramo en un parque.",
  },
  {
    image: ImageParkWide,
    alt: "Yazmin a la distancia en el parque arbolado.",
  },
];

const photos: Photo[] = photoSources.map(({ image, alt }) => ({
  src: image.src,
  width: image.width,
  height: image.height,
  alt,
  key: image.src,
}));

const renderMasonryImage: RenderImage<Photo> = (
  { alt = "", title, sizes, className, style },
  { photo, width, height },
) => (
  <PhotoLightboxTrigger
    alt={alt}
    className={`group relative block w-full overflow-hidden rounded-2xl bg-pinkwash ${className ?? ""}`}
    height={photo.height}
    photoSrc={photo.src}
    style={{
      ...style,
      aspectRatio: `${width} / ${height}`,
    }}
    width={photo.width}
  >
    <Image
      alt={alt}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:group-hover:scale-100"
      fill
      sizes={sizes}
      src={photo.src}
      title={title}
    />
  </PhotoLightboxTrigger>
);

export function PhotoGallery() {
  return (
    <section
      aria-labelledby="memories-title"
      className="bg-paper relative isolate overflow-hidden px-6 py-16 sm:py-20"
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

        <ScrollReveal
          className="mt-9 w-full max-w-[20rem] sm:max-w-[24rem] md:mt-12 md:max-w-[27rem]"
          variant="opening"
        >
          <AutoplayVideo
            label="Video vertical de Yazmin con su ramo en el campo"
            poster={ImageInField.src}
            src="/yazmin-15-preview.mp4"
          />
        </ScrollReveal>

        <div className="mt-12 w-full md:mt-16">
          <ServerPhotoAlbum
            breakpoints={[240, 560, 880, 1200]}
            columns={(width) => (width < 560 ? 2 : width < 880 ? 3 : 4)}
            componentsProps={{
              container: { "aria-label": "Galería de fotos de Yazmin" },
            }}
            layout="masonry"
            photos={photos}
            render={{ image: renderMasonryImage }}
            sizes={{
              size: "1280px",
              sizes: [
                { viewport: "(max-width: 767px)", size: "calc(100vw - 48px)" },
                { viewport: "(max-width: 1279px)", size: "calc(100vw - 64px)" },
              ],
            }}
            spacing={(width) => (width < 560 ? 12 : 18)}
          />
        </div>
      </div>
      <PhotoLightbox />
    </section>
  );
}
