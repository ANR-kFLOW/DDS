import { motion } from "framer-motion";

import yihangImage from "@assets/image_1772802483946.png";
import lisaImage from "@assets/image_1772803601722.png";

const chairs = [
  {
    name: "Pasquale Lisena",
    institution: "EURECOM, Sophia Antipolis, France",
    role: "Researcher",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQH7awdts86HmQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1651052072883?e=2147483647&v=beta&t=JtoGdJi1pvx9vxhA9NyHKRD0HGwjUoVepaaMIKsfNms",
    bio: "Researcher in Knowledge Graphs and Information Extraction. PhD in Data Science from Sorbonne University (2019). He served as PC member of international conferences and workshops.",
    email: "pasquale.lisena@eurecom.fr",
    url: "https://pasqlisena.github.io/"
  },
  {
    name: "Maria Angela Pellegrino",
    institution: "University of Salerno, Italy",
    role: "Researcher",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=OywXH9wAAAAJ&citpid=1",
    bio: "Researcher in Knowledge Graphs, Data Quality, and educational approaches. PhD in Computer Science from the University of Salerno in 2022. She has significant experience in the community, having served as a workshop organizer for major conferences.",
    email: "mapellegrino@unisa.it",
    url: "http://www.mariaangelapellegrino.it/"
  },
  {
    name: "Lisa-Yao Gan",
    institution: "Technical University Munich, Germany",
    role: "Researcher",
    image: lisaImage,
    bio: "Researcher exploring how generative AI, grounded in structured KGs, supports dataset discovery and sense-making. Supported by Hans Fischer Senior Fellowship.",
    email: "lisa.gan@tum.de",
    url: "https://www.ce.cit.tum.de/en/ldv/team/wissenschaftliche-mitarbeiter/lisa-gan/"
  },
  {
    name: "Yihang Zhao",
    institution: "King's College London, UK",
    role: "Researcher",
    image: yihangImage,
    bio: "Researcher in human-centered AI, studying UI and interaction techniques of GenAI-based systems for knowledge workers. Affiliated with the KG Group at KCL.",
    email: "yihang.zhao@kcl.ac.uk",
    url: "https://www.yihangzhao.com/"
  },
  {
    name: "Yiwen Xing",
    institution: "University of Oxford, UK",
    role: "Researcher",
    image: "https://eavanxing0416.github.io/images/profile.png",
    bio: "Researcher in data visualization at the Oxford e-Research Centre. Focuses on visual analytics systems supporting sensemaking in complex workflows.",
    email: "yiwen.xing@eng.ox.ac.uk",
    url: "https://eavanxing0416.github.io/"
  }
];

export default function Chairs() {
  return (
    <section className="py-24 bg-white" id="organizers">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Workshop Organizers</h2>
            <p className="text-xl text-muted-foreground">The organizing committee bringing together expertise in semantic web, human-centered AI, visualization, and data-driven storytelling.</p>
          </div>
          
          <div className="space-y-12">
            {chairs.map((chair, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start bg-secondary/10 p-6 md:p-8 rounded-3xl border shadow-sm">
                <img 
                  src={chair.image} 
                  alt={chair.name} 
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-sm bg-white"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chair.name)}&background=random`;
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold">{chair.name}</h3>
                  <h4 className="text-lg font-medium text-muted-foreground mb-2">{chair.institution}</h4>
                  
                  <div className="text-sm font-medium mb-4 flex flex-wrap gap-4">
                    <a href={`mailto:${chair.email}`} className="text-primary hover:underline flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      Email
                    </a>
                    {chair.url && chair.url !== "#" && (
                      <a href={chair.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        Homepage
                      </a>
                    )}
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {chair.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
