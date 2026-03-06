export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  };

  return (
    <footer className="bg-[#09090b] text-white py-16" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              DDS <span className="text-white/60">2026</span>
            </h3>
            <p className="text-white/60 leading-relaxed">
              Data-Driven Storytelling Workshop at the International Semantic Web Conference (ISWC) 2026.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-white/40">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2" role="navigation" aria-label="Footer navigation">
              {[
                { id: "about", label: "About" },
                { id: "topics", label: "Topics" },
                { id: "guidelines", label: "Submission" },
                { id: "dates", label: "Dates" },
                { id: "program", label: "Program" },
                { id: "organizers", label: "Organizers" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-white/60 hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-white/40">Conference</h4>
            <div className="space-y-2">
              <a
                href="https://iswc2026.semanticweb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/60 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
              >
                ISWC 2026
                <span className="sr-only"> (opens in new tab)</span>
              </a>
              <p className="text-white/60">The Nicolaus Hotel</p>
              <p className="text-white/60">Bari, Italy</p>
              <p className="text-white/60">October 25-26, 2026</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 DDS Workshop. Co-located with ISWC 2026.
          </p>
          <p className="text-white/40 text-sm">
            Proceedings published via CEUR-WS.org
          </p>
        </div>
      </div>
    </footer>
  );
}
