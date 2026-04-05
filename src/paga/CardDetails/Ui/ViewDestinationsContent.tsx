import CountdownTimer from "@/components/Layout Components/CountdownTimer";
import icon2 from "@/assets/icon/send-2.svg";
import icon1 from "@/assets/icon/heart.svg";
interface DestinationItem {
    city: string;
    title: string;
    active?: boolean;
  }
  
  const destinations: DestinationItem[] = [
    { city: "Cairo", title: "Arrival Cairo", active: true },
    { city: "Cairo", title: "Tour to Pyramids" },
    { city: "Luxor", title: "Nile Cruise Tour" },
    { city: "Luxor", title: "Luxor West Bank" },
    { city: "Aswan", title: "Kom Ombo Temples" },
    { city: "Aswan", title: "Aswan Nile Cruise Tours" },
    { city: "Luxor", title: "Nile Cruise Tour" },
    { city: "Aswan", title: "Aswan Nile Cruise Tours" },
    { city: "Luxor", title: "Luxor West Bank" },
  ];
export default function ViewDestinationsContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-full w-full rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27633.66220158068!2d31.21415064401479!3d30.03089645096038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2LTYsdmD2Kkg2LPZhiDYqNix2KfZhdiv2LIg2KjZgdmK2LXZhA!5e0!3m2!1sar!2seg!4v1770758524921!5m2!1sar!2seg"
          className="w-full h-full!"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        <div className="space-y-6">
            <p className="text-[#1D1F1F] text-4xl font-medium">8 Days To Pyramids, Luxor and Aswan by Air</p>
        <div className="flex items-center justify-between ">
            <div className="">
              <p className="text-[#666666] text-sm font-normal">start from</p>
              <div className="flex items-center gap-2">
                <p className=" font-bold text-[#1D1F1F] text-[32px] ">$1500</p>
                <del className=" font-medium text-[#A5A5A5] text-xl decoration-red-500">
                  $2000
                </del>
              </div>
            </div>
            <div className="flex items-center gap-3 py-2 px-6 border border-[#EEEEEE] w-fit rounded-full">
              <img src={icon2} className="size-6!" alt="" />
              <p className="text-[#1D1F1F] text-base font-medium">Share</p>
            </div>
          </div>
          <CountdownTimer
            initialDays={5}
            initialHours={20}
            initialMinutes={50}
          />
          <div className="flex items-center gap-4">
          <button className="btn1 bg-brand-blue text-white w-full">
            Book now
          </button>
            <div className="border size-14 border-[#EEEEEE] p-2 flex items-center justify-center gap-2 rounded-full">
              <img src={icon1} alt="" className="size-6" />
            </div>
          </div>
          <div className="w-full max-w-md overflow-y-scroll h-100 rounded-xl p-6">
      <h2 className="text-gray-500 text-lg font-semibold mb-6">
        Destinations
      </h2>

      <div className="relative max-h-[500px] overflow-y-auto pr-2">
        {/* Vertical Line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-[2px] bg-gray-300" />

        <div className="flex flex-col gap-6">
          {destinations.map((item, index) => (
            <div key={index} className="relative flex items-center gap-4">
              
              {/* Circle */}
              <div className="relative z-10">
                <div
                  className={`w-4 h-4 rounded-full border-3 ${
                    item.active
                      ? "bg-blue-600 border-blue-600"
                      : "bg-white border-black"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex gap-2 text-sm">
                <span className="font-semibold text-gray-800">
                  {item.city}
                </span>
                <span className="text-gray-600">
                  {item.title}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}
