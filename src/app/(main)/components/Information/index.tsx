"use client";

import Section from "@/components/ui/section";
import { cn } from "@/utils/style";
import InfoBox from "./InfoBox";
import SideBar from "./SideBar";

export default function Information() {
  // todo: lg or md 사이즈인 경우 이미지 슬라이더 적용

  return (
    <Section
      className={cn(
        "relative",
        "mx-auto max-w-[2000px] py-[100px] pr-[140px] pl-[40px]",
        "flex h-auto justify-center",
        "max-lg:px-[40px]",
      )}
    >
      <SideBar />

      <div className="flex flex-1 flex-col gap-[120px]">
        <InfoBox
          description="한국의 트렌디 패션, 뷰티, 라이프스타일을 더욱 빠르게 즐길 수 있는 글로벌 감성 플렛폼."
          images={[
            "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226610/samples/look-up.jpg",
            "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226609/samples/balloons.jpg",
            "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226602/samples/landscapes/girl-urban-view.jpg",
          ]}
          subTitle={`"서울의 느낌을 그대로"`}
          title="더 빠른 트렌드와 더 나은 서비스"
        />
        <InfoBox
          description="남을 따라가는것이 아닌, 일상 속 자신만의 트렌드를 만들어가는 스토리텔링 커머스 플렛폼."
          images={[
            "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226610/samples/look-up.jpg",
            "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226609/samples/balloons.jpg",
            "https://res.cloudinary.com/dumqfde1s/image/upload/v1745226602/samples/landscapes/girl-urban-view.jpg",
          ]}
          subTitle={`“나에게 필요한, 나를 위한 상품들”`}
          title="다양한 느낌과 다양한 상품"
        />
      </div>
    </Section>
  );
}
