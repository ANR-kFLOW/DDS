import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Abstract</h2>
          <div className="prose prose-lg text-muted-foreground">
            <p>
              DDS 2026 aims to explore innovative methods for transforming complex datasets into engaging, interpretable narratives. This workshop focuses on the intersection of semantic technologies, artificial intelligence, and narrative design, seeking to make data more relevant, interactive, and shareable. 
            </p>
            <p className="mt-4">
              We invite researchers and practitioners from diverse fields—including NLP, knowledge representation, HCI, Information retrieval and creative industries—to discuss frameworks and tools that enhance data engagement through storytelling, games, and art.
            </p>
            <p className="mt-4">
              Key topics include ontological coherence, generative AI, and participatory content creation, with the goal of empowering experts to communicate effectively in domains like education, journalism, and cultural heritage.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 mt-20"
        >
          <div className="bg-secondary/30 p-8 rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">Motivation</h3>
            <p className="text-muted-foreground leading-relaxed">
              The rise of Large Language Models (LLMs) has brought both opportunities and challenges in generating coherent, context-aware narratives from complex data. While generative models can produce fluent narratives, they often lack semantic grounding, provenance awareness, and narrative consistency. This workshop is timely as it aims to bridge semantic representations and generative AI, building on established Semantic Web research while addressing current developments in AI.
            </p>
          </div>
          <div className="bg-secondary/30 p-8 rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">Target Audience</h3>
            <p className="text-muted-foreground leading-relaxed">
              The workshop targets researchers and practitioners working on knowledge graphs, semantic technologies, generative AI, and narrative-based data exploration. This includes members of the ISWC community active in ontology engineering, Linked Data, reasoning, as well as scholars from NLP, HCI, information retrieval, digital humanities, and creative industries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
