import type { ReactNode } from "react";
import { getWhatsAppUrl, type WhatsAppContact } from "@/lib/invitation";
import { ArrowUpRight } from "./arrow-up-right";

type WhatsAppLinkProps = {
  contact: WhatsAppContact;
  label: string;
  children: ReactNode;
  variant?: "solid" | "light";
  className?: string;
};

export function WhatsAppLink({
  contact,
  label,
  children,
  variant = "solid",
  className = "",
}: WhatsAppLinkProps) {
  const colors =
    variant === "light"
      ? "bg-paper text-wine hover:bg-pinkwash"
      : "bg-wine text-paper hover:bg-berry";

  return (
    <a
      aria-label={label + " por WhatsApp al " + contact.display}
      className={
        "group inline-flex min-h-14 items-center justify-between gap-6 rounded-xl px-6 py-4 text-left text-sm font-semibold transition-[color,background-color,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-offset-4 " +
        colors +
        " " +
        className
      }
      href={getWhatsAppUrl(contact.number)}
      rel="noreferrer"
      target="_blank"
    >
      <span>{children}</span>
      <ArrowUpRight className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
    </a>
  );
}
