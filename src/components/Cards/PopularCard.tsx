import icon2 from "@/assets/icon/discount 2.svg";
import icon3 from "@/assets/icon/location2.svg";
import icon4 from "@/assets/icon/clock.svg";
import PropertySwiper from "../Layout Components/PropertySwiper";
import CountdownTimer from "../Layout Components/CountdownTimer";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";

export interface Excursion {
  id: number;
  imge: string[];
  desc: string;
  city: string;
  excursions: string;
  price: number | string;
  priceAfterDiscount?: number | string;
  offers: number | string;
  CountDownDays?: number | undefined;
  CountDownHours?: number | undefined;
  CountDownMinutes?: number | undefined;
}

export default function PopularCard({
  cardData,
  isCount = false,
}: {
  cardData: Excursion;
  isCount?: boolean;
}) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className="border  border-[#EEEEEE] rounded-3xl p-2 pb-4 flex flex-col gap-4 hover:shadow-xl transition-colors duration-300"
      >
        <div className="w-full h-53.75 rounded-2xl overflow-hidden relative">
          <PropertySwiper images={cardData.imge} />
          <div
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="size-10 flex items-center justify-center rounded-full absolute end-2 top-2 bg-white z-40"
          >
            <Heart
              className={`cursor-pointer transition ${
                liked ? "fill-red-500 text-red-500" : "text-[#DEDEDE]"
              }`}
            />
          </div>
          {cardData.priceAfterDiscount && (
            <>
              <div className="flex items-center justify-center gap-2 py-2 px-3 bg-[#F55157] rounded-full absolute start-2 top-2 z-40">
                <img src={icon2} alt="" className="size-6!" />
                <p className="font-medium text-[14px] text-[#FFFFFF]">
                  Special offer
                </p>
              </div>
            </>
          )}
        </div>
        <div         onClick={() => navigate(`/card-details/${cardData.id}`)}
 className="flex flex-col gap-4 px-2 cursor-pointer">
          <p className=" text-base lg:text-xl font-medium text-[#1D1F1F]">
            {cardData.desc}
          </p>
          <div className="flex items-center gap-2">
            <div className="bg-[#E9F5F5] py-1 px-2 rounded-full font-normal text-[#017375] text-[12px] lg:text-[14px] w-fit flex items-center gap-2">
              <img src={icon3} alt="" className="size-4!" />
              <p className="">{cardData.city}</p>
            </div>
            <div className="bg-[#FEF3E6] py-1 px-2 rounded-full font-normal text-[#945405] text-[12px] lg:text-[14px] w-fit flex items-center gap-2">
              <p className="">{cardData.excursions}</p>
            </div>
          </div>
          {isCount === true && (
            <CountdownTimer
              initialDays={cardData.CountDownDays ?? 0}
              initialHours={cardData.CountDownHours ?? 0}
              initialMinutes={cardData.CountDownMinutes ?? 0}
            />
          )}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <p className="text-[#666666] font-normal text-[10px] ">
                start from
              </p>
              <div className="flex items-center gap-2">
                <p className="text-[#1D1F1F] font-bold text-xl lg:text-[24px] ">
                  $
                  {cardData.priceAfterDiscount
                    ? cardData.priceAfterDiscount
                    : cardData.price}
                </p>
                {cardData.priceAfterDiscount && (
                  <del className="text-[#A5A5A5] font-medium text-[14px] lg:text-base decoration-[#F55157] ">
                    {cardData.price}
                  </del>
                )}
              </div>
            </div>
            <div className="border border-[#EEEEEE] rounded-full py-1 px-4 flex items-center gap-2 w-fit">
              <img src={icon4} alt="" className="size-4!" />
              <p className="text-[#444444] font-normal text-[12px] lgtext-[14px]">
                {cardData.offers} day
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
