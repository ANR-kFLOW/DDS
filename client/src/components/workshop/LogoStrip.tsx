import eurecomLogo from "@assets/image_1772802507283.png";
import salernoLogo from "@assets/image_1772802524655.png";
import kclLogo from "@assets/image_1772802561236.png";
import kflowLogo from "@assets/image_1772805162290.png";
import anrLogo from "@assets/image_1772805389810.png";
import epsrcLogo from "@assets/image_1772805461761.png";

const logos = [
  { name: "EURECOM", src: eurecomLogo },
  { name: "University of Salerno", src: salernoLogo },
  { name: "Technical University of Munich", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Technical_University_of_Munich.svg/1200px-Logo_of_the_Technical_University_of_Munich.svg.png" },
  { name: "King's College London", src: kclLogo },
  { name: "University of Oxford", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1200px-Oxford-University-Circlet.svg.png" },
  { name: "kFLOW", src: kflowLogo },
  { name: "ANR", src: anrLogo },
  { name: "Siemens", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/1200px-Siemens-logo.svg.png" },
  { name: "EPSRC", src: epsrcLogo },
];

export default function LogoStrip() {
  return (
    <section className="py-8 bg-white/80 overflow-hidden">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 gap-10 items-center animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="group flex items-center justify-center h-12 w-32 shrink-0 px-3"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-full max-w-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
