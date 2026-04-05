import img1 from "@/assets/icon/logos_google-icon.svg";
import img2 from "@/assets/icon/social.svg";
import img3 from "@/assets/icon/bi_twitter-x.svg";
export default function LoginUsing({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <div className=" relative flex items-center justify-center h-0.5 w-full bg-[#EEEEEE]">
        <span className=" absolute text-[#A5A5A5] text-base font-normal px-3 bg-white">
          {title}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-[#EEEEEE] rounded-xl p-4 w-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-colors duration-300">
          <img src={img1} alt="" className=" size-6" />
        </div>
        <div className="border border-[#EEEEEE] rounded-xl p-4 w-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-colors duration-300">
          <img src={img2} alt="" className=" size-6" />
        </div>
        <div className="border border-[#EEEEEE] rounded-xl p-4 w-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-colors duration-300">
          <img src={img3} alt="" className=" size-6" />
        </div>
      </div>
    </div>
  );
}
