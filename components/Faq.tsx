"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/Button";
import Link from "next/link";
import { FaqSectionProps } from "@/lib/types";
import { faqs } from "@/lib/data";

export default function FaqSection({
  faqCount = 5,
  isVisible = true,
}: FaqSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-orange-950 via-orange-800 to-orange-950 py-24">
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-orange-100 text-center mb-12 flex items-center justify-center gap-2">
            Frequently Asked Questions
          </h3>
          <p className="text-orange-300 max-w-2xl mx-auto text-lg font-mono">
            Find answers to common questions about the prototype competition
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4 font-mono">
            {faqs.slice(0, faqCount).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-orange-500/20 rounded-lg px-6 bg-orange-900/40 backdrop-blur-sm data-[state=open]:bg-orange-900/60 transition-colors duration-200"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-orange-100 hover:text-orange-200 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-orange-300 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {isVisible && (
            <div className="flex justify-center mt-4">
              <Link href={`/faq`}>
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-mono w-max"
                >
                  More
                </Button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
