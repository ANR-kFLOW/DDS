import Topics from "@/components/workshop/Topics";
import Dates from "@/components/workshop/Dates";
import { motion } from "framer-motion";

export default function CallForPapers() {
  return (
    <div>
      <section className="pt-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl font-bold tracking-tight mb-2">Call for Papers</h1>
            <h2 className="text-xl text-muted-foreground">Semantic Methods for Events and Stories (DDS 2026)</h2>
          </motion.div>
        </div>
      </section>

      <Topics />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl prose prose-lg text-foreground/80 max-w-none"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary border-b pb-4 no-underline">Submission Guidelines</h1>
            
            <p>We welcome the following types of contributions.</p>
            <ul>
              <li>Long papers (10-15 pages including references)</li>
              <li>Short papers (5-9 pages including references)</li>
            </ul>
            
            <p>We welcome any types of research, resource and application papers, as well as (short only) demonstration submissions.</p>
            
            <p>Submissions must be written in English and formatted in the <a href="https://www.overleaf.com/latex/templates/template-for-submissions-to-ceur-workshop-proceedings-ceur-ws-dot-org/wqyfdgftmcfw" target="_blank" rel="noopener noreferrer">CEUR-WS.org proceedings style</a>, single column format.</p>
            
            <p className="font-medium p-4 bg-primary/5 border border-primary/20 rounded-lg">
              We'll use single-anonymous review for submissions to encourage follow-up work, demos, and sharing of tools/resources without the overhead of anonymization.
            </p>
            
            <p>All papers and abstracts have to be submitted electronically via EasyChair.</p>
            <p>Each accepted paper needs to be presented by one of the authors, who agrees to register and participate to DDS 2026.</p>
            
            <div className="mt-8">
              <strong>Submission link:</strong> <a href="#" className="text-primary hover:underline">TBA</a>
            </div>

          </motion.div>
        </div>
      </section>

      <Dates />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary border-b pb-4">Proceedings</h1>
            <p className="text-lg">
              Workshop proceedings will be published via CEUR Workshop Proceedings. In case, we are open to collaborating with other workshops to create Joint Proceedings.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
