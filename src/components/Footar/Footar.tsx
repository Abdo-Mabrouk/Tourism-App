import logo from "@/assets/icon/logofooter.svg";
import icon1 from "@/assets/icon/youtube.svg";
import icon2 from "@/assets/icon/twitter-x.svg";
import icon3 from "@/assets/icon/Linkedin.svg";
import icon4 from "@/assets/icon/facebook.svg";
import icon5 from "@/assets/icon/snapchat-fill.svg";
import icon6 from "@/assets/icon/discount-shape.svg";
import icon7 from "@/assets/icon/calling.svg";
import icon8 from "@/assets/icon/sms.svg";
import icon9 from "@/assets/icon/location.svg";
import { NavLink } from "react-router-dom";
function Footar() {
  return (
    <>
      <div className="bg-linear-to-t from-[#060606] to-[#000000db]">
        <footer className="footer bg-[url(/src/assets/bg2.svg)]  pt-14">
          <div className="container  grid grid-cols-12 gap-7">
            <div className="lg:col-span-5 md:col-span-12 col-span-12 space-y-5">
              <div className="flex flex-col p-3 justify-center items-start gap-10">
                <img
                  src={logo}
                  width={10}
                  height={10}
                  alt=""
                  className=" w-57.5 h-auto"
                />
                <div className=" space-y-10">
                  <p className=" text-base font-normal text-[#FFFFFF]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum mollis nunc a molestie dictum. Mauris venenatis,
                    felis scelerisque aliquet lacinia, nulla nisi venenatis
                    odio, id bland
                  </p>
                  <ul className="flex items-center justify-between md:justify-start md:gap-5 ">
                    <li>
                      <NavLink
                        to="#"
                        className="size-14 border text-white border-white rounded-lg flex justify-center items-center hover:bg-brand hover:scale-95 hover:border-brand hover:transition-colors duration-400"
                      >
                        <img
                          src={icon1}
                          width={24}
                          height={24}
                          alt="icon"
                          className="size-6"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className="size-14 border text-white border-white rounded-lg flex justify-center items-center hover:bg-brand hover:scale-95 hover:border-brand hover:transition-colors duration-400"
                      >
                        <img
                          src={icon2}
                          width={24}
                          height={24}
                          alt="icon"
                          className="size-6"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className="size-14 border text-white border-white rounded-lg flex justify-center items-center hover:bg-brand hover:scale-95 hover:border-brand hover:transition-colors duration-400"
                      >
                        <img
                          src={icon3}
                          width={24}
                          height={24}
                          alt="icon"
                          className="size-6"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className="size-14 border text-white border-white rounded-lg flex justify-center items-center hover:bg-brand hover:scale-95 hover:border-brand hover:transition-colors duration-400"
                      >
                        <img
                          src={icon4}
                          width={24}
                          height={24}
                          alt="icon"
                          className="size-6"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="#"
                        className="size-14 border text-white border-white rounded-lg flex justify-center items-center hover:bg-brand hover:scale-95 hover:border-brand hover:transition-colors duration-400"
                      >
                        <img
                          src={icon5}
                          width={24}
                          height={24}
                          alt="icon"
                          className="size-6"
                        />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12 space-y-8 ">
              <p className="text-[#666666] font-medium text-xl ">
                Sunpyramids NavLinks{" "}
              </p>
              <div className="flex flex-col gap-3">
                <NavLink to={""}>
                  <p className="font-normal w-fit text-base text-[#FFFFFF] relative hover:text-brand transition-all duration-300 after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:h-0.5 after:w-full after:start-0 after:bg-brand ">
                    Home
                  </p>
                </NavLink>
                <NavLink to={""}>
                  <p className="font-normal w-fit text-base text-[#FFFFFF] relative hover:text-brand transition-all duration-300 after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:h-0.5 after:w-full after:start-0 after:bg-brand ">
                    Egypt Tours
                  </p>
                </NavLink>
                <NavLink to={""}>
                  <p className="font-normal flex items-center gap-2 w-fit text-base text-[#FFFFFF] relative hover:text-brand transition-all duration-300 after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:h-0.5 after:w-full after:start-0 after:bg-brand ">
                    Special offer{" "}
                    <img
                      src={icon6}
                      width={20}
                      height={20}
                      alt="icon"
                      className="size-4"
                    />
                  </p>
                </NavLink>
                <NavLink to={""}>
                  <p className="font-normal w-fit text-base text-[#FFFFFF] relative hover:text-brand transition-all duration-300 after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:h-0.5 after:w-full after:start-0 after:bg-brand ">
                    Rent Car
                  </p>
                </NavLink>
                <NavLink to={""}>
                  <p className="font-normal w-fit text-base text-[#FFFFFF] relative hover:text-brand transition-all duration-300 after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:h-0.5 after:w-full after:start-0 after:bg-brand ">
                    About Us
                  </p>
                </NavLink>
                <NavLink to={""}>
                  <p className="font-normal w-fit text-base text-[#FFFFFF] relative hover:text-brand transition-all duration-300 after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:h-0.5 after:w-full after:start-0 after:bg-brand ">
                    Contact Us
                  </p>
                </NavLink>
                <NavLink to={""}>
                  <p className="font-normal w-fit text-base text-[#FFFFFF] relative hover:text-brand transition-all duration-300 after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:h-0.5 after:w-full after:start-0 after:bg-brand ">
                    Blogs
                  </p>
                </NavLink>
                <NavLink to={""}>
                  <p className="font-normal w-fit text-base text-[#FFFFFF] relative hover:text-brand transition-all duration-300 after:absolute after:-bottom-1 after:transition-all after:duration-300 hover:after:h-0.5 after:w-full after:start-0 after:bg-brand ">
                    FAQs
                  </p>
                </NavLink>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 space-y-8 ">
              <p className="text-[#666666] font-medium text-xl">Contact Info</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4 items-start">
                  <img
                    src={icon7}
                    width={20}
                    height={20}
                    alt="icon"
                    className=""
                  />
                  <div className="*:text-base *:font-normal *:text-[#FFFFFF] space-y-2">
                    <p className="">+20 109 588 8830 </p>
                    <p className="">+20 109 588 8835 </p>
                    <p className="">+20 233 846 779 </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src={icon8}
                    width={20}
                    height={20}
                    alt="icon"
                    className=""
                  />
                  <div className="*:text-base *:font-normal *:text-[#FFFFFF] space-y-2">
                    <p className="">Info@Sunpyramidstours.Com </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src={icon9}
                    width={20}
                    height={20}
                    alt="icon"
                    className=""
                  />
                  <div className="*:text-base *:font-normal *:text-[#FFFFFF] space-y-2">
                    <p className="">
                      Pyramids View Tower - Mansourieh Intersection with Faisal
                      - Above Tseppas Pastry - Fourth Floor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-8 mt-10 border-t text-[#FFFFFF] border-[#444444] flex flex-col gap-5 md:flex-row justify-between items-center">
            <p className="text-[14px] ">
              All rights reserved to sunpyramids company, Egypt ©2024 &copy;
            </p>
            <div className="*:text-[#FFFFFF] *:text-[14px] font-normal flex items-center gap-5 lg:gap-12 order-first md:order-last">
              <p className="">Privacy and Cookies</p>
              <p className="">Terms and Conditions</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footar;
