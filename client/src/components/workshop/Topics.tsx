import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Search, X } from "lucide-react";

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

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'i'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? <mark key={i} className="bg-primary/20 text-primary rounded px-0.5">{part}</mark> : part
  );
}

export default function Topics() {
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? topics.filter((t) => t.toLowerCase().includes(search.toLowerCase()))
    : topics;

  return (
    <section className="py-24 bg-secondary/20" id="topics" aria-labelledby="topics-heading">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 id="topics-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Topics of Interest</h2>
            <p className="text-xl text-muted-foreground mb-8">Topics of interest include, but are not limited to:</p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter topics..."
                className="w-full pl-11 pr-10 py-3 rounded-full border bg-background text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                data-testid="input-topic-search"
                aria-label="Filter topics by keyword"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary transition-colors"
                  aria-label="Clear search"
                  data-testid="button-clear-topic-search"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
            {search && (
              <p className="text-sm text-muted-foreground mt-3" aria-live="polite">
                {filtered.length} topic{filtered.length !== 1 ? "s" : ""} matching "{search}"
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-1.5 rounded-full shrink-0 mt-0.5" aria-hidden="true">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90 text-lg leading-snug">{highlightMatch(topic, search)}</span>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">No topics match your search.</p>
              <button
                onClick={() => setSearch("")}
                className="mt-2 text-primary hover:underline font-medium"
              >
                Clear filter
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
