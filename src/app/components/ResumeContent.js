"use client";

import { Briefcase, GraduationCap, PenTool, Flag, Code2, ListChecks, Wrench } from "lucide-react";

export default function ResumeContent() {
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
      {/* ✔ Heading */}
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="text-green-600 mr-2 text-3xl font-bold">R</span>e
        <span className="text-green-600 mr-2 text-3xl font-bold">s</span>u
        <span className="text-green-600 mr-2 text-3xl font-bold">m</span>e
      </h2>

      {/* --------------------------------------------- */}
      {/* ✔ EXPERIENCE + EDUCATION (Two Columns) */}
      {/* --------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* EXPERIENCE */}
        <div>
          <h3 className="font-bold text-lg mb-6 flex items-center">
            <Briefcase className="text-green-600 mr-2" size={20} />
            EXPERIENCE
          </h3>
          <p className="text-gray-600"></p>
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="font-bold text-lg mb-6 flex items-center">
            <GraduationCap className="text-green-600 mr-2" size={20} />
            EDUCATION
          </h3>

          {/* 
            ADJUST: Timeline item spacing
            Current: pl-6 for timeline indentation
          */}
          
          {/* Timeline Item */}
          <div className="relative pl-6 border-l">
            <span className="absolute -left-[6px] top-1 w-3 h-3 bg-green-500 rounded-full"></span>

            <p className="text-xs bg-green-100 text-green-700 inline-block px-2 py-[2px] rounded mb-2">
              2025 – Present
            </p>

            <h4 className="font-semibold">General Sir John Kotelawala Defence University</h4>
            <p className="text-gray-500 text-sm mb-4">Ratmalana</p>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Bachelor&apos;s degree in Computer Science. Pursuing studies as a 1st year student.
            </p>
          </div>

          {/* Second Education Item */}
          <div className="relative pl-6 border-l">
            <span className="absolute -left-[6px] top-1 w-3 h-3 bg-gray-400 rounded-full"></span>

            <p className="text-xs bg-gray-100 text-gray-700 inline-block px-2 py-[2px] rounded mb-2">
              2024
            </p>

            <h4 className="font-semibold">Java Developer Course</h4>
            <p className="text-gray-500 text-sm mb-4">IJSE Panadura</p>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Coursework – Java SE, MySQL, Java FX.
            </p>

            <p className="text-gray-700 text-xs font-semibold mb-8">
              <span className="cursor-pointer hover:text-green-500">CERTIFICATE</span>
            </p>
          </div>
            {/* Third Education Item */}
          <div className="relative pl-6 border-l">
            <span className="absolute -left-[6px] top-1 w-3 h-3 bg-gray-400 rounded-full"></span>

            <p className="text-xs bg-gray-100 text-gray-700 inline-block px-2 py-[2px] rounded mb-2">
              2025
            </p>

            <h4 className="font-semibold">CCNA: Introduction to Networks</h4>
            <p className="text-gray-500 text-sm mb-4">Cisco Networking Acedamy USA , San francisco.</p>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Coursework – Java SE, MySQL, Java FX.
            </p>

            <p className="text-gray-700 text-xs font-semibold mb-8">
              <span className="cursor-pointer hover:text-green-500">CERTIFICATE</span>
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------------------------- */}
      {/* ✔ SKILLS SECTION */}
      {/* --------------------------------------------- */}
      <h3 className="font-bold text-xl mt-8 lg:mt-12 mb-6 flex items-center">
        <Wrench className="text-green-600 mr-2" size={20} />
          Skills

      </h3>

      {/* 2×2 GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* DESIGN */}
        <div>
          <h4 className="font-bold mb-4 flex items-center">
            <PenTool className="text-green-600 mr-2" /> DESIGN
          </h4>

          <div className="mb-4">
            <p>Web Design</p>
            <div className="w-full bg-gray-200 h-1 rounded mt-1">
              <div className="bg-green-500 h-1 rounded w-[65%]"></div>
            </div>
          </div>

          <div className="mb-4">
            <p>Animate</p>
            <div className="w-full bg-gray-200 h-1 rounded mt-1">
              <div className="bg-green-500 h-1 rounded w-[55%]"></div>
            </div>
          </div>

          <div className="mb-4">
            <p>Photoshop</p>
            <div className="w-full bg-gray-200 h-1 rounded mt-1">
              <div className="bg-green-500 h-1 rounded w-[50%]"></div>
            </div>
          </div>

          <div className="mb-4">
            <p>PCB Design</p>
            <div className="w-full bg-gray-200 h-1 rounded mt-1">
              <div className="bg-green-500 h-1 rounded w-[75%]"></div>
            </div>
          </div>
        </div>

        {/* LANGUAGES */}
        <div>
          <h4 className="font-bold mb-4 flex items-center">
            <Flag className="text-green-600 mr-2" /> LANGUAGES
          </h4>

          {/* Each language row */}
          {[
            { name: "English", level: 8 },
            { name: "Sinhala", level: 10 },
            { name: "Chinese", level: 3 },
            { name: "Tamil", level: 1 },
          ].map((lang) => (
            <div key={lang.name} className="mb-4">
              <p className="mb-1">{lang.name}</p>
              <div className="flex gap-1">
                {[...Array(10)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < lang.level ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 
          ADJUST: Coding skill circles
          Current: w-20 h-20 for circles
        */}
        <div>
          <h4 className="font-bold mb-4 flex items-center">
            <Code2 className="text-green-600 mr-2" /> CODING
          </h4>

          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center text-lg font-bold">
                90%
              </div>
              <p className="mt-2 text-sm">C++</p>
            </div>

            <div>
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center text-lg font-bold">
                75%
              </div>
              <p className="mt-2 text-sm">PHP / MYSQL</p>
            </div>

            <div>
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center text-lg font-bold">
                85%
              </div>
              <p className="mt-2 text-sm">Angular / JavaScript</p>
            </div>

            <div>
              <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center text-lg font-bold">
                95%
              </div>
              <p className="mt-2 text-sm">HTML / CSS</p>
            </div>
          </div>
        </div>

        {/* KNOWLEDGE */}
        <div>
          <h4 className="font-bold mb-4 flex items-center">
            <ListChecks className="text-green-600 mr-2" /> KNOWLEDGE
          </h4>

          <ul className="space-y-3 text-sm">
            {["Website hosting", "Create animation", "UI design"].map(
              (item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 mr-2 mt-1"></span>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}