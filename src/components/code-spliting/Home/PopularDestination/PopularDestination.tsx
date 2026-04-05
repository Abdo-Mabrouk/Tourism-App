import SectionContainer from "@/components/Layout Components/sectionContainer";
import TapsComponents from "@/components/Layout Components/TapsComponents";
import PopularDestinationTap from "../PopularDestinationTap/PopularDestinationTap";
import FooterContainer from "@/components/Layout Components/FooterContainer";
import OneDayTap from "./OneDayTap";
import MultiDaysnTap from "./MultiDaysnTap";
import NileCruisesTap from "./NileCruisesTap";
import ShoreExcursionsTap from "./ShoreExcursionsTap";
export default function PopularDestination() {
  return (
    <div className="pt-16 bg-[#F9FAFB]">
      <SectionContainer
        title="Popular Destination"
        decs="Many very Exciting places for you to visit for the next trip"
      >
        <TapsComponents
          taps={[
            { id: 1, title: "Recommended", element: <PopularDestinationTap/> },
            { id: 2, title: "One Day", element: <OneDayTap/>},
            { id: 3, title: "Multi Days", element: <MultiDaysnTap/>},
            { id: 4, title: "Nile Cruises", element: <NileCruisesTap/>},
            { id: 5, title: "Shore Excursions", element: <ShoreExcursionsTap/>},
          ]}
          TabsClassName={"gap-8!"}
          TabsListClassName={"h-fit! bg-[#EEEEEE] mx-auto! rounded-full p-0! "}
          TabsTriggerClassName={"text-[16px]! font-medium! data-[state=active]:bg-[#143485] data-[state=active]:text-white data-[state=active]:rounded-full gap-3 py-2! px-6! "}
        />
        <FooterContainer href="/see-more-popular-destination" />
      </SectionContainer>
    </div>
  );
}
