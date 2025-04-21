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
  base: "relative h-[150px] bg-amber-200 w-0 scale-0 rounded-lg mx-1 opacity-0 transition-all duration-700",
  word: "inline-block",
  hover: "hover:w-[300px]",
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
        className,
      )}
    >
      <div className="contents text-[200px] leading-none font-bold">
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
              className="group flex items-center"
              key={`word3-${w}-${idx + 1}`}
              onMouseEnter={handleMouseEnter(idx)}
            >
              <span>{w}</span>
              {idx < 4 && (
                <div
                  className={cn(
                    "video-container",
                    styleMap.base,
                    styleMap.hover,
                    idx > 0 &&
                      idx < CONTENTS["word3"].length - 1 &&
                      "w-[150px] scale-100 opacity-100",
                    idx === active &&
                      "w-[150px] scale-100 opacity-100 group-hover:w-[150px] group-hover:scale-100 group-hover:opacity-100",
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
