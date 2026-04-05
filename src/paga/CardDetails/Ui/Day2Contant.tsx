import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import img1 from '@/assets/Blogs-6.svg'
import img2 from '@/assets/icon/emojione-monotone_fork-and-knife.svg'
import img3 from '@/assets/icon/tabler_bed-filled.svg'

export default function Day2Contant() {
  return (
    <div className='space-y-5'>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="bg-amber-300! rounded-3xl!"
      >
        {[1,2,3,4,5,6,7,8,9].map(()=><SwiperSlide className='h-120! w-full!'><img src={img1} alt=""/></SwiperSlide>)}
        </Swiper>
      <div className="space-y-5">
        <p className="text-[#666666] text-sm font-normal">Breakfast at your hotel in Cairo and then met by your personal guide who will accompany you to Giza Plateau to visit one of the seven wonders of the ancient world:</p>
        <div className="space-y-2">
            <p className="text-[#1D1F1F] text-base font-medium">Giza Pyramids Complex</p>
            <p className="text-[#666666] text-sm font-normal">The Giza Pyramids Complex, is home to three of the most famous pyramids: the Great Pyramid of Khufu, the Pyramid of Khafre, and the Pyramid of Menkaure. Built between 2580 and 2500 BCE, these pyramids were constructed as tombs for the pharaohs and are renowned for their massive scale and precision. The complex also includes the Great Sphinx, a colossal statue with the body of a lion and the head of a pharaoh.</p>
        </div>
        <div className="space-y-2">
            <p className="text-[#1D1F1F] text-base font-medium">The Great Pyramid</p>
            <p className="text-[#666666] text-sm font-normal">The Great Pyramid, also known as the Pyramid of Khufu or Cheops, is the largest of the three pyramids in the Giza Pyramids Complex. Built around 2580-2560 BCE, it originally stood at 481 feet tall and was the tallest man-made structure for over 3,800 years. Constructed with millions of limestone blocks.</p>
        </div>
        <div className="space-y-2">
            <p className="text-[#1D1F1F] text-base font-medium">The Sphinx of Chephren</p>
            <p className="text-[#666666] text-sm font-normal">The Sphinx of Chephren, also known as the Great Sphinx of Giza, is a massive limestone statue located near the Giza Pyramids. Carved during the reign of Pharaoh Khafre (Chephren) around 2500 BCE, it features the body of a lion and the head of a pharaoh, believed to represent Khafre himself. The statue measures about 240 feet long and 66 feet high.</p>
        </div>
        <div className="space-y-2">
            <p className="text-[#1D1F1F] text-base font-medium">The Valley Temple</p>
            <p className="text-[#666666] text-sm font-normal">The Valley Temple, situated near the Great Sphinx and the pyramids at Giza, is an ancient Egyptian structure dating back to around 2500 BCE. Built for Pharaoh Khafre, it served as a place for mummification and ceremonial purification. The temple is renowned for its impressive architecture, including massive limestone blocks and granite pillars.</p>
        </div>
        <div className="space-y-2">
            <p className="text-[#1D1F1F] text-base font-medium">The Egyptian Museum</p>
            <p className="text-[#666666] text-sm font-normal">The Egyptian Museum, located in Cairo, is home to one of the largest and most comprehensive collections of ancient Egyptian artifacts in the world. Established in 1902, it houses over 120,000 items, including sculptures, jewelry, mummies, and papyrus scrolls.</p>
        </div>
        <div className="space-y-2">
            <p className="text-[#1D1F1F] text-base font-medium">The Hanging Church</p>
            <p className="text-[#666666] text-sm font-normal">The Hanging Church, also known as Saint Virgin Mary's Coptic Orthodox Church, is one of Cairo's oldest churches, dating back to the 3rd century. It is situated in the Coptic Christian district of Old Cairo, built above the ruins of an ancient Roman fortress. The church is renowned for its unique location, giving it the appearance of "hanging" above the ground, and its stunning architectural features, including intricate woodwork and ancient icons. </p>
        </div>
        <div className="space-y-2">
            <p className="text-[#1D1F1F] text-base font-medium">Ben Ezra Synagogue</p>
            <p className="text-[#666666] text-sm font-normal">The Ben Ezra Synagogue, located in Old Cairo, is one of the oldest and most historically significant synagogues in Egypt. Originally built in the 9th century, it was converted from an ancient church. The synagogue is famous for its Geniza, a storeroom where a vast collection of Jewish manuscripts was discovered, providing invaluable insights into medieval Jewish life and scholarship.</p>
        </div>
      </div>
      <ol className='ps-10 list-disc'>
        <caption className='-ms-10 flex items-center gap-2'>
            <img src={img2} className='size-5' alt="" />
            <p className="text-[#1D1F1F] text-base font-medium">Meals</p>
        </caption>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
      </ol>
      <ol className='ps-10 list-disc'>
        <caption className='-ms-10 flex items-center gap-2'>
            <img src={img3} className='size-5' alt="" />
            <p className="text-[#1D1F1F] text-base font-medium">Accommodation</p>
        </caption>
        <li>Pyramids Park 4 stars</li>

      </ol>
    </div>
  )
}
