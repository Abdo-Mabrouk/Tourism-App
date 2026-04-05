import PopularCard from "@/components/Cards/PopularCard";
import { data } from "@/FakeData/FakeData";

export default function NileCruisesTap() {
  return (
    <>
      <div className="flex *:w-60 *:md:w-full overflow-x-scroll md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data
          .filter((trip) => trip.excursions === "Nile Cruises")
          .slice(0, 8)
          .map((card) => (
            <PopularCard key={card.id} cardData={card} />
          ))}
      </div>
    </>
  );
}
