import SandwormAnimation from "@/components/SandwormAnimation";
import { Button } from "@/components/ui/Button";
import { motion, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  textY: any;
  duneY: any;
  sandwormY: any;
}

export default function HeroSection({
  textY,
  duneY,
  sandwormY,
}: HeroSectionProps) {
  return (
    <section className="h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Dune background */}
      <motion.div
        className="absolute bottom-0 w-full h-[70vh] z-5"
        style={{ y: duneY }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900 to-transparent" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPositionX: ["0%", "100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,500 C200,400 400,300 500,500 C600,700 800,600 1000,500 L1000,1000 L0,1000 Z' fill='%23c2410c'/%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat-x",
          }}
        />
      </motion.div>

      {/* Sandworm - placed directly in section */}
      <SandwormAnimation sandwormY={sandwormY} />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center space-y-6 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ y: textY }}
      >
        <h1 className="text-3xl lg:text-8xl font-bold text-white">ANVESHANA</h1>
        <p className="text-xl md:text-2xl text-orange-200">
          Fear is the mind-killer. Fear is the little-death that brings total
          obliteration.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            Register
          </Button>
          <Button
            size="lg"
            className="bg-white bg-opacity-40 text-gray-900 hover:bg-orange-600/20"
          >
            Learn More
          </Button>
        </div>
      </motion.div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/80 animate-bounce">
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
