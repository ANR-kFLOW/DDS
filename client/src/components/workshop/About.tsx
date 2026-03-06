import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-white relative" id="about" aria-labelledby="about-heading">
      <div className="absolute inset-0 mesh-bg opacity-30" aria-hidden="true"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 id="about-heading" className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Workshop Description</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              DDS 2026 aims to explore innovative methods for transforming complex datasets into engaging, interpretable narratives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Motivation</h3>
              <p className="text-muted-foreground leading-relaxed">
                The rise of LLMs brings challenges in generating coherent narratives. While generative models produce fluent text, they often lack semantic grounding. This workshop aims to bridge semantic representations and generative AI.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Focus & Audience</h3>
              <p className="text-muted-foreground leading-relaxed">
                We bring together researchers and practitioners at the intersection of semantic technologies, artificial intelligence, and narrative design — from knowledge graphs and NLP to HCI, information retrieval, digital humanities, and creative industries — to discuss frameworks that enhance data engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
