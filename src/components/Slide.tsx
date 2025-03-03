"use client";

import Image from "next/image";
import { useState } from "react";

interface SlideProps {
  title: string;
  emoji: string;
  content: string;
  backgroundColor?: string;
  titleColor?: string;
  imageSrc?: string;
  animalSounds?: string;
}

const Slide = ({
  title,
  emoji,
  content,
  backgroundColor = "bg-white",
  titleColor = "text-blue-500",
  imageSrc,
  animalSounds,
}: SlideProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const playSound = () => {
    if (animalSounds) {
      const audio = new Audio(animalSounds);
      audio.play().catch(console.error);
    }
  };

  return (
    <div
      className={`${backgroundColor} relative flex min-h-screen w-full flex-col items-center justify-center px-8 py-16`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={playSound}
    >
      {imageSrc && (
        <div className="absolute inset-0 opacity-10">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="relative z-10 max-w-6xl text-center">
        <h1
          className={`mb-12 flex items-center justify-center gap-6 text-7xl font-bold ${titleColor}`}
        >
          {title}{" "}
          <span
            className={`text-8xl transition-all duration-300 ${isHovered ? "scale-125 animate-bounce" : ""}`}
          >
            {emoji}
          </span>
        </h1>
        <p className="text-4xl leading-relaxed text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default Slide;
