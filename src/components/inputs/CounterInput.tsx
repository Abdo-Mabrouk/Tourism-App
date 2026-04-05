import { useState } from "react";

interface CounterInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  labol?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export default function CounterInput({
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  className = "",
  labol,
  inputClassName,
  buttonClassName,
}: CounterInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState(String(value));

  const inputValue = isFocused ? displayValue : String(value);

  const handleIncrement = () => {
    if (max !== undefined && value >= max) return;
    const newVal = value + step;
    onChange(newVal);
    if (isFocused) setDisplayValue(String(newVal));
  };

  const handleDecrement = () => {
    if (value <= min) return;
    const newVal = value - step;
    onChange(newVal);
    if (isFocused) setDisplayValue(String(newVal));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setDisplayValue(raw);
    if (raw === "") return;
    const val = Number(raw);
    if (!isNaN(val) && val >= min && (max === undefined || val <= max)) {
      onChange(val);
    }
  };

  const handleBlur = () => {
    const parsed = displayValue === "" ? min : Number(displayValue);
    const final = isNaN(parsed)
      ? value
      : Math.min(max ?? Infinity, Math.max(min, parsed));
    onChange(final);
    setDisplayValue(String(final));
    setIsFocused(false);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        {labol && (
          <p className="text-base font-medium text-[#1D1F1F]">{labol}</p>
        )}
        <div
          className={`
        flex items-center justify-between
        rounded-full
        border
        transition-all duration-200
        ${isFocused ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300"}
        ${className}
      `}
        >
          <button
            type="button"
            onClick={handleDecrement}
            className={`cursor-pointer size-13 border border-[#EEEEEE] rounded-full flex items-center justify-center text-xl font-medium text-gray-700 hover:bg-gray-100 rounded-l-full ${buttonClassName}`}
          >
            −
          </button>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => {
              setIsFocused(true);
              setDisplayValue(String(value));
            }}
            onBlur={handleBlur}
            min={min}
            max={max}
            step={step}
            className={`w-10 text-center outline-none bg-transparent text-lg font-semibold ${inputClassName}`}
          />
          <button
            type="button"
            onClick={handleIncrement}
            className={` cursor-pointer size-13 border border-[#EEEEEE] rounded-full flex items-center justify-center text-xl font-medium text-gray-700 hover:bg-gray-100 rounded-l-full ${buttonClassName}`}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
