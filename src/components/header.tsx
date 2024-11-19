
"use client";
import { FC, useState, useEffect, useRef } from "react";
import { useLenis } from "@/hooks/useLenis";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";

interface HeaderProps {
  toggleNav?: () => void;
  bgColor: string;
  textColor: string;
}

export const Header: FC<HeaderProps> = ({ toggleNav, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const lenisRef = useLenis();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (toggleNav) toggleNav();
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useGsapAnimation(isOpen, linksRef, navRef);

  useEffect(() => {
    if (typeof window === "undefined") return; 

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault(); 

    const section = document.getElementById(targetId);
    if (section && lenisRef.current) {
      lenisRef.current.scrollTo(section, { offset: -60, duration: 1 });
    }
  };

  return (
    <header className="w-full fixed top-0 left-0">
      <div className="w-full flex items-center p-6">
        <div className="flex items-center space-x-8 w-full">
          <div className="text-3xl font-semibold group">
            <h1 className="">W</h1>
          </div>

          <nav className="hidden lg:block fixed top-0 left-0 h-full pt-56 text-xl">
            <a
              href="#intro"
              onClick={(e) => scrollToSection(e, "intro")}
              className={`block hover:opacity-100 w-fit ${activeSection === "intro" ? "text-foreground" : "text-foreground opacity-50"}`}
            >
              Intro
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "work")}
              className={`block py-2 hover:opacity-100 w-fit ${activeSection === "work" ? "text-foreground" : "text-foreground opacity-50"}`}
            >
              Projets
            </a>
            <a
              href="#background"
              onClick={(e) => scrollToSection(e, "background")}
              className={`block hover:opacity-100 w-fit ${activeSection === "background" ? "text-foreground" : "text-foreground opacity-50"}`}
            >
              Parcours
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className={`block py-2 hover:opacity-100 w-fit ${activeSection === "about" ? "text-foreground" : "text-foreground opacity-50"}`}
            >
              À propos
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`block hover:opacity-100 w-fit ${activeSection === "contact" ? "text-foreground" : "text-foreground opacity-50"}`}
            >
              Contact
            </a>
          </nav>
        </div>

        <button
          ref={hamburgerRef}
          className={`hamburger lg:hidden relative w-8 h-6 flex flex-col justify-between items-center ${
            isOpen ? "open" : ""
          }`}
          onClick={toggleNavbar}
        >
        </button>
      </div>

      <div
        ref={navRef}
        className={`${
          isOpen ? "opacity-100 block h-screen overflow-hidden" : "opacity-0 hidden"
        } fixed top-0 left-0 w-full pt-60 -z-10 p-4 overflow-hidden`}
        style={{
          backgroundColor: bgColor,
        }}
      >
        <nav ref={linksRef} className="flex flex-col space-y-4 px-4 py-4 text-xl sm:-z-40">
          <a
            href="#intro"
            className={`block opacity-0 transform translate-y-6 w-fit ${
              activeSection === "intro" ? "text-foreground" : "text-gray-400"
            }`}
            onClick={(e) => { scrollToSection(e, "intro"); closeMenu(); }}
            >
            Intro
          </a>
          <a
            href="#work"
            className={`block py-2 opacity-0 transform translate-y-6 w-fit ${
              activeSection === "work" ? "text-foreground" : "text-gray-400"
            }`}
            onClick={(e) => { scrollToSection(e, "work"); closeMenu(); }}
          >
            Projets
          </a>
          <a
            href="#background"
            className={`block opacity-0 transform translate-y-6 w-fit ${
              activeSection === "background" ? "text-foreground" : "text-gray-400"
            }`}
            onClick={(e) => { scrollToSection(e, "background"); closeMenu(); }}
          >
            Parcours
          </a>
          <a
            href="#about"
            className={`block py-2  opacity-0 transform translate-y-6 w-fit ${
              activeSection === "about" ? "text-foreground" : "text-gray-400"
            }`}
            onClick={(e) => { scrollToSection(e, "about"); closeMenu(); }}
          >
            À propos
          </a>
          <a
            href="#contact"
            className={`block opacity-0 transform translate-y-6 w-fit ${
              activeSection === "contact" ? "text-foreground" : "text-gray-400"
            }`}
            onClick={(e) => { scrollToSection(e, "contact"); closeMenu(); }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

