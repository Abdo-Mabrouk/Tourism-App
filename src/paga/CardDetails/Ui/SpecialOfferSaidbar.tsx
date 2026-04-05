import icon1 from "@/assets/icon/discount 2.svg";
import icon2 from "@/assets/icon/send-2.svg";
import icon3 from "@/assets/icon/calendar2.svg";
import icon4 from "@/assets/icon/arrow-down3.svg";
import icon5 from "@/assets/icon/heart.svg";
import icon6 from "@/assets/icon/message-2.svg";
import CountdownTimer from "@/components/Layout Components/CountdownTimer";
import CounterInput from "@/components/inputs/CounterInput";
import { useState } from "react";
interface GuestsCount {
  adults: number;
  Children: number;
  Infants: number;
}
export default function SpecialOfferSaidbar() {
  const [count, setCount] = useState<GuestsCount>({
    adults: 1,
    Children: 1,
    Infants: 1,
  });

  return (
    <>
      <div className="">
        <p className="text-sm font-medium bg-[#F55157] py-1 px-5 w-[80%]! mx-auto! text-[#FFFFFF] flex items-center justify-center gap-2 rounded-t-full">
          <img src={icon1} alt="" className="size-4!" />{" "}
          <span>Special Offer</span>
        </p>
        <div className="space-y-5 border border-[#EEEEEE] p-5 rounded-3xl shadow">
          <div className="flex items-center justify-between ">
            <div className="">
              <p className="text-[#666666] text-sm font-normal">start from</p>
              <div className="flex items-center gap-2">
                <p className=" font-bold text-[#1D1F1F] text-[32px] ">$1500</p>
                <del className=" font-medium text-[#A5A5A5] text-xl decoration-red-500">
                  $2000
                </del>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2 px-6 border border-[#EEEEEE] w-fit rounded-full">
              <img src={icon2} className="size-6!" alt="" />
              <p className="text-[#1D1F1F] text-base font-medium">Share</p>
            </div>
          </div>
          <CountdownTimer
            initialDays={5}
            initialHours={20}
            initialMinutes={50}
          />
          <div className="border border-[#EEEEEE] p-2 px-5 rounded-full flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-[#444444] text-sm font-normal">Date</p>
              <p className="text-[#A5A5A5] text-base font-medium">
                Choose a date
              </p>
            </div>
            <img src={icon3} alt="" className="size-5!" />
          </div>
          <div className="space-y-3">
            <p className="text-[#A5A5A5] text-xl font-medium">Passengers</p>
            <CounterInput
              labol="Adults (18+)"
              value={count.adults}
              onChange={(value) => setCount({ ...count, adults: value })}
            />
            <CounterInput
              labol="Children (4 - 17)"
              value={count.Children}
              onChange={(value) => setCount({ ...count, Children: value })}
            />
            <CounterInput
              labol="Infants (0 - 3)"
              value={count.Infants}
              onChange={(value) => setCount({ ...count, Infants: value })}
            />
          </div>
          <div className="space-y-3">
            <p className="text-[#A5A5A5] text-xl font-medium">Amount</p>
            <p className="text-[#1D1F1F] font-medium text-base flex items-center justify-between">
              <span className="flex items-center gap-2">
                Add-ons{" "}
                <span className="text-brand-blue font-normal text-xs flex items-center gap-1">
                  See details
                  <img src={icon4} className="size-4!" alt="" />
                </span>
              </span>
              <span className="text-[#1D1F1F] text-xl">$700</span>
            </p>
            <p className="text-[#1D1F1F] font-medium text-base flex items-center justify-between">
              <span className="flex items-center gap-2">Total</span>
              <span className="text-brand text-xl">$2200</span>
            </p>
          </div>
          <button className="btn1 bg-brand-blue text-white w-full">
            Book now
          </button>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-[#EEEEEE] p-2 flex items-center justify-center gap-2 rounded-full">
              <img src={icon5} alt="" className="size-6" />
              <p className="text-base text-[#1D1F1F] font-medium">Favorites</p>
            </div>
            <div className="border border-[#EEEEEE] p-2 flex items-center justify-center gap-2 rounded-full">
              <img src={icon6} alt="" className="size-6" />
              <p className="text-base text-[#1D1F1F] font-medium">
                Ask a question
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
