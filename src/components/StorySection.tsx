"use client";

import Image from "next/image";
import { useState } from "react";

interface StorySectionProps {
  title: string;
  emoji: string;
  content: string;
  backgroundColor?: string;
  titleColor?: string;
  imageSrc?: string;
  animalSounds?: string;
}

const StorySection = ({
  title,
  emoji,
  content,
  backgroundColor = "bg-white",
  titleColor = "text-blue-500",
  imageSrc,
  animalSounds,
}: StorySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const playSound = () => {
    if (animalSounds) {
      const audio = new Audio(animalSounds);
      audio.play().catch(console.error);
    }
  };

  return (
    <section
      className={` ${backgroundColor} relative cursor-pointer overflow-hidden rounded-lg p-6 shadow-lg transition-all duration-300 ${isHovered ? "translate-y-[-4px] shadow-2xl" : ""} ${isExpanded ? "scale-105 ring-2 ring-blue-300" : "hover:scale-102"} `}
      onClick={() => {
        setIsExpanded(!isExpanded);
        playSound();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <h2
          className={`mb-4 flex items-center gap-2 text-2xl font-bold ${titleColor} ${
            isHovered ? "translate-x-2 transition-transform" : ""
          }`}
        >
          {title}{" "}
          <span
            className={`text-3xl transition-all ${
              isHovered ? "scale-125 animate-bounce" : ""
            } ${isExpanded ? "rotate-360" : ""}`}
          >
            {emoji}
          </span>
        </h2>
        <p
          className={`overflow-hidden text-lg transition-all duration-300 ${
            isExpanded ? "scale-105 font-medium" : ""
          } ${isHovered ? "text-blue-700" : ""}`}
        >
          {content}
        </p>
        <div
          className={`mt-4 flex items-center gap-2 text-sm text-gray-500 transition-all ${
            isExpanded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="animate-pulse">✨</span>
          Click again to minimize
          <span className="animate-pulse">✨</span>
        </div>
      </div>

      {imageSrc && (
        <div
          className={`absolute right-0 top-0 h-full w-1/3 transition-all duration-500 ${
            isExpanded
              ? "translate-x-0 opacity-20"
              : "translate-x-full opacity-0"
          }`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </section>
  );
};

export default StorySection;
