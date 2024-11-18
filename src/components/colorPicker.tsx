'use client';

import { useState } from "react";

export const ColorPicker = ({
  onColorChange,
  onTextColorChange,
  currentBgColor,
  currentTextColor,
}: {
  onColorChange: (color: string) => void;
  onTextColorChange: (color: string) => void;
  currentBgColor: string;
  currentTextColor: string;
}) => {
  const [hovered, setHovered] = useState(false);

  const colorMap: { [key: string]: string } = {
    "#ffffff": "#000000",
    "#dfebee": "#1e282a",
    "#ECDFCC": "#774e34",
    "#5F939A": "#F9E8D9",
    "#ffd2b4": "#eb5624",
    "#9e4434": "#f4d2b5",
    "#783a36": "#f3bfa3",
    "#403650": "#f9a5ce",
    "#172938": "#beceec",
    "#051a1c": "#c9e3e8",
    "#000000": "#ffffff",
  };

  const handleColorChange = (bgColor: string) => {
    onColorChange(bgColor);
    const textColor = colorMap[bgColor] || "#000000";
    onTextColorChange(textColor);
  };

  return (
    <div
      className="fixed bottom-0 left-0 rounded-full m-8 grid grid-cols-1 place-items-center transition-all duration-300"
      style={{
        height: hovered ? "450px" : "50px",
        width: "50px",
        borderRadius: "30px",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`grid grid-cols-1 gap-5 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          marginBottom: "40px",
        }}
      >
        {Object.keys(colorMap).map((color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            style={{
              backgroundColor: color,
              border: currentBgColor === color ? `2px solid ${currentTextColor}` : "none",
              boxShadow: currentBgColor === color ? `0 0 8px ${currentTextColor}` : "none",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              transition: "all 0.3s ease",
            }}
            className="w-4 h-4"
          />
        ))}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-8 absolute bottom-2"
        style={{
          stroke: currentTextColor,
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    </div>
  );
};
