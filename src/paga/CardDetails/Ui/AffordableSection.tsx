import icon1 from "@/assets/icon/discount-shape3.svg";
import icon2 from "@/assets/icon/calendar2.svg";
export default function AffordableSection() {
  return (
    <div>
      <div className="bg-[#FEF3E6] p-2 pt-4 rounded-4xl space-y-4">
        <div className="flex items-center gap-2 justify-center">
          <img src={icon1} className="size-8" alt="" />
          <p className="text-[#1D1F1F] text-3xl  lg:text-[34px] font-medium">
            Affordable (4 STAR)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4 rounded-3xl bg-[#FFFFFF]">
          {[1, 2, 3, 4].map(() => (
            <>
              <div className="bg-[#F9FAFB] py-4 px-2 space-y-4 rounded-[20px]">
                <p className="text-base text-[#1D1F1F] font-medium flex items-center gap-2">
                  <img src={icon2} className="size-5" alt="" />
                  <span>From Jan 2025 to Apr 2025</span>
                </p>
                <div className="bg-[#FFFFFF] py-2 px-4 rounded-lg space-y-1">
                  <div className="flex items-center justify-between border-b border-[#F9FAFB] py-2 pb-3">
                    <p className="text-base text-[#1D1F1F] font-medium">Solo</p>
                    <p className="text-base text-[#1D1F1F] font-medium flex items-center gap-1">
                      1730$
                      <span className="text-[#A5A5A5] text-sm font-normal">
                        USD
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#F9FAFB] py-2 pb-3">
                    <p className="text-base text-[#1D1F1F] font-medium flex items-center gap-1">
                      2-4{" "}
                      <span className="text-[#A5A5A5] text-sm font-normal">
                        PAX
                      </span>
                    </p>
                    <p className="text-base text-[#1D1F1F] font-medium flex items-center gap-1">
                      1730$
                      <span className="text-[#A5A5A5] text-sm font-normal">
                        USD
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#F9FAFB] py-2 pb-3">
                    <p className="text-base text-[#1D1F1F] font-medium flex items-center gap-1">
                      5-8{" "}
                      <span className="text-[#A5A5A5] text-sm font-normal">
                        PAX
                      </span>
                    </p>
                    <p className="text-base text-[#1D1F1F] font-medium flex items-center gap-1">
                      1730$
                      <span className="text-[#A5A5A5] text-sm font-normal">
                        USD
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <p className="text-base text-[#1D1F1F] font-medium flex items-center gap-1">
                      9-16{" "}
                      <span className="text-[#A5A5A5] text-sm font-normal">
                        PAX
                      </span>
                    </p>
                    <p className="text-base text-[#1D1F1F] font-medium flex items-center gap-1">
                      1730$
                      <span className="text-[#A5A5A5] text-sm font-normal">
                        USD
                      </span>
                    </p>
                  </div>
                </div>
                <button className="btn1 w-full">
                  Book Now
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
