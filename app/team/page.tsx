"use client";
import SandParticles from "@/components/SandParticles";
import { FocusCardsTeachers } from "@/components/ui/focus-cards-teachers";
import { FocusCards } from "@/components/ui/focus-cards-teams";

import { teacherCards, teamCards } from "@/lib/data";

export default function Team() {
  return (
    <div className="min-h-[150vh] bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto pt-32">
        <h1 className="text-4xl font-bold text-center text-white">Our Team</h1>
      </div>
      <div className="max-w-7xl mx-auto mt-8">
        <FocusCardsTeachers cards={teacherCards} />
      </div>
      <div className="max-w-7xl mx-auto mt-8">
        <FocusCards cards={teamCards} />
      </div>
      <div className="fixed inset-0 pointer-events-none z-50">
        {<SandParticles />}
      </div>
    </div>
  );
}
