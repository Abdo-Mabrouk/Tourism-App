import { useState } from "react";
import ErrorInput from "./ErrorInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputWithIconProps {
  label?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  icon?: string;
  placeholder?: string;
  className?: string;
  classNamelabel?: string;
  name?: string;
  error?: string;
  type?: string;
  setLocation?: (address: string) => void;
  isLocation?: boolean;
  subLabel?: string;
}

const InputWithIcon = ({
  label,
  value,
  onChange,
  isRequired = false,
  icon,
  placeholder,
  className = "",
  classNamelabel = "",
  name,
  error = "",
  type = "text",
}: InputWithIconProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;
  return (
    <>
      <div className={` w-full gap-3 flex flex-col rounded-2xl relative ${className}`}>
        {label && (
          <label
            className={`lg:text-[16px] gap-2 flex items-center font-medium text-[#333333] my-1 dark:text-white ${classNamelabel}`}
          >
            {label}
            {isRequired && <span className={`text-[#E33629]`}>*</span>}
          </label>
        )}

        <div
          className={`flex items-center gap-4 w-full border border-[#EEEEEE] rounded-2xl py-2 px-4 overflow-hidden`}
        >
          {icon && (
            <div className={`flex items-center justify-center p-2`}>
              <img src={icon} alt="" className={"w-6! h-6! object-cover"} />
            </div>
          )}

          <div className="w-full h-full relative">
            <input
              autoComplete="new-password"
              name={name}
              id={name}
              type={inputType}
              value={value}
              onChange={(e) => {
                onChange(e);
              }}
              className={` placeholder:capitalize w-full outline-none placeholder-[#A2A2A2]`}
              placeholder={placeholder || "writeHere"}
            />

            {isPasswordField && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className={`cursor-pointer absolute top-1/2 end-1 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors z-10 `}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
            )}
          </div>
        </div>

        <ErrorInput error={error ? error : ""} />
      </div>
    </>
  );
};
export default InputWithIcon;
