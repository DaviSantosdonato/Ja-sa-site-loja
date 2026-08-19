import type { ReactNode } from "react";

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  );
}
