import CardSlider from "./components/CardSlider";
import CompanyIntro from "./components/CompanyIntro";
import Ending from "./components/Ending";
import HeroSlogan from "./components/HeroSlogan";
import Information from "./components/Information";
import Landing from "./components/Landing";
import SectionsWrapper from "./components/SectionsWrapper";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  return (
    <div className="relative">
      <SectionsWrapper>
        <Landing />
        <HeroSlogan className="h-[calc(100vh-72px)] bg-white" />
        <CompanyIntro />
        <SectionTwo />
        <Information />
        <CardSlider className="bg-white" />
        <Ending className="h-[1200px] bg-black max-md:h-[900px]" />
      </SectionsWrapper>
    </div>
  );
}
