"use client";
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

interface GSAPHeroAnimationProps {
  children: React.ReactNode;
}

const GSAPHeroAnimation = ({ children }: GSAPHeroAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get all text elements that should animate
    const textElements = container.querySelectorAll('.hero-text');
    
    // Set initial state - invisible and moved down
    gsap.set(textElements, {
      opacity: 0,
      y: 50,
    });

    // Create timeline for staggered animation
    const tl = gsap.timeline({
      delay: 0.5, // Small delay before starting
    });

    // Animate each text element with stagger
    tl.to(textElements, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.2, // 0.2 seconds between each element
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="gsap-hero-animation">
      {children}
    </div>
  );
};

export default GSAPHeroAnimation;

