import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 mesh-bg relative overflow-hidden" id="home">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full font-medium text-sm mb-6 border border-primary/20">
            Workshop at ISWC 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Data-Driven Storytelling
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              (DDS 2026)
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Bridging Knowledge Graphs, GenAI, and Narrative to transform complex datasets into engaging, interpretable stories.
          </p>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-primary" />
              <span className="font-medium">October 25-26, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="flex flex-col">
                <span className="font-medium">Co-located with ISWC 2026: Bari, Italy</span>
                <span className="text-sm">Venue: The Nicolaus Hotel, Bari</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
