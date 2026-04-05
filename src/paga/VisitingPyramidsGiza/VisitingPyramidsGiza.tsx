import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import img1 from "@/assets/Blogs-4.svg";
import { data } from "@/FakeData/FakeData";
import PopularCard from "@/components/Cards/PopularCard";
import FrequentlyAsked from "@/components/code-spliting/Home/FrequentlyAsked/FrequentlyAsked";
import BlogsCard from "@/components/Cards/BlogsCard";
import Input from "@/components/inputs/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import pattern1 from "@/assets/pattern1.svg";
import pattern2 from "@/assets/pattern2.svg";
import img8 from "@/assets/1.svg";
import img2 from "@/assets/2.svg";
import img3 from "@/assets/3.svg";
import img4 from "@/assets/4.svg";
import img5 from "@/assets/5.svg";
import img6 from "@/assets/6.svg";
import img7 from "@/assets/1.svg";
import CustomBreadcrumb from "@/components/Layout Components/Breadcrumb";
export default function VisitingPyramidsGiza() {
  const imges = [img8, img2, img3, img4, img5, img6, img7, img1, img2, img3];

  return (
    <div className="pt-18 space-y-8 bg-[#f2f2f2]" >
      <CustomBreadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blogs", href: "/blogs" },
            { name: "Museums" },
            { name: "Tips for Visiting the Pyramids of Giza" },
          ]}
        />
      <div className="container space-y-6 pb-14">
        <div className=" relative overflow-hidden">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className=" rounded-[40px]! "
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
              <SwiperSlide className="h-[570px]! w-full!">
                <img src={img1} alt="" className=" object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" absolute bottom-0 rounded-[40px]! start-0 w-full z-3 space-y-4 p-5 lg:p-10 bg-linear-to-t from-[#000000]  to-[#00000000]">
            <p className="text-[#FFFFFF] font-medium text-2xl lg:text-[34px]">
              Tips for Visiting the Pyramids of Giza
            </p>
            <p className="text-[#FFFFFF] font-medium text-sm lg:text-base">
              15 Mar 2024
            </p>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-6">
          <div className=" col-span-10 lg:col-span-7 p-6 space-y-9">
            <p className="text-brand-blue text-2xl lg:text-[34px] font-medium">
              Tips for Visiting the Pyramids of Giza
            </p>
            <img
              src={img1}
              alt=""
              className="w-full h-[200px] lg:h-[420px] object-cover rounded-4xl"
            />
            <div className="">
              <p className="text-[#666666] text-xl font-medium">
                Visiting the Pyramids of Giza is a dream for many travelers, as
                these ancient wonders stand as a testament to Egypt's rich
                history and architectural prowess. As you prepare to explore one
                of the Seven Wonders of the Ancient World
              </p>
              <p className="text-[#666666] text-xl font-medium">
                t’s essential to be well-informed with Travel Tips Giza Pyramids
                to make the most of your visit. Whether you’re planning a solo
                adventure or a family trip, these practical tips will ensure you
                have a seamless and unforgettable experience. With Sun Pyramids
                Tours, we’ll guide you every step of the way, from booking the
                best accommodations to providing expert insights into the
                mysteries of the pyramids.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-[#1D1F1F] text-2xl font-medium">
                Plan Your Visit Around Opening Hours
              </p>
              <p className="text-[#666666] text-xl font-medium">
                The Giza Pyramids Complex opens from 8:00 AM to 4:00 PM during
                October to March, and from 7:00 AM to 6:00 PM between April and
                September. Arrive early to make the most of your time.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-[#1D1F1F] text-2xl font-medium">
                Transportation Options
              </p>
              <p className="text-[#666666] text-xl font-medium">
                Located just an hour's drive from Cairo International Airport,
                the Giza Pyramids are easily accessible. To enhance your comfort
                and convenience, Sun Pyramids Tours offers a comprehensive
                transportation service. We provide modern, air-conditioned
                vehicles to transport you from the airport directly to your
                hotel and vice-versa. Additionally, we offer transportation from
                all major Egyptian attractions and landmarks to your hotel of
                residence, ensuring safety and a hassle-free experience
                throughout your stay. For budget travelers, Uber is also an
                affordable alternative.
              </p>
            </div>
          </div>
          <div className=" col-span-10 lg:col-span-3 space-y-5 order-first lg:order-2">
            <div className=" bg-[#F9FAFB] py-4 px-8 h-fit space-y-6 rounded-4xl">
              <h2 className="text-[#A5A5A5] capitalize font-medium text-xl">
                On this page
              </h2>
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1 " className="border-b-0">
                  <AccordionTrigger className="text-base text-[#1D1F1F] font-medium [&[data-state=open]>svg]:size-4! [&[data-state=closed]>svg]:size-4!">
                    Tips for Visit to the Pyramids of Giza
                  </AccordionTrigger>
                  <AccordionContent className=" space-y-2 ps-6">
                    <p className="hover:text-brand-blue text-[#1D1F1F] font-normal hover:font-medium text-base">
                      Plan Your Visit Around Opening Hours{" "}
                    </p>
                    <p className="text-[#1D1F1F] font-normal hover:font-medium text-base hover:text-brand-blue">
                      Entry Fees
                    </p>
                    <p className="text-[#1D1F1F] font-normal hover:font-medium text-base hover:text-brand-blue">
                      Optimal Visiting Time
                    </p>
                    <p className="text-[#1D1F1F] font-normal hover:font-medium text-base hover:text-brand-blue">
                      Capture the Moment
                    </p>
                    <p className="text-[#1D1F1F] font-normal hover:font-medium text-base hover:text-brand-blue">
                      Capture the Moment
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-base text-[#1D1F1F] font-medium [&[data-state=open]>svg]:size-4! [&[data-state=closed]>svg]:size-4!">
                    Frequently Asked Questions
                  </AccordionTrigger>
                  <AccordionContent className=" space-y-2 ps-6">
                    <p className="text-[#1D1F1F] font-normal hover:font-medium text-base hover:text-brand-blue">
                      {" "}
                      1. What is the height and weight of the Great Pyramid of
                      Giza?
                    </p>
                    <p className="text-[#1D1F1F] font-normal hover:font-medium text-base hover:text-brand-blue">
                      2. How many pyramids are there in Egypt?{" "}
                    </p>
                    <p className="text-[#1D1F1F] font-normal hover:font-medium text-base hover:text-brand-blue">
                      3. Can I go inside the Pyramids?ees{" "}
                    </p>
                    <p className="text-[#1D1F1F] font-normal hover:font-medium text-base hover:text-brand-blue">
                      4. What is the entry cost for the Giza Pyramids
                      Complex?{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="text-base text-[#1D1F1F] font-medium">
                Why do I book with Sun Pyramids Tours?
              </p>
              <p className="text-base text-[#1D1F1F] font-medium">
                Copyright and Trademark Notices:
              </p>
            </div>
            <div className="">
              <div className="flex flex-col gap-12 bg-[#F9FAFB] pt-3 lg:p-10 rounded-[40px] relative overflow-hidden ">
                <img
                  src={pattern1}
                  alt=""
                  className=" absolute bottom-0 start-0 w-[150px] z-0"
                />
                <div className="space-y-4">
                  <p className="text-[#1D1F1F] text-xl font-bold text-center">
                    Discover related trips that match your reading
                  </p>
                  <p className="text-[#666666] text-base font-normal text-center">
                    Plan your next adventure now
                  </p>
                  <button className="btn2 w-full">Explore Trips</button>
                </div>
                <img
                  src={pattern2}
                  alt=""
                  className=" absolute top-0 end-0 w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-[#1D1F1F] text-2xl lg:text-[34px] font-medium">
            Related Tours
          </p>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
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
                slidesPerView: 4.25,
                spaceBetween: 20,
              },
            }}
            className="pb-10!"
          >
            {data.slice(0, 8).map((card) => (
              <SwiperSlide key={card.id}>
                <PopularCard cardData={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <FrequentlyAsked />
        <div className="space-y-6">
          <p className="text-[#1D1F1F] text-2xl lg:text-[34px] font-medium">
            Related blog
          </p>
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
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
                spaceBetween: 20,
              },
            }}
            className="pb-10!"
          >
            {data.slice(0, 4).map((img) => (
              <SwiperSlide>
                <BlogsCard key={img.id} cardData={img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="">
          <div className="p-4 lg:p-14 space-y-12 bg-brand-blue rounded-4xl bg-no-repeat bg-[url(/src/assets/pattren.svg)]">
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
      </div>
    </div>
  );
}
