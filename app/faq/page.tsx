"use client";
import FaqSection from "@/components/Faq";
import SandParticles from "@/components/SandParticles";
import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <div className=" bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950 relative overflow-hidden">
      
      <FaqSection faqCount={faqs.length} isVisible={false}/>
   
      <div className="fixed inset-0 pointer-events-none z-50">
        {<SandParticles />}
      </div>
    </div>
  );
}
