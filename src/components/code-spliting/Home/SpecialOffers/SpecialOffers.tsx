import icon1 from "@/assets/icon/discount-shape2.svg";
import PopularCard from "@/components/Cards/PopularCard";
import FooterContainer from "@/components/Layout Components/FooterContainer";
import SectionContainer from "@/components/Layout Components/sectionContainer";
import { data } from "@/FakeData/FakeData";
export default function SpecialOffers() {
  const filrerData = data.filter((item) => "priceAfterDiscount" in item);
  return (
    <div className="bg-[#F9FAFB]">
      <SectionContainer
        title="Special offers for you"
        decs="Find the right offer before it's too late"
        icon={icon1}
      >
        <div className="flex *:w-60 *:md:w-full overflow-x-scroll md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filrerData.map((card) => (
            <PopularCard key={card.id} cardData={card} isCount={true} />
          ))}
        </div>
        <FooterContainer href="/see-more-popular-destination" />
      </SectionContainer>
    </div>
  );
}
