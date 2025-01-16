import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {Trophy, QrCode, Sword } from 'lucide-react'
import { Card } from "@/components/ui/Card";

export default function CallToActionSection() {
  return (
    <section className="relative z-30 bg-gradient-to-b from-orange-950 via-orange-900 to-orange-950 py-24">
      <div className="container mx-auto px-4">

      <h3 className="text-3xl font-bold text-orange-100 text-center mb-12 flex items-center justify-center gap-2">
      <Sword className="h-8 w-8 text-orange-400" />
      Lets the Battle begin
    </h3>

    <motion.div 
    className="relative"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <Card className="bg-black/50 border border-orange-500/20 p-8 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-amber-600/10 rounded-lg" />
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-orange-100 mb-2 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-orange-400" />
            Prize Pool
          </h3>
          <p className="text-orange-300">
            Compete for exciting prizes and recognition
          </p>
        </div>
        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
          ₹2,25,000
        </div>
        <Button
          size="lg" 
          className="bg-orange-600 hover:bg-orange-700 text-white"
          onClick={() => window.open('https://unstop.com/p/anveshana-bms-institute-of-technology-and-management-1350340?ref=x70LNhV5', '_blank')}
        >
          Register Now
          <QrCode className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  </motion.div>
  </div>
  </section>
  );
}
