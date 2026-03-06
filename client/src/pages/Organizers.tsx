import Chairs from "@/components/workshop/Chairs";
import Committee from "@/components/workshop/Committee";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function Organizers() {
  return (
    <div>
      <section className="pt-24 pb-16 mesh-bg relative border-b">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 text-primary">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Workshop Organizers</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet the chairs and program committee behind Data-Driven Storytelling (DDS 2026).
            </p>
          </motion.div>
        </div>
      </section>

      <Chairs />
      <Committee />
    </div>
  );
}
