import { motion } from "motion/react";
import { GraduationCap, Wrench, Code2 } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { icon: GraduationCap, label: "Fresh Graduate", value: "SMK TKJ" },
  { icon: Wrench, label: "Internship", value: "5 Months" },
  { icon: Code2, label: "Focus", value: "Web Dev" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid items-start gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass ring-gradient rounded-3xl p-8 lg:col-span-3"
        >
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            Fresh graduate from SMK majoring in{" "}
            <span className="text-gradient font-semibold">Computer and Network Engineering</span>{" "}
            with experience in IT Support and a strong interest in web development. Skilled in
            JavaScript, Next.js, Tailwind CSS, Bootstrap, and Supabase. Passionate about building
            modern and responsive web applications that feel polished and perform well.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:col-span-2">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass ring-gradient flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.2_250/0.25)] to-[oklch(0.65_0.25_295/0.25)] ring-1 ring-white/10">
                <s.icon className="h-5 w-5 text-[oklch(0.85_0.15_260)]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </div>
                <div className="text-lg font-semibold">{s.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
