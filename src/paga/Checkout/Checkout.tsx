import CustomBreadcrumb from "@/components/Layout Components/Breadcrumb";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import RegisterStepper from "./Ui/Stepper";
import RegisterButtons from "./Ui/RegisterButtons";
import iconLeft from "@/assets/icon/arrow-left.svg";
import Step2 from "./Ui/Step2";
import { useNavigate } from "react-router-dom";
import Step3 from "./Ui/Step3";
export default function Checkout() {
  const [activeStep, setActiveStep] = useState(2);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  function Back() {
    navigate(-1);
  }
  const step2Schema = Yup.object({
    FillName: Yup.string().required("Full name is required"),
    SpeakingLanguage: Yup.string().required("Speaking Language is required"),
    Email: Yup.string().email("Invalid email"),
    Phone: Yup.string().required("Phone is required"),
    CountryRegion: Yup.string().required("Country Region is required"),
    TownCity: Yup.string().required("Town City is required"),
    StateCounty: Yup.string().required("State County is required"),
    PPickUpLocationhone: Yup.string().required(
      "Pick Up Locationhone is required",
    ),
    AdditionalInformation: Yup.string().required(
      "Additional Information is required",
    ),
  });
  const formikStep2 = useFormik({
    initialValues: {
      FillName: "",
      SpeakingLanguage: "",
      Email: "",
      Phone: "",
      CountryRegion: "",
      TownCity: "",
      StateCounty: "",
      PPickUpLocationhone: "",
      AdditionalInformation: "",
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
    if (activeStep === 2) {
      const validationErrors = await formikStep2.validateForm();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) {
        formikStep2.setTouched({
          FillName: true,
          SpeakingLanguage: true,
          Email: true,
          Phone: true,
          CountryRegion: true,
          TownCity: true,
          StateCounty: true,
          PPickUpLocationhone: true,
          AdditionalInformation: true,
        });
        return;
      }
    }
    setErrors({});
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Swal.fire({
          title: "Trip submitted successfully",
          icon: "success",
          draggable: true,
        });
        formikStep2.resetForm();
        setActiveStep(1);
      }, 1000);
    }
  };
  return (
    <>
      <div className="pt-33 space-y-8 bg-[#f2f2f2]">
        <CustomBreadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Cart", href: "/cart" },
            { name: "Checkout" },
          ]}
        />
        <div className="container space-y-8">
          <div className=" space-y-8 p-5 lg:py-6 lg:px-10 bg-white rounded-2xl">
            <div
              onClick={Back}
              className="flex items-center gap-6 cursor-pointer w-fit"
            >
              <img src={iconLeft} className="size-5!" alt="" />
              <p className="text-[#1D1F1F] font-medium text-2xl">Checkout</p>
            </div>
            <div className="w-full max-w-250 mx-auto">
              <RegisterStepper
                steps={[
                  { id: 1, label: "cart details" },
                  { id: 2, label: "Billing Details" },
                  { id: 3, label: "Payment Method" },
                ]}
                activeStep={activeStep}
                errors={errors}
              />
            </div>
          </div>
          <div className="rounded-2xl pb-5 space-y-6">
            <div className="grid grid-cols-3 gap-5">
              <div className="space-y-8 col-span-3 lg:col-span-2">
                {activeStep === 2 && (
                  <div>
                    <Step2 formik={formikStep2} />
                  </div>
                )}
                {activeStep === 3 && (
                  <div>
                    <Step3 />
                  </div>
                )}
              </div>
              <div className="col-span-3 lg:col-span-1 py-6 px-8 bg-[#FFFFFF] rounded-3xl space-y-6 h-fit">
                <p className="text-[#A5A5A5] font-medium text-xl border-b-3 pb-6 border-dashed border-[#EEEEEE]">
                  Payment summary
                </p>
                <div className="space-y-4 border-b-3 pb-6 border-dashed border-[#EEEEEE]">
                  <p className="text-[#A5A5A5] font-medium text-sm w-full flex items-center justify-between">
                    Tours Number{" "}
                    <span className="text-xl text-[#333333]">2</span>
                  </p>
                  <p className="text-[#A5A5A5] font-medium text-sm w-full flex items-center justify-between">
                    Subtotal{" "}
                    <span className="text-xl text-[#333333]">$1,500</span>
                  </p>
                  <p className="text-[#A5A5A5] font-medium text-sm w-full flex items-center justify-between">
                    Add-ons <span className="text-xl text-[#333333]">$500</span>
                  </p>
                  <p className="text-[#A5A5A5] font-medium text-sm w-full flex items-center justify-between">
                    Discount <span className="text-xl text-[#F55157]">-$5</span>
                  </p>
                </div>
                <p className="text-[#1D1F1F] font-medium text-xl w-full flex items-center justify-between">
                  Grand Total{" "}
                  <span className="text-[30px] text-brand-blue">$1,995</span>
                </p>
              </div>
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
    </>
  );
}
