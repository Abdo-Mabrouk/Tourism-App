import icon from '@/assets/icon/arrow-righ3t.svg'
const RegisterButtons = ({
  loading,
  stepCount,
  handleBackButton,
  onClick,
  disabled,
}: {
  loading: boolean;
  stepCount: number;
  handleBackButton: () => void;
  onClick: () => void;
  disabled?: boolean;
}) => {

  const isLastStep = stepCount === 3;

  return (
    <div className="flex items-center justify-end gap-2 mt-2 w-full">
      {isLastStep && 
      <button
      type="button"
      onClick={handleBackButton}
      className={`h-12 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center gap-2.5 text-base font-medium w-27 text-[#1D1F1F] border border-[#EEEEEE] bg-transparent hover:bg-black hover:text-[#FFFFFF] `}
    >
        <span>{"Cancel"} </span>
    </button>}

      <button
        type="submit"
        onClick={onClick}
        disabled={loading || disabled}
        className={`cursor-pointer transition-all duration-300 flex items-center justify-center gap-2.5 w-fit px-10 lg:w-50 h-12 rounded-full text-[#FFFFFF] text-base font-medium bg-brand-blue hover:opacity-90
          ${
            loading || disabled
              && "opacity-50 cursor-not-allowed bg-[#0000001F] "
          }
        `}
      >
        <span>{isLastStep ? "Submit" : "Next up"} </span>
        <img
          src={icon}
          className={``}
          alt=""
        />
      </button>
    </div>
  );
};

export default RegisterButtons;
