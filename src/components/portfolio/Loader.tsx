import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-2 border-white/10" />
            <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-2 border-transparent border-t-[oklch(0.7_0.2_250)] border-r-[oklch(0.65_0.25_295)]" />
            <div className="absolute inset-0 grid place-items-center text-xs font-semibold text-gradient">
              AR
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
