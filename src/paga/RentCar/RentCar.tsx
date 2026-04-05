import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import RegisterStepper from "./Ui/Stepper";
import RegisterButtons from "./Ui/RegisterButtons";
import iconLeft from "@/assets/icon/arrow-left.svg";
import Step1 from "./Ui/Step1";
import Step2 from "./Ui/Step2";
import Step3 from "./Ui/Step3";
import { useNavigate } from "react-router-dom";
import CustomBreadcrumb from "@/components/Layout Components/Breadcrumb";
export default function RentCar() {
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  function Back() {
    navigate(-1);
  }
  const step1Schema = Yup.object({
    PickDateAndTime: Yup.string().required("Pick Up Date And Time is required"),
    Location: Yup.string().required("Location is required"),
    ReturnDate: Yup.string().required("Return Date is required"),
  });
  const step2Schema = Yup.object({
    FillName: Yup.string().required("Full name is required"),
    Email: Yup.string().email("Invalid email").required("Email is required"),
    Phone: Yup.string().required("Phone is required"),
    Nationality: Yup.string().required("Nationality is required"),
    Adults: Yup.number().min(0, "Adults must be 0 or more").required(),
    Children: Yup.number().min(0, "Children must be 0 or more").required(),
    Infants: Yup.number().min(0, "Infants must be 0 or more").required(),
  });
  const formikStep1 = useFormik({
    initialValues: {
      ReturnDate: "",
      PickDateAndTime: "",
      Location: "",
      TypeOfTrip: "oneWay",
    },
    validationSchema: step1Schema,
    onSubmit: () => {},
  });
  const formikStep2 = useFormik({
    initialValues: {
      FillName: "",
      Email: "",
      Phone: "",
      Nationality: "",
      Adults: 0,
      Children: 0,
      Infants: 0,
    },
    validationSchema: step2Schema,
    onSubmit: () => {},
  });
  const handleBackButton = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => prev - 1);
    }
  };
  const handleNext = async () => {
    if (activeStep === 1) {
      const validationErrors = await formikStep1.validateForm();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) {
        formikStep1.setTouched({
          ReturnDate: true,
          Location: true,
          PickDateAndTime: true,
        });
        return;
      }
    }

    if (activeStep === 2) {
      const validationErrors = await formikStep2.validateForm();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) {
        formikStep2.setTouched({
          FillName: true,
          Email: true,
          Phone: true,
          Nationality: true,
          Adults: true,
          Children: true,
          Infants: true,
        });
        return;
      }
    }

    setErrors({});
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    } else {
      // الخطوة الأخيرة - إرسال النموذج
      setLoading(true);
      // TODO: إرسال البيانات للـ API
      setTimeout(() => {
        setLoading(false);
        Swal.fire({
          title: "Trip submitted successfully",
          icon: "success",
          draggable: true,
        });
        formikStep1.resetForm();
        formikStep2.resetForm();
        setActiveStep(1);
      }, 1000);
    }
  };

  return (
    <div className="pb-10 pt-33 space-y-8 bg-[#f2f2f2] ">
      <CustomBreadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Rent Car" },
          ]}
        />
      <div className="container space-y-6">
        <div className="space-y-8 p-5 lg:py-6 lg:px-10 bg-white rounded-2xl">
          <div
            onClick={Back}
            className="flex items-center gap-6 cursor-pointer w-fit"
          >
            <img src={iconLeft} className="size-5!" alt="" />
            <p className="text-[#1D1F1F] font-medium text-2xl">Rent Car</p>
          </div>
          <div className="w-full max-w-250 mx-auto">
            <RegisterStepper activeStep={activeStep} errors={errors} />
          </div>
        </div>
        <div className="space-y-8 p-5 lg:p-10 bg-white rounded-2xl">
          <div className="">
            {activeStep === 1 && (
              <div>
                <Step1 formik={formikStep1} />
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <Step2 formik={formikStep2} />
              </div>
            )}
            {activeStep === 3 && (
              <div>
                <Step3
                  step1Values={formikStep1.values}
                  step2Values={formikStep2.values}
                  onEdit={() => setActiveStep(1)}
                />
              </div>
            )}
          </div>
          <RegisterButtons
            stepCount={activeStep}
            handleBackButton={handleBackButton}
            onClick={handleNext}
            loading={loading}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
