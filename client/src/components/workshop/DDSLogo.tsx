import { motion } from "framer-motion";

export default function DDSLogo() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { delay: 0.3 + i * 0.12, duration: 1.4, ease: "easeInOut" }, opacity: { delay: 0.3 + i * 0.12, duration: 0.2 } },
    }),
  };

  const pop = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 0.6 + i * 0.06, duration: 0.5, type: "spring", stiffness: 260, damping: 15 },
    }),
  };

  const letterReveal = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.1 + i * 0.12, duration: 0.6, type: "spring", stiffness: 150 },
    }),
  };

  const subtitleReveal = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 0.75,
      y: 0,
      transition: { delay: 1.6, duration: 0.8 },
    },
  };

  const shimmer = {
    hidden: { x: -200 },
    visible: {
      x: 700,
      transition: { delay: 1.8, duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        className="relative"
        initial="hidden"
        animate="visible"
      >
        <motion.svg
          viewBox="0 0 700 220"
          className="w-full max-w-[700px] h-auto"
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
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.25" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <filter id="bigGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <clipPath id="textClip">
              <text x="40" y="120" style={{ fontSize: "130px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>DDS</text>
              <text x="380" y="120" style={{ fontSize: "130px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}>2026</text>
            </clipPath>
            <filter id="textShadow">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#7c3aed" floodOpacity="0.3" />
            </filter>
          </defs>

          <g opacity={0.5}>
            <motion.line x1="60" y1="25" x2="140" y2="55" stroke="url(#edgeGrad)" strokeWidth="2" custom={0} variants={draw} />
            <motion.line x1="140" y1="55" x2="210" y2="20" stroke="url(#edgeGrad)" strokeWidth="2" custom={1} variants={draw} />
            <motion.line x1="210" y1="20" x2="280" y2="50" stroke="url(#edgeGrad)" strokeWidth="2" custom={2} variants={draw} />
            <motion.line x1="280" y1="50" x2="350" y2="15" stroke="url(#edgeGrad)" strokeWidth="2" custom={3} variants={draw} />
            <motion.line x1="350" y1="15" x2="430" y2="45" stroke="url(#edgeGrad)" strokeWidth="2" custom={4} variants={draw} />
            <motion.line x1="430" y1="45" x2="510" y2="18" stroke="url(#edgeGrad)" strokeWidth="2" custom={5} variants={draw} />
            <motion.line x1="510" y1="18" x2="600" y2="40" stroke="url(#edgeGrad)" strokeWidth="2" custom={6} variants={draw} />
            <motion.line x1="600" y1="40" x2="660" y2="12" stroke="url(#edgeGrad)" strokeWidth="2" custom={7} variants={draw} />

            <motion.line x1="140" y1="55" x2="280" y2="50" stroke="url(#edgeGrad)" strokeWidth="1" opacity={0.4} custom={3} variants={draw} />
            <motion.line x1="350" y1="15" x2="510" y2="18" stroke="url(#edgeGrad)" strokeWidth="1" opacity={0.4} custom={5} variants={draw} />
            <motion.line x1="210" y1="20" x2="430" y2="45" stroke="url(#edgeGrad)" strokeWidth="1" opacity={0.3} custom={4} variants={draw} />

            {[
              { cx: 60, cy: 25, r: 6, color: "#3b82f6" },
              { cx: 140, cy: 55, r: 8, color: "#8b5cf6" },
              { cx: 210, cy: 20, r: 5, color: "#06b6d4" },
              { cx: 280, cy: 50, r: 7, color: "#a855f7" },
              { cx: 350, cy: 15, r: 6, color: "#3b82f6" },
              { cx: 430, cy: 45, r: 7.5, color: "#8b5cf6" },
              { cx: 510, cy: 18, r: 5.5, color: "#06b6d4" },
              { cx: 600, cy: 40, r: 6.5, color: "#a855f7" },
              { cx: 660, cy: 12, r: 5, color: "#3b82f6" },
            ].map((node, i) => (
              <motion.circle
                key={`node-${i}`}
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill={node.color}
                filter="url(#bigGlow)"
                custom={i}
                variants={pop}
              />
            ))}
          </g>

          {["D", "D", "S"].map((letter, i) => (
            <motion.text
              key={`dds-${i}`}
              x={40 + i * 105}
              y={120}
              style={{ fontSize: "130px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}
              fill="url(#ddsGrad)"
              filter="url(#textShadow)"
              custom={i}
              variants={letterReveal}
            >
              {letter}
            </motion.text>
          ))}

          {["2", "0", "2", "6"].map((digit, i) => (
            <motion.text
              key={`year-${i}`}
              x={380 + i * 82}
              y={120}
              style={{ fontSize: "130px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}
              fill="url(#yearGrad)"
              filter="url(#textShadow)"
              custom={3 + i}
              variants={letterReveal}
            >
              {digit}
            </motion.text>
          ))}

          <motion.rect
            x={0}
            y={10}
            width={200}
            height={130}
            fill="url(#shimmerGrad)"
            custom={0}
            variants={shimmer}
          />

          <g opacity={0.6}>
            <motion.rect x="42" y="145" width="10" height="28" rx="2" fill="#3b82f6" custom={8} variants={pop} />
            <motion.rect x="58" y="138" width="10" height="35" rx="2" fill="#8b5cf6" custom={9} variants={pop} />
            <motion.rect x="74" y="150" width="10" height="23" rx="2" fill="#06b6d4" custom={10} variants={pop} />
            <motion.rect x="90" y="132" width="10" height="41" rx="2" fill="#a855f7" custom={11} variants={pop} />
            <motion.rect x="106" y="142" width="10" height="31" rx="2" fill="#3b82f6" custom={12} variants={pop} />
          </g>

          <motion.path
            d="M160 165 C220 140, 280 175, 340 155 S450 140, 520 160 S600 145, 660 158"
            fill="none"
            stroke="url(#edgeGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            custom={6}
            variants={draw}
          />
          <motion.polygon
            points="660,158 648,150 648,166"
            fill="#06b6d4"
            custom={14}
            variants={pop}
          />

          {[
            { cx: 160, cy: 165, r: 3.5 },
            { cx: 250, cy: 157, r: 3 },
            { cx: 340, cy: 155, r: 3.5 },
            { cx: 440, cy: 150, r: 3 },
            { cx: 520, cy: 160, r: 3.5 },
            { cx: 590, cy: 152, r: 3 },
          ].map((dot, i) => (
            <motion.circle
              key={`trail-${i}`}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={i % 2 === 0 ? "#8b5cf6" : "#06b6d4"}
              custom={10 + i}
              variants={pop}
            />
          ))}

          <motion.text
            x="350"
            y="200"
            textAnchor="middle"
            style={{ fontSize: "13px", fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.25em" }}
            fill="currentColor"
            className="text-muted-foreground"
            variants={subtitleReveal}
          >
            BRIDGING KNOWLEDGE GRAPHS, GENAI & NARRATIVE
          </motion.text>
        </motion.svg>
      </motion.div>

      <motion.p
        className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl text-center leading-relaxed"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        Data-Driven Storytelling
      </motion.p>
    </div>
  );
}
