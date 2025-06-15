import type { ReactNode } from "react";
import { cn } from "@/utils/style";

interface CardProps {
  title: ReactNode;
  subTitle?: ReactNode;
  description: ReactNode;
}

export default function Card({ title, subTitle, description }: CardProps) {
  return (
    <div className="flex justify-end">
      <div
        className={cn(
          "flex min-h-[600px] w-[400px] flex-col justify-end text-white",
          "max-sm:min-h-[360px]",
        )}
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <h3 className={cn("text-[32px] font-bold", "max-sm:text-[24px]")}>
              {title}
            </h3>
            <p
              className={cn("text-[18px] text-gray-200", "max-sm:text-[14px]")}
            >
              {subTitle}
            </p>
          </div>
          <div className={cn("min-h-[155px]", "max-sm:min-h-auto")}>
            <p className={cn("text-[24px]", "max-sm:text-[16px]")}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
