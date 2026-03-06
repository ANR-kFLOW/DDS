import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import About from "@/components/workshop/About";
import Dates from "@/components/workshop/Dates";

export default function Home() {
  return (
    <div>
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 mesh-bg relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Data-Driven Storytelling
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                (DDS 2026)
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground font-medium mb-8">
              Workshop at <a href="#" className="text-primary hover:underline">ISWC 2026</a>
            </h2>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground bg-white/60 backdrop-blur-sm p-6 rounded-2xl border w-fit">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-6 h-6 text-primary" />
                <span className="font-medium text-lg text-foreground">October 25-26, 2026</span>
              </div>
              <div className="w-px bg-border hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">Bari, Italy</span>
                  <span className="text-sm">The Nicolaus Hotel</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <About />
      <Dates />
    </div>
  );
}
