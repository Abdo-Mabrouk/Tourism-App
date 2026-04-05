import icon1 from "@/assets/icon/_.svg";
import FooterContainer from "@/components/Layout Components/FooterContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FrequentlyAsked() {
  const dataAsked = [
    {
      id: 1,
      trigger: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      trigger: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      trigger: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      trigger: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div>
      <div className=" container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-20">
          <div className=" col-span-3 lg:col-span-1  flex items-center lg:justify-center relative">
            <p className="text-[#1D1F1F] font-bold text-xl lg:text-5xl">
              Frequently Asked Questions
            </p>
            <img
              src={icon1}
              alt="icon"
              className=" hidden lg:block w-56.5 h-100 absolute end-0 -z-1"
            />
          </div>
          <div className=" col-span-3 lg:col-span-2 space-y-10">
            <Accordion type="single" collapsible className="space-y-4">
              {dataAsked.map((item) => (
                <>
                  <AccordionItem
                    value={`item-${item.id}`}
                    key={item.id}
                    className="bg-[#F9FAFB] rounded-2xl border border-[#F9FAFB]"
                  >
                    <AccordionTrigger className="text-sm lg:text-xl text-[#1D1F1F] px-4 font-medium hover:text-brand-blue hover:bg-brand-blue/20 transition-colors duration-300">
                      {item.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="p-4 bg-white m-2 rounded-b-2xl text-base font-normal text-[#666666]">
                      {item.ans}
                    </AccordionContent>
                  </AccordionItem>
                </>
              ))}
            </Accordion>
            <FooterContainer href="/all-frequently-asked"/>
          </div>
        </div>
      </div>
    </div>
  );
}
