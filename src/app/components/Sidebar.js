"use client";

import {
  Moon,
  Sun,
  User,
  FileText,
  Briefcase,
  BookOpen,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Sidebar({ activeSection, setActiveSection, theme, toggleTheme }) {
  // Navigation sections
  const sections = [
    { id: "about", label: "ABOUT", icon: User },
    { id: "resume", label: "RESUME", icon: FileText },
    { id: "works", label: "WORKS", icon: Briefcase },
    { id: "blog", label: "BLOG", icon: BookOpen },
    { id: "contact", label: "CONTACT", icon: Mail },
  ];

  // Handle section click
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  // Check if section is active
  const isActive = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <div
      className="
        fixed left-10 top-1/2 -translate-y-1/2
        flex flex-col space-y-6
      "
    >
      

      {/* Box 2: Navigation */}
      <div
        className="
          w-full
          h-full
          bg-white dark:bg-gray-900/50
          border border-white/30 shadow-xl
          rounded-xl
          flex flex-col items-center space-y-6 text-xs font-semibold
        "
      >
        {sections.map((section) => {
          const Icon = section.icon;
          const active = isActive(section.id);
          
          return (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`
                flex flex-col items-center space-y-1 
                transition-all duration-200
                ${active ? "text-green-500" : "text-gray-700 dark:text-gray-300"}
                hover:text-green-500
                focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
                rounded-lg p-2
                ${active ? "bg-green-50 dark:bg-green-900/20" : "hover:bg-gray-50 dark:hover:bg-gray-800/50"}
              `}
              aria-label={`Go to ${section.label} section`}
              aria-current={active ? "page" : undefined}
            >
              <Icon 
                size={20} 
                className={`
                  transition-colors duration-200
                  ${active ? "text-green-500" : ""}
                `}
              />
              <span className="transition-colors duration-200">{section.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}