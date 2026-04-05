import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function PropertySwiper({
  images,
}: {
  images: string[];
}) {
  return (
    <div className={`relative`}>
      <Swiper
        style={{ height: "100%" }}
        dir="ltr"
        pagination={true}
        modules={[Pagination]}
        className="pb-4"
      >
        {Array.isArray(images) &&
          images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`property-${i}`}
                className={`w-full h-full `}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
