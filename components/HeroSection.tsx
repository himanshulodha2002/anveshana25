import { Button } from "@/components/ui/Button";
import { motion, MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  textY: MotionValue<number>;
  duneY: MotionValue<number>;
}

export default function HeroSection({ textY, duneY }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden flex flex-col pt-32 md:pt-40 bg-gradient-to-b from-orange-950 via-orange-900 to-orange-950">
      {/* Floating shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Interactive background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.2) 0%, transparent 35%)`,
        }}
      />

      {/* Left Corner Logos */}
      <motion.div
        className="absolute top-4 left-4 md:top-4 md:left-4 z-[999] flex items-center gap-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link
          href="https://bmsit.ac.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/bmsitlogo.png"
              alt="BMSIT Logo"
              width={70}
              height={70}
              className="h-12 md:h-20 w-auto" // Adjusted height for mobile
              priority
              quality={100}
              unoptimized
            />
          </motion.div>
        </Link>

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/images/biceplogo.png"
            alt="BICEP Logo"
            width={70}
            height={70}
            className="h-12 md:h-20 w-auto" // Adjusted height for mobile
            priority
            quality={100}
            unoptimized
          />
        </motion.div>
      </motion.div>

      {/* Right Corner Logos with staggered entrance */}
      <motion.div
        // Move to left for mobile; keep right for desktop
        className="absolute top-4 left-[9rem] md:top-4 md:right-6 md:left-auto z-[999] flex items-center gap-4"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/images/anveshanalogo.png"
            alt="Anveshana Logo"
            width={100}
            height={100}
            className="h-12 md:h-20 w-auto" // Adjusted height for mobile
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/images/iiclogo.png"
            alt="IIC Logo"
            width={100}
            height={100}
            className="h-12 md:h-23 w-auto" // Adjusted height for mobile
          />
        </motion.div>
      </motion.div>

      {/* Enhanced background animations */}
      <motion.div
        className="absolute inset-0 bg-black/40 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-0 w-full h-[70vh] z-5 overflow-hidden"
        style={{ y: duneY }}
      >
        {/* First wave layer */}
        <motion.div
          className="absolute bottom-0 w-[400vw] h-[60vh] z-[1]"
          animate={{
            x: ["0%", "-50%"],
            y: [0, -10, 0, -15, 0],
          }}
          transition={{
            x: {
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            },
            y: {
              duration: 8,
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            background: "linear-gradient(180deg, #9a3412 0%, #c2410c 100%)",
            borderTopLeftRadius: "50% 80%",
            borderTopRightRadius: "50% 80%",
            opacity: 0.8,
          }}
        />

        {/* Second wave layer */}
        <motion.div
          className="absolute bottom-0 w-[400vw] h-[50vh] z-[2]"
          animate={{
            x: ["0%", "-50%"],
            y: [0, -15, 0, -10, 0],
          }}
          transition={{
            x: {
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            },
            y: {
              duration: 10,
              times: [0, 0.3, 0.5, 0.7, 1],
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            background: "linear-gradient(180deg, #ea580c 0%, #9a3412 100%)",
            borderTopLeftRadius: "60% 80%",
            borderTopRightRadius: "60% 80%",
            opacity: 0.6,
          }}
        />

        {/* Third wave layer */}
        <motion.div
          className="absolute bottom-0 w-[400vw] h-[40vh] z-[3]"
          animate={{
            x: ["0%", "-50%"],
            y: [0, -20, 0, -15, 0],
          }}
          transition={{
            x: {
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            },
            y: {
              duration: 12,
              times: [0, 0.4, 0.6, 0.8, 1],
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            background: "linear-gradient(180deg, #fb923c 0%, #ea580c 100%)",
            borderTopLeftRadius: "70% 100%",
            borderTopRightRadius: "70% 100%",
            opacity: 0.4,
          }}
        />
      </motion.div>

      {/* Enhanced content animations */}
      <motion.div
        className="relative z-20 text-center space-y-8 max-w-4xl mx-auto px-4 mt-36 md:mt-24"
        style={{ y: textY }}
      >
        <motion.h1
          className="text-4xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-400 [text-shadow:_0_2px_20px_rgb(251_146_60_/_20%)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          ANVESHANA
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-orange-200/90 [text-shadow:_0_2px_10px_rgb(251_146_60_/_20%)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Fear is the mind-killer. Fear is the little-death that brings total
          obliteration.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            href="https://unstop.com/p/anveshana-bms-institute-of-technology-and-management-1350340?ref=x70LNhV5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-orange-600/80 hover:bg-orange-700 text-white"
              >
                Register
              </Button>
            </motion.div>
          </Link>
          <Link href="/brochure.pdf" target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white bg-opacity-40 text-gray-900 hover:bg-orange-600/20"
              >
                Brochure
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* <SandwormAnimation sandwormY={sandwormY} /> */}
    </section>
  );
}
