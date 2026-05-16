import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export function useLocomotiveScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.09,
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      },
    });

    const onAnchor = (e: Event) => {
      const a = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      scroll.scrollTo(target as HTMLElement, { duration: 1.2 } as any);
    };
    document.addEventListener("click", onAnchor);

    return () => {
      document.removeEventListener("click", onAnchor);
      scroll.destroy();
    };
  }, [enabled]);
}
