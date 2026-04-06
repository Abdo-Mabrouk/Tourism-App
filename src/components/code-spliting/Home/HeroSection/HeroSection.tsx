import SwiperHeroSection from "../SwiperHeroSection/SwiperHeroSection";
import Tabss from "../Tabs/Tabs";
export default function HeroSection() {
  const data = [
    { id: 1, number: "+100K", title: "Happy customer" },
    { id: 2, number: "+25", title: "Years of experience" },
    { id: 3, number: "+10K", title: "Total Destinations" },
    { id: 4, number: "5.0", title: "Rating in Tripadvisor" },
  ];
  return (
    <div className="relative min-h-screen w-full">
      <SwiperHeroSection />
      <div className="absolute bg-black/20 w-full h-full top-0 start-0 z-10 flex items-center justify-center">
        <div className="text-center space-y-6 w-full px-4">
          {/* Text */}
          <div className="space-y-4">
            <p className="text-lg md:text-3xl lg:text-5xl text-white font-bold text-shadow">
              Get started your
            </p>
            <p className="text-[28px] md:text-5xl lg:text-8xl text-white font-bold">
              Exciting Journey With Us
            </p>
          </div>
          <Tabss />
          <div className="container absolute start-1/2 -translate-x-1/2 -bottom-16">
            <div className="grid grid-cols-4 gap-2 lg:gap-6">
              {data.map((card) => (
                <>
                  <div
                    key={card.id}
                    className="py-6 px-2 border border-[#EEEEEE] rounded-3xl bg-[#EEEEEE] flex flex-col items-center gap-2 group hover:bg-white hover:shadow-lg transition-colors duration-300"
                  >
                    <p className="font-bold text-[#1D1F1F] text-[20px] lg:text-[34px] group-hover:text-brand transition-colors duration-300">
                      {card.number}
                    </p>
                    <p className="font-medium text-[#A5A5A5] text-[10px] lg:text-base group-hover:text-black transition-colors duration-300">
                      {card.title}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
