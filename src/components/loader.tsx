import { useState, useEffect } from 'react';
import gsap from 'gsap';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(".circle", { opacity: 0, scale: 0 });

    tl.to(".circle", {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    tl.to(".circle", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.2,
      delay: 0.01,
      ease: "power3.in",
      onComplete: () => {
        setIsLoaded(true);
      }
    });

  }, [onComplete]);

  if (isLoaded) return null;

  return (
    <div className="loader w-full h-full -z-50 fixed top-0 left-0 flex items-center justify-center">
      <div className="flex space-x-4">
        <div className="circle w-14 h-14 bg-white rounded-full transition-opacity opacity-0 ease-in duration-100"></div>
        <div className="circle w-14 h-14 bg-white rounded-full transition-opacity opacity-0 ease-in duration-100"></div>
        <div className="circle w-14 h-14 bg-white rounded-full transition-opacity opacity-0 ease-in duration-100"></div>
      </div>
    </div>
  );
};
