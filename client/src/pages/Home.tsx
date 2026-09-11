import { motion } from "framer-motion";
import { CalendarDays, MapPin, Send, FileText } from "lucide-react";
import About from "@/components/workshop/About";
import Dates from "@/components/workshop/Dates";
import Topics from "@/components/workshop/Topics";
import Chairs from "@/components/workshop/Chairs";
import Committee from "@/components/workshop/Committee";
import LogoStrip from "@/components/workshop/LogoStrip";
import HeroParticles from "@/components/workshop/HeroParticles";
import DDSLogo from "@/components/workshop/DDSLogo";

const program = [
  {
    time: "9:00",
    title: "Introduction",
    duration: "15 min",
    type: "general",
  },
  {
    time: "9:15",
    title: "Keynote: Enrico Motta",
    subtitle: "A neurosymbolic approach to capturing the viewpoint dynamics in media representations of political discourse",
    duration: "45 min",
    type: "keynote",
  },
  {
    time: "10:00",
    title: "Session 1: Narratives and Society",
    duration: "40 min",
    type: "session",
    papers: [
      {
        format: "Long paper",
        authors: "Lucas Anastasiou, Enrico Daga and Anna De Liddo",
        title: "Deliberative, Not Merely Informed: Argument-Grounded Polling from Mined Deliberation",
      },
      {
        format: "Short paper",
        authors: "Priscilla Dionesalvi",
        title: "Beyond Participation Indicators: Using Data-Driven Storytelling to Reveal Contested Audience Reception",
      },
    ],
  },
  {
    time: "10:40",
    title: "Coffee Break",
    duration: "30 min",
    type: "break",
  },
  {
    time: "11:10",
    title: "Session 2: From Knowledge Graphs to Human-Readable Stories",
    duration: "1 hour",
    type: "session",
    papers: [
      {
        format: "Long paper",
        authors: "Asara Senaratne and Leelanga Seneviratne",
        title: "From Sensor Streams to Health Narratives: Semantic Data Storytelling Using Wearable Knowledge Graphs",
      },
      {
        format: "Long paper",
        authors: "Tabea Tietz, Torsten Schrade, Etienne Posthumus, Linnaea Söhn, Jonatan Jalle Steller, Jörg Waitelonis and Harald Sack",
        title: "From Queries to Narratives: Cultural Heritage Data Stories for Knowledge Graph Exploration and Quality Assessment",
      },
      {
        format: "Short paper",
        authors: "Puyu Wang, Hang Dong and Rui Zhao",
        title: "From Triples to Cards: A Web Component for Human-Readable Linked Open Data",
      },
    ],
  },
  {
    time: "12:10",
    title: "Session 3: Generative Narratives: Control and Bias",
    duration: "40 min",
    type: "session",
    papers: [
      {
        format: "Long paper",
        authors: "Kotaro Nishigori and Hideaki Takeda",
        title: "Evaluation of Emotional Steerability in Generative Narratives for Tailor-Made Storytelling",
      },
      {
        format: "Long paper",
        authors: "Lia Draetta, Michael Oliverio, Walid Belafrites, Serafeim Chatzopoulos, Eleni Adamidi, Thanasis Vergoulis, Miriam Baglioni, Alessia Bardi, Paolo Manghi, Alessandro Mazzei and Rossana Damiano",
        title: "Who Is the Author? Investigating Gender and Geographical Biases in Scholarly Data-to-Text Generation",
      },
    ],
  },
  {
    time: "12:45",
    title: "Conclusion and Wrap-up",
    duration: "5 min",
    type: "general",
  },
  {
    time: "12:50",
    title: "End of Workshop",
    type: "end",
  },
];

export default function Home() {
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
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-muted-foreground bg-card/60 backdrop-blur-md p-4 md:p-6 rounded-3xl border w-fit mx-auto shadow-sm mb-10">
              <div className="flex items-center gap-3 px-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-foreground block">October 26, 2026</span>
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

        <div className="absolute bottom-6 left-0 right-0 z-10 px-4">
          <LogoStrip inline />
        </div>
      </section>
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
              <a href="https://easychair.org/conferences/?conf=dds2026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-foreground/90 transition-colors text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <Send className="w-5 h-5" aria-hidden="true" />
                Submit via EasyChair
              </a>
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

            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="inline-block w-1 h-6 rounded-full bg-primary"></span>
                Keynote Speaker
              </h3>
              <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <img
                    src="https://mediafutures.no/wp-content/uploads/Enrico_Motta.jpg"
                    alt="Enrico Motta"
                    className="w-28 h-28 rounded-full object-cover object-top shrink-0 ring-2 ring-primary/20"
                  />
                  <div className="text-center sm:text-left">
                    <p className="text-2xl font-bold leading-tight">Prof Enrico Motta</p>
                    <p className="text-muted-foreground mt-1">Knowledge Media Institute, The Open University</p>
                    <h4 className="mt-5 text-sm font-bold uppercase tracking-wider text-foreground/60">About the speaker</h4>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">Prof Enrico Motta is a Professor of Knowledge Technologies at the Knowledge Media Institute (KMi) of the UK’s Open University. He also holds a part-time professorial position at the Department of Information Science and Media Studies of the University of Bergen in Norway. His work spans a variety of research areas including data science, semantic and language technologies, intelligent systems and robotics, and human-computer interaction. He has authored over 400 refereed publications and his h-index is 71. His current activities include the use of AI techniques in the academic publishing industry; the deployment of intelligent robots in healthcare and urban settings; and the use of AI techniques to enable large-scale news analytics and support data journalism.</p>
                  </div>
                </div>

                <div className="mt-8 border-t pt-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60">Keynote talk</h4>
                  <p className="mt-3 text-lg font-semibold leading-relaxed text-primary">A neurosymbolic approach to capturing the viewpoint dynamics in media representations of political discourse</p>
                </div>

                <div className="mt-8 border-t pt-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60">Abstract</h4>
                    <div className="mt-3 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      <p>News sources play a central role in democratic societies. They contribute to shaping the political discourse by highlighting and giving a platform to specific topics, viewpoints and actors. Making sense of the resulting dynamics is essential to understand to what extent, for a given topic, individual news sources, as well as the news landscape as a whole, fairly represent the variety of viewpoints and actors that contribute to the political debate around the topic in question. Going beyond issues of fairness and balance, such sensemaking is also essential to allow a variety of user audiences to understand the evolution of the debate on a topic, e.g., the temporal evolution of the viewpoints that have emerged over the years on issues such as immigration, climate, AI technologies, and others.</p>
                      <p>For the past few years, together with my research team and external collaborators, I have been conducting a research programme focusing on this task, and in this talk I will provide an overview of the work carried out so far. Major contributions include a formal ontological characterization of the key concepts needed for reasoning about media representations of political discourse; large-scale knowledge graphs accurately capturing the variety of claims made by actors, which are present in an input news corpus; and a number of computational methods that allow us to capture the viewpoint dynamics at scale. In particular, I will show how the adoption of modern neurosymbolic AI pipelines, comprising both knowledge graphs and large language models, produces superior results in terms of accuracy and scalability. These results will be illustrated with case studies drawn from the Immigration and AI domains.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="inline-block w-1 h-6 rounded-full bg-primary" aria-hidden="true"></span>
                Timetable
              </h3>
              <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-[2.9rem] before:top-6 before:w-px before:bg-border sm:before:left-[4.4rem]" aria-label="Workshop timetable">
                {program.map((item) => (
                  <li key={`${item.time}-${item.title}`} className="relative grid grid-cols-[5.75rem_1fr] gap-3 sm:grid-cols-[8.75rem_1fr] sm:gap-5">
                    <div className="relative z-10 flex items-start">
                      <time className="min-w-[5.75rem] rounded-full border bg-background px-3 py-2 text-center text-sm font-bold tabular-nums sm:min-w-[8.75rem] sm:text-base">
                        {item.time}
                      </time>
                    </div>
                    <article className={`rounded-2xl border p-5 sm:p-6 ${
                      item.type === "keynote"
                        ? "border-primary/30 bg-primary/5"
                        : item.type === "break"
                          ? "border-dashed bg-secondary/20"
                          : item.type === "end"
                            ? "bg-foreground text-background"
                            : "bg-card shadow-sm"
                    }`}>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="font-bold text-lg leading-snug">{item.title}</h4>
                          {item.subtitle && (
                            <p className="mt-2 leading-relaxed text-foreground/75">{item.subtitle}</p>
                          )}
                        </div>
                        {item.duration && (
                          <span className="shrink-0 self-start rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                            {item.duration}
                          </span>
                        )}
                      </div>

                      {item.papers && (
                        <ul className="mt-5 space-y-4 border-t pt-5">
                          {item.papers.map((paper) => (
                            <li key={paper.title} className="pl-4 border-l-2 border-primary/30">
                              <span className="inline-block rounded bg-primary/10 px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wide text-primary">
                                {paper.format}
                              </span>
                              <p className="mt-2 font-semibold leading-snug">{paper.title}</p>
                              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{paper.authors}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>
      <Chairs />
      <Committee />
    </div>
  );
}
