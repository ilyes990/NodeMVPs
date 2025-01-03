"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import logo from "@/public/images/Group 17.png";
import Image from "next/image";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 100, 1);
  return (
    <nav
      className="fixed w-full z-10 transition-colors duration-3000"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-purple-700">
              <Image
                src={logo}
                alt="NodeMVPs"
                width={200}
                height={200}
                className="object-contain"
                priority
                quality={100}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#why-us"
                className="text-white hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Why Us
              </Link>
              <Link
                href="#services"
                className="text-white hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="text-white hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              <Link
                href="#contact-us"
                className="text-white hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
