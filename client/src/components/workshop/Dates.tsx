import { motion } from "framer-motion";
import { Clock, CalendarPlus } from "lucide-react";
import { useState, useEffect } from "react";
import { downloadICS } from "@/lib/calendar";

const dates = [
  { date: "July 24th", oldDate: "July 17th", isoDate: "2026-07-25T11:59:00Z", event: "Abstract deadline", done: false, important: true },
  { date: "July 30th", oldDate: "July 24th", isoDate: "2026-07-31T11:59:00Z", event: "Submission deadline", done: false, important: true },
  { date: "August 21st", isoDate: "2026-08-22T11:59:00Z", event: "Notifications", done: false },
  { date: "September 18th", isoDate: "2026-09-19T11:59:00Z", event: "Camera-ready version", done: false },
];

function useCountdown(targetDate: string | null) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    if (!targetDate) return;

    const calculate = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setIsPast(true);
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return { timeLeft, isPast };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-foreground text-background w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-mono text-2xl md:text-3xl font-bold shadow-sm" aria-hidden="true">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-[11px] uppercase tracking-widest text-muted-foreground mt-2 font-medium" aria-hidden="true">{label}</span>
    </div>
  );
}

function CountdownTimer({ isoDate, event }: { isoDate: string | null; event: string }) {
  const { timeLeft, isPast } = useCountdown(isoDate);

  if (!isoDate) return null;
  if (isPast) return <span className="text-sm font-medium text-muted-foreground mt-3 inline-block">Passed</span>;
  if (!timeLeft) return null;

  const srText = `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes until ${event}`;

  return (
    <div className="flex gap-2 mt-4" role="timer" aria-label={`Countdown to ${event}`}>
      <span className="sr-only" aria-live="polite" aria-atomic="true">{srText}</span>
      <CountdownUnit value={timeLeft.days} label="Days" />
      <div className="text-2xl font-bold text-muted-foreground/40 self-start mt-3" aria-hidden="true">:</div>
      <CountdownUnit value={timeLeft.hours} label="Hrs" />
      <div className="text-2xl font-bold text-muted-foreground/40 self-start mt-3" aria-hidden="true">:</div>
      <CountdownUnit value={timeLeft.minutes} label="Min" />
      <div className="text-2xl font-bold text-muted-foreground/40 self-start mt-3" aria-hidden="true">:</div>
      <CountdownUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
}

function AddToCalendarButton({ item }: { item: typeof dates[number] }) {
  if (!item.isoDate) return null;

  const handleClick = () => {
    if (item.event === "Workshop day") {
      downloadICS({
        title: "DDS 2026 Workshop — Data-Driven Storytelling",
        description: "Data-Driven Storytelling Workshop at ISWC 2026. More info: https://dds2026.github.io",
        location: "The Nicolaus Hotel, Via Cardinale Agostino Ciasca 27, 70124 Bari, Italy",
        startDate: "2026-10-25",
        endDate: "2026-10-26",
        allDay: true,
      });
    } else if (item.event === "Abstract deadline") {
      downloadICS({
        title: "DDS 2026 — Abstract Deadline",
        description: "Abstract submission deadline for DDS 2026 Workshop at ISWC 2026. All deadlines are 23:59 AoE (UTC-12).",
        location: "",
        startDate: item.isoDate!,
        allDay: true,
      });
    } else if (item.event === "Submission deadline") {
      downloadICS({
        title: "DDS 2026 — Submission Deadline",
        description: "Paper submission deadline for DDS 2026 Workshop at ISWC 2026. All deadlines are 23:59 AoE (UTC-12).",
        location: "",
        startDate: item.isoDate!,
        allDay: true,
      });
    } else if (item.event === "Notifications") {
      downloadICS({
        title: "DDS 2026 — Notification of Acceptance",
        description: "Notification of acceptance/rejection for DDS 2026 Workshop submissions.",
        location: "",
        startDate: item.isoDate!,
        allDay: true,
      });
    } else if (item.event === "Camera-ready version") {
      downloadICS({
        title: "DDS 2026 — Camera-ready Deadline",
        description: "Camera-ready paper deadline for DDS 2026 Workshop at ISWC 2026. All deadlines are 23:59 AoE (UTC-12).",
        location: "",
        startDate: item.isoDate!,
        allDay: true,
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
      data-testid={`button-add-calendar-${item.event.toLowerCase().replace(/\s+/g, '-')}`}
      aria-label={`Add ${item.event} to calendar`}
    >
      <CalendarPlus className="w-4 h-4" />
      Add to Calendar
    </button>
  );
}

export default function Dates() {
  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden" id="dates" aria-labelledby="dates-heading">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden="true"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 id="dates-heading" className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Important Dates</h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-card border shadow-sm text-sm font-medium text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
              All deadlines are 23:59 anywhere on earth (UTC-12).
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6" role="list" aria-label="Important dates list">
            {dates.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                role="listitem"
                className={`flex flex-col p-6 rounded-2xl border ${item.important ? 'bg-primary/5 border-primary/20 shadow-sm' : 'bg-white dark:bg-card shadow-sm hover:shadow-md transition-shadow'}`}
              >
                <span className="text-muted-foreground font-medium mb-2 text-sm uppercase tracking-wider">{item.event}</span>
                <span className={`text-xl md:text-2xl ${item.important ? 'font-bold text-primary' : 'font-semibold text-foreground'}`}>
                  {'oldDate' in item && item.oldDate && (
                    <span className="line-through text-muted-foreground font-normal text-base mr-2">{item.oldDate}</span>
                  )}
                  <time dateTime={item.isoDate || undefined}>{item.date}</time>
                </span>
                <CountdownTimer isoDate={item.isoDate} event={item.event} />
                <AddToCalendarButton item={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
