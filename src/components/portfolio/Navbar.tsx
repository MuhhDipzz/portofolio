import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`glass ring-gradient flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "glow-sm" : ""
        }`}
      >
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 pl-2 text-sm font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.7_0.2_250)] to-[oklch(0.65_0.25_295)] glow-sm">
            <Code2 className="h-4 w-4 text-white" />
          </span>
          <span className="hidden sm:inline">Dev<span className="text-gradient">Portfolio</span></span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="relative rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[oklch(0.7_0.2_250/0.25)] to-[oklch(0.65_0.25_295/0.25)] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative ${active === l.id ? "text-foreground" : ""}`}>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden rounded-full bg-gradient-to-r from-[oklch(0.7_0.2_250)] to-[oklch(0.65_0.25_295)] px-4 py-1.5 text-sm font-medium text-white transition-transform hover:scale-105 hover:glow-sm md:inline-block"
        >
          Hire Me
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden rounded-full p-2 text-foreground hover:bg-white/10"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong absolute top-20 left-4 right-4 rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className={`w-full rounded-xl px-4 py-2.5 text-left text-sm transition-colors ${
                      active === l.id
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
