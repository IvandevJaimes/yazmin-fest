"use client";

import {
  useEffect,
  useRef,
  useState,
  useId,
  useSyncExternalStore,
  type MouseEvent,
} from "react";
import { useForm, useWatch } from "react-hook-form";
import { invitation, whatsappContacts } from "@/lib/invitation";
import { ArrowUpRight } from "./arrow-up-right";
import { FormErrorLabel } from "./form-error-label";

const confirmationStorageKey = "yazmin-fest-rsvp-v1";
const confirmationChangedEvent = "yazmin-fest-rsvp-change";
type ConfirmationRecord = {
  firstName: string;
  lastName: string;
  contactNumber: string;
  confirmedAt: string;
};

let inMemoryConfirmation: ConfirmationRecord | null = null;

type RsvpConfirmationProps = {
  variant?: "default" | "light";
};

type RsvpFormValues = {
  firstName: string;
  lastName: string;
};

function subscribeToConfirmation(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(confirmationChangedEvent, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(confirmationChangedEvent, onChange);
  };
}

function getConfirmationSnapshot(): boolean | null {
  return getSavedConfirmation() !== null;
}

function getSavedConfirmation(): ConfirmationRecord | null {
  try {
    const storedConfirmation = localStorage.getItem(confirmationStorageKey);
    if (!storedConfirmation) return null;

    const record: unknown = JSON.parse(storedConfirmation);
    if (typeof record !== "object" || record === null) return null;

    const candidate = record as Partial<ConfirmationRecord>;
    if (
      typeof candidate.firstName !== "string" ||
      typeof candidate.lastName !== "string" ||
      typeof candidate.contactNumber !== "string" ||
      typeof candidate.confirmedAt !== "string"
    ) {
      return null;
    }

    return candidate as ConfirmationRecord;
  } catch {
    return inMemoryConfirmation;
  }
}

function getServerConfirmationSnapshot(): boolean | null {
  return null;
}

function saveConfirmation(record: {
  firstName: string;
  lastName: string;
  contactNumber: string;
}) {
  const savedRecord: ConfirmationRecord = {
    ...record,
    confirmedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem(confirmationStorageKey, JSON.stringify(savedRecord));
    inMemoryConfirmation = null;
  } catch {
    // Keep the confirmation visible for this visit if storage is unavailable.
    inMemoryConfirmation = savedRecord;
  }

  window.dispatchEvent(new Event(confirmationChangedEvent));
}

export function RsvpConfirmation({
  variant = "default",
}: RsvpConfirmationProps) {
  const idPrefix = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const hasConfirmed = useSyncExternalStore(
    subscribeToConfirmation,
    getConfirmationSnapshot,
    getServerConfirmationSnapshot,
  );
  const {
    control,
    getValues,
    register,
    setFocus,
    trigger,
    formState: { errors, isValid },
  } = useForm<RsvpFormValues>({
    defaultValues: { firstName: "", lastName: "" },
    mode: "onChange",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstContactRef = useRef<HTMLAnchorElement>(null);
  const titleId = `rsvp-title-${idPrefix}`;
  const descriptionId = `rsvp-description-${idPrefix}`;
  const firstNameId = `rsvp-first-name-${idPrefix}`;
  const lastNameId = `rsvp-last-name-${idPrefix}`;
  const firstNameErrorId = `rsvp-first-name-error-${idPrefix}`;
  const lastNameErrorId = `rsvp-last-name-error-${idPrefix}`;
  const firstName = useWatch({ control, name: "firstName" }) ?? "";
  const lastName = useWatch({ control, name: "lastName" }) ?? "";
  const buttonColors =
    variant === "light"
      ? "bg-paper text-wine hover:bg-pinkwash"
      : "bg-wine text-paper hover:bg-berry";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
      if (isResending) {
        firstContactRef.current?.focus();
      } else {
        setFocus("firstName");
      }
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen, isResending, setFocus]);

  function handleSend(
    event: MouseEvent<HTMLAnchorElement>,
    contactNumber: string,
  ) {
    if (!isValid) {
      event.preventDefault();
      const focusTarget = getValues().firstName.trim() ? "lastName" : "firstName";
      void trigger().then(() => setFocus(focusTarget));
      return;
    }

    const values = getValues();
    const cleanFirstName = values.firstName.trim();
    const cleanLastName = values.lastName.trim();

    saveConfirmation({
      firstName: cleanFirstName,
      lastName: cleanLastName,
      contactNumber,
    });
    setIsOpen(false);
  }

  function getConfirmationUrl(contactNumber: string) {
    const savedRecord = isResending ? getSavedConfirmation() : null;
    const fullName = savedRecord
      ? `${savedRecord.firstName} ${savedRecord.lastName}`.trim()
      : `${firstName.trim()} ${lastName.trim()}`.trim();
    const message =
      `Hola, quiero confirmar mi asistencia al ${invitation.title}. ` +
      (fullName ? `Mi nombre y apellido son: ${fullName}.` : "");

    return `https://wa.me/${contactNumber}?text=${encodeURIComponent(message)}`;
  }

  function handleContactClick(
    event: MouseEvent<HTMLAnchorElement>,
    contactNumber: string,
  ) {
    if (isResending) {
      const savedRecord = getSavedConfirmation();
      if (savedRecord) saveConfirmation({ ...savedRecord, contactNumber });
      setIsOpen(false);
      return;
    }

    handleSend(event, contactNumber);
  }

  return (
    <>
      {hasConfirmed === null ? (
        <div aria-hidden="true" className="min-h-14 w-full" />
      ) : hasConfirmed ? (
        <div className="flex w-full flex-col items-center gap-2.5">
          <p
            aria-live="polite"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border border-wine/20 bg-paper/95 px-5 py-4 text-sm font-semibold text-wine"
            role="status"
          >
            <svg aria-hidden="true" className="size-5 shrink-0" fill="none" viewBox="0 0 24 24">
              <path
                d="m5 12.5 4.2 4.2L19 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
            ¡Ya confirmaste tu presencia!
          </p>
          <span className={variant === "light" ? "text-xs text-paper/70" : "text-xs text-muted/80"}>
            ¿Necesitás volver a avisar?
          </span>
          <button
            className={
              variant === "light"
                ? "inline-flex min-h-9 items-center rounded-md px-2 text-xs font-medium text-paper/75 underline decoration-paper/35 underline-offset-4 transition-colors hover:text-paper focus-visible:outline-offset-2"
                : "inline-flex min-h-9 items-center rounded-md px-2 text-xs font-medium text-muted underline decoration-muted/35 underline-offset-4 transition-colors hover:text-wine focus-visible:outline-offset-2"
            }
            onClick={() => {
              setIsResending(true);
              setIsOpen(true);
            }}
            type="button"
          >
            Reenviar por WhatsApp
          </button>
        </div>
      ) : (
        <button
          className={`group inline-flex min-h-14 w-full items-center justify-between gap-6 rounded-xl px-6 py-4 text-left text-sm font-semibold transition-[color,background-color,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-offset-4 motion-reduce:transform-none motion-reduce:transition-none ${buttonColors}`}
          onClick={() => {
            setIsResending(false);
            setIsOpen(true);
          }}
          type="button"
        >
          <span>Confirmar asistencia</span>
          <ArrowUpRight className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
        </button>
      )}

      <dialog
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-2xl bg-paper p-0 text-ink shadow-[0_24px_80px_rgba(42,16,32,0.28)] backdrop:bg-black/85 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === dialogRef.current) setIsOpen(false);
        }}
        onClose={() => {
          setIsOpen(false);
          setIsResending(false);
        }}
        ref={dialogRef}
      >
        <div className="relative p-6 sm:p-8">
          <button
            aria-label="Cerrar confirmación"
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-wine/5 hover:text-wine focus-visible:outline-offset-2"
            onClick={() => setIsOpen(false)}
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

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
            Yazmin Fest
          </p>
          <h2 className="mt-3 pr-8 font-display text-3xl text-wine" id={titleId}>
            {isResending ? "Reenviar confirmación" : "Confirmar asistencia"}
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted" id={descriptionId}>
            {isResending
              ? "Elegí a cuál de los dos números querés volver a enviar tu mensaje."
              : "Dejanos tu nombre y apellido, y elegí a cuál de los dos números enviar la confirmación."}
          </p>

          {!isResending && (
            <form
              className="mt-6 space-y-4"
              noValidate
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-ink"
                  htmlFor={firstNameId}
                >
                  Nombre
                </label>
                <input
                  autoComplete="given-name"
                  aria-describedby={errors.firstName ? firstNameErrorId : undefined}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  className="min-h-12 w-full rounded-lg border border-line bg-paper px-3 py-2 text-base text-ink outline-none transition focus:border-berry focus:ring-2 focus:ring-berry/15"
                  id={firstNameId}
                  maxLength={60}
                  {...register("firstName", {
                    required: "Ingresá tu nombre.",
                    validate: (value) =>
                      value.trim().length > 0 || "Ingresá un nombre válido.",
                    maxLength: {
                      value: 60,
                      message: "El nombre no puede superar los 60 caracteres.",
                    },
                  })}
                  type="text"
                />
                <FormErrorLabel
                  id={firstNameErrorId}
                  message={errors.firstName?.message}
                />
              </div>

              <div>
                <label
                  className="mb-1.5 block text-sm font-medium text-ink"
                  htmlFor={lastNameId}
                >
                  Apellido
                </label>
                <input
                  autoComplete="family-name"
                  aria-describedby={errors.lastName ? lastNameErrorId : undefined}
                  aria-invalid={errors.lastName ? "true" : "false"}
                  className="min-h-12 w-full rounded-lg border border-line bg-paper px-3 py-2 text-base text-ink outline-none transition focus:border-berry focus:ring-2 focus:ring-berry/15"
                  id={lastNameId}
                  maxLength={60}
                  {...register("lastName", {
                    required: "Ingresá tu apellido.",
                    validate: (value) =>
                      value.trim().length > 0 || "Ingresá un apellido válido.",
                    maxLength: {
                      value: 60,
                      message: "El apellido no puede superar los 60 caracteres.",
                    },
                  })}
                  type="text"
                />
                <FormErrorLabel
                  id={lastNameErrorId}
                  message={errors.lastName?.message}
                />
              </div>
            </form>
          )}

          <fieldset className={`space-y-2 ${isResending ? "mt-6" : "mt-4"}`}>
            <legend className="mb-2 text-sm font-semibold text-wine">
              Elegí un WhatsApp
            </legend>
            {whatsappContacts.map((contact, index) => (
              <a
                className="group flex min-h-12 items-center justify-between gap-3 rounded-lg border border-line bg-paper px-4 py-3 text-sm font-semibold text-wine transition-colors hover:border-berry hover:bg-pinkwash focus-visible:outline-offset-2"
                href={getConfirmationUrl(contact.number)}
                key={contact.number}
                onClick={(event) => handleContactClick(event, contact.number)}
                ref={index === 0 ? firstContactRef : undefined}
                rel="noreferrer"
                target="_blank"
              >
                <span>Enviar al {contact.display}</span>
                <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
              </a>
            ))}
          </fieldset>
        </div>
      </dialog>
    </>
  );
}
