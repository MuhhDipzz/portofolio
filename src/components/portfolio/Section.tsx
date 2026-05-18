import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="glass inline-flex rounded-full px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
