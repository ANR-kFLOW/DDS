import { motion } from "framer-motion";
import { Clock, Coffee, FileText, Presentation } from "lucide-react";

export default function Program() {
  const schedule = [
    { time: "9:00", duration: "10'", title: "Workshop welcome and introduction", type: "intro", icon: Presentation },
    { time: "9:10", duration: "30'", title: "Keynote / Invited talk", speaker: "Speaker TBA", type: "keynote", icon: Presentation },
    { time: "9:40", duration: "1h", title: "Paper presentations", type: "paper", icon: FileText },
    { time: "10:40", duration: "30'", title: "Coffee break", type: "break", icon: Coffee },
    { time: "11:10", duration: "1h", title: "Paper presentations", type: "paper", icon: FileText },
    { time: "12:10", duration: "10'", title: "Wrap up", type: "end", icon: Clock },
  ];

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
              <Clock className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Workshop Program</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Half-day schedule featuring keynotes and paper presentations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 border shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Proceedings</h3>
                <p className="text-muted-foreground">To be published via CEUR Workshop Proceedings</p>
              </div>
              <a href="#" className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors pointer-events-none opacity-50">
                Link Available Soon
              </a>
            </div>

            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {schedule.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-secondary text-muted-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border shadow-sm group-hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-primary font-bold">{item.duration}</span>
                    </div>
                    <h3 className={`text-xl font-bold ${item.type === 'break' ? 'text-muted-foreground' : 'text-foreground'}`}>
                      {item.title}
                    </h3>
                    {item.speaker && (
                      <p className="text-muted-foreground mt-2 italic">{item.speaker}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}
