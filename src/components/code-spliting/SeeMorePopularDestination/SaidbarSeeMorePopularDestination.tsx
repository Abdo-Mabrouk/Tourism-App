import { useState } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";
import AddAccordion from "@/components/Layout Components/AddAccordion";
import icon1 from "@/assets/icon/candle-2.svg";

export default function SaidbarSeeMorePopularDestination() {
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState(5);
  function togeleOpen() {
    setOpen(!open);
  }

  return (
    <>
      {/* Toggle Button - يظهر تحت lg */}
      <div className="lg:hidden start-0 fixed bottom-0 w-full bg-white p-4 z-50">
        <div
          onClick={togeleOpen}
          className="w-full flex items-center justify-center gap-2 text-center bg-brand-blue text-base font-medium text-white py-2 rounded-full"
        >
          <img src={icon1} alt="" className="size-6" />
          filter
        </div>
      </div>

      <aside
        className={` bg-[#FFFFFF] border border-[#EEEEEE] rounded-3xl py-6 px-5 space-y-5 fixed lg:static top-0 left-0 z-50 h-screen lg:h-auto shadow-lg lg:shadow-none transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} `}
      >
        <div className="h-full overflow-y-auto space-y-6">
          <AddAccordion title="Tours type">
            <div className="flex flex-col gap-2">
              <Checkbox label="One Day" count={16} checked />
              <Checkbox label="Multi Days" count={16} />
              <Checkbox label="Nile Cruises" count={150} />
              <Checkbox label="Shore Excursions" count={105} />
            </div>
          </AddAccordion>
          {/* Days */}
          <AddAccordion title="Days">
            <div className="flex items-center justify-between border border-[#EEEEEE] rounded-full w-full">
              <button
                onClick={() => setDays((prev) => Math.max(1, prev - 1))}
                className="size-13 flex items-center justify-center border border-[#EEEEEE] rounded-full cursor-pointer"
              >
                <Minus size={16} className="text-[#1D1F1F]" />
              </button>
              <span className="font-medium">{days}</span>
              <button
                onClick={() => setDays((prev) => prev + 1)}
                className="size-13 flex items-center justify-center border border-[#EEEEEE] rounded-full cursor-pointer"
              >
                <Plus size={16} className="text-[#1D1F1F]" />
              </button>
            </div>
          </AddAccordion>
          {/* Price */}
          <AddAccordion title="Price">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-base text-[#1D1F1F] font-normal">Min</p>
                <p className="text-base text-[#1D1F1F] font-normal">Max</p>
              </div>
              <div className="flex gap-5 p-2">
                <input
                  type="number"
                  defaultValue={128}
                  className="w-full border border-[#EEEEEE] rounded-lg px-4 text-center focus:border-brand-blue focus:border-2 focus:outline-4 focus:outline-[#D3DDF8] py-2 text-sm"
                />
                <input
                  type="number"
                  defaultValue={5000}
                  className="w-full border border-[#EEEEEE] rounded-lg px-4 text-center focus:border-brand-blue focus:border-2 focus:outline-4 focus:outline-[#D3DDF8] py-2 text-sm"
                />
              </div>
              <div className="w-full h-2 bg-gray-200">
                <div className=" relative h-full w-[70%] bg-brand mx-auto flex items-center">
                  <span className="size-6 bg-[#FFFFFF] shadow-xl rounded-full block absolute -start-3"></span>
                  <span className="size-6 bg-[#FFFFFF] shadow-xl rounded-full block absolute -end-3"></span>
                </div>
              </div>
            </div>
          </AddAccordion>
          {/* Egypt Destinations */}
          <AddAccordion title="Egypt Destinations">
            <div className="flex flex-col gap-2">
              <Checkbox label="Fayum" count={79} checked />
              <Checkbox label="Alexandria" count={274} />
              <Checkbox label="Cairo" count={237} />
              <Checkbox label="Luxor" count={174} />
              <Checkbox label="Aswan" count={109} />
              <button className="text-sm font-normal text-start text-brand-blue flex items-center gap-1 cursor-pointer">
                Show more <ChevronDown size={16} />
              </button>
            </div>
          </AddAccordion>
          {/* Category */}
          <AddAccordion title="Category">
            <div className="flex flex-col gap-2">
              <Checkbox label="Festival & Events" count={69} checked />
              <Checkbox label="Active" count={62} />
              <Checkbox label="Hiking & Trekking" count={150} />
              <Checkbox label="Discovery" count={105} />
              <Checkbox label="Family" count={274} />
            </div>
          </AddAccordion>
          <div className="lg:hidden start-0 fixed bottom-0 w-full bg-white p-4 z-50">
            <div
              onClick={togeleOpen}
              className="w-full flex items-center justify-center gap-2 text-center bg-brand-blue text-base font-medium text-white py-2 rounded-full"
            >
              Apply
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

interface CheckboxProps {
  label: string;
  count?: number;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
export function Checkbox({
  label,
  count,
  checked = false,
  onChange,
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(checked);
  const isControlled = onChange !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.checked;
    if (!isControlled) setInternalChecked(value);
    onChange?.(value);
  }

  return (
    <label
      className={`flex items-center justify-between text-sm cursor-pointer transition-colors duration-200 ${
        isChecked ? "text-brand-blue font-medium" : "text-gray-700"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="accent-brand-blue size-4 rounded-lg"
        />
        <span>{label}</span>
      </div>
      {count !== undefined && (
        <span className="text-gray-400 text-xs">{count}</span>
      )}
    </label>
  );
}
