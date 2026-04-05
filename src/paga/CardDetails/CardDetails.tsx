import CountdownTimer from "@/components/Layout Components/CountdownTimer";
import CardDetailsGallery from "./Ui/CardDetailsGallery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import icon1 from "@/assets/icon/discount 2.svg";
import icon2 from "@/assets/icon/clock2.svg";
import icon3 from "@/assets/icon/location4.svg";
import icon4 from "@/assets/icon/redo.svg";
import icon5 from "@/assets/icon/element-1.svg";
import icon6 from "@/assets/icon/tick-square.svg";
import icon7 from "@/assets/icon/close-square.svg";
import OverviewContant from "./Ui/OverviewContant";
import HighlightsContant from "./Ui/HighlightsContant";
import MakeYourTrip from "@/components/code-spliting/Home/MakeYourTrip/MakeYourTrip";
import { useState } from "react";
import CheckBox from "@/components/inputs/CheckBox";
import AffordableSection from "./Ui/AffordableSection";
import Gallery from "./Ui/Gallery";
import Reviews from "./Ui/Reviews";
import RelatedTours from "./Ui/RelatedTours";
import SpecialOfferSaidbar from "./Ui/SpecialOfferSaidbar";
import ItineraryContant from "./Ui/ItineraryContant";
import CustomBreadcrumb from "@/components/Layout Components/Breadcrumb";

export default function CardDetails() {
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [pool, setPool] = useState(false);
  const dataCard1 = [
    { icon: icon2, title: "Duration", value: "8 Days" },
    { icon: icon3, title: "Cities", value: "3  Cities" },
    { icon: icon4, title: "Type", value: "Private Tour" },
    { icon: icon5, title: "Category", value: "Multi Days" },
  ];
  const WhatIsIncluded = [
    "Meet and greet service by our representatives at airports",
    "Assistance of our guest relations during your stay",
    "All transfers to/from airport & hotel by a private air-conditioned vehicle",
    "Domestic flight ticket Cairo to Luxor and Aswan to Cairo",
    "Bottled water during the trip",
    "Accommodation as mentioned on the itinerary",
    "Private tour guide",
    "Entrance fees to all mentioned sites",
    "All Taxes & Service Charge.",
  ];
  const WhatIsExcluded = [
    "Any extras not mentioned in the program",
    "Tipping Kitty",
    "Personal expenses ",
    "Optional activities",
    "Tickets to get inside the Pyramids",
  ];
  return (
    <div className="pt-34 space-y-8">
      <CustomBreadcrumb
        items={[{ name: "Home", href: "/" }, { name: "Tours" }]}
      />
      <div className="container space-y-8">
        <p className="text-[#1D1F1F] hidden lg:block text-4xl font-medium">
          8 Days To Pyramids, Luxor and Aswan by Air
        </p>
        <div className="grid grid-cols-9 gap-6 relative">
          <div className=" col-span-9 lg:col-span-6 space-y-6 lg:space-y-12">
            <CardDetailsGallery />
            <p className="text-[#1D1F1F] text-2xl font-medium lg:hidden">
              8 Days To Pyramids, Luxor and Aswan by Air
            </p>
            <div className="lg:hidden rounded-2xl border border-[#F55157] overflow-hidden">
              <p className="text-[#FFFFFF] bg-[#F55157] text-sm font-medium flex items-center justify-center gap-2 w-full">
                <img src={icon1} alt="icon" className="size-4" />
                Special offer
              </p>
              <div className="py-2 px-3">
                <CountdownTimer
                  initialDays={5}
                  initialHours={20}
                  initialMinutes={50}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {dataCard1.map((card1) => (
                <>
                  <div className="py-3 bg-[#F9FAFB] rounded-2xl flex flex-col gap-3 items-center justify-center">
                    <p className="text-[#1D1F1F] text-sm font-normal flex items-center gap-2 justify-center">
                      <img
                        src={card1.icon}
                        alt={card1.title}
                        className="size-4"
                      />
                      {card1.title}
                    </p>
                    <p className="text-brand-blue font-medium text-xl">
                      {card1.value}
                    </p>
                  </div>
                </>
              ))}
            </div>
            <Accordion
              type="single"
              className=""
              collapsible
              defaultValue="item-1"
            >
              <AccordionItem
                value="item-1"
                className=" border-[#EEEEEE]! pb-4!"
              >
                <AccordionTrigger className="text-[#1D1F1F] text-[34px] font-medium hover:text-brand-blue">
                  Overview
                </AccordionTrigger>
                <AccordionContent>
                  <OverviewContant />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className=" border-[#EEEEEE]! pb-4!"
              >
                <AccordionTrigger className="text-[#1D1F1F] text-[34px] font-medium hover:text-brand-blue">
                  <div className="flex items-center justify-between w-full">
                    <p>Highlights</p>
                    <p className="py-1 px-8  border border-brand-blue text-brand-blue text-sm font-normal rounded-full">
                      Expand All
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <HighlightsContant />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className=" border-[#EEEEEE]! pb-4!"
              >
                <AccordionTrigger className="text-[#1D1F1F] text-[34px] font-medium hover:text-brand-blue">
                  <div className="flex items-center justify-between w-full">
                    <p>Itinerary</p>
                    <p className="py-1 px-8 border border-brand-blue text-brand-blue text-sm font-normal rounded-full">
                      Expand All
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ItineraryContant />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className=" border-[#EEEEEE]! pb-4!"
              >
                <AccordionTrigger className="text-[#1D1F1F] text-[34px] font-medium hover:text-brand-blue">
                  What's Included
                </AccordionTrigger>
                <AccordionContent className="space-y-3!">
                  {WhatIsIncluded.map((item) => (
                    <p className="flex items-center gap-2">
                      <img src={icon6} className="size-6" alt="" />
                      <span className="text-[#666666] text-base font-normal">
                        {item}
                      </span>
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className=" border-[#EEEEEE]! pb-4!"
              >
                <AccordionTrigger className="text-[#1D1F1F] text-[34px] font-medium hover:text-brand-blue">
                  What's Excluded?
                </AccordionTrigger>
                <AccordionContent className="space-y-3!">
                  {WhatIsExcluded.map((item) => (
                    <p className="flex items-center gap-2">
                      <img src={icon7} className="size-6" alt="" />
                      <span className="text-[#666666] text-base font-normal">
                        {item}
                      </span>
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className=" border-[#EEEEEE]! pb-4!"
              >
                <AccordionTrigger className="text-[#1D1F1F] text-[34px] font-medium hover:text-brand-blue">
                  Add-ons
                </AccordionTrigger>
                <AccordionContent className="space-y-3!">
                  <CheckBox
                    label="One Way Transfer From/ To Cairo Airport "
                    value={wifi}
                    setValue={setWifi}
                  />
                  <CheckBox
                    label="Round Trip Transfer From & To Cairo Airport  "
                    value={parking}
                    setValue={setParking}
                  />
                  <CheckBox
                    label="Sound And Light Show At Pyramids"
                    value={pool}
                    setValue={setPool}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="hidden lg:block col-span-3 relative ">
            <div className="sticky top-50">
              <SpecialOfferSaidbar />
            </div>
          </div>
        </div>
        <AffordableSection />
        <Gallery />
        <Reviews />
        <RelatedTours />
        <MakeYourTrip />
      </div>
    </div>
  );
}
