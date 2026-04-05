import { useRef } from "react";

type Props = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: React.ReactNode;
  name?: string;
};

export default function CustomInput({
  label,
  value,
  onChange,
  type = "text",
  icon,
  name,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (type === "date") {
      inputRef.current?.showPicker?.();
      inputRef.current?.focus();
    }
  };

  return (
    <div className="w-full border border-[#EEEEEE] rounded-full px-4 py-3 space-y-2">
      {label && (
        <label className="text-sm text-[#444444] font-normal block">
          {label}
        </label>
      )}
      <div className="flex items-center justify-between  ">
        <input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="Mar 13, 2023"
          className="bg-transparent outline-none w-full text-black"
        />

        {icon && (
          <div
            onClick={handleIconClick}
            className="cursor-pointer ml-2"
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}