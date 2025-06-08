import { cn } from "@/utils/style";
import ImageSlider from "./ImageSlider";

interface InfoBoxProps {
  title: string;
  subTitle: string;
  description: string;
}

export default function InfoBox({
  title,
  subTitle,
  description,
}: InfoBoxProps) {
  return (
    <div
      className={cn(
        "flex scroll-mt-[120px] flex-col gap-[60px]",
        "max-md:gap-[30px]",
      )}
      id="link1"
    >
      <div className="flex flex-col gap-[20px]">
        <h2 className="text-[40px] max-lg:text-[36px]">
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
        <ImageSlider />
      </div>
      <div className="flex gap-[20px] max-md:hidden">
        <div className="aspect-[1/1.2] flex-1 bg-black" />
        <div className="aspect-[1/1.2] flex-1 bg-black" />
        <div className="aspect-[1/1.2] flex-1 bg-black" />
      </div>
    </div>
  );
}
