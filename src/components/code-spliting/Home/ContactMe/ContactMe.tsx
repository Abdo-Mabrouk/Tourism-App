import Input from "@/components/inputs/input";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "@/assets/1.svg";
import img2 from "@/assets/2.svg";
import img3 from "@/assets/3.svg";
import img4 from "@/assets/4.svg";
import img5 from "@/assets/5.svg";
import img6 from "@/assets/6.svg";
import img7 from "@/assets/1.svg";

export default function ContactMe() {
  const imges = [img1, img2, img3, img4, img5, img6, img7, img1, img2, img3];
  return (
    <div className="bg-[#F9FAFB]">
      <div className=" container py-16 ">
        <div className="p-4 lg:p-14 space-y-12 bg-brand-blue rounded-4xl bg-[url(/src/assets/pattren.svg)]">
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
        <div className="">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2.25,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
            }}
            className=""
          >
            <div className="flex items-center ">
              {imges.map((img) => (
                <SwiperSlide>
                  <div className="">
                    <img src={img} alt="" className="h-24 object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      {/* */}
    </div>
  );
}
