"use client";

import { motion } from "framer-motion";

interface AnimationProps {
  slideIndex: number;
}

export const SlideAnimations = ({ slideIndex }: AnimationProps) => {
  switch (slideIndex) {
    case 0: // Bible Verse
      return (
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/2 top-10 -translate-x-1/2 text-8xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: [0, 1, 1, 0.8],
              y: [-50, 0, 0, -20],
              scale: [0.8, 1, 1, 0.9],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              times: [0, 0.2, 0.8, 1],
            }}
          >
            ✝️
          </motion.div>
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0.8, 1.2, 0.8],
                x: `${10 + Math.random() * 80}vw`,
                y: `${10 + Math.random() * 80}vh`,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      );

    case 1: // God Sees the World (now moved to index 1)
      return (
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: [0, 1, 0],
                y: ["0vh", "100vh"],
                x: `${Math.random() * 100}vw`,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              💖
            </motion.div>
          ))}
        </div>
      );

    case 2: // Building the Boat
      return (
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: ["0vw", "100vw"],
                y: `${Math.random() * 100}vh`,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              🔨
            </motion.div>
          ))}
        </div>
      );

    case 3: // Animals
      return (
        <div className="pointer-events-none absolute inset-0">
          {["🦁", "🐘", "🦒", "🦊", "🐪"].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl"
              initial={{ x: "-20vw" }}
              animate={{
                x: ["-20vw", "120vw"],
                y: `${20 + Math.random() * 60}vh`,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      );

    case 4: // Rain
      return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl font-bold text-blue-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: [0, 1, 0],
                y: ["0vh", "100vh"],
                x: `${Math.random() * 100}vw`,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            >
              💧
            </motion.div>
          ))}
        </div>
      );

    case 5: // Rainbow
      return (
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/2 top-1/4 -translate-x-1/2 text-8xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            🌈
          </motion.div>
        </div>
      );

    default:
      return null;
  }
};
