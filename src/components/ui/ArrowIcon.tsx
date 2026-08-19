export function ArrowIcon({
  direction = "right",
}: {
  direction?: "right" | "down";
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`arrow-icon arrow-icon--${direction}`}
    >
      <path
        d="M4 12h15M14 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
