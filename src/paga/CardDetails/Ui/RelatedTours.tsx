import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "@/FakeData/FakeData";
import PopularCard from "@/components/Cards/PopularCard";

export default function RelatedTours() {
  return (
    <div className="space-y-2">
      <h2 className="text-[#1D1F1F] text-[34px] font-medium"> Related Tours</h2>
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1.75,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className=" pb-10!"
        >
          {data.slice(0, 8).map((card) => (
            <SwiperSlide key={card.id}>
              <PopularCard key={card.id} cardData={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
