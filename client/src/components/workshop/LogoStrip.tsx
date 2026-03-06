import { motion } from "framer-motion";

import eurecomLogo from "@assets/image_1772802507283.png";
import salernoLogo from "@assets/image_1772802524655.png";
import kclLogo from "@assets/image_1772802561236.png";

const logos = [
  { name: "EURECOM", src: eurecomLogo },
  { name: "University of Salerno", src: salernoLogo },
  { name: "Technical University of Munich", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png" },
  { name: "King's College London", src: kclLogo },
  { name: "University of Oxford", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png" },
  { name: "Sorbonne University", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sorbonne_Universit%C3%A9.svg/1200px-Sorbonne_Universit%C3%A9.svg.png" },
  { name: "Siemens", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/1200px-Siemens-logo.svg.png" },
  { name: "EPSRC", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/EPSRC_logo.svg/1200px-EPSRC_logo.svg.png" },
  { name: "Politecnico di Torino", src: "https://upload.wikimedia.org/wikipedia/it/thumb/4/47/Logo_PoliTo_dal_2021_blu.png/1200px-Logo_PoliTo_dal_2021_blu.png" },
  { name: "The Open University", src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Open_University_logo_%282019%29.svg/1200px-Open_University_logo_%282019%29.svg.png" },
  { name: "University of Bologna", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Seal_of_the_University_of_Bologna.svg/1200px-Seal_of_the_University_of_Bologna.svg.png" },
  { name: "Universidad Complutense de Madrid", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Escudo_de_la_Universidad_Complutense_de_Madrid.svg/1200px-Escudo_de_la_Universidad_Complutense_de_Madrid.svg.png" },
  { name: "Florida International University", src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Florida_International_University_seal.svg/1200px-Florida_International_University_seal.svg.png" },
  { name: "Free University of Bozen-Bolzano", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uni-Bozen-Logo.svg/1200px-Uni-Bozen-Logo.svg.png" },
  { name: "Fondazione Bruno Kessler", src: "https://magazine.fbk.eu/wp-content/uploads/2020/03/FBK_logo_rgb.png" },
  { name: "University of Turin", src: "https://upload.wikimedia.org/wikipedia/it/thumb/e/e5/Universit%C3%A0_di_Torino_-_Logo.svg/1200px-Universit%C3%A0_di_Torino_-_Logo.svg.png" },
  { name: "Leibniz Universität Hannover", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Leibniz_Universit%C3%A4t_Hannover.svg/1200px-Leibniz_Universit%C3%A4t_Hannover.svg.png" },
  { name: "University of Brescia", src: "https://upload.wikimedia.org/wikipedia/it/thumb/d/d7/Logo_Universit%C3%A0_degli_Studi_di_Brescia.svg/1200px-Logo_Universit%C3%A0_degli_Studi_di_Brescia.svg.png" },
  { name: "Wellcome Trust", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wellcome_Trust_logo.svg/1200px-Wellcome_Trust_logo.svg.png" },
  { name: "KNAW", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/KNAW-logo.svg/1200px-KNAW-logo.svg.png" },
  { name: "HUN-REN SZTAKI", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/HUN-REN_logo.svg/1200px-HUN-REN_logo.svg.png" },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 gap-8 py-4 items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="group flex items-center justify-center h-16 w-36 shrink-0 rounded-xl bg-white border px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300"
            title={logo.name}
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              loading="lazy"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = 'none';
                const parent = el.parentElement;
                if (parent && !parent.querySelector('span')) {
                  const span = document.createElement('span');
                  span.className = 'text-xs font-semibold text-muted-foreground text-center leading-tight';
                  span.textContent = logo.name;
                  parent.appendChild(span);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoStrip() {
  return (
    <section className="py-20 bg-secondary/10 border-y overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Institutions & Partners</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bringing together leading universities, research institutions, and industry partners.
          </p>
        </motion.div>
      </div>

      <MarqueeRow />
      <MarqueeRow reverse />
    </section>
  );
}
