"use client";
import { useState } from "react";

interface IntroProps {
    isNavVisible: boolean;
  }
  
  export const Intro: React.FC<IntroProps> = () => {
  
    const messages = {
      toutLeMonde: [
        "Bonjour ! Je suis développeur",
        "passionné par le développement",
        "d’applications intuitives et fluide.",
        "Ce qui me motive ? Transformer des",
        "idées en applications que les ",
        "utilisateurs aiment et utilisent",
        " au quotidien."
      ],
      recruteurs: [
        "Je suis développeur junior",
        "avec de l'expérience en web et",
        "mobile. Je suis toujours en quête",
        "de nouvelles opportunités pour",
        "approfondir mes compétences et",
        "relever de nouveaux défis. Je suis",
        "à la recherche d'un poste",
        "en alternance."
      ],
      développeurs: [
        "Je travaille sur des technologies",
        "natives et hybrides en mobile, ainsi",
        "que sur l'écosystème JavaScript ",
        "pour le web. Mon objectif ? créer des",
        "expériences, fluides, esthétiques et",
        "fonctionnelles, tout en garantissant ",
        "des performances optimales et",
        "une sécurité renforcée."
      ]
    };
  
    const [activeCategory, setActiveCategory] = useState<"toutLeMonde" | "recruteurs" | "développeurs">("toutLeMonde");
  
    return (
      <div className="h-full grid lg:grid-cols-6 md:grid-cols-4 gap-4 p-8 pt-60">
        <div className="hidden lg:block lg:col-span-2"></div>
        <div className="lg:col-span-3 md:col-span-3 lg:max-w-[600px] md:max-w-[500px]">
          <div className="flex space-x-4 mb-4 overflow-hidden">
            {Object.keys(messages).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as "toutLeMonde" | "recruteurs" | "développeurs")}
                className={`xs:text-[12px] md:text-base text-lg font-normal ${activeCategory === category ? "text-foreground border-b-2 border-foreground" : "hover:text-foreground"}`}
              >
                {category === "toutLeMonde" ? "Pour tout le monde" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <h1
            className="font-semibold whitespace-nowrap sm:text-base md:text-4xl lg:text-5xl"
            style={{
              lineHeight: "1.3",
              maxWidth: "100%",
              whiteSpace: "nowrap",
            }}
          >
            {messages[activeCategory].map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>
      </div>
    );
  };
  

