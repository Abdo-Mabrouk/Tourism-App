import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import iconTap1 from "@/assets/icon/tap1.svg";
import iconTap2 from "@/assets/icon/tap2.svg";
import iconTap3 from "@/assets/icon/tap3.svg";
import iconCarv from "@/assets/icon/Subtract.svg";
import iconCarv2 from "@/assets/icon/Subtract2.svg";
import iconCarvAct from "@/assets/icon/SubtractAct.svg";
import iconCarvAct2 from "@/assets/icon/SubtractAct2.svg";
import { Fragment, useState } from "react";
import MakeYourTripTap from "../TapsHeroSection/MakeYourTripTap";
import FindYourTripTap from "../TapsHeroSection/FindYourTripTap";
import RentCarTap from "../TapsHeroSection/RentCarTap";
export default function Tabss() {
  const tabs = [
    {
      value: "Make-Your-Trip",
      label: "Make Your Trip",
      mobileLabel: "Make Trip",
      icon: iconTap1,
    },
    {
      value: "Find-your-trip",
      label: "Find your trip",
      mobileLabel: "Find trip",
      icon: iconTap2,
    },
    {
      value: "Rent-Car",
      label: "Rent Car",
      mobileLabel: "Rent Car",
      icon: iconTap3,
    },
  ];
  const getDefaultTab = () => {
    if (typeof window === "undefined") return "Make-Your-Trip"; // SSR safe
    return window.innerWidth >= 760 ? "Make-Your-Trip" : null;
  };
  const [activeTab, setActiveTab] = useState<string | null>(getDefaultTab);
  const activeIndex = tabs.findIndex((t) => t.value === activeTab);
  const isFirstTab = activeIndex === 0;
  const isLastTab =
    activeIndex === tabs.length - 1 && activeIndex >= 0;
  const leftCurve = isFirstTab ? iconCarv : iconCarv2;
  const rightCurve = isLastTab ? iconCarvAct2 : iconCarvAct;

  return (
    <>
      {/* Tabs */}
      <Tabs
        value={activeTab ?? undefined}
        onValueChange={setActiveTab}
        className="w-full lg:w-280 mx-auto mt-20 relative "
      >
        <div className="">
          <img
            src={leftCurve}
            alt=""
            className="hidden lg:block w-10! z-10 absolute -top-2.5 left-6 pointer-events-none"
          />

          <TabsList className=" mx-auto md:mx-0 md:ms-15 flex lg:bg-white relative">
            {tabs.map((tab, index) => {
              const isPrev = index === activeIndex - 1;
              const isNext = index === activeIndex + 1;
              const Icon = tab.icon;

              return (
                <Fragment key={tab.value}>
                  <TabsTrigger
                    value={tab.value}
                    className={`
              px-4 md:px-12
              py-8 md:py-6
               mb-8! lg:mb-5!
              text-sm lg:text-base
              font-medium
              bg-[#EEEEEE] text-[#333333]
              rounded-t-2xl rounded-b-none
              transition-all duration-300
              shadow-none

              data-[state=active]:bg-white
              data-[state=active]:shadow-none
              data-[state=active]:pb-8 lg:data-[state=active]:pb-10
              data-[state=active]:text-brand-blue

              ${isPrev ? "lg:rounded-br-[30px] " : ""}
              ${isNext ? "lg:rounded-bl-[30px] " : ""}
            `}
                  >
                    <div className="flex flex-col items-center gap-1">
                      {/* Icon (mobile only) */}
                      <img
                        src={Icon}
                        alt=""
                        className="w-5 h-5 block md:hidden"
                      />
                      <span className="block md:hidden text-brand-blue">
                        {tab.mobileLabel}
                      </span>
                      <span className="hidden md:block">{tab.label}</span>
                    </div>
                  </TabsTrigger>
                </Fragment>
              );
            })}
          </TabsList>
          <img
            src={rightCurve}
            alt=""
            className="hidden lg:block w-10! absolute -top-3 right-114.5 pointer-events-none"
          />
        </div>

        <TabsContent
          value="Make-Your-Trip"
          className="bg-white p-6 rounded-b-[40px] rounded-t-2xl lg:rounded-[40px]"
        >
          <MakeYourTripTap />
        </TabsContent>

        <TabsContent
          value="Find-your-trip"
          className="bg-white p-6 rounded-b-[40px] rounded-t-2xl lg:rounded-[40px]"
        >
          <FindYourTripTap />
        </TabsContent>

        <TabsContent
          value="Rent-Car"
          className="bg-white p-6 rounded-b-[40px] rounded-t-2xl lg:rounded-[40px]"
        >
          <RentCarTap />
        </TabsContent>
      </Tabs>
    </>
  );
}
