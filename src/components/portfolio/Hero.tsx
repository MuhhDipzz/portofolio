import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const ROLES = ["Frontend Developer", "Web Developer", "IT Support"];

function useTyping(words: string[], typeSpeed = 80, deleteSpeed = 45, hold = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, hold]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-[oklch(0.8_0.18_220)]" />
          Available for junior developer roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Hi, I'm <span className="text-gradient animate-gradient-x">Muhammad Nadhif Triyudo</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 flex h-10 items-center justify-center text-xl sm:text-2xl"
        >
          <span className="text-muted-foreground">I'm a&nbsp;</span>
          <span className="font-semibold text-foreground">{typed}</span>
          <span className="ml-0.5 inline-block h-6 w-[2px] bg-gradient-to-b from-[oklch(0.7_0.2_250)] to-[oklch(0.65_0.25_295)] animate-blink" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Fresh graduate passionate about crafting modern, responsive web experiences.
          I blend clean code with elegant design to build interfaces people enjoy using.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.7_0.2_250)] to-[oklch(0.65_0.25_295)] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03] glow-sm"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="glass ring-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          {[
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:alex@example.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="glass grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground hover:glow-sm"
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
