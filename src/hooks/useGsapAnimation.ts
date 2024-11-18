import { useEffect } from "react";
import gsap from "gsap";

export const useGsapAnimation = (isOpen: boolean, linksRef: React.RefObject<HTMLDivElement>, navRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const links = linksRef.current?.children;
    if (links) {
      if (isOpen) {
        gsap.to(links, {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(navRef.current, {
          opacity: 1,
          duration: 0.2,
          delay: 0,
        });
      } else {
        gsap.to(links, {
          opacity: 0,
          y: 20,
          stagger: 0.03,
          duration: 0.2,
          ease: "power3.in",
          onComplete: () => {
            gsap.to(navRef.current, {
              opacity: 0,
              duration: 0.1,
              delay: 0,
            });
          },
        });
      }
    }
  }, [isOpen, linksRef, navRef]);
};
