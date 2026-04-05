import CustomBreadcrumb from "@/components/Layout Components/Breadcrumb";
import icon1 from "@/assets/icon/close-circle2.svg";
import CardCar from "@/components/Cards/CardCar";
import CheckBox from "@/components/inputs/CheckBox";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const [conditions, setConditions] = useState<boolean>(false);
  const nav = useNavigate();
  return (
    <div className="pt-33 space-y-8 bg-[#f2f2f2]">
      <CustomBreadcrumb
        items={[{ name: "Home", href: "/" }, { name: "RentCar" }]}
      />
      <div className=" container pb-10">
        <div className=" grid grid-cols-3 gap-5">
          <div className=" col-span-3 lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-[#1D1F1F] font-medium text-xl">Tours</p>
              <button className="btn1 flex items-center gap-2">
                <img src={icon1} alt="" />
                Clear all
              </button>
            </div>
            <CardCar />
            <CardCar />
          </div>
          <div className="col-span-3 lg:col-span-1">
            <div className="bg-white py-6 px-8 rounded-3xl space-y-6">
              <p className="text-[#A5A5A5] font-medium text-xl border-b-3 pb-6 border-dashed border-[#EEEEEE]">
                Payment summary
              </p>
              <div className="space-y-4 border-b-3 pb-6 border-dashed border-[#EEEEEE]">
                <p className="text-[#A5A5A5] font-medium text-sm w-full flex items-center justify-between">
                  Tours Number <span className="text-xl text-[#333333]">2</span>
                </p>
                <p className="text-[#A5A5A5] font-medium text-sm w-full flex items-center justify-between">
                  Subtotal{" "}
                  <span className="text-xl text-[#333333]">$1,500</span>
                </p>
                <p className="text-[#A5A5A5] font-medium text-sm w-full flex items-center justify-between">
                  Add-ons <span className="text-xl text-[#333333]">$500</span>
                </p>
                <p className="text-[#A5A5A5] font-medium text-sm w-full flex items-center justify-between">
                  Discount <span className="text-xl text-[#F55157]">-$5</span>
                </p>
              </div>
              <div className="space-y-4 border-b-3 pb-6 border-dashed border-[#EEEEEE]">
                <p className="form-labole">Discount Coupon</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Coupon code.."
                    name=""
                    id=""
                  />
                  <button className="btn1 py-4 rounded-xl">Apply</button>
                </div>
              </div>
              <p className="text-[#1D1F1F] font-medium text-xl w-full flex items-center justify-between">
                Grand Total{" "}
                <span className="text-[30px] text-brand-blue">$1,995</span>
              </p>
              <div className="flex items-center gap-0.5">
                <CheckBox
                  label="I agree to the "
                  value={conditions}
                  setValue={(val: boolean) => {
                    setConditions(val);
                  }}
                />
                <Link
                  to={"/terms-and-conditions"}
                  className="text-sm text-brand-blue font-medium underline"
                >
                  terms and conditions
                </Link>
              </div>
              <button
                onClick={() => nav("/checkout")}
                className="btn1 bg-brand-blue w-full text-white"
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
