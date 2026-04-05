import icon1 from "@/assets/icon/Line 39.svg";
import SectionContainer from "@/components/Layout Components/sectionContainer";

export default function HowWorks() {
  return (
    <div>
      <SectionContainer
        title="How it works ?"
        decs="Only three steps away from Egypt"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
          <div className="w-full lg:w-86.25 border border-[#EEEEEE] p-4 lg:p-6 rounded-3xl flex flex-row lg:flex-col gap-4 items-center">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-5xl lg:text-[96px] font-bold text-brand-blue">
                1
              </p>
              <div className="size-10 lg:size-16 rounded-full bg-[#EEEEEE] absolute -z-1"></div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4 justify-start lg:justify-center">
              <p className="text-xl lg:text-4xl text-[#1D1F1F] font-medium text-center">
                Finding Trip
              </p>
              <p className="text-[14px] lg:text-base text-[#666666] font-medium text-center">
                Select your favorite trip{" "}
              </p>
            </div>
          </div>
          <img src={icon1} alt="icon" className="w-25 h-auto hidden lg:block" />
          <div className="w-full lg:w-86.25 border border-[#EEEEEE] p-4 lg:p-6 rounded-3xl flex flex-row lg:flex-col gap-4 items-center">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-5xl lg:text-[96px] font-bold text-brand-blue">
                2
              </p>
              <div className="size-10 lg:size-16 rounded-full bg-[#EEEEEE] absolute -z-1"></div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4 justify-start lg:justify-center">
              <p className="text-xl lg:text-4xl text-[#1D1F1F] font-medium text-center ">
                Booking{" "}
              </p>
              <p className="text-[14px] lg:text-base text-[#666666] font-medium text-center ">
                Trip booking and payment{" "}
              </p>
            </div>
          </div>
          <img src={icon1} alt="icon" className="w-25 h-auto hidden lg:block" />
          <div className="w-full lg:w-86.25 border border-[#EEEEEE] p-4 lg:p-6 rounded-3xl flex flex-row lg:flex-col gap-4 items-center">
            <div className="flex flex-col items-center justify-center ">
              <p className="text-5xl lg:text-[96px] font-bold text-brand-blue">
                3
              </p>
              <div className="size-10 lg:size-16 rounded-full bg-[#EEEEEE] absolute -z-1"></div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4 justify-start lg:justify-center">
              <p className="text-xl lg:text-4xl text-[#1D1F1F] font-medium  text-center">
                Enjoy
              </p>
              <p className="text-[14px] lg:text-base text-[#666666] font-medium text-center ">
                Start your Exciting Journey
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
