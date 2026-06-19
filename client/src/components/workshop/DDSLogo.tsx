export default function DDSLogo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox="0 0 700 160"
        className="w-full max-w-[900px] h-auto"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ddsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="35%" stopColor="#7c3aed" />
            <stop offset="70%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="yearGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <text x="40" y="130" style={{ fontSize: "130px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }} fill="url(#ddsGrad)">DDS</text>
        <text x="380" y="130" style={{ fontSize: "130px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }} fill="url(#yearGrad)">2026</text>
      </svg>

      <p className="text-sm md:text-base font-semibold tracking-[0.22em] uppercase text-center text-foreground/60">
        Bridging Knowledge Graphs, GenAI &amp; Narrative
      </p>
    </div>
  );
}
