"use client";

import Section from "@/components/ui/section";
import { cn } from "@/utils/style";

interface Props {
  className?: string;
}

export default function Ending({ className }: Props) {
  return (
    <>
      <Section
        className={cn(
          "section-five flex flex-col border-t border-t-slate-200",
          className,
        )}
      >
        <div
          className={cn(
            "content-box h-full w-full bg-white py-[100px]",
            "flex flex-col items-center justify-center font-bold",
            "max-md:py-0",
          )}
        >
          <p
            className={cn(
              "text-[10rem] leading-[10rem]",
              "max-xl:text-[5rem] max-xl:leading-[5rem]",
              "max-md:text-[2.5rem] max-md:leading-[2.5rem]",
            )}
          >
            MAKE YOUR
          </p>
          <p
            className={cn(
              "text-[10rem] leading-[10rem]",
              "max-xl:text-[5rem] max-xl:leading-[5rem]",
              "max-md:text-[2.5rem] max-md:leading-[2.5rem]",
            )}
          >
            SEOUL HERE
          </p>
        </div>
      </Section>
    </>
  );
}
