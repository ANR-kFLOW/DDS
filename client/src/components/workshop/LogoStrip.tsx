import eurecomLogo from "@assets/image_1772802507283.png";
import salernoLogo from "@assets/image_1772802524655.png";
import kclLogo from "@assets/image_1772802561236.png";
import epsrcLogo from "@assets/image_1772805461761.png";

type Logo = { name: string; src: string; href?: string };

const logos: Logo[] = [
  { name: "EURECOM", src: eurecomLogo, href: "https://www.eurecom.fr/en" },
  { name: "University of Salerno", src: salernoLogo, href: "https://www.unisa.it/" },
  { name: "Technical University of Munich", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png", href: "https://www.tum.de/en/" },
  { name: "King's College London", src: kclLogo, href: "https://www.kcl.ac.uk/" },
  { name: "University of Oxford", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png", href: "https://www.ox.ac.uk/" },
  { name: "Siemens", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/1200px-Siemens-logo.svg.png", href: "https://www.siemens.com/global/en.html" },
  { name: "EPSRC", src: epsrcLogo, href: "https://www.ukri.org/councils/epsrc/" },
];

function LogoImg({ logo }: { logo: Logo }) {
  const imgNode = (
    <img
      src={logo.src}
      alt={logo.name}
      className="max-h-full max-w-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      loading="lazy"
    />
  );
  return logo.href
    ? <a href={logo.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">{imgNode}</a>
    : <div className="flex items-center justify-center w-full h-full">{imgNode}</div>;
}

export default function LogoStrip() {
  return (
    <section className="py-10 bg-background/80" aria-label="Institutional partners and funders">
      <div className="container mx-auto px-6">
        <div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          role="list"
          aria-label="Partner institution logos"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group flex items-center justify-center h-14 w-36 shrink-0"
              title={logo.name}
              role="listitem"
            >
              <LogoImg logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
