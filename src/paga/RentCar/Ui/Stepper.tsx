import { FaCheck } from "react-icons/fa6";

const RegisterStepper = ({
  activeStep,
  errors,
}: {
  activeStep: number;
  errors: Record<string, string | undefined>;
}) => {

  const steps = [
    { id: 1, label: "Quick Information" },
    { id: 2, label: "Personal information" },
    { id: 3, label: "Confirmation" },
  ];

  // keys الخاصة بكل step
  const stepErrorKeys: Record<number, string[]> = {
    1: ["From", "to"],
    2: [
      "FillName",
      "Email",
      "Phone",
      "Nationality",
      "Adults",
      "Children",
      "Infants",
      "MinPrice",
      "MaxPrice",
      "Note",
    ],
    3: [],
  };

  // هل step معين فيه error
  const hasStepError = (stepId: number) => {
    return stepErrorKeys[stepId]?.some((key) => Boolean(errors[key]));
  };

  return (
    <div className="flex items-center justify-center w-full overflow-x-scroll lg:overflow-visible">
      {steps.map((step, index) => {
        const isActive = step.id === activeStep;
        const isCompleted = step.id < activeStep;
        const isLast = index === steps.length - 1;
        const stepHasError = hasStepError(step.id);

        // المرحلة الحالية: border بلون brand | المرحلة المكتملة: background بلون brand
        let capsuleClass = "";
        let circleClass = "";
        let textClass = "";

        if (stepHasError) {
          capsuleClass = "border-[#F44336] bg-white";
          circleClass = "border-[#F44336] bg-[#F44336] text-white";
          textClass = "text-[#F44336]";
        } else if (isCompleted) {
          capsuleClass = "bg-brand border-brand";
          circleClass = "border-2 border-white bg-transparent text-white";
          textClass = "text-white";
        } else if (isActive) {
          capsuleClass = "bg-white border-2 border-brand";
          circleClass = "border-2 border-brand bg-transparent text-brand";
          textClass = "text-[#1D1F1F]";
        } else {
          capsuleClass = "bg-white border-2 border-[#E3E3E3]";
          circleClass = "border-2 border-[#D7D7D7] bg-transparent text-[#8F8F90]";
          textClass = "text-[#1D1F1F]";
        }

        return (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            {/* Step Capsule */}
            <div
              className={`flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 ${capsuleClass}`}
            >
              {/* Circle / Check */}
              <div
                className={`flex items-center justify-center size-7 rounded-full border shrink-0 ${circleClass}`}
              >
                {isCompleted ? (
                  <FaCheck className="text-white text-sm" />
                ) : (
                  <span className="text-xs font-semibold">{step.id}</span>
                )}
              </div>

              {/* Label */}
              <span className={`text-sm font-medium whitespace-nowrap ${textClass}`}>
                {step.label}
              </span>
            </div>

            {/* Connecting Line */}
            {!isLast && (
              <div
                className={`flex-1 h-0.5 mx-1 min-w-4 transition-all duration-300 ${
                  isCompleted ? "bg-brand" : "bg-[#E3E3E3]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RegisterStepper;
