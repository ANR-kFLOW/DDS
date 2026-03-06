import { motion } from "framer-motion";
import { Clock, FileText, Users, Coffee } from "lucide-react";

export default function Format() {
  const schedule = [
    { time: "10'", title: "Workshop welcome and introduction", icon: Users },
    { time: "30'", title: "Keynote / Invited talk", icon: Users },
    { time: "1h", title: "Paper presentations", icon: FileText },
    { time: "30'", title: "Coffee break", icon: Coffee },
    { time: "1h", title: "Paper presentations", icon: FileText },
    { time: "10'", title: "Wrap up", icon: Clock },
  ];

  return (
    <section className="py-20 bg-secondary/20" id="format">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Workshop Format</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We propose a half-day workshop focused on engaging discussions and presentations. 
              The workshop aims to foster collaboration between researchers and practitioners 
              working on knowledge graphs, generative AI, and narratives.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="font-bold text-lg mb-2">Review Policy</h3>
                <p className="text-muted-foreground">
                  Single-anonymous review for submissions to encourage follow-up work, demos, and sharing of tools/resources without the overhead of anonymization.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <h3 className="font-bold text-lg mb-2">Publication Policy</h3>
                <p className="text-muted-foreground">
                  Workshop proceedings will be published via CEUR Workshop Proceedings.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl border shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              Proposed Schedule
            </h3>
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 border-b last:border-0 pb-4 last:pb-0">
                  <div className="w-16 font-mono text-primary font-semibold bg-primary/10 py-1 text-center rounded">
                    {item.time}
                  </div>
                  <div className="flex-1 font-medium text-foreground flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
