import InputWithIcon from "@/components/inputs/TextInput";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import icon1 from "@/assets/icon/search-normal.svg";
import Input from "@/components/inputs/input";

export default function AllFaqs() {
  const [ser, setSer] = useState("");

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
      <div className=" bg-[url(/src/assets/bg-3.svg)] bg-cover">
        <div className=" bg-linear-to-t from-[#000000] via-[#000000AF] to-[#00000000] pb-10 pt-60">
          <div className=" container">
            <p className="text-[#FFFFFF] text-3xl lg:text-5xl font-bold">
              Frequently Asked Questions
            </p>
          </div>
        </div>
      </div>
      <div className=" container pt-4 pb-14 space-y-6">
        <div className="bg-[#F9FAFB] rounded-4xl p-8 flex items-center gap-4">
          <InputWithIcon
            isRequired
            placeholder="What article are you looking for"
            value={ser}
            onChange={(e) => setSer(e.target.value)}
            icon={icon1}
            className=" rounded-full!"
          />
          <button className="btn2 py-4">Search</button>
        </div>
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
          <div className="p-4 mt-16 lg:p-14 space-y-12 bg-brand-blue rounded-4xl bg-[url(/src/assets/pattren.svg)] bg-no-repeat">
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
  );
}
