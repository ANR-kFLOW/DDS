export default function Nav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight cursor-pointer" onClick={() => scrollTo('home')}>
          DDS <span className="text-primary">2026</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollTo('about')} className="text-muted-foreground hover:text-foreground transition-colors">About</button>
          <button onClick={() => scrollTo('topics')} className="text-muted-foreground hover:text-foreground transition-colors">Topics</button>
          <button onClick={() => scrollTo('dates')} className="text-muted-foreground hover:text-foreground transition-colors">Dates</button>
          <button onClick={() => scrollTo('chairs')} className="text-muted-foreground hover:text-foreground transition-colors">Chairs</button>
        </nav>
      </div>
    </header>
  );
}
