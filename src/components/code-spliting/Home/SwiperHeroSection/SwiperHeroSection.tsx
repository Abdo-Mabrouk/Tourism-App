import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import imgeBg from "@/assets/bg.svg";

export default function SwiperHeroSection() {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className=" h-screen! overflow-hidden!"
      >
        <SwiperSlide className="w-full! h-full!">
          <img src={imgeBg} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="w-full! h-full!">
          <img src={imgeBg} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="w-full! h-full!">
          <img src={imgeBg} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="w-full! h-full!">
          <img src={imgeBg} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
