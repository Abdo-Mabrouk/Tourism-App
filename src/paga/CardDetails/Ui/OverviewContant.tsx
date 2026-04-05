import icon2 from "@/assets/icon/clock2.svg";
import icon3 from "@/assets/icon/calendar-tick.svg";
export default function OverviewContant() {
  const dataCard1 = [
    { icon: icon2, title: "Pick-up Time", value: "Upon your Arrival" },
    {
      icon: icon3,
      title: "Tour availability",
      value: "Every day Expect Saturdays",
    },
  ];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-5">
        {dataCard1.map((card1) => (
          <>
            <div className="py-6 border border-[#DEDEDE] rounded-2xl flex flex-col gap-3 items-center justify-center">
              <p className="text-[#1D1F1F] text-sm font-normal flex items-center gap-2 justify-center">
                <img src={card1.icon} alt={card1.title} className="size-4" />
                {card1.title}
              </p>
              <p className="text-brand-blue font-medium text-xl">
                {card1.value}
              </p>
            </div>
          </>
        ))}
      </div>
      <p className="text-[#666666] font-normal text-base">
        8 Days Tour to Pyramids, Luxor and Aswan Nile Cruise by Air offers a
        complete travel adventure through the miraculous wonders of ancient
        Egypt. Sun Pyramids Tours provides ideal services
      </p>
      <p className="text-[#666666] font-normal text-base">
        including a private A/C vehicle, comfortable flights, and a professional
        Egyptologist tour guide, ensuring a high-quality experience. Guests will
        have the incredible opportunity to unleash their inner adventurer with
        this irresistible 8-day tour, feasting their eyes on the iconic Giza
        Pyramids, the mighty Sphinx, and more
      </p>
      <p className="text-[#666666] font-normal text-base">
        Then, fly to Luxor to witness the golden Karnak Temple, Luxor Temple,
        and the Valley of the Kings. Continue your journey to Aswan to explore
        the beautiful Philae Temple the impressive Aswan High Dam, and other
        archaeological milestones. Start your adventure in the Land of Pharaohs
        by booking this incredible tour.
      </p>
    </div>
  );
}
