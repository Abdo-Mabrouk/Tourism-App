import icon1 from '@/assets/icon/arrow-down.svg'
export default function FindYourTripTap() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="py-4 px-8 border border-[#EEEEEE]  rounded-full flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-4">
            <p className="font-normal text-[14px] text-[#444444]">Where?</p>
            <p className="font-medium text-[16px] text-[#A5A5A5]">Choose your favorite place in Egypt</p>
          </div>
          <img src={icon1} alt="" className="size-6"/>
        </div>
        <div className="py-4 px-8 border border-[#EEEEEE]  rounded-full flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-4">
            <p className="font-normal text-[14px] text-[#444444]">How long?</p>
            <p className="font-medium text-[16px] text-[#A5A5A5]">How many days do you stay in Egypt</p>
          </div>
          <img src={icon1} alt="" className="size-6"/>
        </div>
        <button className="font-medium text-base text-white bg-brand py-6 rounded-full w-full lg:w-100! block">Search</button>
      </div>
    </div>
  )
}
