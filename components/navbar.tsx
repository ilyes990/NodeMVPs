"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import logo from "@/public/images/Group 17.png";
import Image from "next/image";
import { Menu, MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white h-12 w-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={48} />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>
      {/* 
fixed inset-y-0 right-0 w-1/2 bg-white dark:bg-gray-900 shadow-lg z-20 
transform transition-transform duration-300 ease-in-out */}
      {isMobileMenuOpen && (
        <div className="fixed inset-y-0 bg-black w-1/2 right-0 transfrom transtition-transform">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute top-6 right-6 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="px-4 py-6 pb-3 text-white space-y-1">
            <Link
              className="block px-3 py-3 font-medium hover:text-purple-700"
              href="#home"
            >
              Home
            </Link>
            <Link
              className="block px-3 py-3 font-medium hover:text-purple-700"
              href="#why-us"
            >
              About
            </Link>
            <Link
              className="block px-3 py-3 font-medium hover:text-purple-700"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="block px-3 py-3 font-medium hover:text-purple-700"
              href="#contact-us"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
