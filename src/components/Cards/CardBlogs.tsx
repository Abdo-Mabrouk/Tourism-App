interface dataCardPros {
  id: number;
  img: string;
  caty: string;
  Blogs: string;
}
export default function CardBlogs({ dataCard }: { dataCard: dataCardPros }) {
  return (
    <div className="h-56 rounded-2xl overflow-hidden relative group cursor-pointer">
      <img
        src={dataCard.img}
        alt={dataCard.caty}
        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-300"
      />
      <div className="group-hover:pt-6 transition-all duration-300   absolute bottom-0 p-3 bg-linear-to-t from-[#000000dc] to-[#00000000] w-full">
        <p className="text-2xl text-start font-medium text-[#FFFFFF] capitalize">
          {dataCard.caty}
        </p>
        <p className="text-[18px] text-start font-medium text-[#FFFFFF] capitalize">
          {dataCard.Blogs}
        </p>
      </div>
    </div>
  );
}
