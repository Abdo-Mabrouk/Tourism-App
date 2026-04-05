import InputWithIcon from "@/components/inputs/TextInput";
import icon2 from "@/assets/icon/lock.svg";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function CreateNewPassword() {
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const navigate = useNavigate();
  const schema = Yup.object({
    password: Yup.string()
      .required("password is riquired")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
      ),
    rePassword: Yup.string()
      .required("confirm Password is riquired")
      .oneOf([Yup.ref("password")], "rePassword must be the same as password"),
  });
  function handleCreateNewPassword() {
    Swal.fire({
      title: "New Password Has Been Created",
      icon: "success",
      draggable: true,
    });
    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  }
  const formik = useFormik({
    initialValues: {
      password: "",
      rePassword: "",
    },
    validationSchema: schema,
    onSubmit: handleCreateNewPassword,
  });
  return (
    <div className="space-y-5 mt-20 lg:mt-20">
      <p className="text-[#1D1F1F] text-center lg:text-start text-[34px]  font-medium">
        Create a new password{" "}
      </p>
      <p className="text-[#A5A5A5] text-center lg:text-start text-base  font-medium">
        Try to create a strong password to keep your personal information
        secure.
      </p>
      <form onSubmit={formik.handleSubmit} action="" className="space-y-6">
        <InputWithIcon
          label="Password"
          name="password"
          placeholder="Enter your password"
          isRequired
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          icon={icon2}
        />
        <InputWithIcon
          label="Confirm Password"
          name="rePassword"
          placeholder="Enter your rePassword"
          isRequired
          type="password"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          error={formik.errors.rePassword}
          icon={icon2}
        />
        <button
          type="submit"
          className="btn1 py-2 w-full bg-brand-blue text-white"
        >
          Confirmation
        </button>
      </form>
    </div>
  );
}
