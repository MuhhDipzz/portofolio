export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.25_0.08_280/0.6),transparent_60%)]" />
      <div className="absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full bg-[oklch(0.55_0.25_265/0.35)] blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-[oklch(0.6_0.25_310/0.30)] blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-[oklch(0.65_0.2_210/0.25)] blur-3xl animate-blob"
        style={{ animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 animated-grid opacity-60" />
    </div>
  );
}
