import { Plus } from "lucide-react";
interface MultiSelectOption {
  id: number;
  name: string;
}

interface MultiSelectProps {
  label?: string;
  options: MultiSelectOption[];
  value: MultiSelectOption[];
  onChange: (selected: MultiSelectOption[]) => void;
  isRequired?: boolean;
  isAdd?: boolean;
  addTitle?: string;
}

export default function MultiSelect({
  label,
  options,
  value,
  onChange,
  isRequired = false,
  isAdd = false,
  addTitle = "Add More",
}: MultiSelectProps) {

  const handleToggle = (option: MultiSelectOption) => {
    const exists = value.some((item) => item.id === option.id);
    if (exists) {
      onChange(value.filter((item) => item.id !== option.id));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {label && (
        <label
          className={`text-left ms-1`}
        >
          <div className="w-full flex items-center gap-2 text-[#071200] font-medium leading-7 text-base">
            <p>{label} :</p>
            {isRequired && <span className="text-[#E74C3C]">*</span>}
          </div>
        </label>
      )}

      <div className="flex flex-col gap-3">
        {/* Options */}
        {options.map((option) => {
          const checked = value.some((v) => v.id === option.id);
          return (
            <div
              key={option.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-300"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleToggle(option)}
                  className="w-4 h-4 accent-orange-500"
                  id={`option-${option.id}`}
                />
                <label
                  htmlFor={`option-${option.id}`}
                  className="text-black text-base leading-6 font-normal"
                >
                  {option.name}
                </label>
              </div>

              {isAdd && (
                <button
                  type="button"
                  className="flex items-center gap-1 text-red-600 text-sm"
                >
                  <Plus size={16} /> {addTitle}
                </button>
              )}
            </div>
          );
        })}

        {/* Selected Tags */}
        {value.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {value.map((item) => (
              <span
                key={item.id}
                className="px-3 py-1 bg-orange-100 text-orange-700 rounded-md text-sm"
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
