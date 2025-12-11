// app/ClientLayout.js
"use client";

import { useEffect } from 'react';

export default function ClientLayout({ children }) {
  useEffect(() => {
    // This runs on the client side
    const preloader = document.querySelector('.preloader');
    const cursor = document.querySelector('.cursor');
    
    // Show preloader initially
    if (preloader) {
      preloader.style.display = 'flex';
      preloader.style.opacity = '1';
    }
    
    // Hide preloader after a short delay
    const hidePreloader = () => {
      setTimeout(() => {
        if (preloader) {
          preloader.style.opacity = '0';
          setTimeout(() => {
            if (preloader) {
              preloader.style.display = 'none';
            }
          }, 500);
        }
      }, 800);
    };
    
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
      // Fallback in case load event doesn't fire
      setTimeout(hidePreloader, 2000);
    }
    
    // Custom cursor movement
    if (cursor) {
      cursor.style.opacity = '1';
      const moveCursor = (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      };
      document.addEventListener('mousemove', moveCursor);
      
      // Cleanup
      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    }
    
    // Cursor interaction states
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="pointer"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursor) cursor.classList.add('cursor-zoom');
      });
      el.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('cursor-zoom');
      });
    });
    
    // Prevent flash of unstyled content
    document.documentElement.style.overflow = 'hidden';
    
    // Re-enable scrolling after load
    setTimeout(() => {
      document.documentElement.style.overflow = '';
    }, 1000);
    
    // Cleanup function
    return () => {
      if (preloader) {
        preloader.style.display = 'none';
      }
    };
  }, []);

  return (
    <>
      {/* Original preloader - Now properly controlled */}
      <div className="preloader fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-500 opacity-0 pointer-events-none">
        <div className="centrize full-width w-full">
          <div className="vertical-center">
            <div className="spinner default-circle mx-auto w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
      
      {/* Original main container with animation data attributes */}
      <div 
        className="container opened"
        data-animation-in="fadeInLeft" 
        data-animation-out="fadeOutLeft"
      >
        
        {/* Original custom cursor */}
        <div className="cursor fixed w-8 h-8 rounded-full border-2 border-green-500 pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"></div>
        
        {/* Content container for ProfileCard and AboutSection */}
        <div className="content-container">
          {children}
        </div>
        
      </div>
    </>
  );
}