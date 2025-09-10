"use client";

import { useRef, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const HEADER_OFFSET = 88;

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      autoRaf: true,
      duration: isMobile ? 0.8 : 1.0,          // lebih natural
      smoothWheel: true,
      // smoothTouch: true,      // aktifkan biar mobile mulus
      syncTouch: true,
      touchMultiplier: 1.2,   // lebih kalem, cocok mobile
    });

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const hash = target.getAttribute("href")!;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -HEADER_OFFSET });
    };
    document.addEventListener("click", handleClick);

    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) lenis.scrollTo(el as HTMLElement, { immediate: true, offset: -HEADER_OFFSET });
    }

    return () => {
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return (
    // gunakan h-screen/min-h-dvh agar tinggi viewport mobile benar
    <div
      ref={wrapperRef}
      className="h-full w-full overflow-hidden [touch-action:pan-y]"
    >
      <div ref={contentRef} className="min-h-full w-full">
        {children}
      </div>
    </div>
  );
}
