import icon1 from "@/assets/icon/location3.svg";
import icon2 from "@/assets/icon/sms3.svg";
import icon3 from "@/assets/icon/call.svg";
import icon4 from "@/assets/icon/youtube Icon.svg";
import icon5 from "@/assets/icon/twitter-x Icon.svg";
import icon6 from "@/assets/icon/linkedin Icon.svg";
import icon7 from "@/assets/icon/facebook IconAC.svg";
import icon8 from "@/assets/icon/snapchat Icon.svg";
import FrequentlyAsked from "@/components/code-spliting/Home/FrequentlyAsked/FrequentlyAsked";
import Input from "@/components/inputs/input";
export default function ContactPage() {
  const dataMdia = [
    { id: 1, icon: icon4, name: "youtube" },
    { id: 2, icon: icon5, name: "twitter-x" },
    { id: 3, icon: icon6, name: "linkedin" },
    { id: 4, icon: icon7, name: "facebook" },
    { id: 5, icon: icon8, name: "snapchat" },
  ];
  return (
    <>
      <div className=" bg-[url(/src/assets/Contact-Us-bg.svg)] bg-cover">
        <div className=" space-y-5 bg-linear-to-t from-[#000000] via-[#000000AF] to-[#00000000] p-10 pt-50">
          <p className="text-[#FFFFFF] text-3xl lg:text-5xl font-bold text-center">
            Contact Us
          </p>
          <p className="text-[#FFFFFF] text-2xl lg:text-4xl font-medium text-center">
            Call Us, Write Us, Or Knock on Our Door
          </p>
        </div>
      </div>
      <div className="container py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        <div className=" p-8 rounded-[48px] bg-[#F9FAFB] group hover:bg-brand-blue/20 transition-colors duration-300 flex-col flex gap-6 items-center">
          <div className=" size-20.75 rounded-4xl bg-white flex items-center justify-center">
            <img src={icon1} alt="icon" className="size-10" />
          </div>
          <p className="font-medium text-3xl text-[#1D1F1F] group-hover:text-brand-blue duration-300 transition-colors">
            Our Address
          </p>
          <p className="font-normal text-xl text-[#444444] text-center group-hover:text-brand-blue duration-300 transition-colors">
            Pyramids View Tower - Mansourieh Intersection with Faisal - Above
            Tseppas Pastry - Fourth Floor
          </p>
        </div>
        <div className="flex flex-col gap-6 lg:justify-between">
          <div className="text-[#444444] bg-[#F9FAFB] rounded-4xl py-5 px-6  hover:text-brand-blue hover:bg-brand-blue/20 transition-colors duration-300 flex items-center justify-between ">
            <p className=" font-medium text-xl">+20 109 588 8830</p>
            <div className="size-14 bg-white rounded-full flex items-center justify-center">
              <img src={icon3} alt="" />
            </div>
          </div>
          <div className="text-[#444444] bg-[#F9FAFB] rounded-4xl py-5 px-6  hover:text-brand-blue hover:bg-brand-blue/20 transition-colors duration-300 flex items-center justify-between ">
            <p className=" font-medium text-xl">+20 109 588 8831</p>
            <div className="size-14 bg-white rounded-full flex items-center justify-center">
              <img src={icon3} alt="" />
            </div>
          </div>
          <div className="text-[#444444] bg-[#F9FAFB] rounded-4xl py-5 px-6  hover:text-brand-blue hover:bg-brand-blue/20 transition-colors duration-300 flex items-center justify-between ">
            <p className=" font-medium text-xl">+20 109 588 8835</p>
            <div className="size-14 bg-white rounded-full flex items-center justify-center">
              <img src={icon3} alt="" />
            </div>
          </div>
        </div>
        <div className=" p-8 rounded-[48px] bg-[#F9FAFB] flex-col group hover:bg-brand-blue/20 transition-colors duration-300 flex gap-6 items-center">
          <div className=" size-20.75 rounded-4xl bg-white flex items-center justify-center">
            <img src={icon2} alt="icon" className="size-10" />
          </div>
          <p className="font-medium text-3xl text-[#1D1F1F] group-hover:text-brand-blue duration-300 transition-colors">
            Email Address
          </p>
          <p className="font-normal text-xl text-[#444444] text-center group-hover:text-brand-blue duration-300 transition-colors">
            info@sunpyramidstours.com
          </p>
        </div>
      </div>
      <div className="container py-18 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="bg-linear-to-t from-[#b9b9b9db] to-[#ffffff] p-8 rounded-4xl ">
          <div className="space-y-8 bg-[url(/src/assets/bg2.svg)]">
            <p className="text-[#1D1F1F] text-3xl font-medium text-center">
              Connect with Us Today
            </p>
            <form action="" className="space-y-5">
              <Input className="focus:ring-[#D3DDF8]!" label="full name" />
              <Input className="focus:ring-[#D3DDF8]!" label="phone" />
              <Input
                className="focus:ring-[#D3DDF8]!"
                label="Speaking language"
              />
              <Input
                className="focus:ring-[#D3DDF8]!"
                label="Email (Optional)"
              />
              <textarea
                name=""
                id=""
                rows={5}
                placeholder="Write Us...."
                className={`peer cursor-pointer w-full rounded-2xl border-2 text-base text-[#1D1F1F] font-medium border-brand-blue bg-white p-4 pt-5 focus:outline-none focus:ring-3 focus:ring-[#D3DDF8]`}
              ></textarea>
              <button className="btn1 bg-brand hover:bg-brand text-white w-full py-3 border-0">
                Send a Message
              </button>
            </form>
          </div>
        </div>
        <div className="rounded-4xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27633.66220158068!2d31.21415064401479!3d30.03089645096038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2LTYsdmD2Kkg2LPZhiDYqNix2KfZhdiv2LIg2KjZgdmK2LXZhA!5e0!3m2!1sar!2seg!4v1770758524921!5m2!1sar!2seg"
            className="w-full h-175"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="container pb-18 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-8">
        {dataMdia.map((card, index) => {
          const isLast = index === dataMdia.length - 1;

          return (
            <div
              key={card.id}
              className={`
          py-4 px-2 lg:px-8 rounded-2xl border border-[#CCCCCC]
          hover:bg-brand transition-colors duration-300
          cursor-pointer flex items-center justify-center gap-2
          ${isLast ? "col-span-2 lg:col-span-1" : " "}
        `}
            >
              <img
                src={card.icon}
                alt={`icon to ${card.name}`}
                className="size-6"
              />
              <p className="text-[#272333] text-base font-normal capitalize">
                {card.name}
              </p>
            </div>
          );
        })}
      </div>
      <FrequentlyAsked />
      <div className="container py-18">
        <div className="py-18 p-4 lg:p-14 space-y-12 bg-brand-blue rounded-4xl bg-[url(/src/assets/pattren.svg)]">
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
    </>
  );
}
