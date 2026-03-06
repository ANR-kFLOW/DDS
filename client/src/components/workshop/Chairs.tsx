import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

import yihangImage from "@assets/image_1772802483946.png";
import lisaImage from "@assets/image_1772803601722.png";
import eurecomLogo from "@assets/image_1772802507283.png";
import salernoLogo from "@assets/image_1772802524655.png";
import kclLogo from "@assets/image_1772802561236.png";

const chairs = [
  {
    name: "Pasquale Lisena",
    institution: "EURECOM, Sophia Antipolis, France",
    role: "Researcher",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQH7awdts86HmQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1651052072883?e=2147483647&v=beta&t=JtoGdJi1pvx9vxhA9NyHKRD0HGwjUoVepaaMIKsfNms",
    logo: eurecomLogo,
    bio: "Researcher in Knowledge Graphs and Information Extraction from natural language. He got a PhD in Data Science from Sorbonne University in 2019. He took part in research projects like DOREMUS, SILKNOW, Odeuropa, and led the kFLOW project, studying the automatic extraction of relations between events and facts from texts. He served as Poster & Demo chair for TheWebConf 2021, ESWC 2026, and proceedings chair for ESWC 2024 and 2025. He co-organised the workshop Semantic Methods for Events and Stories (SEMMES) at ESWC 2023 and 2024. He is co-editor of the ACM TIST Special Issue on New Frontiers in Interactive Storytelling and Computational Models of Narrative.",
    email: "pasquale.lisena@eurecom.fr",
    url: "https://pasqlisena.github.io/"
  },
  {
    name: "Maria Angela Pellegrino",
    institution: "University of Salerno, Italy",
    role: "Researcher",
    image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=OywXH9wAAAAJ&citpid=1",
    logo: salernoLogo,
    bio: "Researcher in Knowledge Graphs, Data Quality, and educational approaches to helping learners understand how to effectively manage data, visualize it, and extract knowledge-driven insights. She earned her PhD in Computer Science from the University of Salerno in 2022. She has significant experience in the community, having served as a workshop organizer for major conferences, including TheWebConf and events in the Semantic Web domain, where she coordinated sessions focused on data quality and knowledge-driven systems. She has chaired conferences and events addressing the intersection of technology, storytelling, and education. She is co-editor of the ACM TIST Special Issue on New Frontiers in Interactive Storytelling and Computational Models of Narrative.",
    email: "mapellegrino@unisa.it",
    url: "http://www.mariaangelapellegrino.it/"
  },
  {
    name: "Lisa-Yao Gan",
    institution: "Technical University Munich, Germany",
    role: "Researcher",
    image: lisaImage,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png",
    bio: "Researcher working at the intersection of information retrieval, generative AI, and knowledge graphs, focusing on transforming complex data into interpretable and trustworthy narratives. Her research explores how generative AI, grounded in structured knowledge graphs, supports dataset discovery, metadata curation, and sense-making in open data ecosystems for data-driven storytelling. She is part of the TUM-IAS Focus Group \"Trustworthy Knowledge Graphs\". Her work is supported by the Hans Fischer Senior Fellowship awarded to Prof. E. Simperl and funded by Siemens AG. She collaborates closely with public-sector and industry partners, including projects with Data for London on generative AI for metadata curation and with Siemens on KG-based AI risk assessment.",
    email: "lisa.gan@tum.de",
    url: "https://www.ce.cit.tum.de/en/ldv/team/wissenschaftliche-mitarbeiter/lisa-gan/"
  },
  {
    name: "Yihang Zhao",
    institution: "King's College London, UK",
    role: "Researcher",
    image: yihangImage,
    logo: kclLogo,
    bio: "Researcher in human-centered AI, studying how UI and interaction techniques of GenAI-based systems can be designed and evaluated to support knowledge workers in collaborative tasks by triggering cognitive and creative thinking process. He is affiliated with the Knowledge Graph Group at King's College London, led by Prof. E. Simperl and Dr. A. Meroño-Peñuela. He has participated in research projects including MuseIT, ProVe, and PHAWM, and led the development of OntoChat and OntoScope, studying the ontology construction and broader knowledge work. His research is funded by EPSRC, Responsible AI UK, and Siemens AG. He has served as a PC member for CHIWORK 2026, and the ELMKE and LLMs4KG@ESWC workshops since 2026, as well as the Special Track on LLMs for KG at ESWC 2024. He is also a Young Fellow of the Royal Society of Arts.",
    email: "yihang.zhao@kcl.ac.uk",
    url: "https://www.yihangzhao.com/"
  },
  {
    name: "Yiwen Xing",
    institution: "University of Oxford, UK",
    role: "Researcher",
    image: "https://eavanxing0416.github.io/images/profile.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png",
    bio: "Researcher in data visualization at the Oxford e-Research Centre, University of Oxford. Her research focuses on the design and evaluation of human-centered visualization and visual analytics systems through collaborative design studies that support sensemaking, decision-making, and knowledge construction in complex, data-intensive workflows. She has conducted cross-domain research in digital humanities, public health forecasting, and explainable AI, contributing to systems and projects including scFlowVis, OwnershipTracker, the Wellcome Trust-funded DART project, the EPSRC-funded RAMPVIS project, and the EPSRC-funded VIS for ML-assisted human decision-making project. She received her PhD in Computer Science from King's College London, UK.",
    email: "yiwen.xing@eng.ox.ac.uk",
    url: "https://eavanxing0416.github.io/"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Chairs() {
  return (
    <section className="py-24 bg-background" id="organizers" aria-labelledby="organizers-heading">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 id="organizers-heading" className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Workshop Organizers</h2>
            <p className="text-xl text-muted-foreground">The organizing committee bringing together expertise in semantic web, human-centered AI, visualization, and data-driven storytelling.</p>
          </div>
          
          <div className="space-y-8">
            {chairs.map((chair, index) => (
              <motion.article 
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="relative bg-secondary/10 p-6 md:p-8 rounded-3xl border shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {chair.logo && (
                  <div className="absolute top-5 right-5 md:top-6 md:right-6 w-20 h-12 md:w-28 md:h-14 flex items-start justify-end z-10" aria-hidden="true">
                    <img 
                      src={chair.logo} 
                      alt="" 
                      className="max-h-full max-w-full object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <img 
                    src={chair.image} 
                    alt={`Photo of ${chair.name}`} 
                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-sm bg-card shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(chair.name)}&background=random`;
                    }}
                  />
                  <div className="pr-0 sm:pr-24">
                    <h3 className="text-2xl font-bold">{chair.name}</h3>
                    <h4 className="text-lg font-medium text-primary mb-3">{chair.institution}</h4>
                    
                    <div className="text-sm font-medium mb-4 flex flex-wrap gap-3">
                      <a
                        href={`mailto:${chair.email}`}
                        className="text-primary hover:text-primary/80 flex items-center gap-1.5 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        data-testid={`link-email-${chair.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        {chair.email}
                      </a>
                      {chair.url && chair.url !== "#" && (
                        <a
                          href={chair.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 flex items-center gap-1.5 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                          data-testid={`link-website-${chair.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          Homepage
                          <span className="sr-only"> (opens in new tab)</span>
                        </a>
                      )}
                    </div>
                    
                    <p className="text-foreground/70 leading-relaxed">
                      {chair.bio}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
