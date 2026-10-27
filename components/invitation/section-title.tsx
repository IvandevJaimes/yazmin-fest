import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionTitle({
  children,
  className = "",
  id,
}: SectionTitleProps) {
  return (
    <h2
      className={"font-display text-4xl font-medium leading-[0.98] text-ink sm:text-5xl " + className}
      id={id}
    >
      {children}
    </h2>
  );
}
