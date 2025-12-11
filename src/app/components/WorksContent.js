"use client";

import Image from "next/image";
import { useState } from "react";

export default function WorksContent() {
  const categories = ["All", "Software", "Hardware"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Sample works data
  const works = [
    { id: 1, title: "Recipe Sharing Platform", category: "Software", image: "/works/work1.jpg", link: "https://github.com/sda2003/recipe_sharing_platform_main.git" },
    { id: 2, title: "Smart Waste Sorting System", category: "Hardware", image: "/works/work2.jpg", link: "https://github.com/sda2003/SMART-RECYCLING-STATION-WITH-CHATBOT.git" },

  ];

  // Filter works based on selected category
  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <div
      className={`
        /* 
          MAIN CONTAINER - Size controlled by parent
          Width and height determined by parent's aspect ratio
        */
        w-full h-full
        bg-white shadow-xl rounded-xl
        overflow-y-auto
        
        /* 
          ADJUST: Padding for different size ratios
          Current: 24px (6 * 4) on mobile, 40px (10 * 4) on desktop
        */
        p-6 lg:p-10
      `}
    >
      {/* ------------------------------------------------------ */}
      {/* ✔ Heading */}
      {/* ------------------------------------------------------ */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center mb-4 lg:mb-0">
          <span className="text-green-600 mr-2 text-3xl font-bold">W</span>
          o<span className="text-green-600 mr-2 text-3xl font-bold">r</span>k
          <span className="text-green-600 mr-2 text-3xl font-bold">s</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex gap-4 text-sm font-semibold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-lg transition ${
                cat === activeCategory
                  ? "bg-green-100 text-green-600"
                  : "text-gray-600 hover:text-green-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------ */}
      {/* ✔ WORKS GRID 2 columns */}
      {/* ------------------------------------------------------ */}
      {/* 
        ADJUST: Grid gap and image height
        Current: gap-6 lg:gap-10, h-48 lg:h-56 for images
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {filteredWorks.map((work) => (
          <a
            key={work.id}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group block"
          >
            <div className="w-full h-48 lg:h-56 relative rounded-lg overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Category badge */}
              <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium">
                {work.category}
              </div>
            </div>
            <h3 className="font-semibold mt-3 text-center group-hover:text-green-600 transition-colors">
              {work.title}
            </h3>
            <p className="text-gray-500 text-sm text-center">View Project →</p>
          </a>
        ))}
      </div>

      {/* If no works in category */}
      {filteredWorks.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          {`No projects found in the "${activeCategory}" category.`}
        </div>
      )}
    </div>
  );
}