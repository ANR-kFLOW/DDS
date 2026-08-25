import { motion } from "framer-motion";

const members = [
  { name: "Angelo Salatino", institution: "The Open University" },
  { name: "Beatrice Fiumanò", institution: "University of Bologna" },
  { name: "Rossana Damiano", institution: "Dipartimento di Informatica, Università di Torino" },
  { name: "Simon Gottschalk", institution: "Leibniz Universität Hannover, L3S Research Center" },
  { name: "Simon Mille", institution: "ADAPT, Dublin City University" },
  { name: "Sara Tonelli", institution: "Fondazione Bruno Kessler" },
  { name: "Alessandro Mosca", institution: "Institute for Cognitive Sciences and Technologies (ISTC-CNR)" },
  { name: "Belén Díaz-Agudo", institution: "Universidad Complutense de Madrid" },
  { name: "Anisa Rula", institution: "University of Brescia" },
  { name: "Luigi De Russis", institution: "Politecnico di Torino" },
  { name: "Antonio Lieto", institution: "University of Turin, Department of Computer Science" },
  { name: "Davide Picca", institution: "University of Lausanne" },
  { name: "András Micsik", institution: "SZTAKI" },
  { name: "Paul Mulholland", institution: "The Open University" },
  { name: "Andrea Schimmenti", institution: "University of Bologna" },
  { name: "Andrea Sillano", institution: "Politecnico di Torino" },
  { name: "Mark Finlayson", institution: "Florida International University" },
  { name: "Marieke van Erp", institution: "KNAW Humanities Cluster" },
  { name: "Blerina Spahiu", institution: "Università degli Studi di Milano Bicocca" },
  { name: "Marilena Daquino", institution: "University of Bologna" }
];

const cardVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.04,
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Committee() {
  return (
    <section className="py-24 bg-background" id="committee" aria-labelledby="committee-heading">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 id="committee-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Program Committee</h2>
            <p className="text-xl text-muted-foreground">We thank our dedicated program committee members for their support.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4" role="list" aria-label="Program committee members">
            {members.map((member, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardVariants}
                role="listitem"
                className="bg-secondary/20 p-5 rounded-2xl border flex flex-col hover:bg-secondary/40 transition-colors"
              >
                <span className="font-bold text-lg">{member.name}</span>
                <span className="text-muted-foreground">{member.institution}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
