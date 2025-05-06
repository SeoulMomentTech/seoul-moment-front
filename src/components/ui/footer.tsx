import { cn } from "@/utils/style";

export default function Footer() {
  return (
    <footer
      className={cn(
        "flex min-h-[400px] flex-col pt-16 pb-12",
        "border-t border-t-slate-200 bg-white",
        "max-md:min-h-[200px] max-md:pt-12 max-md:pb-8",
      )}
    >
      <div />
    </footer>
  );
}
