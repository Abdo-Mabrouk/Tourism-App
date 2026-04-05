import img1 from "@/assets/pattern1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "@/assets/Blogs-1.svg";
import img3 from "@/assets/Blogs-2.svg";
import img4 from "@/assets/Blogs-3.svg";
import img5 from "@/assets/Blogs-4.svg";
import img6 from "@/assets/Blogs-5.svg";
import img7 from "@/assets/Blogs-6.svg";
import img8 from "@/assets/icon/Frame 1000005169.svg";
import img9 from "@/assets/Frame 1000005166.svg";
import img10 from "@/assets/icon/Frame 10000051121269.svg";
import icon1 from "@/assets/icon/Services 1.svg";
import icon2 from "@/assets/icon/Services 2.svg";
import icon3 from "@/assets/icon/Services 3.svg";
import icon4 from "@/assets/icon/1.svg";
import icon5 from "@/assets/icon/2.svg";
import icon6 from "@/assets/icon/,,.svg";
import meia1 from "@/assets/1.svg";
import meia2 from "@/assets/2.svg";
import meia3 from "@/assets/3.svg";
import meia4 from "@/assets/4.svg";
import meia5 from "@/assets/5.svg";
import meia6 from "@/assets/6.svg";
import teamImg1 from "@/assets/Team 1.svg";
import SectionContainer from "@/components/Layout Components/sectionContainer";
import { dataTeam } from "@/FakeData/FakeData";
import TeamCard from "@/components/Cards/TeamCard";
import FrequentlyAsked from "@/components/code-spliting/Home/FrequentlyAsked/FrequentlyAsked";
import Input from "@/components/inputs/input";

export default function About() {
  const dataCard = [
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
  ];
  return (
    <div>
      <div className="min-h-screen relative flex items-center justify-center w-full overflow-hidden bg-[url(/src/assets/bg232.svg)] bg-no-repeat ">
        <div className="space-y-10">
          <div className="text-center space-y-8">
            <p className="text-[#1D1F1F] text-xl lg:text-3xl font-medium">
              About Us
            </p>
            <p className="text-[#444444] text-3xl lg:text-5xl font-bold w-full max-w-190  lg:mx-auto">
              Your Journey Begins with Us Over
              <span className="text-brand">50 Years</span> of Travel Expertise
            </p>
          </div>
          <div className=" w-3xl lg:w-full container">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              centeredSlides={true}
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
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper mySwiper2 px-10!"
            >
              {dataCard.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="overflow-hidden rounded-4xl h-80 relative group cursor-pointer">
                    <img
                      src={card.img}
                      alt=""
                      className=" size-full object-cover  group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <img
          src={img1}
          alt=""
          className=" absolute -start-10 top-30 rotate-90 h-70"
        />
        <img
          src={img1}
          alt=""
          className=" absolute -end-10 top-30 -rotate-90 h-70"
        />
      </div>
      <div className=" container py-14 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <div className="space-y-12">
          <p className="text-[#1D1F1F] text-2xl text-center lg:text-[42px] font-bold ">
            About <span className="text-brand">Sun Pyramids</span> Tours
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <img src={img8} className="size-5 lg:size-10" alt="" />
              <p className=" text-[#444444] font-normal text-base lg:text-xl ">
                Established in 1970 with a tourism license (No. 92 – Class A)
                from the Egyptian Ministry of Tourism.
              </p>
            </div>
            <div className="flex gap-4">
              <img src={img8} className="size-5 lg:size-10" alt="" />
              <p className=" text-[#444444] font-normal text-base lg:text-xl ">
                One of the first tourism companies in Egypt, boasting over 50
                years of experience in the travel industry.
              </p>
            </div>
            <div className="flex gap-4">
              <img src={img8} className="size-5 lg:size-10" alt="" />
              <p className=" text-[#444444] font-normal text-base lg:text-xl ">
                Specializes in organizing individual tours, group trips,
                incentive programs, study trips, and religious journeys.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full rounded-4xl h-120 bg-[#00000033]"></div>
      </div>
      <div className="bg-brand-blue py-10 space-y-5 lg:space-y-11">
        <div className="text-center space-y-2">
          <p className=" text-3xl lg:text-[42px] text-white font-bold">
            Where are our <span className="text-brand">Customers</span> from ?
          </p>
          <p className=" text-base lg:text-xl text-[#A6BCF2] font-medium">
            Our customers are from all over the world{" "}
          </p>
        </div>
        <div className=" container">
          <img
            src={img9}
            alt=""
            className="h-auto lg:h-100 w-full object-contain mx-auto"
          />
        </div>
      </div>
      <div className=" container py-14 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <div className="w-full rounded-4xl h-120 bg-[#00000033]"></div>
        <div className="space-y-12">
          <p className="text-[#1D1F1F] text-2xl text-center lg:text-start lg:text-[42px] font-bold ">
            <span className="text-brand">Destinations</span> and Services
            Offered
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <img src={img10} className="size-5 lg:size-10" alt="" />
              <p className=" text-[#444444] font-normal text-base lg:text-xl ">
                provides services all across Egypt, including Cairo, Aswan,
                Luxor, Alexandria, the Red Sea, and the Sinai Peninsula.
              </p>
            </div>
            <div className="flex gap-4">
              <img src={img10} className="size-5 lg:size-10" alt="" />
              <p className=" text-[#444444] font-normal text-base lg:text-xl ">
                The company offers Nile cruises from Aswan to Luxor, desert
                trips, and airport transfers.
              </p>
            </div>
            <div className="flex gap-4">
              <img src={img10} className="size-5 lg:size-10" alt="" />
              <p className=" text-[#444444] font-normal text-base lg:text-xl ">
                Offices are located in all major destinations to ensure
                on-ground support.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-18">
        <div className=" container space-y-16">
          <p className="text-[#1D1F1F] text-2xl lg:text-5xl font-bold text-center">
            Partnership <span className="text-brand">Benefits</span> and Custom
            Services
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3  justify-center gap-8">
            <div className="bg-white p-6 rounded-4xl flex flex-col items-center gap-6">
              <div className="size-22 rounded-2xl bg-[#E9EEFC] flex items-center justify-center">
                <img src={icon1} alt="icon" className="size-10" />
              </div>
              <p className="text-[#444444] text-xl font-medium text-center">
                Exclusive benefits from trusted partners
              </p>
            </div>
            <div className="bg-white p-6 rounded-4xl flex flex-col items-center gap-6">
              <div className="size-22 rounded-2xl bg-[#E9EEFC] flex items-center justify-center">
                <img src={icon2} alt="icon" className="size-10" />
              </div>
              <p className="text-[#444444] text-xl font-medium text-center">
                Complete planning: transport, stays, and city tours{" "}
              </p>
            </div>
            <div className="bg-white p-6 rounded-4xl flex flex-col items-center gap-6">
              <div className="size-22 rounded-2xl bg-[#E9EEFC] flex items-center justify-center">
                <img src={icon3} alt="icon" className="size-10" />
              </div>
              <p className="text-[#444444] text-xl font-medium text-center">
                Essential tours with customizable options{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container py-14 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <div className="space-y-12">
          <p className="text-[#1D1F1F] text-2xl text-center lg:text-start lg:text-[42px] font-bold ">
            <span className="text-brand">Travelife</span> Partner Certification
          </p>
          <p className=" text-[#444444] font-normal text-base lg:text-xl border-s-4 border-s-brand-blue ps-3 ">
            At Sun Pyramids Tours, we’re dedicated to sustainable travel and
            proud to be Travelife certified, meeting international standards for
            responsible tourism. By choosing us, you support a greener, ethical
            way to explore the world. Join us in shaping a sustainable future!
            Explore responsibly and check out our Privacy, Sustainability, and
            Responsible Travel policies.
          </p>
        </div>
        <div className="w-full rounded-4xl h-100 bg-[#00000033]"></div>
      </div>
      <div className=" container py-18 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-8 rounded-4xl border-2 border-[#EEEEEE] space-y-4 lg:space-y-6">
          <img src={icon4} className=" size-16 lg:size-22" alt="" />
          <p className="text-[#1D1F1F] text-2xl lg:text-4xl font-medium">
            Our Mission
          </p>
          <p className="text-[#444444] text-xl font-normal">
            Create outstanding, client-focused travel experiences with a
            commitment to sustainability. We strive to reduce our environmental
            impact and support local communities, setting new standards for
            responsible tourism.
          </p>
        </div>
        <div className="p-8 rounded-4xl border-2 border-[#EEEEEE] space-y-4 lg:space-y-6">
          <img src={icon5} className=" size-16 lg:size-22" alt="" />
          <p className="text-[#1D1F1F] text-2xl lg:text-4xl font-medium">
            Our Vision
          </p>
          <p className="text-[#444444] text-base lg:text-xl font-normal">
            We aim to be essential to our customers by offering quality tours at
            affordable prices. Our focus on customer satisfaction, and
            innovation drives our leadership in the travel industry.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 py-18 space-y-12">
        <p className="text-[#1D1F1F] text-2xl lg:text-5xl text-center font-bold ">
          Our partners
        </p>
        <div className="w-full ">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6.5,
                spaceBetween: 20,
              },
            }}
            className="mySwiper mySwiper2 px-5 lg:px-12!"
          >
            {[
              meia1,
              meia2,
              meia3,
              meia4,
              meia5,
              meia6,
              meia3,
              meia4,
              meia5,
              meia6,
            ].map((card) => (
              <SwiperSlide>
                <div className="h-11 relative group cursor-pointer">
                  <img
                    src={card}
                    alt=""
                    className=" size-full object-contain  group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <SectionContainer title="Our Team">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dataTeam.map((card) => (
            <TeamCard
              img={card.img}
              name={card.name}
              position={card.position}
            />
          ))}
        </div>
      </SectionContainer>
      <div className="bg-[#F9FAFB]">
        <SectionContainer title="CEO Message">
          <div className="bg-[#FFFFFF] p-4 lg:py-14 lg:px-30 rounded-[40px] rounded-tl-xs flex flex-col gap-6">
            <div className="w-full flex items-center justify-between">
              <div className="space-x-2 flex items-center">
                <img
                  src={teamImg1}
                  className="size-16 rounded-full object-cover"
                  alt="img"
                />
                <div className="space-y-1">
                  <p className="text-[#1D1F1F] text-sm lg:text-xl font-medium">
                    Mahmoud Badia
                  </p>
                  <p className="text-[#666666] text-[10px] lg:text-base font-normal">
                    Executive Manager
                  </p>
                </div>
              </div>
              <img src={icon6} alt="" className="w-20" />
            </div>
            <div className="space-y-6">
              <p className="text-[#A5A5A5] text-xl font-normal">
                Dear Valued Visitor
              </p>
              <p className="text-[#1D1F1F] text-xl font-normal">
                Welcome to Sun Pyramids Tours! Our dedicated team of travel
                experts, with over 20 years of experience, is here to ensure
                your journey is both delightful and memorable.
              </p>
              <p className="text-[#1D1F1F] text-xl font-normal">
                Since our beginnings in 1970, we have grown into one of Egypt's
                leading travel companies, driven by our passion for excellence
                and customer satisfaction. With extensive experience in
                destinations worldwide, we are committed to exceeding your
                expectations and providing exceptional service tailored to your
                needs.
              </p>
              <p className="text-[#1D1F1F] text-xl font-normal">
                Thank you for choosing us to fulfill your travel dreams. We look
                forward to working with you and ensuring your experience with
                Sun Pyramids Tours is seamless and enjoyable.
              </p>
              <p className="text-[#A5A5A5] text-xl font-normal">Warm regards</p>
            </div>
          </div>
        </SectionContainer>
      </div>
      <FrequentlyAsked />
      <div className="bg-[#F9FAFB] py-16 container">
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
