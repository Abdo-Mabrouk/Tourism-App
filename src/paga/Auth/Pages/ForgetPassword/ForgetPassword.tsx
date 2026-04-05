import InputWithIcon from "@/components/inputs/TextInput";
import icon1 from "@/assets/icon/sms2.svg";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const schema = Yup.object({
    email: Yup.string()
      .required("email is riquired")
      .email("eneten a valid email"),
  });
  function signUp() {
    Swal.fire({
      title: "Monitor your email",
      icon: "success",
      draggable: true,
    });
    setTimeout(() => {
      navigate("/auth/activation-code");
    }, 2000);
  }
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: signUp,
  });
  return (
    <div className="space-y-5 mt-25 lg:mt-30">
      <p className="text-[#1D1F1F] text-center lg:text-start text-[34px]  font-medium">
        Did you forget your password?
      </p>
      <p className="text-[#A5A5A5] text-center lg:text-start text-base  font-medium">
        Forgot your password? Don't worry, you can create a new password by
        entering your registered email address.
      </p>
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
        <button type="submit" className="btn1 py-2 w-full bg-brand-blue text-white">
          Send the code{" "}
        </button>
        <p className="text-sm font-medium text-[#1D1F1F] w-full text-center">
          Don't have an account?
          <Link
            to={"/auth/sine-in"}
            className="ms-2 text-sm font-medium text-brand "
          >
            Create a new account.{" "}
          </Link>
        </p>
      </form>
    </div>
  );
}
