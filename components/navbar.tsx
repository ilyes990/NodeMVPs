"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Briefcase, Phone, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  const navItems = [
    { name: 'Services', url: '#services', icon: Zap },
    { name: 'Why Us', url: '#why-us', icon: Home },
    { name: 'Portfolio', url: '#portfolio', icon: Briefcase },
    { name: 'Contact', url: '#contact-us', icon: Phone }
  ];

  return (
    // Top spacing is controlled by the 'py-4' class below
    <div className="fixed w-full z-50 flex justify-center items-center px-4 sm:px-6 lg:px-8 py-5 mt-2">
      <Link href="/" className="absolute left-4 sm:left-6 lg:left-8">
        <Image src="/images/Logo.png" alt="Logo" width={200} height={100} />
      </Link>
      
      <div className="flex items-center gap-4">
        <NavBar items={navItems} />
      </div>

      <Link href="https://calendly.com/ilyes-sissaoui/30min" className="hidden md:block absolute right-4 sm:right-6 lg:right-8">
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-semibold rounded-full">
          Book a free call
          <Calendar className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default Navbar;
