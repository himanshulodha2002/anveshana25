'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/Card";
import {Trophy, Medal, Gift } from 'lucide-react'

const prizes = [
    {
      place: "First Prize",
      amount: "100,000",
      iconColor: "text-amber-400",
      extra: "Certificate of Excellence"
    },
    {
      place: "Second Prize",
      amount: "50,000",
      iconColor: "text-gray-300",
      extra: "Certificate of Merit"
    },
    {
      place: "Third Prize",
      amount: "25,000",
      iconColor: "text-orange-600",
      extra: "Certificate of Achievement"
    }
  ]


export default function PrizeSection() {
  return (

    <section className="min-h-screen relative z-30 bg-gradient-to-b from-orange-900/0 via-orange-950 to-orange-950 py-24">
      <div className="container mx-auto px-4">
    <motion.div
    className="mb-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3 className="text-3xl font-bold text-orange-100 text-center mb-12 flex items-center justify-center gap-2">
      <Trophy className="h-8 w-8 text-orange-400" />
      Prizes & Rewards
    </h3>
    <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            {/* Top 3 Prizes */}
            <div className="grid md:grid-cols-3 gap-6">
              {prizes.slice(0, 3).map((prize, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden group bg-orange-950/50 border-orange-500/20">
                    <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent" />
                    <div className="relative p-6 text-center">
                      <div className="mb-4">
                        <Medal className={`h-12 w-12 mx-auto ${prize.iconColor}`} />
                      </div>
                      <h4 className="text-xl font-bold text-orange-100 mb-2">{prize.place}</h4>
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-2">
                        ₹{prize.amount}
                      </div>
                     
                      {prize.extra && (
                        <div className="flex items-center justify-center gap-2 text-orange-300">
                          <Gift className="h-4 w-4" />
                          <span className="text-sm">{prize.extra}</span>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Consolation Prize */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto"
            >
              <Card className="relative overflow-hidden group bg-orange-950/50 border-orange-500/20">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent" />
                <div className="relative p-6 text-center">
                  <div className="mb-4">
                    <Medal className="h-12 w-12 mx-auto text-orange-400" />
                  </div>
                  <h4 className="text-xl font-bold text-orange-100 mb-2">Consolation Prizes</h4>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-2">
                    ₹50,000
                  </div>
                  <p className="text-sm text-orange-300 mb-4">₹5,000 × 10 Teams</p>
                  <div className="flex items-center justify-center gap-2 text-orange-300">
                    <Gift className="h-4 w-4" />
                    <span className="text-sm">Certificate of Participation</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

  </motion.div>
  </div>
  </section>
  )
}
