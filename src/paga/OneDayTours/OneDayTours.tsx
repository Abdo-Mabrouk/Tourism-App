import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import imgeBg from "@/assets/bg.svg";
import { useNavigate } from "react-router-dom";
import img1 from "@/assets/Blogs-1.svg";
import img2 from "@/assets/Blogs-2.svg";
import img3 from "@/assets/Blogs-3.svg";
import img4 from "@/assets/Blogs-4.svg";
import img5 from "@/assets/Blogs-5.svg";
import img6 from "@/assets/Blogs-6.svg";
import img7 from "@/assets/Blogs-10.svg";
import img8 from "@/assets/Blogs-8.svg";
import img9 from "@/assets/Blogs-9.svg";
import Input from "@/components/inputs/input";
import CustomBreadcrumb from "@/components/Layout Components/Breadcrumb";
export default function OneDayTours() {
  const navigate = useNavigate();
  const dataCard = [
    { id: 1, name: "Cairo", img: img1 },
    { id: 2, name: "Luxor ", img: img2 },
    { id: 3, name: "Aswan ", img: img3 },
    { id: 4, name: "Hurghada ", img: img4 },
    { id: 5, name: "Sharm El Sheikh ", img: img5 },
    { id: 6, name: "Dahab ", img: img6 },
    { id: 7, name: "Alexandria ", img: img7 },
    { id: 8, name: "Taba", img: img8 },
    { id: 9, name: "Marsa Alam ", img: img9 },
  ];
  return (
    <div className="pt-33 bg-[#f2f2f2]">
      <CustomBreadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Egypt Tours" },
            { name: "One Day Tours" },
          ]}
        />
      <div className="relative">
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            className=" h-[470px]! overflow-hidden!"
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
        </div>
        <div className=" absolute top-1/2 left-1/2 -translate-1/2 z-122">
          <p className="text-[#FFFFFF] text-[32px] lg:text-5xl font-bold text-center">
            Egypt Day Tours
          </p>
        </div>
      </div>
      <div className="py-14 container space-y-14">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {dataCard.map((card) => (
            <div
              onClick={() => {
                navigate(`/tours/2`);
              }}
              className="overflow-hidden rounded-2xl h-[170px] lg:h-103 relative group cursor-pointer"
            >
              <img
                src={card.img}
                alt=""
                className=" size-full object-cover  group-hover:scale-110 transition-all duration-300"
              />
              <p className=" capitalize text-xl text-start font-bold text-white absolute bottom-0 p-3 bg-linear-to-t from-[#000000dc] to-[#00000000] w-full">
                {card.name}
              </p>
            </div>
          ))}
        </div>
        <div className="p-4 lg:p-14 space-y-12 bg-brand-blue rounded-4xl bg-[url(/src/assets/pattren.svg)] bg-no-repeat">
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
