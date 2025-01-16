'use client'

import { motion } from "framer-motion"
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { Card } from "./ui/Card"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-orange-950 via-orange-900 to-orange-950 border-t border-orange-500/20 font-mono">
      {/* Main Footer */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 max-w-8xl mx-auto">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h4 className="text-2xl font-semibold text-orange-100 mb-6">Quick Links</h4>
            <ul className="space-y-4 inline-block">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex justify-center">
                  <a 
                    href={link.href}
                    className="text-orange-300 hover:text-orange-200 transition-colors flex items-center gap-3 group"
                  >
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h4 className="text-2xl font-semibold text-orange-100 mb-6">About College</h4>
            <Card className="bg-orange-900/20 border-orange-500/20 p-6">
              <div className="space-y-4">
                <h5 className="text-orange-100 font-semibold text-lg">
                  BMS Institute of Technology & Management
                </h5>
                <p className="text-orange-300">
                  Avalahalli, Doddaballapur Main Road, Bengaluru, Karnataka 560064
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h4 className="text-2xl font-semibold text-orange-100 mb-6">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex justify-center">
                <a 
                  href="mailto:bicep@bmsit.in"
                  className="text-orange-300 hover:text-orange-200 transition-colors flex items-center gap-3"
                >
                  <Mail className="h-5 w-5 text-orange-400" />
                  bicep@bmsit.in
                </a>
              </li>
              <li className="flex justify-center">
                <a 
                  href="tel:+918861201994"
                  className="text-orange-300 hover:text-orange-200 transition-colors flex items-center gap-3"
                >
                  <Phone className="h-5 w-5 text-orange-400" />
                  +91 886 120 1994
                </a>
              </li>
              <li className="flex justify-center">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span className="text-orange-300">
                    BICEP, First Floor, Library Building
                    BMSIT&M Campus
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-orange-500/20 bg-orange-950/50">
        <div className="container mx-auto px-8 py-6">
          <motion.p 
            className="text-center text-orange-300 text-base flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Made with 
            <Heart className="h-4 w-4 text-orange-500 animate-pulse" fill="currentColor" /> 
            by IIC BMSIT&M
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

const quickLinks = [
  { label: 'Register Now', href: '#register' },
  { label: 'About Event', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Rules & Guidelines', href: '#rules' },
  { label: 'FAQs', href: '#faqs' },
]

