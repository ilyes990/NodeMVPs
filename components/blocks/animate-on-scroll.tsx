"use client";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimateOnScroll = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="animate-scroll-wrapper"
    >
      {children}
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
    </motion.div>
  );
};

export default AnimateOnScroll;