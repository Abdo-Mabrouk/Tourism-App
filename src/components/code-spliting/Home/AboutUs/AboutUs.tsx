import AboutCard from "@/components/Cards/AboutCard";
import SectionContainer from "@/components/Layout Components/sectionContainer";
import img1 from "@/assets/image.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import icondev from "@/assets/icon/Frame 1000005059.svg";

import "swiper/css";
import "swiper/css/pagination";
export default function AboutUs() {
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
  return (
    <div className="pb-14">
      <SectionContainer
        title="What People Say About Us"
        decs="Explore the positive feedback highlighting memorable experiences with our services"
      >
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
              slidesPerView: 2.75,
              spaceBetween: 20,
            },
          }}
          className=" pb-10!"
        >
          {dataCard.map((card) => (
            <SwiperSlide key={card.id}>
              <AboutCard key={card.id} dataCard={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionContainer>
      <div className="w-full flex items-center justify-center">
        <p className="text-[#A5A5A5] text-xl font-medium flex items-center gap-3">
          <span>View our tours on</span>
          <span className="text-[#000000] text-3xl font-bold flex items-center gap-3">
            <img src={icondev} alt="" />
            Tripadvisor
          </span>
        </p>
      </div>
    </div>
  );
}
