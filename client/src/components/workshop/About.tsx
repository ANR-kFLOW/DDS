import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary border-b pb-4">Workshop description</h1>
          <div className="prose prose-lg text-foreground/80 max-w-none">
            <p className="lead text-xl mb-6">
              DDS 2026 aims to explore innovative methods for transforming complex datasets into engaging, interpretable narratives.
            </p>
            <p className="mb-4">
              This workshop focuses on the intersection of semantic technologies, artificial intelligence, and narrative design, seeking to make data more relevant, interactive, and shareable. We invite researchers and practitioners from diverse fields—including NLP, knowledge representation, HCI, Information retrieval and creative industries—to discuss frameworks and tools that enhance data engagement through storytelling, games, and art.
            </p>
            <p className="mb-8">
              Key topics include ontological coherence, generative AI, and participatory content creation, with the goal of empowering experts to communicate effectively in domains like education, journalism, and cultural heritage.
            </p>
            
            <h3 className="text-2xl font-bold mt-12 mb-4 text-foreground">Motivation</h3>
            <p className="mb-4">
              The rise of Large Language Models (LLMs) has brought both opportunities and challenges in generating coherent, context-aware narratives from complex data. While generative models can produce fluent narratives, they often lack semantic grounding, provenance awareness, and narrative consistency. This workshop is timely as it aims to bridge semantic representations and generative AI, building on established Semantic Web research while addressing current developments in AI.
            </p>
            
            <h3 className="text-2xl font-bold mt-12 mb-4 text-foreground">Audience</h3>
            <p className="mb-4">
              The workshop targets researchers and practitioners working on knowledge graphs, semantic technologies, generative AI, and narrative-based data exploration, including members of the ISWC community active in ontology engineering, Linked Data, reasoning, as well as scholars from NLP, HCI, information retrieval, digital humanities, and creative industries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
