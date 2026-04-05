import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Day2Contant from "./Day2Contant";

  const dataAsked = [
    {
      id: 1,
      dayNumber: "Day 1",
      trigger: "Arrival Cairo - Welcome to land of the Pharaoh’s",
      ans:"Arrival Cairo - Welcome to land of the Pharaoh’s"
    },
    {
      id: 2,
      dayNumber: "Day 2",
      trigger: " Tour to Pyramids & the Egyptian Museum and Cairo Sightseeing",
ans:<Day2Contant/>
    },
    {
      id: 3,
      dayNumber: "Day 3",
      trigger: "Fly To Luxor East Bank Attractions - Nile Cruise Tour",
      ans:"Fly To Luxor East Bank Attractions - Nile Cruise Tour"
    },
    {
      id: 4,
      dayNumber: "Day 4",
      trigger: "Luxor Nile Cruise Excursions - Luxor West Bank Attractions",
      ans:"Fly To Luxor East Bank Attractions - Nile Cruise Tour"
    },
    {
      id: 5,
      dayNumber: "Day 5",
      trigger: "Tour to Edfu and Kom Ombo Temples",
      ans:"Fly To Luxor East Bank Attractions - Nile Cruise Tour"
    },
    {
      id: 6,
      dayNumber: "Day 6",
      trigger: "Aswan Nile Cruise Tours",
      ans:"Fly To Luxor East Bank Attractions - Nile Cruise Tour"
    },
    {
      id: 7,
      dayNumber: "Day 7",
      trigger: "Fly Aswan to Cairo",
      ans:"Fly To Luxor East Bank Attractions - Nile Cruise Tour"
    },
    {
      id: 8,
      dayNumber: "Day 8",
      trigger: "Cairo - End Your Pyramids, Luxor and Aswan Package",
      ans:"Fly To Luxor East Bank Attractions - Nile Cruise Tour"
    },
  ];
export default function ItineraryContant() {
  return (
    <div>
      <div className="relative space-y-4">
        {/* Vertical Line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-[2px] bg-gray-300" />
        <div className="flex flex-col gap-6">
            <div className="relative flex items-center gap-4">
              <Accordion type="single" collapsible className="space-y-4 w-full!">
              {dataAsked.map((item) => (
                <div className="flex items-start gap-4">
                {/* Circle */}
              <div className="relative z-10">
                <div
                  className={`w-4 h-4 mt-5 rounded-full bg-black`}
                />
              </div>
                  <AccordionItem
                    value={`item-${item.id}`}
                    key={item.id}
                    className="bg-[#EEEEEE] w-full rounded-2xl border border-[#F9FAFB]"
                  >
                    <AccordionTrigger className="text-sm lg:text-base text-[#1D1F1F] px-4 font-medium hover:text-brand-blue hover:bg-brand-blue/20 transition-colors duration-300 [&>svg]:size-4!">
                      <div className="flex items-center gap-1">
                        <p className="">{item.dayNumber}</p>
                        <p>:</p>
                        <p className="font-normal">{item.trigger}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 bg-white m-2 rounded-b-2xl text-base font-normal text-[#666666]">
                      {item.ans}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
            </div>
        </div>
      </div>
    </div>
  )
}
