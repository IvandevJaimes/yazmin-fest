"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const photoOpenEvent = "yazmin-gallery-open-photo";

type LightboxPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type PhotoLightboxTriggerProps = Omit<LightboxPhoto, "src"> & {
  children: ReactNode;
  className: string;
  photoSrc: string;
  style?: CSSProperties;
};

export function PhotoLightboxTrigger({
  alt,
  children,
  className,
  height,
  photoSrc,
  style,
  width,
}: PhotoLightboxTriggerProps) {
  return (
    <button
      aria-haspopup="dialog"
      aria-label={`Ampliar foto: ${alt}`}
      className={className}
      data-photo-lightbox-trigger="true"
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent<LightboxPhoto>(photoOpenEvent, {
            detail: { src: photoSrc, alt, width, height },
          }),
        );
      }}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
}

export function PhotoLightbox() {
  const [photo, setPhoto] = useState<LightboxPhoto | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handlePhotoOpen(event: Event) {
      setPhoto((event as CustomEvent<LightboxPhoto>).detail);
    }

    window.addEventListener(photoOpenEvent, handlePhotoOpen);
    return () => window.removeEventListener(photoOpenEvent, handlePhotoOpen);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (photo && !dialog.open) {
      dialog.showModal();
      closeButtonRef.current?.focus();
    } else if (!photo && dialog.open) {
      dialog.close();
    }
  }, [photo]);

  return (
    <dialog
      aria-label={photo ? `Foto ampliada: ${photo.alt}` : "Foto ampliada"}
      className="fixed inset-0 m-auto flex max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-6xl items-center justify-center border-0 bg-transparent p-0 text-paper backdrop:bg-black/90 backdrop:backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === dialogRef.current) setPhoto(null);
      }}
      onClose={() => setPhoto(null)}
      ref={dialogRef}
    >
      {photo && (
        <figure className="relative m-0 max-w-full">
          <button
            aria-label="Cerrar foto ampliada"
            className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-black/75 text-paper transition-colors hover:bg-black focus-visible:outline-offset-2 sm:right-4 sm:top-4"
            onClick={() => setPhoto(null)}
            ref={closeButtonRef}
            type="button"
          >
            <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.7"
              />
            </svg>
          </button>
          <Image
            alt={photo.alt}
            className="block h-auto max-h-[calc(100dvh-2rem)] w-auto max-w-[calc(100vw-2rem)] rounded-xl object-contain"
            height={photo.height}
            priority
            sizes="(max-width: 768px) calc(100vw - 32px), 80vw"
            src={photo.src}
            width={photo.width}
          />
          <figcaption className="sr-only">{photo.alt}</figcaption>
        </figure>
      )}
    </dialog>
  );
}
