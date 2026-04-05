import RadioInput from "@/components/inputs/RadioInput";
import { useState } from "react";
import icon1 from '@/assets/icon/calendar.svg'
import icon2 from '@/assets/icon/arrow-down.svg'
export default function RentCarTap() {
  const [selected, setSelected] = useState("cash");
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-2">
        <p className="text-[#A5A5A5] font-medium text-xl">Type of Trip?</p>
        <RadioInput
          name="Time"
          value="ExactTime"
          id="ExactTime"
          label="one way"
          checked={selected === "ExactTime"}
          onChange={setSelected}
        />
        <RadioInput
          name="Time"
          value="ApproximateTime"
          id="ApproximateTime"
          label="Round Trip"
          checked={selected === "ApproximateTime"}
          onChange={setSelected}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="py-4 px-8 border border-[#EEEEEE]  rounded-full flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-4">
            <p className="font-normal text-[14px] text-[#444444]">Pick Up Date and time</p>
            <p className="font-medium text-[16px] text-[#A5A5A5]">Choose the time and date for Pick Up</p>
          </div>
          <img src={icon1} alt="" className="size-6"/>
        </div>
        <div className="py-4 px-8 border border-[#EEEEEE]  rounded-full flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-4">
            <p className="font-normal text-[14px] text-[#444444]">Location</p>
            <p className="font-medium text-[16px] text-[#A5A5A5]">Choose Pick-Up Location</p>
          </div>
          <img src={icon2} alt="" className="size-6"/>
        </div>
        <button className="font-medium text-base text-white bg-brand py-6 rounded-full w-full lg:w-100! block">Send Request</button>
      </div>
    </div>
  );
}
