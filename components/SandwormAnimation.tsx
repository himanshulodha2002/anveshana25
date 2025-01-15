import { motion } from "framer-motion";

interface SandwormAnimationProps {
  sandwormY: any;
}

export default function SandwormAnimation({
  sandwormY,
}: SandwormAnimationProps) {
  return (
    <motion.div
      className="fixed left-0 w-full z-20 pointer-events-none"
      style={{ y: sandwormY }}
    >
      <div
        className="w-full h-[300px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 C300,50 600,150 1200,100 L1200,300 L0,300 Z' fill='%23451a03'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </motion.div>
  );
}
