"use client";

export default function BlogContent() {
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
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="text-green-600 mr-2 text-3xl font-bold">B</span>l
        <span className="text-green-600 mr-2 text-3xl font-bold">o</span>g
      </h2>
      <p className="text-gray-600">Blog content coming soon...</p>
      {/* Add your blog posts here */}
    </div>
  );
}