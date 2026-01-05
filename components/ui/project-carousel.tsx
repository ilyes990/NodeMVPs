"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface ProjectImage {
  src: string;
  alt: string;
}

const projectImages: ProjectImage[] = [
  { src: "/images/dream_to_plan.png", alt: "Dream-to-plan MVP" },
  { src: "/images/docuAlert.jpg", alt: "DocuAlert MVP" },
  { src: "/images/crm.jpg", alt: "WebAgency CRM" },
  { src: "/images/mvp/Group 32.png", alt: "AdvenHive MVP" },
  { src: "/images/mvp/GqqCNRjW4AAcp5x.jpeg", alt: "Peeps MVP" },
  { src: "/images/landingpages/GovmrrfXcAAQy0z.jpeg", alt: "SaaS Product Landing Page" },
  { src: "/images/landingpages/Gq1lTLBXUAE8qNf.jpeg", alt: "Mobile App Landing Page" },
  { src: "/images/landingpages/GqlEVV3WEAEEJ5Y.jpeg", alt: "Digital Agency Landing Page" },
];

export function ProjectCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    let animationFrameId: number;
    let isPaused = false;

    const scroll = () => {
      if (container && !isPaused) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll position when it reaches halfway (since we duplicated images)
        const maxScroll = (container.scrollWidth / 2) - container.clientWidth;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };
    
    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...projectImages, ...projectImages];

  return (
    <div className="absolute top-[70%] left-0 right-0 w-full overflow-hidden z-20 py-8">
      {/* Gradient fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-30 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-30 pointer-events-none"></div>
      
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="flex-shrink-0 w-96 h-80 rounded-xl overflow-hidden bg-[#0d1534] border border-white/10 shadow-lg hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={320}
              height={208}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
