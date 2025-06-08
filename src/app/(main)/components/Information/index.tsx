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
          description="상품이 일상에서 어떤 모습으로 사용될 수 있을지 고객의 일상에서 더 나은 선택지는 무엇인지 가장 깊게 스토리텔링하는 커머스 플랫폼"
          subTitle="‘나의 일상에 이 상품이 있다면?’"
          title="고객의 더 나은 선택1"
        />
        <InfoBox
          description="상품이 일상에서 어떤 모습으로 사용될 수 있을지 고객의 일상에서 더 나은 선택지는 무엇인지 가장 깊게 스토리텔링하는 커머스 플랫폼"
          subTitle="‘나의 일상에 이 상품이 있다면?’"
          title="고객의 더 나은 선택2"
        />
      </div>
    </Section>
  );
}
