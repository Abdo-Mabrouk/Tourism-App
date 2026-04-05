interface RadioInputProps {
  value: string;
  name: string;
  label: string;
  id: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export default function RadioInput({
  value,
  name,
  label,
  checked,
  onChange,
  id,
  disabled = false,
}: RadioInputProps) {
  return (
    <>
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={() => onChange(value)}
          className=" hidden"
          id={id}
        />
        <label
          className={`cursor-pointer transition-all select-none text-base font-medium flex items-center gap-3
            ${checked ? "text-brand" : "text-[#333333]"}
          ${disabled && "opacity-50 cursor-not-allowed"}
          `}
          htmlFor={id}
        >
          <span
            className={` w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
            ${checked ? "border-brand" : "border-gray-400"}
           `}
          >
            {checked && <span className="w-3 h-3 rounded-full bg-brand" />}
          </span>
          {label}
        </label>
      </div>
    </>
  );
}
