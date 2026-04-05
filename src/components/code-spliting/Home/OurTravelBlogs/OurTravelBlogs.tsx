import BlogsCard from "@/components/Cards/BlogsCard";
import FooterContainer from "@/components/Layout Components/FooterContainer";
import SectionContainer from "@/components/Layout Components/sectionContainer";
import { data } from "@/FakeData/FakeData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function OurTravelBlogs() {
  return (
    <div className="bg-[#F9FAFB]">
      <SectionContainer title="Our travel Blogs">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.25,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className=""
        >
          <div className="flex items-center ">
            {data.slice(0, 4).map((img) => (
              <SwiperSlide>
                <BlogsCard key={img.id} cardData={img} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
                <FooterContainer />

      </SectionContainer>
    </div>
  );
}
