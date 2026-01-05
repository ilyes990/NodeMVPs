"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Briefcase, Home, Phone, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Services", url: "#services", icon: Zap },
    { name: "Why Us", url: "#why-us", icon: Home },
    { name: "Portfolio", url: "#portfolio", icon: Briefcase },
    { name: "Contact", url: "#contact-us", icon: Phone },
  ];

  return (
    // Top spacing is controlled by the 'py-4' class below
    <div className="fixed w-full z-50 flex justify-center items-center px-4 sm:px-6 lg:px-8 py-5 mt-2">
      <Link href="/" className="absolute left-4 sm:left-6 lg:left-8">
        <Image src="/images/newVeyronix.png" alt="Logo" width={200} height={100} />
      </Link>

      <div className="flex items-center gap-4">
        <NavBar items={navItems} />
      </div>

    
    </div>
  );
};

export default Navbar;
