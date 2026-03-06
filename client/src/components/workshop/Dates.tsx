import { motion } from "framer-motion";

const dates = [
  { date: "March 20th", event: "Workshop website and CfP available online", done: true },
  { date: "June 18th", event: "2nd CfP Dissemination", done: false },
  { date: "July 16th", event: "3rd CfP Dissemination", done: false },
  { date: "July 24th", event: "Submission deadline (Not to be extended)", done: false, important: true },
  { date: "August 21th", event: "Notifications out", done: false },
  { date: "October 25-26", event: "Workshop days", done: false, important: true },
];

export default function Dates() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary border-b pb-4">Important dates</h1>
          
          <ul className="space-y-4 mb-8 text-lg">
            {dates.map((item, index) => (
              <li key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center">
                <span className="font-semibold w-48 shrink-0">{item.event}:</span>
                <span className={`${item.important ? 'font-bold' : ''} ${item.done ? 'line-through text-muted-foreground' : ''}`}>
                  {item.date}
                </span>
              </li>
            ))}
          </ul>
          
          <p className="text-muted-foreground italic">
            All deadlines are 23:59 anywhere on earth (UTC-12).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
