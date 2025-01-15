import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  return (
    <section className="min-h-screen relative z-30 bg-orange-950">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-orange-100">
            Join House Atreides
          </h2>
          <p className="text-xl text-orange-300">
            The spice must flow. Take your place among the great houses and
            shape the destiny of the known universe.
          </p>
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            Pledge Your Allegiance
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
