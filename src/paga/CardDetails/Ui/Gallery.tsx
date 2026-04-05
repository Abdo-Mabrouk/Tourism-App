import img1 from "@/assets/Gallery (1).svg";
import img2 from "@/assets/Gallery (2).svg";
import img3 from "@/assets/Gallery (3).svg";
import img4 from "@/assets/Gallery (4).svg";
import img5 from "@/assets/Gallery (5).svg";
import icon1 from "@/assets/icon/icon Gallery  (1).svg";
import icon2 from "@/assets/icon/icon Gallery  (2).svg";
import icon3 from "@/assets/icon/icon Gallery  (3).svg";
import icon4 from "@/assets/icon/icon Gallery  (4).svg";
import { SocialCard } from "@/components/Cards/SocialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const socialCards = [
  {
    id: 1,
    image: img1,
    icon: icon1,
    link: "https://youtube.com/shorts/xxx",
    platform: "shorts",
  },
  {
    id: 2,
    image: img2,
    icon: icon2,
    link: "https://youtube.com/watch?v=xxx",
    platform: "youtube",
  },
  {
    id: 3,
    image: img3,
    icon: icon2,
    link: "https://tiktok.com/@xxx",
    platform: "tiktok",
  },
  {
    id: 4,
    image: img4,
    icon: icon3,
    link: "https://instagram.com/p/xxx",
    platform: "instagram",
  },
  {
    id: 5,
    image: img5,
    icon: icon4,
    link: "https://instagram.com/p/xxx",
    platform: "instagram",
  },
  {
    id: 1,
    image: img1,
    icon: icon1,
    link: "https://youtube.com/shorts/xxx",
    platform: "shorts",
  },
  {
    id: 2,
    image: img2,
    icon: icon2,
    link: "https://youtube.com/watch?v=xxx",
    platform: "youtube",
  },
  {
    id: 3,
    image: img3,
    icon: icon2,
    link: "https://tiktok.com/@xxx",
    platform: "tiktok",
  },
  {
    id: 4,
    image: img4,
    icon: icon3,
    link: "https://instagram.com/p/xxx",
    platform: "instagram",
  },
  {
    id: 5,
    image: img5,
    icon: icon4,
    link: "https://instagram.com/p/xxx",
    platform: "instagram",
  },
];
export default function Gallery() {
  return (
    <div className="space-y-6">
      <p className=" text-[32px] font-medium text-[#1D1F1F]"> Gallery of Exciting journeys</p>
      <div className="">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
              spaceBetween: 20,
            },
          }}
          className="mySwiper pb-10!"
        >
          {socialCards.map((card) => (
            <SwiperSlide key={card.id}>
              <SocialCard
                key={card.id}
                image={card.image}
                icon={card.icon}
                link={card.link}
                height="400px"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
