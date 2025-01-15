"use client";

import CallToActionSection from "@/components/CallToActionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import SandParticles from "@/components/SandParticles";
import SandwormAnimation from "@/components/SandwormAnimation";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function DuneLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sandwormY = useTransform(scrollYProgress, [0, 1], [1000, -100]);
  const duneY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 50, 200]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="min-h-[300vh] bg-gradient-to-b from-orange-900 via-orange-800 to-orange-950 relative overflow-hidden"
    >
      <HeroSection textY={textY} duneY={duneY} />
      <FeaturesSection />
      <SandwormAnimation sandwormY={sandwormY} />
      <CallToActionSection />
      <div className="fixed inset-0 pointer-events-none z-50">
        {mounted && <SandParticles />}
      </div>
    </div>
  );
}
