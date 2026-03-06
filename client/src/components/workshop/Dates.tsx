import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const dates = [
  { date: "March 20th", event: "Workshop website and 1st CfP available", done: true },
  { date: "June 18th", event: "2nd CfP Dissemination", done: false },
  { date: "July 16th", event: "3rd CfP Dissemination", done: false },
  { date: "July 24th", event: "Submission Deadline (Not to be extended)", done: false, important: true },
  { date: "August 21th", event: "Notifications of Acceptance", done: false },
  { date: "October 25-26", event: "Workshop Days", done: false, important: true },
];

export default function Dates() {
  return (
    <section className="py-20 bg-white" id="dates">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Dates</h2>
            <p className="text-muted-foreground text-lg">
              All deadlines are 23:59 anywhere on earth (UTC-12).
            </p>
          </div>

          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-8 space-y-8">
            {dates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8"
              >
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white ${item.done ? 'bg-primary' : 'bg-primary/30'}`} />
                <div className={`p-5 rounded-xl border ${item.important ? 'bg-primary/5 border-primary/20' : 'bg-secondary/30'}`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <div className="flex items-center gap-2 text-primary font-bold min-w-[140px]">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                    <div className={`text-lg ${item.important ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                      {item.event}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
