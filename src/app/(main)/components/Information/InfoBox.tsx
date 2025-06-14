import Image from "next/image";
import { useId } from "react";
import { cn } from "@/utils/style";
import ImageSlider from "./ImageSlider";

interface InfoBoxProps {
  title: string;
  subTitle: string;
  description: string;
  images?: string[];
}

export default function InfoBox({
  title,
  subTitle,
  description,
  images = [],
}: InfoBoxProps) {
  const id = useId();

  return (
    <div
      className={cn(
        "flex scroll-mt-[120px] flex-col gap-[60px]",
        "max-md:gap-[30px]",
      )}
      id="link1"
    >
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[40px] max-lg:text-[36px] max-md:text-[30px]">
          <b>{title}</b>
        </h2>
        <div>
          <h4>
            <b>{subTitle}</b>
          </h4>
          <p>{description}</p>
        </div>
      </div>

      <div className="info-box relative hidden max-md:block">
        <ImageSlider images={images} />
      </div>
      <div className="flex gap-[20px] max-md:hidden">
        {images.map((img) => (
          <div className="relative aspect-[1/1.2] flex-1" key={`${img}-${id}`}>
            <Image alt="" fill src={img} />
          </div>
        ))}
      </div>
    </div>
  );
}
