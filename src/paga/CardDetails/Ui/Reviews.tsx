import img1 from "@/assets/image.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AboutCard from "@/components/Cards/AboutCard";
const dataCard = [
  {
    id: "1",
    name: "Dhanyas",
    city: "Amsterdam",
    rating: 3,
    imege: img1,
    desc: "We hired Sun pyramids Tours for with my family when we visited Cairo. We were assigned Mr. Okasha as our coordinator and contact personMr .Okasha as our coordinator and contact personMr ",
  },
  {
    id: "1",
    name: "Dhanyas",
    city: "Amsterdam",
    rating: 4,
    imege: img1,
    desc: "We hired Sun pyramids Tours for with my family when we visited Cairo. We were assigned Mr. Okasha as our coordinator and contact per .Okasha as our coordinator and contact personMr",
  },
  {
    id: "1",
    name: "Dhanyas",
    city: "Amsterdam",
    rating: 2,
    imege: img1,
    desc: "We hired Sun pyramids Tours for with my family when we visited Cairo. We were assigned Mr. Okasha as our coordinator and contact per .Okasha as our coordinator and contact personMr",
  },
  {
    id: "1",
    name: "Dhanyas",
    city: "Amsterdam",
    rating: 1,
    imege: img1,
    desc: "We hired Sun pyramids Tours for with my family when we visited Cairo. We were assigned Mr. Okasha as our coordinator and contact personMr. Okashaddddddddddddddddddd",
  },
  {
    id: "1",
    name: "Dhanyas",
    city: "Amsterdam",
    rating: 5,
    imege: img1,
    desc: "We hired Sun pyramids Tours for with my family when we visited Cairo. We were assigned Mr. Okasha as our coordinator and contact personMr. Okashaddddddddddddddddddd",
  },
  {
    id: "1",
    name: "Dhanyas",
    city: "Amsterdam",
    rating: 3,
    imege: img1,
    desc: "We hired Sun pyramids Tours for with my family when we visited Cairo. We were assigned Mr. Okasha as our coordinator and contact personMr. Okashaddddddddddddddddddd",
  },
  {
    id: "1",
    name: "Dhanyas",
    city: "Amsterdam",
    rating: 3.2,
    imege: img1,
    desc: "We hired Sun pyramids Tours for with my family when we visited Cairo. We were assigned Mr. Okasha as our coordinator and contact personMr. Okashaddddddddddddddddddd",
  },
];
export default function Reviews() {
  return (
    <div className="space-y-2">
      <h2 className="text-[#1D1F1F] text-[34px] font-medium"> Reviews</h2>
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
              slidesPerView: 3.75,
              spaceBetween: 20,
            },
          }}
          className="mySwiper mySwiper2 pb-10!"
        >
          {dataCard.map((card) => (
            <SwiperSlide key={card.id}>
              <AboutCard key={card.id} dataCard={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
