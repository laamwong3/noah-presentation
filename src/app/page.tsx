import StorySection from "@/components/StorySection";
import { storyData } from "@/data/storyData";
import React from "react";

const Page = () => {
  return (
    <main className="min-h-screen bg-sky-100 p-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold text-blue-600">
          God&apos;s Big Boat and Rainbow Promise! 🚢🌈
        </h1>
        <p className="text-xl text-gray-700">
          A story about Noah and his amazing ark
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        {storyData.map((story, index) => (
          <StorySection key={index} {...story} />
        ))}

        <StorySection
          title="Remember!"
          emoji="⭐️"
          content="God keeps His promises! Just like He kept Noah safe, He takes care of us too. When we see a rainbow, we can remember God's love and faithfulness!"
          backgroundColor="bg-yellow-100"
          titleColor="text-yellow-600"
        />
      </div>
    </main>
  );
};

export default Page;
