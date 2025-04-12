import Link from "next/link";
import { cn } from "@/utils/style";

export default function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 left-0 z-[1000] w-full bg-white",
        "flex h-[72px] justify-between px-8",
      )}
    >
      <div className={"flex items-center"}>
        <Link href="/">
          <span className="h-[30px] w-[138px] bg-black">Logo</span>
        </Link>
      </div>
      <div className={"flex items-center"} />
    </header>
  );
}
