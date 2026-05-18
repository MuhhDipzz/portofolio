export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Muhammad Nadhif Triyudo</span>. Crafted with care.
        </p>
        <p className="text-xs">Built with React, Tailwind CSS & Motion.</p>
      </div>
    </footer>
  );
}
