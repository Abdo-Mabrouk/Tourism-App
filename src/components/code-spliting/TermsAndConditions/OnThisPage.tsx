import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function OnThisPage() {
  return (
    <div className=" bg-[#F9FAFB] py-4 px-8 h-full space-y-6 rounded-4xl">
      <h2 className="text-[#A5A5A5] capitalize font-medium text-xl">
        On this page
      </h2>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1 " className="border-b-0">
          <AccordionTrigger className="text-base text-[#1D1F1F] font-medium [&[data-state=open]>svg]:size-4! [&[data-state=closed]>svg]:size-4!">
            Payments & Cancellations:
          </AccordionTrigger>
          <AccordionContent className=" space-y-2 ps-6">
            <p className="text-brand-blue font-medium text-base">
              The standard cancellation policy is as follows:
            </p>
            <p className="text-[#1D1F1F] font-normal text-base">
              High/Peak Season (1st Sep to 5th Jan and 15th Mar to 15th May):
            </p>
            <p className="text-[#1D1F1F] font-normal text-base">
              Low Season (6th Jan to 14th Mar and 16th May to 31st Aug):
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base text-[#1D1F1F] font-medium [&[data-state=open]>svg]:size-4! [&[data-state=closed]>svg]:size-4!">
            Delivery/Shipment Policy :
          </AccordionTrigger>
          <AccordionContent className=" space-y-2 ps-6">
            <p className="text-[#1D1F1F] font-medium text-base">
              Payment Processing:
            </p>
            <p className="text-[#1D1F1F] font-normal text-base">
              Sun Pyramids Tours Vouchers:
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="text-base text-[#1D1F1F] font-medium">Terms of Use :</p>
      <p className="text-base text-[#1D1F1F] font-medium">Copyright and Trademark Notices:</p>
    </div>
  );
}
