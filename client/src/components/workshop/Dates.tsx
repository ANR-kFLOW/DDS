import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const dates = [
  { date: "July 24th", event: "Submission deadline", done: false, important: true },
  { date: "August 21th", event: "Notifications", done: false },
  { date: "TBA", event: "Camera-ready version", done: false },
  { date: "October 25-26", event: "Workshop day", done: false, important: true },
];

export default function Dates() {
  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Important Dates</h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm text-sm font-medium text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              All deadlines are 23:59 anywhere on earth (UTC-12).
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {dates.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col p-6 rounded-2xl border ${item.important ? 'bg-primary/5 border-primary/20 shadow-sm' : 'bg-white shadow-sm hover:shadow-md transition-shadow'}`}
              >
                <span className="text-muted-foreground font-medium mb-2 text-sm uppercase tracking-wider">{item.event}</span>
                <span className={`text-xl md:text-2xl ${item.important ? 'font-bold text-primary' : 'font-semibold text-foreground'}`}>
                  {item.date}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
