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

export default function Committee() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary border-b pb-4">Program Committee</h1>
          
          <ul className="list-disc pl-6 space-y-2 text-lg text-foreground/80">
            {members.map((member, index) => (
              <li key={index}>
                {member.name}, {member.institution}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
