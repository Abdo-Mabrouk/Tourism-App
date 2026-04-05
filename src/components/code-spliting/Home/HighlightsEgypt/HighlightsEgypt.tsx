import SectionContainer from "@/components/Layout Components/sectionContainer";
import img1 from "@/assets/Rectangle 2.svg";
import img2 from "@/assets/Rectangle 2.png";
import img3 from "@/assets/Rectangle 2 (1).svg";
import img4 from "@/assets/Rectangle 2 (2).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

export default function HighlightsEgypt() {
  const navigate = useNavigate()
  const dataCard = [
    { id: 1, name: "Fayoum", img: img1 },
    { id: 2, name: "Matruh ", img: img2 },
    { id: 3, name: "Aswan ", img: img3 },
    { id: 4, name: "Luxor ", img: img4 },
    { id: 5, name: "Alexandria ", img: img1 },
    { id: 6, name: "Giza ", img: img2 },
    { id: 7, name: "Cairo ", img: img3 },
    { id: 8, name: "Fayoum", img: img4 },
    { id: 9, name: "Matruh ", img: img1 },
    { id: 10, name: "Suez", img: img2 },
  ];
  return (
    <div  >
      <SectionContainer
        title="Highlights of Egypt"
        decs="Discover the most important landmarks in Egypt"
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
          className=" pb-10!"
        >
          {dataCard.map((card) => (
            <SwiperSlide key={card.id}>
              <div onClick={()=> {navigate(`/see-more-popular-destination`)}} className="overflow-hidden rounded-2xl h-60 relative group cursor-pointer">
                <img
                  src={card.img}
                  alt=""
                  className=" size-full object-cover  group-hover:scale-110 transition-all duration-300"
                />
                <p className=" capitalize text-xl text-start font-bold text-white absolute bottom-0 p-3 bg-linear-to-t from-[#000000dc] to-[#00000000] w-full">
                  {card.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionContainer>
    </div>
  );
}
