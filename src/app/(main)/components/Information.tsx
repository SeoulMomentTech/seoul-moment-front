"use client";

import Section from "@/components/ui/section";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/style";

export default function Information() {
  const activeId = useActiveSection(["link1", "link2"]);

  return (
    <Section
      className={cn(
        "relative",
        "mx-auto max-w-[2000px] py-[100px] pr-[140px] pl-[40px]",
        "flex h-auto justify-center",
        "max-lg:px-[40px] max-lg:py-[50px]",
      )}
    >
      <div
        className={cn(
          "sticky top-[100px] inline-flex flex-col gap-[12px]",
          "h-fit min-w-[220px]",
          "max-lg:hidden",
        )}
      >
        <a
          className={cn(
            "text-slate-300 hover:underline",
            (activeId === "link1" || activeId === "") && "font-bold text-black",
          )}
          href="#link1"
        >
          Link1
        </a>
        <a
          className={cn(
            "text-slate-300 hover:underline",
            activeId === "link2" && "font-bold text-black",
          )}
          href="#link2"
        >
          Link2
        </a>
      </div>
      <div className="flex flex-1 flex-col gap-[120px]">
        <div
          className={cn("flex scroll-mt-[120px] flex-col gap-[60px]")}
          id="link1"
        >
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[40px] max-lg:text-[36px]">
              <b>고객의 더 나은 선택1</b>
            </h2>
            <div>
              <h4>
                <b>‘나의 일상에 이 상품이 있다면?’</b>
              </h4>
              <p>
                상품이 일상에서 어떤 모습으로 사용될 수 있을지 고객의 일상에서
                더 나은 선택지는 무엇인지 가장 깊게 스토리텔링하는 커머스 플랫폼
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="aspect-[1/1.2] flex-1 bg-black" />
            <div className="aspect-[1/1.2] flex-1 bg-black" />
            <div className="aspect-[1/1.2] flex-1 bg-black" />
          </div>
        </div>
        <div
          className={cn("flex scroll-mt-[100px] flex-col gap-[60px]")}
          id="link2"
        >
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[40px] max-lg:text-[36px]">
              <b>고객의 더 나은 선택2</b>
            </h2>
            <div>
              <h4>
                <b>‘나의 일상에 이 상품이 있다면?’</b>
              </h4>
              <p>
                상품이 일상에서 어떤 모습으로 사용될 수 있을지 고객의 일상에서
                더 나은 선택지는 무엇인지 가장 깊게 스토리텔링하는 커머스 플랫폼
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="aspect-[1/1.2] flex-1 bg-black" />
            <div className="aspect-[1/1.2] flex-1 bg-black" />
            <div className="aspect-[1/1.2] flex-1 bg-black" />
          </div>
        </div>
      </div>
    </Section>
  );
}
