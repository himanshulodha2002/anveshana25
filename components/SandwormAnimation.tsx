import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

interface SandwormAnimationProps {
  sandwormY: any;
}

export default function SandwormAnimation({
  sandwormY,
}: SandwormAnimationProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: [-2400, 0], // Increased range of motion
      transition: {
        duration: 15, // Faster animation
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="fixed left-0 w-full pointer-events-none"
      style={{ y: sandwormY, zIndex: 15 }} // Increased z-index
    >
      <motion.div
        animate={controls}
        className="w-[300vw] h-[400px]" // Increased size
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 C300,50 600,150 1200,100 L1200,300 L0,300 Z' fill='%23451a03'/%3E%3C/svg%3E")`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))", // Added shadow for visibility
          opacity: 0.9, // Slightly transparent
        }}
      />
    </motion.div>
  );
}
