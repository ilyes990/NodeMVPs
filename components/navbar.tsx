"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isBrowser, setIsBrowser] = useState(false);

  // Set isBrowser to true once component mounts
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (!isBrowser) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBrowser]);

  // Use 0 as default opacity for server-side rendering
  const opacity = isBrowser ? Math.min(scrollY / 100, 1) : 0;
  return (
    <nav
      className="fixed w-full z-50 transition-colors duration-3000"
      style={{
        backgroundColor: `rgba(0, 1, 34, ${opacity})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Veyronix</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#services"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                SERVICES
              </Link>
              <Link
                href="#why-us"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                WHY US
              </Link>
              <Link
                href="#projects"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                PORTFOLIO
              </Link>
              <Link
                href="#contact-us"
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                CONTACT
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              className="hidden md:flex bg-yellow-400 hover:bg-yellow-500 text-indigo-950 font-semibold rounded-full"
            >
              Book a free call
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white h-12 w-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-y-0 bg-indigo-950/95 backdrop-blur-sm w-full right-0 transform transition-transform z-[100]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
            <span className="sr-only">Close</span>
          </Button>

          <div className="flex flex-col items-center justify-center h-full text-white space-y-8">
            <Link
              className="text-2xl font-medium hover:text-yellow-400"
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              className="text-2xl font-medium hover:text-yellow-400"
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              className="text-2xl font-medium hover:text-yellow-400"
              href="#why-us"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WHY US
            </Link>
            <Link
              className="text-2xl font-medium hover:text-yellow-400"
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PORTFOLIO
            </Link>
            <Link
              className="text-2xl font-medium hover:text-yellow-400"
              href="#contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <a href='https://calendly.com/ilyes-sissaoui/30mi'>
            <Button
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-indigo-950 font-semibold px-8 py-6 text-lg rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a free call
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
            </a>
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
