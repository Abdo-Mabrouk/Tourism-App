import { CheckIcon } from "lucide-react";
const CheckBox = ({
  label,
  value,
  setValue,
  className,
  error,
}: {
  label: string;
  value: boolean;
  setValue: any;
  className?: string;
  error?: string;
}) => {
  return (
    <div
      className="flex items-center gap-2 text-[#2B2B2B] cursor-pointer group"
      onClick={() => {
        setValue(!value);
      }}
    >
      <div
        className={`${value ? "bg-brand" : "border-2 border-[#1D1F1F]"} ${
          error ? "border-2 border-[#E74C3C]" : ""
        } size-5 flex items-center justify-center rounded-lg transition-colors duration-300 cursor-pointer `}
      >
        <CheckIcon
          className={`${value ? "text-white" : "text-transparent"} text-sm! size-3!`}
        />
      </div>
      <span
        className={`cursor-pointer text-[#1D1F1F] text-base font-medium group-hover:text-brand transition-colors duration-200 ${
          error ? "text-[#E74C3C]" : ""
        }  ${className}`}
      >
        {label}
      </span>
    </div>
  );
};

export default CheckBox;
