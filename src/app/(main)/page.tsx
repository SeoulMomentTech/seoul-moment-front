import CompanyIntro from "./components/CompanyIntro";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionSix from "./components/SectionSix";
import SectionsWrapper from "./components/SectionsWrapper";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  return (
    <div className="relative">
      <SectionsWrapper>
        <SectionOne className="h-[calc(100vh-72px)] bg-white" />
        <CompanyIntro />
        <SectionTwo />
        <SectionThree className="bg-black" />
        <SectionFour className="bg-white" />
        <SectionFive className="bg-black" />
        <SectionSix className="h-[1200px] bg-black max-md:h-[900px]" />
      </SectionsWrapper>
    </div>
  );
}
