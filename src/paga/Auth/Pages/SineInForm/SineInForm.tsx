import InputWithIcon from "@/components/inputs/TextInput";
import LoginUsing from "../../components/LoginUsing";
import icon1 from "@/assets/icon/sms2.svg";
import icon2 from "@/assets/icon/lock.svg";
import icon3 from "@/assets/icon/profile.svg";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "@/components/inputs/CheckBox";
import { useState } from "react";
import ErrorInput from "@/components/inputs/ErrorInput";

export default function SineInForm() {
  const [conditions, setConditions] = useState<boolean>(false);
  const [checkError, setCheckError] = useState("");

  const navigate = useNavigate();
  const nameRegex = /^[A-Z][a-zA-Z]{2,}(?:\s[A-Z][a-zA-Z]{2,})+$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const schema = Yup.object({
    name: Yup.string()
      .required("Name is riquired")
      .max(20, " Name must not be more than 20 letrs")
      .matches(
        nameRegex,
        "The name must start with a capital letter and be at least 3 characters long",
      ),
    email: Yup.string()
      .required("email is riquired")
      .email("eneten a valid email"),
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
  function signUp() {
    if (!conditions) {
      setCheckError("You must agree to the terms and conditions");
      return;
    }

    setCheckError("");
    Swal.fire({
      title: "Welcome back",
      icon: "success",
      draggable: true,
    });
    setTimeout(() => {
      navigate("/auth/login");
    }, 2000);
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: schema,
    onSubmit: signUp,
  });
  return (
    <div className="space-y-5 pb-6">
      <p className="text-[#1D1F1F] text-center lg:text-start text-[34px] font-medium">Welcome back</p>
      <LoginUsing title="Create an account using" />
      <form onSubmit={formik.handleSubmit} action="" className="space-y-6">
        <InputWithIcon
          label="Fill Name"
          isRequired
          name="name"
          placeholder="your full name here"
          value={formik.values.name}
          error={formik.errors.name}
          onChange={formik.handleChange}
          icon={icon3}
        />
        <InputWithIcon
          label="Email"
          isRequired
          name="email"
          placeholder="Ahmed@ahmed.com"
          value={formik.values.email}
          error={formik.errors.email}
          onChange={formik.handleChange}
          icon={icon1}
        />
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
        <div className=" relative">
          <div className="flex items-center gap-0.5">
            <CheckBox
              label="I agree to the "
              value={conditions}
              setValue={(val: boolean) => {
                setConditions(val);
                setCheckError("");
              }}
            />
            <Link
              to={"/terms-and-conditions"}
              className="text-sm text-brand-blue font-medium underline"
            >
              terms and conditions
            </Link>
          </div>
          <ErrorInput error={checkError} />
        </div>

        <button type="submit" className="btn1 w-full bg-brand-blue text-white">
          Create an account
        </button>
        <p className="text-sm font-medium text-[#1D1F1F] w-full text-center">
          Already have an account?
          <Link
            to={"/auth/login"}
            className="ms-2 text-sm font-medium text-brand "
          >
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
