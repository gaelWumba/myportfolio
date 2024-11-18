

'use client';

import { useEffect, useState } from "react";
import { Loader } from "@/components/loader";
import { Header } from "@/components/header";
import { Intro } from "@/components/intro";
import { Work } from "@/components/work";
import { Background } from "@/components/background";
import { Background2 } from "@/components/background2";
import { About } from "@/components/about";
import { About2 } from "@/components/about2";
import { About3 } from "@/components/about3";
import { Contact } from "@/components/contact";
import { ColorPicker } from "@/components/colorPicker";

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");
  const [textColor, setTextColor] = useState<string>("#000000");

  const handleLoaderComplete = () => setLoading(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const savedBgColor = localStorage.getItem("bgColor");
    const savedTextColor = localStorage.getItem("textColor");
    if (savedBgColor) {
      setBgColor(savedBgColor);
    }
    if (savedTextColor) {
      setTextColor(savedTextColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("textColor", textColor);
  }, [bgColor, textColor]);

  return (
    <main
      className="min-h-screen transition-colors duration-500 ease-in-out"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <Loader onComplete={handleLoaderComplete} />
      <Header 
        toggleNav={toggleNav}
        bgColor={bgColor}
        textColor={textColor}  
      />
      <section id="intro" className="h-screen">
        <Intro isNavVisible={isNavVisible} />
      </section>
      <section id="work" className="h-full">
        <Work textColor={textColor} bgColor={bgColor} isOpen={isNavVisible} />
      </section>
      <div className="h-10"></div>
      <section id="background" className="h-full">
        <Background textColor={textColor} />
      </section>
      <section id="background2" className="h-full">
        <Background2 />
      </section>
      <section id="about" className="h-full">
        <About textColor={textColor} />
      </section>
      <section id="about2" className="h-full">
        <About2 />
      </section>
      <section id="about3" className="h-full">
        <About3 />
      </section>
      <section id="contact" className="h-screen">
        <Contact textColor={textColor} bgColor={bgColor} isOpen={isNavVisible} />
      </section>
      <ColorPicker
        onColorChange={setBgColor}
        onTextColorChange={setTextColor}
        currentBgColor={bgColor}
        currentTextColor={textColor}
      />
    </main>
  );
}

