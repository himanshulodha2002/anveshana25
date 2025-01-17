"use client";
import SandParticles from "@/components/SandParticles";
import TimelineSection from "@/components/Timeline";

export default function Timeline() {
  return (
    <div className=" bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950 relative overflow-hidden">
      <TimelineSection />
      <div className="fixed inset-0 pointer-events-none z-50">
        {<SandParticles />}
      </div>
    </div>
  );
}
