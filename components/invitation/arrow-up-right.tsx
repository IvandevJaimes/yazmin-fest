type ArrowUpRightProps = {
  className?: string;
};

export function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5 15 15 5M6.5 5H15v8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
