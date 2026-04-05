import icon4 from "@/assets/icon/clock.svg";
import { Link } from "react-router-dom";
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

export default function BlogsCard({ cardData }: { cardData: Excursion }) {
  return (
    <>
      <Link to={"/visiting-pyramids-giza"}>
      <div className=" bg-white rounded-3xl p-2 pb-4 flex flex-col gap-4 hover:shadow-xl group transition-colors duration-300">
        <div className="w-full h-50 rounded-3xl overflow-hidden">
          <img
            src={cardData.imge[0]}
            alt=""
            className="size-full object-cover group-hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="bg-[#FEF3E6] py-1 px-2 rounded-full font-normal text-[#945405] text-[12px] lg:text-[14px] w-fit flex items-center gap-2">
          <p className="">{cardData.excursions}</p>
        </div>
        <p className=" text-base lg:text-xl font-medium text-[#1D1F1F]">
          {cardData.desc}
        </p>
        <div className="flex items-center gap-1">
          <img src={icon4} alt="" className="size-4.5!" />
          <p className="text-sm text-[#666666] font-normal">15 Mar 2024</p>
        </div>
      </div>
      </Link>
    </>
  );
}
