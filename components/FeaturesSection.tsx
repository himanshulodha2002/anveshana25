import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Eye, Shield, Sword } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="min-h-screen relative z-30 bg-gradient-to-b from-orange-900/0 via-orange-950 to-orange-950">
      <div className="container mx-auto px-16 py-32">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 bg-orange-900/40 border-orange-800 backdrop-blur">
            <Shield className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-orange-100 mb-2">
              House Protection
            </h3>
            <p className="text-orange-300">
              your legacy with the finest warriors and shields in the known
              universe.
            </p>
          </Card>
          <Card className="p-6 bg-orange-900/40 border-orange-800 backdrop-blur">
            <Sword className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-orange-100 mb-2">
              Combat Training
            </h3>
            <p className="text-orange-300">
              Master the art of war with our elite combat instructors and
              advanced weaponry.
            </p>
          </Card>
          <Card className="p-6 bg-orange-900/40 border-orange-800 backdrop-blur">
            <Eye className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold text-orange-100 mb-2">
              Spice Awareness
            </h3>
            <p className="text-orange-300">
              Enhance your consciousness and unlock the secrets of space and
              time.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
