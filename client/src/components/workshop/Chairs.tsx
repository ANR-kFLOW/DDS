import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Mail } from "lucide-react";

import yihangImage from "@assets/image_1772802483946.png";
import eurecomLogo from "@assets/image_1772802507283.png";
import salernoLogo from "@assets/image_1772802524655.png";
import kclLogo from "@assets/image_1772802561236.png";

const chairs = [
  {
    name: "Pasquale Lisena",
    institution: "EURECOM, France",
    role: "Researcher",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQH7awdts86HmQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1651052072883?e=2147483647&v=beta&t=JtoGdJi1pvx9vxhA9NyHKRD0HGwjUoVepaaMIKsfNms",
    logo: eurecomLogo,
    bio: "Researcher in Knowledge Graphs and Information Extraction. PhD in Data Science from Sorbonne University (2019). Co-organiser of SEMMES at ESWC 2023 and 2024.",
    email: "pasquale.lisena@eurecom.fr",
    url: "https://pasqlisena.github.io/"
  },
  {
    name: "Maria Angela Pellegrino",
    institution: "University of Salerno, Italy",
    role: "Researcher",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=OywXH9wAAAAJ&citpid=1",
    logo: salernoLogo,
    bio: "Researcher in Knowledge Graphs, Data Quality, and educational approaches. PhD in Computer Science from the University of Salerno in 2022.",
    email: "mapellegrino@unisa.it",
    url: "http://www.mariaangelapellegrino.it/"
  },
  {
    name: "Lisa-Yao Gan",
    institution: "Technical University Munich, Germany",
    role: "Researcher",
    image: "https://www.ce.cit.tum.de/fileadmin/_processed_/b/b/csm_DSC_0352_607f8144f8.webp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png",
    bio: "Researcher exploring how generative AI, grounded in structured KGs, supports dataset discovery and sense-making. Supported by Hans Fischer Senior Fellowship.",
    email: "lisa.gan@tum.de",
    url: "https://www.ce.cit.tum.de/en/ldv/team/wissenschaftliche-mitarbeiter/lisa-gan/"
  },
  {
    name: "Yihang Zhao",
    institution: "King's College London, UK",
    role: "Researcher",
    image: yihangImage,
    logo: kclLogo,
    bio: "Researcher in human-centered AI, studying UI and interaction techniques of GenAI-based systems for knowledge workers. Affiliated with the KG Group at KCL.",
    email: "yihang.zhao@kcl.ac.uk",
    url: "https://www.yihangzhao.com/"
  },
  {
    name: "Yiwen Xing",
    institution: "University of Oxford, UK",
    role: "Researcher",
    image: "https://eavanxing0416.github.io/images/profile.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png",
    bio: "Researcher in data visualization at the Oxford e-Research Centre. Focuses on visual analytics systems supporting sensemaking in complex workflows.",
    email: "yiwen.xing@eng.ox.ac.uk",
    url: "https://eavanxing0416.github.io/"
  }
];

export default function Chairs() {
  return (
    <section className="py-20 bg-white" id="chairs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Workshop Chairs</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The organizing committee bringing together expertise in semantic web, 
            human-centered AI, visualization, and data-driven storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chairs.map((chair, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/10 border rounded-2xl p-6 hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <Avatar className="w-20 h-20 border-2 border-white shadow-sm">
                  <AvatarImage src={chair.image} alt={chair.name} className="object-cover" />
                  <AvatarFallback className="text-xl bg-primary/10 text-primary">
                    {chair.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {chair.logo && (
                  <div className="h-8 w-24 flex items-center justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                    <img src={chair.logo} alt={chair.institution} className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-1">{chair.name}</h3>
              <p className="text-sm font-medium text-primary mb-4">{chair.institution}</p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {chair.bio}
              </p>
              
              <div className="flex gap-3 mt-auto pt-4 border-t">
                <a href={`mailto:${chair.email}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                {chair.url !== "#" && (
                  <a href={chair.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-sm ml-4">
                    <ExternalLink className="w-4 h-4" />
                    Homepage
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
