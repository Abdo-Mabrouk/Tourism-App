import icondev from "@/assets/icon/Frame 1000005059.svg";
import icon2 from "@/assets/icon/,,.svg";
import Rateing from "../Layout Components/Rateing";
import { useState } from "react";
interface dataCardProps {
  id: string;
  desc: string;
  name: string;
  city: string;
  imege: string;
  rating: number;
}
export default function AboutCard({ dataCard }: { dataCard: dataCardProps }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = dataCard.desc.length > 140;
  const displayedText =
    isExpanded || !isLongText
      ? dataCard.desc
      : dataCard.desc.slice(0, 140) + "...";
  return (
    <div className="p-6 rounded-3xl bg-[#F9FAFB] flex flex-col gap-4 relative">
      <div className="flex items-center justify-between">
        <img
          src={icondev}
          alt=""
          className=" size-8! md:size-12! rounded-full object-cover"
        />
        <div className="flex items-center gap-3">
          <p className="text-[#666666] font-medium text-sm md:text-base">{dataCard.rating}</p>
          <Rateing rating={dataCard.rating} />
        </div>
      </div>
      <div className="">
        <p className="font-bold text-sm md:text-base text-[#666666] text-start">
          {displayedText}
          {isLongText && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="font-bold text-sm md:text-base text-brand-blue cursor-pointer"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <img src={dataCard.imege} alt="" className=" size-10! md:size-16! rounded-full object-cover" />
        <div className="">
          <p className="text-[#1D1F1F] font-medium text-base md:text-xl">{dataCard.name}</p>
          <p className="text-[#666666] font-normal text-sm md:text-base">
            {dataCard.city}
          </p>
        </div>
      </div>
      <img
        src={icon2}
        alt=""
        className=" w-12! h-7.5!  md:w-17.5! md:h-12.5! absolute bottom-6 end-6"
      />
    </div>
  );
}
