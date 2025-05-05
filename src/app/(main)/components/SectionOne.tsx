"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

interface Props {
  className?: string;
}

const CONTENTS = { word1: "START", word2: "YOUR", word3: "BRAND" };

const styleMap = {
  base: "relative h-[150px] bg-amber-200 rounded-lg mx-1 opacity-0 transition-all duration-700 max-xl:h-[80px] max-md:h-[45px] ",
  word: "inline-block max-md:text-[50px] max-sm:text-[40px]",
  hover: "max-xl:hover:w-[160px] hover:w-[300px]",
};

export default function SectionOne({ className }: Props) {
  const [active, setActive] = useState(0);

  useGSAP(() => {
    gsap.timeline().from(".section-one div", {
      duration: 1,
      opacity: 0,
      ease: "power4",
    });
    gsap.from("span", {
      duration: 1.5,
      yPercent: 100,
      opacity: 0,
      ease: "power4",
      stagger: 0.01,
    });
  });

  const handleMouseEnter = (idx: number) => () => {
    if (idx !== 0) return;

    setActive(idx);
  };

  return (
    <Section
      className={cn(
        "section-one flex flex-col items-center justify-center",
        "pb-[72px] max-md:pb-0",
        className,
      )}
    >
      <div
        className={cn(
          "contents text-[10rem] leading-none font-bold",
          "max-xl:text-[5rem]",
        )}
      >
        <div className="flex overflow-hidden text-center">
          {CONTENTS["word1"].split("").map((w, idx) => (
            <span className={styleMap.word} key={`word1-${w}-${idx + 1}`}>
              {w}
            </span>
          ))}
          <span className="w-[42px]" />
          {CONTENTS["word2"].split("").map((w, idx) => (
            <span className={styleMap.word} key={`word2-${w}-${idx + 1}`}>
              {w}
            </span>
          ))}
        </div>
        <div className="flex items-center overflow-hidden text-center">
          {CONTENTS["word3"].split("").map((w, idx) => (
            <div
              className={cn("flex items-center")}
              key={`word3-${w}-${idx + 1}`}
              onMouseEnter={handleMouseEnter(idx)}
            >
              <span className={styleMap.word}>{w}</span>
              {idx < 4 && (
                <div
                  className={cn(
                    "video-container",
                    styleMap.base,
                    styleMap.hover,
                    (idx == 0 || idx < CONTENTS["word3"].length - 1) && "w-0",
                    idx > 0 &&
                      idx < CONTENTS["word3"].length - 1 &&
                      "w-[150px] scale-100 opacity-100 max-xl:w-[80px] max-md:w-[45px]",
                    idx === active &&
                      "w-[150px] scale-100 opacity-100 hover:opacity-100 max-xl:w-[80px] max-xl:hover:w-[160px] max-md:w-[45px]",
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
