
export default function TitleSection({
  title,
  decs,
  icon,
}: {
  title?: string;
  decs?: string;
  icon?: string;
}) {
  return (
    <div className="flex flex-col gap-3 items-start lg:items-center">
      <p className="font-bold text-[#1D1F1F] text-xl text-start lg:text-center md:text-3xl lg:text-5xl flex items-center justify-start lg:justify-center gap-2">
        {icon && (
          <img src={icon} alt="" className="size-10" />
        )}
        {title}
      </p>
      <p className="font-medium text-[#A5A5A5] text-[14px] md:text-base lg:text-xl text-start lg:text-center">{decs}</p>
    </div>
  );
}
