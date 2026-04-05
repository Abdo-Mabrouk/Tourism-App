import img1 from "@/assets/imge (1).svg";
import img2 from "@/assets/icon/Checklist.svg";
import img3 from "@/assets/icon/close.svg";
import { InfoRow } from "@/paga/MakeYourTrip/Ui/Step3";
import {  ChevronDown, Eye, PenLine, Trash2 } from "lucide-react";
import { useState } from "react";
import CounterInput from "../inputs/CounterInput";
import { useFormik } from "formik";
import CustomInput from "../inputs/CustomInput";
interface ValuesType {
  Infants: number;
  Children: number;
  Adults: number;
  date: string;
}
export default function CardCar() {
  const [SeeDetails, setSeeDetails] = useState<boolean>(false);
  const [showEditModyle, setshowEditModyle] = useState<boolean>(false);
  const formik = useFormik<ValuesType>({
    initialValues: {
      Infants: 0,
      Children: 0,
      Adults: 0,
      date:"",
    },
    onSubmit: () => {},
  });
  function togeleSeeDetails() {
    setSeeDetails(!SeeDetails);
  }
  function togeleshowEditModyle() {
    setshowEditModyle(!showEditModyle);
  }
  return (
    <>
      <div className=" p-6 rounded-3xl bg-[#FFFFFF] space-y-5">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img
              src={img1}
              className=" size-[50px] lg:size-16! rounded-2xl object-cover overflow-hidden"
              alt=""
            />
            <div className="space-y-2">
              <p className=" text-base lg:text-xl text-[#1D1F1F] font-medium">
                Adventure Snorkeling Tour To Ras Mohamed By Bus
              </p>
              <p className=" text-sm lg:text-base text-[#A5A5A5] font-medium">
                $3200 / 15 Day
              </p>
            </div>
          </div>
          <button className="text-[#1D1F1F] hover:bg-black hover:text-white transition-colors duration-300 border border-[#EEEEEE] size-fit rounded-full py-2 px-4 flex items-center gap-2 cursor-pointer">
            <Eye />
            <p className=" text-base font-medium hidden lg:block">view</p>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <InfoRow label="Travel Date" value={"Mar 13, 2023"} />
          <InfoRow label="Adults (18+)" value={"5"} />
          <InfoRow label="Children (4 - 17)" value={"2"} />
          <InfoRow label="Infants (0 - 3)" value={"9"} />
        </div>
        <div className="h-0.5 bg-[#F9FAFB] w-full" />
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <p className="text-[#1D1F1F] text-base font-medium">Add-ons</p>
              <p
                onClick={togeleSeeDetails}
                className="text-brand-blue text-[12px] font-normal flex items-center gap-1 cursor-pointer"
              >
                See details{" "}
                <ChevronDown
                  className={`size-3.5 transition-all duration-200 ${SeeDetails === true && "rotate-180"}`}
                />
              </p>
            </div>
            <p className="text-xl font-medium text-[#1D1F1F]">$700</p>
          </div>
          <div
            className={` ps-5 lg:ps-10 space-y-1 transition-all duration-300 overflow-hidden ${SeeDetails === true ? "h-auto" : "h-0"}`}
          >
            <div className="flex items-center justify-between">
              <p className="text-brand-blue text-base font-medium flex items-center gap-1">
                <img src={img2} alt="" /> <span>Add a dinner meal</span>
              </p>
              <p className="text-brand-blue text-[16px] font-normal">$100</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-brand-blue text-base font-medium flex items-center gap-1">
                <img src={img2} alt="" /> <span>upgrade hotel to 5 star </span>
              </p>
              <p className="text-brand-blue text-[16px] font-normal">$100</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-brand-blue text-base font-medium flex items-center gap-1">
                <img src={img2} alt="" />{" "}
                <span>Sound And Light Show At Pyramids</span>
              </p>
              <p className="text-brand-blue text-[16px] font-normal">$500</p>
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-[#F9FAFB] w-full" />
        <div className="flex flex-col lg:flex-row gap-2 justify-between">
          <div className="flex items-center justify-between lg:flex-col">
            <p className="text-[#666666] font-normal text-sm">Total Price</p>
            <p className="text-[#1D1F1F] font-bold text-3xl">$1500</p>
          </div>
          <div className="flex items-end gap-2">
            <button className="btn1 w-full lg:w-fit border-0 bg-[#F9E7E8] text-[#F55157] flex items-center justify-center gap-2 px-8">
              <Trash2 className="size-5!" />
              Delete
            </button>
            <button
              onClick={togeleshowEditModyle}
              className="btn1 w-full lg:w-fit bg-brand-blue text-white flex items-center justify-center gap-2 px-10"
            >
              <PenLine className="size-5!" />
              Edit
            </button>
          </div>
        </div>
      </div>
      {showEditModyle && (
        <>
          <div className="bg-black/20 fixed w-full h-screen top-0 left-0 z-50">
            <div className=" absolute w-full max-h-[95%] overflow-y-scroll MultiSelectMenu space-y-8 rounded-3xl max-w-[700px] bg-white top-1/2 left-1/2 -translate-1/2 p-6">
              <div className="flex items-center justify-between">
                <p className="text-[#1D1F1F] text-xl font-medium">
                  Edit tour details
                </p>
                <div
                  onClick={togeleshowEditModyle}
                  className="size-11 border border-[#EEEEEE] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200"
                >
                  <img src={img3} alt="" />
                </div>
              </div>
              <CustomInput
                label="Date"
                type="date"
                value={formik.values.date}
                onChange={(val) => formik.setFieldValue("date", val)}
              />
              <div className="space-y-2">
                <p className="text-[#A5A5A5] font-medium text-xl">Passengers</p>
                <div className="space-y-3 flex items-center justify-between">
                  <label htmlFor="" className="form-labole">
                    Adults (18+)
                  </label>
                  <CounterInput
                    buttonClassName=" w-20! lg:w-50  "
                    value={formik.values.Adults ?? 0}
                    onChange={(val) => formik.setFieldValue("Adults", val)}
                  />
                </div>
                <div className="space-y-3 flex items-center justify-between">
                  <label htmlFor="" className="form-labole">
                    Children (4 - 17)
                  </label>
                  <CounterInput
                    buttonClassName=" w-20! lg:w-50  "
                    value={formik.values.Children ?? 0}
                    onChange={(val) => formik.setFieldValue("Children", val)}
                  />
                </div>
                <div className="space-y-3 flex items-center justify-between">
                  <label htmlFor="" className="form-labole">
                    Infants (0 - 3)
                  </label>
                  <CounterInput
                    buttonClassName=" w-20! lg:w-50  "
                    value={formik.values.Infants ?? 0}
                    onChange={(val) => formik.setFieldValue("Infants", val)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-[#A5A5A5] font-medium text-xl">Passengers</p>
                <div className="">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <p className="text-[#1D1F1F] text-base font-medium">
                        Add-ons
                      </p>
                      <p
                        onClick={togeleSeeDetails}
                        className="text-brand-blue text-[12px] font-normal flex items-center gap-1 cursor-pointer"
                      >
                        See details{" "}
                        <ChevronDown
                          className={`size-3.5 transition-all duration-200 ${SeeDetails === true && "rotate-180"}`}
                        />
                      </p>
                    </div>
                    <p className="text-xl font-medium text-[#1D1F1F]">$700</p>
                  </div>
                  <div
                    className={` ps-5 lg:ps-10 space-y-1 transition-all duration-300 overflow-hidden ${SeeDetails === true ? "h-auto" : "h-0"}`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-brand-blue text-base font-medium flex items-center gap-1">
                        <img src={img2} alt="" /> <span>Add a dinner meal</span>
                      </p>
                      <p className="text-brand-blue text-[16px] font-normal">
                        $100
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-brand-blue text-base font-medium flex items-center gap-1">
                        <img src={img2} alt="" />{" "}
                        <span>upgrade hotel to 5 star </span>
                      </p>
                      <p className="text-brand-blue text-[16px] font-normal">
                        $100
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-brand-blue text-base font-medium flex items-center gap-1">
                        <img src={img2} alt="" />{" "}
                        <span>Sound And Light Show At Pyramids</span>
                      </p>
                      <p className="text-brand-blue text-[16px] font-normal">
                        $500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn1 bg-brand-blue text-white w-full">
                Save edits
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
