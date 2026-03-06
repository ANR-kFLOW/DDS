import { motion } from "framer-motion";

const members = [
  { name: "Andrea Sillano", institution: "Politecnico di Torino, Italy" },
  { name: "Luigi de Russis", institution: "Politecnico di Torino, Italy" },
  { name: "Anisa Rula", institution: "University of Brescia, Italy" },
  { name: "Antonio Lieto", institution: "University of Salerno, Italy" },
  { name: "Angelo Salatino", institution: "The Open University, UK" },
  { name: "Paul Mulholland", institution: "The Open University, UK" },
  { name: "Marilena Daquino", institution: "University of Bologna, Italy" },
  { name: "Belén Dìaz Agudo", institution: "Universidad Complutense de Madrid, Spain" },
  { name: "Mark Alan Finlayson", institution: "Florida International University, United States" },
  { name: "Enrico Motta", institution: "The Open University, UK" },
  { name: "Alessandro Mosca", institution: "Free University of Bozen-Bolzano, Italy" },
  { name: "Blerina Spahiu", institution: "Università degli Studi di Milano-Bicocca, Italy" },
  { name: "Marieke van Erp", institution: "KNAW Humanities Cluster / DHLab, The Netherlands" },
  { name: "Sara Tonelli", institution: "Fondazione Bruno Kessler, Italy" },
  { name: "Veruska Zamborlini", institution: "KNAW Humanities Cluster / DHLab, The Netherlands" },
  { name: "Rossana Damiano", institution: "University of Turin, Italy" },
  { name: "Andrea Schimmenti", institution: "University of Bologna, Italy" },
  { name: "Andras Micsik", institution: "HUN-REN SZTAKI, Hungary" },
  { name: "Simon Gottschalk", institution: "Leibniz Universität Hannover, Germany" }
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
