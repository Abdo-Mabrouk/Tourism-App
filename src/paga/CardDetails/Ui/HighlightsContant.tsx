import icon1 from "@/assets/icon/eye.svg";
import closeIcon from "@/assets/icon/close.svg";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ViewDestinationsContent from "./ViewDestinationsContent";
export default function HighlightsContant() {
  const dataAsked = [
    {
      id: 1,
      trigger: "Cairo Attractions",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      trigger: "Luxor Attractions",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      trigger: "Aswan Attractions",
      ans: (
        <>
          <div className="px-5">
            <ol className=" list-disc">
              <li>Aswan High Dam</li>
              <li>Philae Temple</li>
              <li>Unfinished Obelisk</li>
              <li>Edfu Temple</li>
              <li>Kom Ombo Temple</li>
            </ol>
          </div>
        </>
      ),
    },
  ];
  return (
    <div>
      <div className=" relative space-y-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27633.66220158068!2d31.21415064401479!3d30.03089645096038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2LTYsdmD2Kkg2LPZhiDYqNix2KfZhdiv2LIg2KjZgdmK2LXZhA!5e0!3m2!1sar!2seg!4v1770758524921!5m2!1sar!2seg"
          className="w-full h-50!"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className=" rounded-4xl font-medium text-base absolute top-2 cursor-pointer end-2 p-2 bg-brand text-white flex items-center justify-center gap-2 w-fit">
              <img src={icon1} alt="View Destinations" className="size-5! " />
              View Destinations
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white! border-0! p-6! max-w-[920px]! max-h-[95vh]! overflow-y-scroll! no-scrollbar rounded-4xl!">
            <AlertDialogHeader className="flex items-center justify-between w-full">
              <p className="text-[#1D1F1F] text-xl font-medium">
                View Destinations
              </p>
              <AlertDialogCancel className="size-11! cursor-pointer p-0! rounded-full! border border-[#EEEEEE]">
                <img src={closeIcon} className="size-5!" alt="" />
              </AlertDialogCancel>
            </AlertDialogHeader>
            <ViewDestinationsContent />
          </AlertDialogContent>
        </AlertDialog>
        <div className="">
          <Accordion type="single" collapsible className="space-y-4">
            {dataAsked.map((item) => (
              <>
                <AccordionItem
                  value={`item-${item.id}`}
                  key={item.id}
                  className="bg-[#EEEEEE] rounded-2xl border border-[#F9FAFB]"
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
        </div>
      </div>
    </div>
  );
}
