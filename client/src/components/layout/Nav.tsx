export default function Nav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "topics", label: "Topics" },
    { id: "guidelines", label: "Submission" },
    { id: "dates", label: "Dates" },
    { id: "program", label: "Program" },
    { id: "venue", label: "Venue" },
    { id: "organizers", label: "Organizers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight cursor-pointer" onClick={() => scrollTo('home')}>
          DDS <span className="text-primary">2026</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <button 
              key={link.id} 
              onClick={() => scrollTo(link.id)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
