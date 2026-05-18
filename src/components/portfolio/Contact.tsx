import { motion } from "motion/react";
import { Mail, MessageCircle, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "ntriyudo@gmail.com",
    href: "mailto:ntriyudo@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+6289527968752",
    href: "https://wa.me/6289527968752",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@MuhhDipzz",
    href: "https://github.com/MuhhDipzz",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Muhammad Nadhif Triyudo",
    href: "https://linkedin.com/in/muhammad-nadhif-triyudo",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="Open to junior developer roles and freelance collaborations."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass ring-gradient group flex items-center gap-4 rounded-2xl p-5 transition-all hover:glow-sm"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.2_250/0.25)] to-[oklch(0.65_0.25_295/0.25)] ring-1 ring-white/10">
              <c.icon className="h-5 w-5 text-[oklch(0.85_0.15_260)]" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground">
                {c.label}
              </div>
              <div className="text-base font-medium">{c.value}</div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
