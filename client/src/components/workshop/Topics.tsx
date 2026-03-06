import { motion } from "framer-motion";

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
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary border-b pb-4">Topics of interest</h1>
          <p className="text-lg mb-6">Topics of interest include, but are not limited to:</p>
          
          <ul className="list-disc pl-6 space-y-3 text-lg text-foreground/80">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
