import AboutUs from "@/components/code-spliting/Home/AboutUs/AboutUs";
import ContactMe from "@/components/code-spliting/Home/ContactMe/ContactMe";
import FrequentlyAsked from "@/components/code-spliting/Home/FrequentlyAsked/FrequentlyAsked";
import GalleryExciting from "@/components/code-spliting/Home/GalleryExciting/GalleryExciting";
import HeroSection from "@/components/code-spliting/Home/HeroSection/HeroSection";
import HighlightsEgypt from "@/components/code-spliting/Home/HighlightsEgypt/HighlightsEgypt";
import HowWorks from "@/components/code-spliting/Home/HowWorks/HowWorks";
import MakeYourTrip from "@/components/code-spliting/Home/MakeYourTrip/MakeYourTrip";
import OurTravelBlogs from "@/components/code-spliting/Home/OurTravelBlogs/OurTravelBlogs";
import PopularDestination from "@/components/code-spliting/Home/PopularDestination/PopularDestination";
import SpecialOffers from "@/components/code-spliting/Home/SpecialOffers/SpecialOffers";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <PopularDestination />
      <MakeYourTrip />
      <SpecialOffers/>
      <HowWorks/>
      <HighlightsEgypt/>
      <GalleryExciting/>
      <AboutUs/>
      <OurTravelBlogs/>
      <FrequentlyAsked/>
      <ContactMe/>
    </div>
  );
}






