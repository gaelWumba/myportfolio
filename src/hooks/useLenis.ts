// hooks/useLenis.ts
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return lenisRef;
};
