import SectionContainer from "@/components/Layout Components/sectionContainer";
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
export default function GalleryExciting() {
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
  ];
  return (
    <div className="bg-[#F9FAFB]">
      <SectionContainer
        title="Gallery of Exciting journeys"
        decs="Follow us on social media to see more Exciting journeys"
      >
        <div className=" hidden md:grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <SocialCard image={img4} icon={icon4} link={""} />
          <div className="grid grid-rows-2 gap-2">
            <SocialCard height="185px" image={img3} icon={icon3} link={""} />
            <SocialCard height="185px" image={img2} icon={icon3} link={""} />
          </div>
          <SocialCard image={img5} icon={icon2} link={""} />
          <SocialCard image={img1} icon={icon1} link={""} />
        </div>
        <div className="md:hidden">
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
              {socialCards.map((card) => (
                <SwiperSlide key={card.id}>
                  <SocialCard
                    key={card.id}
                    image={card.image}
                    icon={card.icon}
                    link={card.link}
                    height="240px"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SectionContainer>
        </div>
      </SectionContainer>
    </div>
  );
}
