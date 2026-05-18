import { motion } from "motion/react";
import { Briefcase, Check } from "lucide-react";
import { Section } from "./Section";

const items = [
  "Hardware and software troubleshooting",
  "Computer installation and maintenance",
  "Basic networking",
  "User support",
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative ml-12 md:ml-0 md:w-1/2 md:pr-12"
        >
          <span className="absolute -left-[2.6rem] top-6 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.7_0.2_250)] to-[oklch(0.65_0.25_295)] glow-sm md:-right-[1.15rem] md:left-auto">
            <Briefcase className="h-4 w-4 text-white" />
          </span>
          <div className="glass ring-gradient rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">IT Support Intern</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                5 months
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Internship · On-site</p>
            <ul className="mt-5 space-y-2.5">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.8_0.18_220)]" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
