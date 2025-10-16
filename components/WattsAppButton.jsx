"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

const WattsAppButton = () => {
  const pathname = usePathname();
  if (pathname?.startsWith("/admindashboard")) {
    return null;
  }

  return (
    <Link
      href={
        "https://wa.me/8801713-117849?text=Hello%20I%20want%20to%20know%20more"
      }
    >
      <div className="fixed bottom-20 right-5 z-50">
        <span className="absolute animate-bounce top-0 right-0 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full z-30 rounded-full bg-green-400"></span>
          <span className="relative inline-flex rounded-full z-30 h-3 w-3 bg-green-400"></span>
        </span>
        <FaWhatsapp className="text-[#128C7E] text-4xl lg:text-5xl drop-shadow-lg" />
      </div>
    </Link>
  );
};

export default WattsAppButton;
