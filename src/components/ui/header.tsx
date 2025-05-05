import Link from "next/link";
import { cn } from "@/utils/style";

export default function Header() {
  return (
    <header
      className={cn(
        "z-header sticky top-0 left-0 w-full bg-white",
        "flex h-[72px] justify-between px-8",
        "max-md:h-[48px] max-md:px-4",
      )}
    >
      <div className={"flex items-center"}>
        <Link href="/">
          <span className="h-[30px] w-[138px] bg-black">Logo</span>
        </Link>
      </div>
      <nav className="flex items-center">
        <ul className="flex h-full items-center">
          <Link href="/">
            <li className="px-[12px]">Home</li>
          </Link>
          <li className="px-[12px]">About</li>
          <li className="px-[12px]">Product</li>
        </ul>
      </nav>
    </header>
  );
}
