"use client";

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ProfileCard from './components/ProfileCard';
import ContentSwitcher from './components/ContentSwitcher';
import ResponsiveParentLayout from './components/layouts/ResponsiveParentLayout';

export default function HomePage() {
  // State for active section and theme
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme) {
        setTheme(savedTheme);
        applyTheme(savedTheme);
      } else {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = systemPrefersDark ? "dark" : "light";
        setTheme(initialTheme);
        applyTheme(initialTheme);
        localStorage.setItem("portfolio-theme", initialTheme);
      }
    }
  }, []);

  // Apply theme to document
  const applyTheme = (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  return (
    /* 
      WRAPPER CONTAINER
      Using the ResponsiveParentLayout component
      
      ADJUSTMENT POINTS:
      1. Remove min-h-screen if you want parent layout to control height
      2. You can add theme-based background here if needed
    */
    <ResponsiveParentLayout
      // SIDEBAR - Navigation menu
      sidebar={
        <div className="h-full">
          <Sidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>
      }
      
      // STATIC CONTENT - Profile card (left side)
      staticContent={
        <div className="h-full p-4">
          <ProfileCard />
        </div>
      }
      
      // DYNAMIC CONTENT - Main content area (right side)
      dynamicContent={
        <div className="h-full p-4">
          <ContentSwitcher activeSection={activeSection} />
        </div>
      }
    />
  );
}