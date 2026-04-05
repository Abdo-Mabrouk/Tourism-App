export default function Input({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id={label}
        placeholder=" "
        className={`peer cursor-pointer w-full rounded-2xl border-2 text-base text-[#1D1F1F] font-medium border-brand-blue bg-white p-4 pt-5 focus:outline-none focus:ring-3 focus:ring-white ${className}`}
      />
      {label && (
        <label
          htmlFor={label}
          className=" capitalize absolute left-4 top-1/2 -translate-y-1/2 transition-all peer-focus:top-2 peer-focus:text-xs text-base text-[#A5A5A5] font-normal "
        >
          {label}
        </label>
      )}
    </div>
  );
}
