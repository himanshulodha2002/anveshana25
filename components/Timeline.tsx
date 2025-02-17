"use client";

import { Card } from "@/components/ui/Card";
import { timelineEvents } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function TimelineSection() {
  return (
    <section className="relative bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950 py-16 md:py-24 -mb-1">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-grid-white/[0.02] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c2410c' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold text-orange-100 text-center mt-4 mb-12 flex items-center justify-center gap-2">
            Timeline
          </h1>
          <p className="text-orange-300 max-w-2xl mx-auto text-lg font-mono">
            Follow the path from proposal to prototype in our three-stage
            competition
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Central Timeline Line */}
          <div className="absolute h-full w-1 bg-gradient-to-b from-orange-600/40 via-orange-500/60 to-orange-600/40 left-[1.65rem] md:left-1/2 md:-translate-x-1/2 top-0" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0 pl-16 md:pl-0"
            >
              <div
                className={clsx(
                  "flex items-center gap-8",
                  "md:justify-between",
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                )}
              >
                {/* Timeline Node */}
                <div className="absolute left-[0.85rem] md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-30">
                  <div className="w-8 h-8 bg-orange-950 rounded-full border-4 border-orange-500 shadow-lg shadow-orange-900" />
                  <div
                    className={clsx(
                      "absolute top-1/2 -translate-y-1/2 h-0.5 bg-orange-500/50 -z-[999]",
                      "w-8 left-full", // Mobile
                      "md:w-12", // Desktop
                      index % 2 === 0 ? "md:-left-full" : "md:-right-full"
                    )}
                  />
                </div>

                {/* Content Card */}
                <Card
                  className={clsx(
                    "flex-1",
                    "md:max-w-[calc(50%-3rem)]",
                    "bg-orange-900/40 border-orange-500/20 p-6",
                    "backdrop-blur-sm relative group hover:bg-orange-900/60",
                    "transition-colors duration-300 font-mono"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent rounded-lg" />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-orange-950/50 rounded-lg group-hover:bg-orange-900/50 transition-colors duration-300">
                        <event.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-orange-100">
                          {event.title}
                        </h3>
                        <p className="text-orange-300">{event.date}</p>
                      </div>
                    </div>
                    <p className="text-orange-200">{event.description}</p>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
