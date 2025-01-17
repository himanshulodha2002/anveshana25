"use client";

import AboutEvent from "@/components/AboutTheEvent";
import CallToActionSection from "@/components/CallToActionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import PrizeSection from "@/components/PrizeSection";
import SandParticles from "@/components/SandParticles";
import { useEffect, useRef, useState } from "react";

export default function DuneLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="min-h-[300vh] bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950 relative overflow-hidden"
    >
      <HeroSection />
      <AboutEvent />
      <FeaturesSection />
      <PrizeSection />
      {/* <TimelineSection/> */}
      <CallToActionSection />
      {/* <FaqSection/> */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {mounted && <SandParticles />}
      </div>
    </div>
  );
}
