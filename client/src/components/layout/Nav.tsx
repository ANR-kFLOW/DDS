import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Minus, Plus } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useFontSize } from "@/hooks/useFontSize";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "topics", label: "Topics" },
  { id: "guidelines", label: "Submission" },
  { id: "dates", label: "Dates" },
  { id: "program", label: "Program" },
  { id: "organizers", label: "Organizers" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set(["home"]));
  const visitedRef = useRef<Set<string>>(new Set(["home"]));
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggle: toggleTheme } = useTheme();
  const { sizePercent, increase, decrease, canIncrease, canDecrease } = useFontSize();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
      let current = "home";
      let changed = false;
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120) {
          current = section.id;
          if (!visitedRef.current.has(section.id)) {
            visitedRef.current.add(section.id);
            changed = true;
          }
        }
      }
      setActiveSection(current);
      if (changed) {
        setVisitedSections(new Set(visitedRef.current));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileOpen) {
      setMobileOpen(false);
      menuButtonRef.current?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (mobileOpen && mobileNavRef.current) {
      const focusable = mobileNavRef.current.querySelectorAll<HTMLElement>("button, a");
      if (focusable.length > 0) focusable[0].focus();

      const trapFocus = (e: KeyboardEvent) => {
        if (e.key !== "Tab" || !mobileNavRef.current) return;
        const items = mobileNavRef.current.querySelectorAll<HTMLElement>("button, a");
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };
      document.addEventListener("keydown", trapFocus);
      return () => document.removeEventListener("keydown", trapFocus);
    }
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary via-purple-500 to-primary z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'}`}
        role="banner"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-bold text-xl tracking-tight select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
            onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
            aria-label="DDS 2026 — go to top"
          >
            DDS <span className="text-primary">2026</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium" role="navigation" aria-label="Main navigation">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                aria-current={activeSection === link.id ? "true" : undefined}
                className={`relative px-3 py-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {link.label}
                  {visitedSections.has(link.id) && activeSection !== link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  )}
                </span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <div className="hidden sm:flex items-center gap-0.5 mr-1 bg-secondary/50 rounded-full px-1 py-0.5">
              <button
                onClick={decrease}
                disabled={!canDecrease}
                className="p-1.5 rounded-full hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
                aria-label="Decrease font size"
                data-testid="button-font-decrease"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-mono w-8 text-center text-muted-foreground select-none" aria-live="polite">
                {sizePercent}%
              </span>
              <button
                onClick={increase}
                disabled={!canIncrease}
                className="p-1.5 rounded-full hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary"
                aria-label="Increase font size"
                data-testid="button-font-increase"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-secondary/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? <Moon className="w-4.5 h-4.5" /> : <Sun className="w-4.5 h-4.5" />}
            </button>

            <button
              ref={menuButtonRef}
              className="lg:hidden p-2 rounded-xl hover:bg-secondary/50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <motion.nav
              ref={mobileNavRef}
              id="mobile-nav"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-background shadow-2xl p-8 pt-20 flex flex-col gap-2"
              onClick={(e) => e.stopPropagation()}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {links.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.id)}
                  aria-current={activeSection === link.id ? "true" : undefined}
                  className={`text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center justify-between ${
                    activeSection === link.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                  {visitedSections.has(link.id) && activeSection !== link.id && (
                    <span className="w-2 h-2 rounded-full bg-primary/40" />
                  )}
                </motion.button>
              ))}

              <div className="mt-auto pt-4 border-t flex items-center justify-between">
                <div className="flex items-center gap-1 bg-secondary/50 rounded-full px-2 py-1">
                  <button onClick={decrease} disabled={!canDecrease} className="p-1.5 rounded-full disabled:opacity-30" aria-label="Decrease font size">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono w-8 text-center">{sizePercent}%</span>
                  <button onClick={increase} disabled={!canIncrease} className="p-1.5 rounded-full disabled:opacity-30" aria-label="Increase font size">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-secondary/50" aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>
                  {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
