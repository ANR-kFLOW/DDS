import Topics from "@/components/workshop/Topics";
import Dates from "@/components/workshop/Dates";
import { motion } from "framer-motion";
import { FileText, Send } from "lucide-react";

export default function CallForPapers() {
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
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Call for Papers</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join us in exploring innovative methods for transforming complex datasets into engaging, interpretable narratives.
            </p>
          </motion.div>
        </div>
      </section>

      <Topics />

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Submission Guidelines</h2>
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
                      <span className="text-muted-foreground">10-15 pages including references</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <div>
                      <span className="font-bold block text-lg">Short papers</span>
                      <span className="text-muted-foreground">5-9 pages including references</span>
                    </div>
                  </li>
                </ul>
                <p className="mt-6 text-muted-foreground">
                  We welcome any types of research, resource and application papers, as well as (short only) demonstration submissions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border shadow-sm flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Formatting</h3>
                <p className="text-muted-foreground mb-6">
                  Submissions must be written in English and formatted in the CEUR-WS.org proceedings style, single column format.
                </p>
                <a 
                  href="https://www.overleaf.com/latex/templates/template-for-submissions-to-ceur-workshop-proceedings-ceur-ws-dot-org/wqyfdgftmcfw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  <FileText className="w-4 h-4" />
                  View LaTeX Template
                </a>
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl mb-12 text-center">
              <h3 className="text-xl font-bold mb-2">Review Process</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We'll use single-anonymous review for submissions to encourage follow-up work, demos, and sharing of tools/resources without the overhead of anonymization.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-lg mb-6">All papers and abstracts have to be submitted electronically via EasyChair.</p>
              <a href="#" className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold hover:bg-foreground/90 transition-colors text-lg">
                <Send className="w-5 h-5" />
                Submit via EasyChair
              </a>
              <p className="mt-4 text-sm text-muted-foreground">Link coming soon</p>
            </div>

          </motion.div>
        </div>
      </section>

      <Dates />

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Proceedings</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The complete set of papers will be published with the joint CEUR ESWC Workshop Proceedings, listed by the DBLP. We are also open to collaborating with other workshops to create Joint Proceedings.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
