"use client";

import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import GeminiModal from "./GeminiModal";
import { usePathname } from "next/navigation"; 

const GeminiButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 
  if (pathname?.startsWith("/admindashboard")) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 cursor-pointer right-5 z-40 bg-[#10A37F] p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaRobot className="text-white text-2xl lg:text-3xl" />
      </button>
      {isOpen && <GeminiModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default GeminiButton;
