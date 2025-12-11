import { Code, Music, BadgeDollarSign, Gamepad2, Disc, Trophy, Coffee, Flag, Cog, Network, Target, Brush } from "lucide-react";

export default function AboutContent() {
  return (
    <div
      className={`
        /* 
          MAIN CONTAINER - Size controlled by parent
          Remove all fixed positioning, let parent set dimensions
          Width and height will be determined by parent's aspect ratio
        */
        w-full h-full
        bg-white backdrop-blur-xl  shadow-2xl
        rounded-xl overflow-y-auto
        


        /* 
          ADJUST: Modify these values to change component scaling
          Current: 6px padding on mobile, 10px on desktop
          Change p-6 and lg:p-10 for different size ratios
        */
        p-6
        lg:p-10
      `}
    >

      {/* ABOUT ME - Font sizes scale with parent container */}
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <span className="text-green-600 mr-2 text-3xl">A</span>b
        <span className="text-green-600 mr-2 text-3xl">o</span>u
        <span className="text-green-600 mr-2 text-3xl">t</span> M
        <span className="text-green-600 mr-2 text-3xl">e</span>
        
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <p className="text-gray-700 leading-relaxed">
            Hello! I&apos;m Sithum Alwis.<br />
            Student from Sri Lanka. I have a passion for web development
            and design. I love to create unique and functional digital
            experiences.
          </p>
        </div>

        {/* PERSONAL INFO */}
        <div className="text-gray-700 text-sm space-y-3">
          <div className="flex justify-between">
            <span className="bg-green-200 px-2 py-1 rounded text-gray-800">Age:</span>
            <span>22</span>
          </div>
          <div className="flex justify-between">
            <span className="bg-green-200 px-2 py-1 rounded text-gray-800">Residence:</span>
            <span>Sri Lanka</span>
          </div>
          <div className="flex justify-between">
            <span className="bg-green-200 px-2 py-1 rounded text-gray-800">Address:</span>
            <span>Colombo, Sri Lanka</span>
          </div>
          <div className="flex justify-between">
            <span className="bg-green-200 px-2 py-1 rounded text-gray-800">University:</span>
            <span>KDU, Sri Lanka</span>
          </div>
        </div>
      </div>

      {/* MY ABILITIES - Adjust gap and padding for different sizes */}
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <span className="text-green-600 mr-2 text-2xl">•</span>
        My Abilities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* 
          ADJUST: Icon size and padding can be modified here
          Current: p-4 (16px) for icon container, size={28} for icons
          Change these values to scale icons proportionally
        */}
        
        {/* Web Development */}
        <div className="flex flex-col items-center text-center px-4">
          <div className="bg-green-500 text-white p-4 rounded-full mb-4">
            <Code size={28} />
          </div>
          <h3 className="font-semibold text-lg">Web Development</h3>
          <p className="text-gray-600 mt-2">
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>

        {/* Embedded Systems */}
        <div className="flex flex-col items-center text-center px-4">
          <div className="bg-green-500 text-white p-4 rounded-full mb-4">
            <Cog size={28} />
          </div>
          <h3 className="font-semibold text-lg">Embedded Systems</h3>
          <p className="text-gray-600 mt-2">
            Smart and efficient hardware solutions that seamlessly integrate 
            sensors, controllers, and real‑time performance
          </p>
        </div>

        {/* Computer Networking */}
        <div className="flex flex-col items-center text-center px-4">
          <div className="bg-green-500 text-white p-4 rounded-full mb-4">
            <Network size={28} />
          </div>
          <h3 className="font-semibold text-lg">Computer Networking</h3>
          <p className="text-gray-600 mt-2">
            Reliable and scalable network infrastructures that connect
            devices, secure data, and empower seamless communication.
          </p>
        </div>


      </div>

      {/* FUN FACTS - Adjust gap for spacing between items */}
      <h2 className="text-xl font-semibold mb-8 flex items-center">
        <span className="text-green-600 mr-2 text-2xl">•</span>
        Fun Facts
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-center">

        <div className="flex flex-col items-center space-y-2">
          <Target size={32} className="text-green-500" />
          <p className="font-semibold">1<br />Archery Competition</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Brush size={32} className="text-green-500" />
          <p className="font-semibold">1<br />Painting</p>
        </div>


      </div>

      
    </div>
  );
}