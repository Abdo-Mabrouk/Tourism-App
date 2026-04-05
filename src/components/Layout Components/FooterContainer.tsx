import icon from "@/assets/icon/arrow-down2.svg";
import { Link } from "react-router-dom";

export default function FooterContainer({ href }: { href?: string }) {
  return (
    <div className=" relative w-full h-1 bg-[#DEDEDE]">
      <div className="size-4 rounded-full bg-[#DEDEDE] absolute tpo-1/2 -translate-y-1/2 start-0"></div>
      <div className="size-4 rounded-full bg-[#DEDEDE] absolute tpo-1/2 -translate-y-1/2 end-0"></div>
      <Link
        to={`${href}`}
        className="py-2 px-7 bg-brand rounded-full absolute tpo-1/2 -translate-1/2 start-1/2 flex items-center justify-center gap-2 cursor-pointer"
      >
        <p className="font-medium text-base text-[#FFFFFF]">See more</p>
        <img src={icon} alt="" className="size-5" />
      </Link>
    </div>
  );
}
