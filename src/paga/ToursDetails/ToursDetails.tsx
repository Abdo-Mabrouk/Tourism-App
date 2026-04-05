import MultiDaysnTap from "@/components/code-spliting/Home/PopularDestination/MultiDaysnTap";
import NileCruisesTap from "@/components/code-spliting/Home/PopularDestination/NileCruisesTap";
import { Checkbox } from "@/components/code-spliting/SeeMorePopularDestination/SaidbarSeeMorePopularDestination";
import TapsComponents from "@/components/Layout Components/TapsComponents";
import icon from "@/assets/icon/close-circle.svg";
import Filtter from "@/assets/icon/Filtter.svg";
import PopularCard from "@/components/Cards/PopularCard";
import { useState } from "react";
import PaginationSection from "@/components/Layout Components/PaginationSection";
import { data } from "@/FakeData/FakeData";
import Input from "@/components/inputs/input";
import AddAccordion from "@/components/Layout Components/AddAccordion";
import icon1 from "@/assets/icon/candle-2.svg";
import CustomBreadcrumb from "@/components/Layout Components/Breadcrumb";

export default function ToursDetails() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [openFiltter, setOpenFiltter] = useState<boolean>(false);
  function togelOpenFiltter() {
    setOpenFiltter(!openFiltter);
  }

  return (
    <div className="pt-33 space-y-8 bg-[#f2f2f2]">
      <CustomBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Egypt Tours"},
          { name: "Egypt Day Tours", href: "/one-day-tours" },
          { name: "Cairo" },
        ]}
      />
      <div className="lg:hidden start-0 z-55 fixed bottom-0 w-full bg-white p-4">
        <div
          onClick={togelOpenFiltter}
          className="w-full flex items-center justify-center gap-2 text-center bg-brand-blue text-base font-medium text-white py-2 rounded-full"
        >
          <img src={icon1} alt="" className="size-6" />
          filter
        </div>
      </div>
      <div className=" container space-y-6 ">
        <div className="flex gap-5">
          <div
            className={` fixed lg:static top-0 left-0 z-50 lg:z-auto h-screen lg:h- bg-white overflow-hidden transition-all duration-500 shrink-0  ${openFiltter === true ? " w-[280px] border border-[#EEEEEE] rounded-3xl py-6 px-5 space-y-5 " : "w-0 "}`}
          >
            <div className="">
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
            </div>
          </div>
          <div className=" col-span-4 lg:col-span-3 space-y-8 ">
            <TapsComponents
              taps={[
                {
                  id: 1,
                  iconActive: Filtter,
                  title: "Filtter",
                  onClick: togelOpenFiltter,
                  element: (
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2  gap-6 ${openFiltter === true ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
                    >
                      {data.map((card) => (
                        <PopularCard key={card.id} cardData={card} />
                      ))}
                    </div>
                  ),
                },
                {
                  id: 1,
                  iconActive: icon,
                  title: "Clear all",
                  element: (
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2  gap-6 ${openFiltter === true ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
                    >
                      {data.map((card) => (
                        <PopularCard key={card.id} cardData={card} />
                      ))}
                    </div>
                  ),
                },
                {
                  id: 2,
                  iconActive: icon,
                  title: "Price",
                  element: (
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2  gap-6 ${openFiltter === true ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
                    >
                      {data.map((card) => (
                        <PopularCard key={card.id} cardData={card} />
                      ))}
                    </div>
                  ),
                },
                {
                  id: 3,
                  iconActive: icon,
                  title: "Multi Days",
                  element: <MultiDaysnTap />,
                },
                {
                  id: 4,
                  iconActive: icon,
                  title: "Fayyum",
                  element: <NileCruisesTap />,
                },
                {
                  id: 4,
                  iconActive: icon,
                  title: "Festival & Events",
                  element: <NileCruisesTap />,
                },
              ]}
              TabsClassName={"gap-8!"}
              isReverse
              TabsListClassName={"h-fit! me-auto!  p-0! "}
              TabsTriggerClassName={
                "text-[14px]! bg-[#F7F7F7] cursor-pointer text-[#333333] rounded-full font-normal! gap-3 py-2! px-1.5! data-[state=active]:bg-transparent data-[state=active]:text-[#163A96] data-[state=active]:px-6! data-[state=active]:py-3! data-[state=active]:border data-[state=active]:border-[#163A96] data-[state=active]:mb-3 "
              }
            />
            <PaginationSection
              page={page}
              last_page={10}
              setPage={setPage}
              perPage={perPage}
              setPerPage={setPerPage}
            />
          </div>
        </div>
        <div className="py-14">
          <div className="p-4 lg:p-14 space-y-12 bg-brand-blue rounded-4xl bg-no-repeat bg-[url(/src/assets/pattren.svg)]">
            <p className="text-center text-[#FFFFFF] text-3xl lg:text-5xl font-bold">
              Need help to Finding your Trip?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <Input label="full name" />
              <Input label="phone" />
              <Input label="Speaking language" />
              <button className=" bg-brand text-white   rounded-full text-center">
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
