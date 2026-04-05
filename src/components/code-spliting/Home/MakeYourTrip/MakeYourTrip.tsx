import SectionContainer from "@/components/Layout Components/sectionContainer";
import pattern1 from "@/assets/pattern1.svg";
import pattern2 from "@/assets/pattern2.svg";
import RadioInput from "@/components/inputs/RadioInput";
import icon1 from "@/assets/icon/calendar.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MakeYourTrip() {
  const [selected, setSelected] = useState("cash");
  return (
    <div className=" container py-3 lg:py-16">
      <div className="flex flex-col gap-12 bg-[#F9FAFB] pt-3 lg:pt-10 lg:pb-14 rounded-[40px] relative overflow-hidden ">
        <img
          src={pattern1}
          alt=""
          className=" absolute bottom-0 start-0 w-118 z-0"
        />
        <SectionContainer title="Make Your Trip">
          <div className="bg-white p-6 rounded-b-[40px] rounded-t-2xl lg:rounded-[40px] relative z-10">
            <div className=" flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:justify-between">
                <p className="text-[#A5A5A5] font-medium text-xl">
                  When will you be traveling?
                </p>
                <RadioInput
                  name="Time2"
                  value="ExactTime"
                  id="ExactTime2"
                  label="Have An Exact Time"
                  checked={selected === "ExactTime"}
                  onChange={setSelected}
                />
                <RadioInput
                  name="Time2"
                  value="ApproximateTime"
                  id="ApproximateTime2"
                  label="Have An Approximate Time"
                  checked={selected === "ApproximateTime"}
                  onChange={setSelected}
                />
                <RadioInput
                  name="Time2"
                  value="NotSureYet"
                  id="NotSureYet2"
                  label="Not Sure Yet"
                  checked={selected === "NotSureYet"}
                  onChange={setSelected}
                />
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="py-4 px-8 border border-[#EEEEEE]  rounded-full flex items-center justify-between w-full ">
                  <div className="flex flex-col items-start gap-4">
                    <p className="font-normal text-[14px] text-[#444444]">
                      From
                    </p>
                    <p className="font-medium text-[16px] text-[#1D1F1F]">
                      02/09/2024
                    </p>
                  </div>
                  <img src={icon1} alt="" className="size-6" />
                </div>
                <div className="py-4 px-8 border border-[#EEEEEE]  rounded-full flex items-center justify-between w-full ">
                  <div className="flex flex-col items-start gap-4">
                    <p className="font-normal text-[14px] text-[#444444]">To</p>
                    <p className="font-medium text-[16px] text-[#A5A5A5]">
                      Select the end date of the trip
                    </p>
                  </div>
                  <img src={icon1} alt="" className="size-6" />
                </div>
                <Link  to={"/make-your-trip"} className="w-fit! block cursor-pointer">
        <button className="font-medium text-base text-white bg-brand py-6 rounded-full lg:w-50! cursor-pointer">Make Trip</button>
        </Link>
              </div>
            </div>
          </div>
        </SectionContainer>
        <img src={pattern2} alt="" className=" absolute top-0 end-0 w-60" />
      </div>
    </div>
  );
}
