import { motion } from "motion/react";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Supabase", "REST APIs", "Node.js"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tech I work with"
      description="A curated toolkit for shipping modern, responsive web experiences."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass ring-gradient group rounded-3xl p-6 transition-all hover:glow-sm"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[oklch(0.7_0.2_250)] to-[oklch(0.65_0.25_295)] shadow-[0_0_12px_oklch(0.65_0.25_295/0.8)]" />
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
