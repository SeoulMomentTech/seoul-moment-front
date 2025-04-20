"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { PropsWithChildren } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SectionsWrapper({ children }: PropsWithChildren) {
  return children;
}
