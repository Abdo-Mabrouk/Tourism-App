import InputWithIcon from "@/components/inputs/TextInput";
import LoginUsing from "../../components/LoginUsing";
import icon1 from "@/assets/icon/sms2.svg";
import icon2 from "@/assets/icon/lock.svg";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "@/components/inputs/CheckBox";
import { useState } from "react";

export default function Login() {
  const [saveLogin, setSaveLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const schema = Yup.object({
    email: Yup.string()
      .required("email is riquired")
      .email("eneten a valid email"),
    password: Yup.string()
      .required("password is riquired")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
      ),
  });
  function signUp() {
    Swal.fire({
      title: "Welcome back",
      icon: "success",
      draggable: true,
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: signUp,
  });
  return (
    <div className="space-y-5">
      <p className="text-[#1D1F1F] text-center lg:text-start text-[34px]  font-medium">Welcome back</p>
      <LoginUsing title="Login using" />
      <form onSubmit={formik.handleSubmit} action="" className="space-y-6">
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
        <div className="flex items-center justify-between">
          <CheckBox
            label="Save Login"
            value={saveLogin}
            setValue={(val: boolean) => setSaveLogin(val)}
          />
          <Link to={"/auth/forget-password"} className="text-sm text-brand-blue font-medium">
            Forget password?
          </Link>
        </div>

        <button type="submit" className="btn1 w-full bg-brand-blue text-white">
          Login
        </button>
        <Link to={"/auth/sine-in"} className="btn1 w-full! block text-center">
          Create an Account
        </Link>
      </form>
    </div>
  );
}
