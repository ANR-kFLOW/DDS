import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const topics = [
  "Knowledge graphs and ontologies for narrative representation and generation",
  "Linked data and semantic annotation for storytelling",
  "LLMs and Generative AI for data-driven narratives",
  "Benchmarking narrative coherence and quality",
  "Data-driven storytelling in journalism, education, and cultural heritage",
  "Interactive and participatory content creation (e.g., interactive interfaces, immersive experiences, human-AI collaborative authoring)",
  "Trustworthiness in automated storytelling (bias, hallucination, transparency)",
  "Development and evaluation of tools and platforms for data-driven stories",
  "Human-data interaction and crowdsourcing for narrative design",
  "Integration of methods from data science, HCI, cognitive psychology, creative writing, and visual arts",
  "Impact of localization, topicalization, and shareability on public engagement with data"
];

export default function Topics() {
  return (
    <section className="py-20 bg-secondary/20" id="topics">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Topics of Interest</h2>
          <p className="text-muted-foreground text-lg">
            We welcome submissions on the following topics, but not limited to:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-white border shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/90">{topic}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
