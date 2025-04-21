import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionsWrapper from "./components/SectionsWrapper";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  return (
    <div className="relative">
      <SectionsWrapper>
        <SectionOne className="bg-white" />
        <SectionTwo className="bg-black" />
        <SectionThree className="bg-white" />
        <SectionFour className="bg-black" />
        <SectionFive className="h-[1200px] bg-black" />
      </SectionsWrapper>
    </div>
  );
}
