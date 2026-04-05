import { useState } from "react";
import icon1 from '@/assets/icon/calendar.svg'
import RadioInput from "@/components/inputs/RadioInput";
import { Link } from "react-router-dom";

export default function MakeYourTripTap() {
  const [selected, setSelected] = useState("cash");
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:justify-between">
        <p className="text-[#A5A5A5] font-medium text-xl">When will you be traveling?</p>
        <RadioInput
          name="Time"
          value="ExactTime"
          id="ExactTime"
          label="Have An Exact Time"
          checked={selected === "ExactTime"}
          onChange={setSelected}
        />
        <RadioInput
          name="Time"
          value="ApproximateTime"
          id="ApproximateTime"
          label="Have An Approximate Time"
          checked={selected === "ApproximateTime"}
          onChange={setSelected}
        />
        <RadioInput
          name="Time"
          value="NotSureYet"
          id="NotSureYet"
          label="Not Sure Yet"
          checked={selected === "NotSureYet"}
          onChange={setSelected}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="py-4 px-8 border border-[#EEEEEE]  rounded-full flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-4">
            <p className="font-normal text-[14px] text-[#444444]">From</p>
            <p className="font-medium text-[16px] text-[#1D1F1F]">02/09/2024</p>
          </div>
          <img src={icon1} alt="" className="size-6"/>
        </div>
        <div className="py-4 px-8 border border-[#EEEEEE]  rounded-full flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-4">
            <p className="font-normal text-[14px] text-[#444444]">To</p>
            <p className="font-medium text-[16px] text-[#A5A5A5]">Select the end date of the trip</p>
          </div>
          <img src={icon1} alt="" className="size-6"/>
        </div>
        <Link to={"/make-your-trip"} className="w-fit! block cursor-pointer">
        <button className="font-medium text-base text-white bg-brand py-6 rounded-full lg:w-50! cursor-pointer">Make Trip</button>
        </Link>
      </div>
    </div>
  );
}
