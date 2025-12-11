"use client";

export default function ResponsiveParentLayout({ sidebar, staticContent, dynamicContent }) {
  return (
    <div
      className={`
        /* 
          RESPONSIVE PARENT LAYOUT
          
          ADJUSTMENT POINTS for each breakpoint:
          
          Mobile (default):
          - flex-col: Stack vertically
          - h-auto: Height based on content
          - gap-2: Small spacing
          
          Tablet (md:):
          - md:flex-row: Horizontal layout
          - md:h-screen: Full height
          - md:gap-4: Medium spacing
          
          Desktop (lg:):
          - lg:grid: Use grid for precise control
          - lg:grid-cols-[...]: Custom column widths
          - lg:gap-6: Larger spacing
        */
        
        /* Mobile layout - vertical stack */
        flex flex-col
        h-auto w-full
        gap-2
        p-4
        
        /* Tablet layout - horizontal flex */
        md:flex-row md:h-screen md:gap-4
        
        /* Desktop layout - grid */
        lg:grid lg:grid-cols-[100px_2fr_3fr] lg:grid-rows-1
        lg:gap-0
      `}
    >
      {/* 
        SIDEBAR - Responsive adjustments
        
        ADJUSTMENT POINTS:
        1. Mobile: w-full (full width), h-48 (fixed height)
        2. Tablet: md:w-64 (fixed width), md:h-auto (auto height)
        3. Desktop: lg:w-auto (auto width), lg:grid-col-[1]
      */}
      <div
        className={`
          /* Mobile */
          w-full h-48
          bg-white rounded-lg shadow-lg
          overflow-y-auto
          p-4
          
          /* Tablet */
          md:w-64 md:h-auto
          
          /* Desktop */
          lg:w-auto lg:grid-col-[1]
        `}
      >
        {sidebar}
      </div>

      {/* 
        STATIC CONTENT - Responsive adjustments
        
        ADJUSTMENT POINTS:
        1. Mobile: flex-1 (take available space)
        2. Tablet: md:flex-1 (proportional space)
        3. Desktop: lg:grid-col-[2] (grid position)
      */}
      <div
        className={`
          /* Mobile */
          flex-1
          bg-white/80 backdrop-blur-sm
          
          rounded-lg shadow-md
          overflow-hidden
          
          /* Desktop */
          lg:grid-col-[2]
        `}
      >
        <div className="w-full h-full overflow-y-auto">
          {staticContent}
        </div>
      </div>

      {/* 
        DYNAMIC CONTENT - Responsive adjustments
        
        ADJUSTMENT POINTS:
        1. Mobile: flex-1 (equal to static content)
        2. Tablet: md:flex-2 (double static content space)
        3. Desktop: lg:grid-col-[3] (grid position)
      */}
      <div
        className={`
          /* Mobile */
          flex-1
          bg-white backdrop-blur-sm
          border border-gray-300
          rounded-lg shadow-lg
          overflow-hidden
          
          /* Desktop */
          lg:grid-col-[3]
        `}
      >
        <div className="w-full h-full overflow-y-auto">
          {dynamicContent}
        </div>
      </div>
    </div>
  );
}