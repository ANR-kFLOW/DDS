import { motion } from "framer-motion";

import yihangImage from "@assets/image_1772802483946.png";

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
    image: "https://www.ce.cit.tum.de/fileadmin/_processed_/b/b/csm_DSC_0352_607f8144f8.webp",
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
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-primary border-b pb-4">Workshop Organizers</h1>
          
          <div className="space-y-12">
            {chairs.map((chair, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
                <img 
                  src={chair.image} 
                  alt={chair.name} 
                  className="w-32 h-32 object-cover rounded-lg shadow-sm bg-white"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chair.name)}&background=random`;
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold">{chair.name}</h3>
                  <h4 className="text-lg font-medium text-muted-foreground mb-2">{chair.institution}</h4>
                  
                  <div className="text-sm font-medium mb-3">
                    <a href={`mailto:${chair.email}`} className="text-primary hover:underline">mail</a>
                    {chair.url && chair.url !== "#" && (
                      <>
                        <span className="mx-2">-</span>
                        <a href={chair.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">website</a>
                      </>
                    )}
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed">
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
