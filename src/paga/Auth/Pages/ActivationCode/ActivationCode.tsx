import Swal from "sweetalert2";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function ActivationCode() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(60);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    if (seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);
  const schema = Yup.object({
    num1: Yup.string().required(),
    num2: Yup.string().required(),
    num3: Yup.string().required(),
    num4: Yup.string().required(),
    num5: Yup.string().required(),
    num6: Yup.string().required(),
  });
  function handelForgotPassword() {
    Swal.fire({
      title: "Success",
      text: "Code verified successfully",
      icon: "success",
    });

    setTimeout(() => {
      navigate("/auth/create-new-password");
    }, 3000);
  }

  const formik = useFormik({
    initialValues: {
      num1: "",
      num2: "",
      num3: "",
      num4: "",
      num5: "",
      num6: "",
    },
    validationSchema: schema,
    onSubmit: handelForgotPassword,
  });

  /* ---------------- OTP Logic ---------------- */
  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return; // أرقام بس

    formik.setFieldValue(`num${index + 1}`, value);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  const isButtonDisabled = Object.values(formik.values).some(
    (value) => value === "",
  );

  /* ---------------- Resend Code ---------------- */
  function handleSendCode() {
    Swal.fire({
      text: "A new code has been created",
      icon: "success",
    });

    setTimeout(() => {
      setSeconds(60);
    }, 5000);
  }

  return (
    <div className="space-y-5 mt-25 lg:mt-30">
      <p className="text-[#1D1F1F] text-center lg:text-start text-[34px] font-medium">
        Activation code
      </p>

      <p className="text-[#A5A5A5] text-center lg:text-start text-base font-medium">
        The account activation code has been sent to the email Ahmed@ahmed.com
      </p>

      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <label className="w-full block text-[#333333] font-medium text-base">
          Activation code
        </label>

        {/* OTP Inputs */}
        <div className="inputs flex items-center space-x-2 justify-center">
          {[0, 1, 2, 3, 4, 5].map((_, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              maxLength={1}
              placeholder="_"
              className="form-control placeholder:text-gray-300 text-center"
              name={`num${index + 1}`}
              value={
                formik.values[`num${index + 1}` as keyof typeof formik.values]
              }
              onChange={(e) => handleOtpChange(e, index)}
            />
          ))}
        </div>

        {/* Timer */}
        {seconds !== 0 ? (
          <p className="font-medium text-[#1D1F1F] text-sm ">
            The code will expire in{" "}
            <span className="text-brand">{seconds} seconds</span>
          </p>
        ) : (
          <p
            onClick={handleSendCode}
            className="cursor-pointer capitalize font-medium text-brand text-sm "
          >
            Send a new code
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`btn1 py-2 w-full text-center ${
            isButtonDisabled
              ? "bg-[#EEEEEE] text-[#A5A5A5] border-[#EEEEEE] cursor-not-allowed"
              : "bg-brand-blue border-brand-blue text-white"
          }`}
        >
          Confirmation
        </button>
      </form>
    </div>
  );
}
