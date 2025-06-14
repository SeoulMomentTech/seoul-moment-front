import { cn } from "@/utils/style";

export default function Footer() {
  return (
    <footer
      className={cn(
        "flex flex-col items-center justify-center",
        "flex-col pt-16 pb-12",
        "border-t border-t-slate-200 bg-white",
        "max-md:min-h-[200px] max-md:pt-12 max-md:pb-8 max-md:text-[13px]",
      )}
    >
      <div>首爾映像有限公司 （Seoul Moment）｜統一編號: 00148871</div>
      <div>負責人: 朴佑濬 ｜ 地址: 台北市大安區忠孝東路四段231號10樓之2</div>
      <div>
        © {new Date().getFullYear()} Seoul Moment. All Rights Reserved.
      </div>
    </footer>
  );
}
