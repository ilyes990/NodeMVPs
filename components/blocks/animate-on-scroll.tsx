"use client";
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimateOnScroll = ({ children }: { children: React.ReactNode }) => {
  // Add state to track if we're in the browser
  const [isBrowser, setIsBrowser] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Set isBrowser to true once component mounts
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (inView && isBrowser) {
      controls.start('visible');
    }
  }, [controls, inView, isBrowser]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  // If we're not in the browser yet, render without animations
  if (!isBrowser) {
    return <div className="animate-scroll-wrapper" suppressHydrationWarning>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="animate-scroll-wrapper"
      suppressHydrationWarning
    >
      {children}
      {isBrowser && (
        <style jsx global>{`
          @keyframes glow {
            0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.3); }
            50% { box-shadow: 0 0 20px 5px rgba(99, 102, 241, 0.6); }
            100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.3); }
          }
          .animate-scroll-wrapper {
            animation: glow 2s ease-in-out 0.5s 1;
          }
        `}</style>
      )}
    </motion.div>
  );
};


export default AnimateOnScroll;