import BlogsCard from "@/components/Cards/BlogsCard";
import { data } from "@/FakeData/FakeData";

export default function BlogsDetails() {
  return (
    <div>
      <div className=" bg-[url(/src/assets/bg-3.svg)] bg-cover">
        <div className=" bg-linear-to-t from-[#000000] via-[#000000AF] to-[#00000000] pb-10 pt-40">
          <div className=" container space-y-2">
            <p className="text-[#FFFFFF] text-2xl lg:text-4xl font-bold text-center">
              Blogs
            </p>
            <p className="text-[#FFFFFF] text-3xl lg:text-5xl font-bold text-center">
              Museums
            </p>
          </div>
        </div>
      </div>
      <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10 pb-25 ">
        {data.map((img) => (
          <BlogsCard key={img.id} cardData={img} />
        ))}
      </div>
    </div>
  );
}
