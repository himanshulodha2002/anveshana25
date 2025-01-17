"use client";
import SandParticles from "@/components/SandParticles";
import { FocusCards } from "@/components/ui/focus-cards";
import { cards } from "@/lib/data";

export default function Gallery() {
  return (
    <div className="min-h-[300vh] bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto pt-32">
        <h1 className="text-4xl font-bold text-center text-white">Gallery</h1>
      </div>
      <div className="max-w-7xl mx-auto pt-16">
        <FocusCards cards={cards} />
      </div>
      <div className="fixed inset-0 pointer-events-none z-50">
        {<SandParticles />}
      </div>
    </div>
  );
}
