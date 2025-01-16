import { Card } from "@/components/ui/Card";
import { RoundCardProps } from "@/lib/types";
import { motion } from "framer-motion";
import { Calendar, Presentation, Cpu, ChevronRight} from 'lucide-react'
import { FC } from "react";


const rounds = [
  {
    number: "I",
    icon: Calendar,
    title: "Evaluation of Proposal",
    date: "February 2025",
    description: "Submit your innovative prototype proposal for initial evaluation"
  },
  {
    number: "II",
    icon: Presentation,
    title: "Virtual Presentation",
    date: "March 2025",
    description: "Present your prototype concept to our expert panel virtually"
  },
  {
    number: "III",
    icon: Cpu,
    title: "Prototype Competition",
    date: "March 28, 2025",
    description: "Demonstrate your working prototype at the final grand finale event"
  }
]
const RoundCard: FC<RoundCardProps> =({ number, icon: Icon, title, date, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="relative group overflow-hidden bg-orange-950/50">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent" />
        <div className="relative p-6 space-y-4">
          {/* Round Number with Line */}
          <div className="flex items-center gap-4 text-orange-400">
            <span className="text-3xl font-bold">{number}</span>
            {index < 3 && (
              <div className="flex-1 relative h-0.5 bg-orange-400/20 group-hover:bg-orange-400/40 transition-colors">
                <ChevronRight className="absolute -right-2 -top-2 h-5 w-5" />
              </div>
            )}
          </div>

          {/* Icon with Glow Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full transform group-hover:scale-150 transition-transform" />
            <Icon className="h-8 w-8 text-orange-400 relative z-10" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-semibold text-orange-100 mb-2 ">{title}</h3>
            <p className="text-orange-200 font-medium mb-3 font-mono">{date}</p>
            <p className="text-orange-300 font-mono">{description}</p>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 border border-orange-500/20 group-hover:border-orange-400/50 transition-colors" />
        </div>
      </Card>
    </motion.div>
  )
}


export default function FeaturesSection() {
  return (
    <section className="min-h-screen relative z-30 bg-gradient-to-b from-orange-950 via-orange-900 to-orange-950 py-24">
      <div className="container mx-auto px-4">

      <div className="text-center mb-16">
          <h3 className="text-4xl underline font-bold text-orange-100 text-center mb-12 flex items-center justify-center gap-2">
            Rounds
            </h3>
          </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {rounds.map((round, index) => (
            <RoundCard key={index} {...round} index={index} />
          ))}
        </div>
        </div>

    </section>
  );
}
