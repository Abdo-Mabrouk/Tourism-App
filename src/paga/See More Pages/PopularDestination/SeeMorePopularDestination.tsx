import MultiDaysnTap from "@/components/code-spliting/Home/PopularDestination/MultiDaysnTap";
import NileCruisesTap from "@/components/code-spliting/Home/PopularDestination/NileCruisesTap";
import SaidbarSeeMorePopularDestination from "@/components/code-spliting/SeeMorePopularDestination/SaidbarSeeMorePopularDestination";
import TapsComponents from "@/components/Layout Components/TapsComponents";
import icon from "@/assets/icon/close-circle.svg";
import PopularCard from "@/components/Cards/PopularCard";
import { useState } from "react";
import PaginationSection from "@/components/Layout Components/PaginationSection";
import { data } from "@/FakeData/FakeData";
import Input from "@/components/inputs/input";
import CustomBreadcrumb from "@/components/Layout Components/Breadcrumb";

export default function SeeMorePopularDestination() {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  return (
    <div className="pt-34  ">
      <CustomBreadcrumb
        items={[{ name: "Home", href: "/" }, { name: "Tours" }]}
      />
      <div className=" container space-y-6 ">
        <p className="text-5xl font-bold text-[#1D1F1F]">Egypt Tours</p>
        <div className="grid grid-cols-4 gap-5 ">
          <div className=" col-span-1 ">
            <SaidbarSeeMorePopularDestination />
          </div>
          <div className=" col-span-4 lg:col-span-3 space-y-8">
            <TapsComponents
              taps={[
                {
                  id: 1,
                  icon: icon,
                  title: "Clear all",
                  element: (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {data.map((card) => (
                        <PopularCard key={card.id} cardData={card} />
                      ))}
                    </div>
                  ),
                },
                {
                  id: 2,
                  icon: icon,
                  title: "Price",
                  element: (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {data.map((card) => (
                        <PopularCard key={card.id} cardData={card} />
                      ))}
                    </div>
                  ),
                },
                {
                  id: 3,
                  icon: icon,
                  title: "Multi Days",
                  element: <MultiDaysnTap />,
                },
                {
                  id: 4,
                  icon: icon,
                  title: "Fayyum",
                  element: <NileCruisesTap />,
                },
                {
                  id: 4,
                  icon: icon,
                  title: "Festival & Events",
                  element: <NileCruisesTap />,
                },
              ]}
              TabsClassName={"gap-8!"}
              TabsListClassName={"h-fit! me-auto!  p-0! "}
              TabsTriggerClassName={
                "text-[14px]! bg-[#E9EEFC] cursor-pointer text-[#163A96] rounded-full font-normal! gap-3 py-2! px-1.5! data-[state=active]:bg-transparent data-[state=active]:text-[#163A96] data-[state=active]:px-6! data-[state=active]:py-3! data-[state=active]:border data-[state=active]:border-[#163A96] data-[state=active]:mb-3 "
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
