import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ReactNode } from "react";
interface ImageInputProps {
  children: ReactNode;
  title: string;
  required?: boolean;
  icon?: string;
  hint?: string;
}
export default function AddAccordion({
  children,
  title,
  required,
  icon,
}: ImageInputProps) {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="py-0!"
      >
        <AccordionItem
          value="item-1"
          className="flex flex-col gap-2 cursor-pointer!"
        >
          <AccordionTrigger className="hover:no-underline [&>svg]:h-4 [&>svg]:w-4 cursor-pointer!  py-0!">
            <div className="flex items-center gap-4 cursor-pointer">
              {icon && (
                <div className="icon size-6">
                  <img src={icon} alt="icon" className="size-6" />
                </div>
              )}

              <h2 className="font-medium text-base text-[#1D1F1F] cursor-pointer capitalize">
                {title}{" "}
                {required && <span className="text-[#E74C3C]">: *</span>}
              </h2>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-6">{children}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
