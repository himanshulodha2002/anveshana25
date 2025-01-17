"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function AboutEvent() {
  return (
    <section className="min-h-screen relative z-30 bg-gradient-to-b from-orange-950 via-orange-900 to-orange-950 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-16">
            <h3 className="text-4xl underline font-bold text-orange-100 text-center mb-12 flex items-center justify-center gap-2">
              About the Event
            </h3>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-orange-200 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center font-mono">
              BMSIT&amp;M PRESENTS &quot;ANVESHANA PROTOTYPE COMPETITION
              2024-25&quot;, A NATIONAL LEVEL INNOVATION CHALLENGE FOR STUDENTS,
              FOCUSED ON REAL-WORLD PROBLEMS THAT BRIDGE ACADEMIA AND INDUSTRY.
              PARTICIPANTS WILL INNOVATE AND PROTOTYPE SOLUTIONS TO PRACTICAL
              CHALLENGES. THIS EVENT OFFERS A PLATFORM FOR STUDENTS TO SHOWCASE
              THEIR SKILLS AND GAIN VALUABLE EXPERIENCE.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Hours */}
            <Card className="p-8 bg-orange-900/40 border-orange-800 backdrop-blur hover:bg-orange-900/60 transition-colors duration-300">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-4"
              >
                <h3 className="text-5xl font-bold text-orange-500">3</h3>
                <p className="text-xl text-orange-200 font-mono">ROUNDS</p>
              </motion.div>
            </Card>

            {/* Participants */}
            <Card className="p-8 bg-orange-900/40 border-orange-800 backdrop-blur hover:bg-orange-900/60 transition-colors duration-300">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-4"
              >
                <h3 className="text-5xl font-bold text-orange-500">200+</h3>
                <p className="text-xl text-orange-200 font-mono">PROPOSALS</p>
              </motion.div>
            </Card>

            {/* Prize Pool */}
            <Card className="p-8 bg-orange-900/40 border-orange-800 backdrop-blur hover:bg-orange-900/60 transition-colors duration-300">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-4"
              >
                <h3 className="text-5xl font-bold text-orange-500">225K</h3>
                <p className="text-xl text-orange-200 font-mono">PRIZE POOL</p>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
