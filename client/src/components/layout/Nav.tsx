import { Link, useLocation } from "wouter";

export default function Nav() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/call", label: "Call for Papers" },
    { href: "/organizers", label: "Organizers" },
    { href: "/program", label: "Program" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">
          DDS <span className="text-primary">2026</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`cursor-pointer transition-colors ${location === link.href ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"}`}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
