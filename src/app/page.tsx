"use client";

import { SlideAnimations } from "@/components/SlideAnimations";
import { storyData } from "@/data/storyData";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = storyData.length + 1;

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") goToNextSlide();
    if (event.key === "ArrowLeft") goToPrevSlide();
  };

  const currentStory =
    currentSlide < storyData.length
      ? storyData[currentSlide]
      : {
          title: "Remember!",
          emoji: "⭐️",
          content:
            "God keeps His promises! Just like He kept Noah safe, He takes care of us too. When we see a rainbow, we can remember God's love and faithfulness!",
          backgroundColor: "bg-yellow-100",
          titleColor: "text-yellow-600",
          imageSrc: "images/god.jpg",
        };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${currentStory.backgroundColor || "bg-gradient-to-b from-yellow-50 to-yellow-100"} relative grid size-full grid-cols-2 items-center gap-8 px-12 py-16`}
        >
          {/* Add SlideAnimations component here */}
          <SlideAnimations slideIndex={currentSlide} />

          {/* Text Content */}
          <motion.div
            className="relative z-10 flex flex-col items-start"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
          >
            <motion.h1
              className={`mb-12 flex items-center gap-6 text-6xl font-bold ${"titleColor" in currentStory ? currentStory.titleColor : "text-blue-500"}`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              {currentStory.title}{" "}
              <motion.span
                className="text-7xl"
                whileHover={{ scale: 1.2 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {currentStory.emoji}
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-3xl leading-relaxed text-gray-700"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              {currentStory.content}
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative h-[80vh] w-full overflow-hidden rounded-3xl shadow-2xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {currentStory.imageSrc && (
              <Image
                src={currentStory.imageSrc}
                alt={currentStory.title}
                fill
                className="object-cover"
                priority
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation and Progress Section */}
      <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-8">
        <motion.button
          onClick={goToPrevSlide}
          className="rounded-full bg-blue-500 p-6 text-4xl text-white shadow-xl transition-all hover:scale-110 hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🐘
        </motion.button>

        <div className="flex gap-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`size-6 rounded-full transition-all ${
                currentSlide === index ? "bg-blue-500" : "bg-blue-200"
              }`}
              whileHover={{ scale: 1.2 }}
              animate={currentSlide === index ? { scale: [1, 1.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          ))}
        </div>

        <motion.button
          onClick={goToNextSlide}
          className="rounded-full bg-blue-500 p-6 text-4xl text-white shadow-xl transition-all hover:scale-110 hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🦁
        </motion.button>
      </div>
    </div>
  );
};

export default Page;
