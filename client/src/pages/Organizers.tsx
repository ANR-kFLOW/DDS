import Chairs from "@/components/workshop/Chairs";
import Committee from "@/components/workshop/Committee";
import { motion } from "framer-motion";

export default function Organizers() {
  return (
    <div>
      <section className="pt-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-2">Organizers</h1>
            <h2 className="text-xl text-muted-foreground">Data-Driven Storytelling (DDS 2026)</h2>
          </motion.div>
        </div>
      </section>

      <Chairs />
      <Committee />
    </div>
  );
}
