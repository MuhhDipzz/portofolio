import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack storefront with product catalog, cart, and checkout. Built with Next.js and Supabase for auth and data.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    gradient: "from-[oklch(0.7_0.2_250)] to-[oklch(0.65_0.25_295)]",
    demo: "https://azure-bloom-ui-xi.vercel.app/",
    code: "https://github.com/MuhhDipzz/ecommers-tokoku-nextjs",
  },
  {
    title: "Todo App",
    description:
      "Clean, keyboard-friendly task manager with drag-to-reorder, filters, and persistent storage.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
    gradient: "from-[oklch(0.75_0.2_200)] to-[oklch(0.7_0.2_250)]",
    demo: "#",
    code: "#",
  },
  {
    title: "Dashboard App",
    description:
      "Responsive analytics dashboard with charts, dark mode, and a glassmorphism UI system.",
    tech: ["Next.js", "Bootstrap", "Recharts"],
    gradient: "from-[oklch(0.7_0.22_310)] to-[oklch(0.7_0.2_250)]",
    demo: "#",
    code: "#",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="A handful of projects I built while learning and experimenting."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="glass ring-gradient group relative flex flex-col overflow-hidden rounded-3xl transition-all hover:glow"
          >
            <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(1_0_0/0.25),transparent_60%)]" />
              <div className="absolute inset-0 animated-grid opacity-30" />
              <div className="absolute bottom-3 right-3 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                Project {String(i + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold transition-colors group-hover:text-gradient">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-foreground/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-2">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.7_0.2_250)] to-[oklch(0.65_0.25_295)] px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-[1.03]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-white/10"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
