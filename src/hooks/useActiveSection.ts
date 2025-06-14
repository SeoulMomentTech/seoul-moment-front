import { useEffect, useState } from "react";

export function useActiveSection(ids: string[], threshold = 0.5) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top); // 상단 우선

        if (visible.length > 0) {
          setActiveId(visible[0].target.id); // 가장 상단의 id
        }
      },
      {
        rootMargin: "0px 0px -50% 0px", // 하단 margin을 줄여 하단 섹션 조기 감지 방지
        threshold,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, threshold]);

  return activeId;
}
