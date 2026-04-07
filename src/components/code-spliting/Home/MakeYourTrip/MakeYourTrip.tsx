import SectionContainer from "@/components/Layout Components/sectionContainer";
import pattern1 from "@/assets/pattern1.svg";
import pattern2 from "@/assets/pattern2.svg";
import RadioInput from "@/components/inputs/RadioInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from "@/components/inputs/CustomInput";
export default function MakeYourTrip() {
  const [selected, setSelected] = useState("cash");
  const [value, setValue] = useState("");

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
                <CustomInput
                  label="From"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <CustomInput
                  label="to"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />

                <Link
                  to={"/make-your-trip"}
                  className="w-fit! block cursor-pointer"
                >
                  <button className="font-medium text-base text-white bg-brand py-4 lg:py-6 rounded-full w-70 lg:w-50! cursor-pointer">
                    Make Trip
                  </button>
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
