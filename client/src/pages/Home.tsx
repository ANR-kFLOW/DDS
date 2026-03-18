import { motion } from "framer-motion";
import { CalendarDays, MapPin, FileText, Send, Clock, Coffee, Presentation } from "lucide-react";
import About from "@/components/workshop/About";
import Dates from "@/components/workshop/Dates";
import Topics from "@/components/workshop/Topics";
import Chairs from "@/components/workshop/Chairs";
import Committee from "@/components/workshop/Committee";
import Venue from "@/components/workshop/Venue";
import LogoStrip from "@/components/workshop/LogoStrip";
import HeroParticles from "@/components/workshop/HeroParticles";
import DDSLogo from "@/components/workshop/DDSLogo";

export default function Home() {
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
      <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center mesh-bg relative overflow-hidden" id="home" aria-labelledby="hero-heading">
        <HeroParticles />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-block bg-card border shadow-sm px-6 py-2 rounded-full font-bold text-sm mb-8 text-foreground/80 tracking-wide uppercase">
              Workshop at <a href="https://iswc2026.semanticweb.org/">ISWC 2026</a>
            </div>
            
            <h1 id="hero-heading" className="mb-4">
              <DDSLogo />
              <span className="sr-only">Data-Driven Storytelling (DDS 2026) — Bridging Knowledge Graphs, GenAI & Narrative</span>
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-tight">
              Data-Driven Storytelling Workshop
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-muted-foreground bg-card/60 backdrop-blur-md p-4 md:p-6 rounded-3xl border w-fit mx-auto shadow-sm">
              <div className="flex items-center gap-3 px-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-foreground block">October 25-26, 2026</span>
                  <span className="text-sm">Workshop Dates</span>
                </div>
              </div>
              <div className="w-px bg-border hidden sm:block"></div>
              <div className="flex items-center gap-3 px-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-foreground block">Bari, Italy</span>
                  <span className="text-sm">The Nicolaus Hotel</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <LogoStrip />
      <About />
      <Topics />
      <section className="py-24 bg-background relative" id="guidelines" aria-labelledby="guidelines-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 id="guidelines-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Submission Guidelines</h2>
              <p className="text-lg text-muted-foreground">We welcome various types of contributions to the workshop.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary/20 p-8 rounded-3xl border border-secondary">
                <h3 className="text-2xl font-bold mb-4">Paper Types</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold block text-lg">Long papers</span>
                      <span className="text-muted-foreground">9-14 pages including references</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold block text-lg">Short papers</span>
                      <span className="text-muted-foreground">4-8 pages including references</span>
                    </div>
                  </li>
                </ul>
                <p className="mt-6 text-muted-foreground">
                  We welcome any types of research, resource and application papers, as well as (short only) demonstration submissions.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl border shadow-sm flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Formatting</h3>
                <p className="text-muted-foreground mb-6">
                  Submissions must be written in English and formatted in the CEUR-WS.org proceedings style, single column format.
                </p>
                <a 
                  href="https://www.overleaf.com/latex/templates/template-for-submissions-to-ceur-workshop-proceedings-ceur-ws-dot-org/wqyfdgftmcfw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  View LaTeX Template
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 rounded-3xl border border-secondary space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                Contributions must be written in English and submitted in PDF formatted according to the{" "}
                <a href="https://www.overleaf.com/latex/templates/template-for-submissions-to-ceur-workshop-proceedings-ceur-ws-dot-org/hpvjjzhjxzjk" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
                  CEURART / CEUR-WS single-column style
                </a>. Please note that CEUR-WS requires a mandatory{" "}
                <a href="https://ceur-ws.org/GenAI/Policy.html" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
                  Declaration on Generative AI
                </a>.
              </p>
              <p>All submissions will undergo single-anonymous peer review.</p>
              <p>Authors of submitted papers would be asked to review 1 or 2 papers in case of need.</p>
              <p>At least one author of each accepted paper must register for the workshop and present the paper.</p>
            </div>

            <div className="text-center mt-8">
              <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-foreground/90 transition-colors text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-disabled="true">
                <Send className="w-5 h-5" aria-hidden="true" />
                Submit via EasyChair
              </a>
              <p className="mt-4 text-sm text-muted-foreground">Link coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Dates />
      <section className="py-24 bg-background" id="program" aria-labelledby="program-heading">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 id="program-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Workshop Program</h2>
              <p className="text-lg text-muted-foreground">Half-day schedule featuring keynotes and paper presentations</p>
            </div>

            <div className="bg-secondary/10 rounded-3xl p-8 border shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Proceedings</h3>
                <p className="text-muted-foreground">Accepted papers will be published in CEUR Workshop Proceedings, in line with ISWC workshop practices and applicable publication requirements.</p>
              </div>
              <a href="#" className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors pointer-events-none opacity-50 shrink-0">
                Link Available Soon
              </a>
            </div>

            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {schedule.map((item, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-muted-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl border shadow-sm group-hover:shadow-md transition-all">
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
      <Venue />
      <Chairs />
      <Committee />
    </div>
  );
}
