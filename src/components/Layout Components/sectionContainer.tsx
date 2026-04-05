import type { ReactNode } from "react";
import TitleSection from "./TitleSection";

export default function SectionContainer({
  children,
  title,
  decs,
  icon,
}: {
  children: ReactNode;
  title?: string;
  decs?: string;
  icon?: string;
}) {
  return (
    <div className=" container py-16 flex flex-col gap-3 lg:gap-12">
      <TitleSection title={title} icon={icon} decs={decs} />
      <div className="flex flex-col gap-12">{children}</div>
    </div>
  );
}
