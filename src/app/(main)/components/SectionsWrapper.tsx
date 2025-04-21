"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { type PropsWithChildren } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SectionsWrapper({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      className="wrapper"
      root
      style={{ height: "100vh", overflowY: "auto", scrollSnapType: "start" }}
    >
      {children}
    </ReactLenis>
  );
}
