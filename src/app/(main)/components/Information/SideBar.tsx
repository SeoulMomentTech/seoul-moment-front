import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/style";

export default function SideBar() {
  const activeId = useActiveSection(["link1", "link2"]);

  return (
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
        더 빠른 트렌드와 더 나은 서비스
      </a>
      <a
        className={cn(
          "text-slate-300 hover:underline",
          activeId === "link2" && "font-bold text-black",
        )}
        href="#link2"
      >
        다양한 느낌과 다양한 상품
      </a>
    </div>
  );
}
