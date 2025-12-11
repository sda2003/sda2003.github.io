import Image from "next/image";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ProfileCard() {
  const cardBackgroundColor = "bg-gray-100";

  return (
    <div
      className={`

        w-full 
        h-full
        ${cardBackgroundColor}
        border border-white/40 shadow-2xl
        rounded-xl overflow-hidden
        flex flex-col
      `}
    >
      {/* Profile Image - Takes half of the card */}
      <div className="h-1/2 relative min-h-0 overflow-hidden">
        <Image
          src="/profile.png"
          alt="Profile Photo"
          fill
          className="object-contain"
          style={{ transform: 'scale(1.0)' }}
        />
      </div>



      {/* White content section */}
      <div className="bg-white flex-grow flex flex-col justify-center">
        {/* Name + Job Title */}
        <div className="text-center py-20 px-4">
          <h1 className="text-5xl font-semibold tracking-tight">
            Sithum Alwis
          </h1>
          <p className="text-green-600 text-xl font-medium mt-3">Student</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-10 text-gray-700 py-0">
          <a 
            href="https://web.facebook.com/profile.php?id=61568090801588" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <Facebook size={25} className="cursor-pointer hover:text-green-500" />
          </a>
          <a 
            href="https://www.instagram.com/dulneth2003?igsh=MWtnNTg3enFrNmttZQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <Instagram size={25} className="cursor-pointer hover:text-green-500" />
          </a>
          <a 
            href="https://github.com/sda2003" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github size={25} className="cursor-pointer hover:text-green-500" />
          </a>
          <a 
            href="https://www.linkedin.com/in/sithum-alwis-618934399/?trk=public-profile-join-page" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={25} className="cursor-pointer hover:text-green-500" />
          </a>
        </div>

        
      </div>
    </div>
  );
}