import { motion } from "framer-motion";

export default function DDSLogo() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { delay: i * 0.15, duration: 1.2, ease: "easeInOut" }, opacity: { delay: i * 0.15, duration: 0.3 } },
    }),
  };

  const nodeAppear = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 0.8 + i * 0.08, duration: 0.4, type: "spring", stiffness: 200 },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1.2 + i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.svg
        viewBox="0 0 520 140"
        className="w-full max-w-[520px] h-auto"
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="yearGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="logoGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.text
          x="30"
          y="88"
          className="font-bold"
          style={{ fontSize: "90px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
          fill="url(#logoGrad1)"
          custom={0}
          variants={fadeIn}
        >
          DDS
        </motion.text>

        <motion.text
          x="265"
          y="88"
          className="font-bold"
          style={{ fontSize: "90px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
          fill="url(#yearGrad)"
          custom={1}
          variants={fadeIn}
        >
          2026
        </motion.text>

        <motion.line x1="28" y1="25" x2="70" y2="60" stroke="url(#logoGrad2)" strokeWidth="1.5" custom={0} variants={draw} />
        <motion.line x1="70" y1="60" x2="115" y2="30" stroke="url(#logoGrad2)" strokeWidth="1.5" custom={1} variants={draw} />
        <motion.line x1="115" y1="30" x2="155" y2="55" stroke="url(#logoGrad2)" strokeWidth="1.5" custom={2} variants={draw} />
        <motion.line x1="155" y1="55" x2="200" y2="25" stroke="url(#logoGrad2)" strokeWidth="1.5" custom={3} variants={draw} />

        <motion.circle cx={28} cy={25} r={5} fill="#3b82f6" filter="url(#logoGlow)" custom={0} variants={nodeAppear} />
        <motion.circle cx={70} cy={60} r={6} fill="#8b5cf6" filter="url(#logoGlow)" custom={1} variants={nodeAppear} />
        <motion.circle cx={115} cy={30} r={5} fill="#06b6d4" filter="url(#logoGlow)" custom={2} variants={nodeAppear} />
        <motion.circle cx={155} cy={55} r={5.5} fill="#a855f7" filter="url(#logoGlow)" custom={3} variants={nodeAppear} />
        <motion.circle cx={200} cy={25} r={4.5} fill="#3b82f6" filter="url(#logoGlow)" custom={4} variants={nodeAppear} />

        <motion.path
          d="M270 25 C300 10, 330 50, 370 30 S430 10, 490 30"
          fill="none"
          stroke="url(#yearGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          custom={4}
          variants={draw}
        />
        <motion.polygon
          points="490,30 480,23 480,37"
          fill="#06b6d4"
          custom={6}
          variants={nodeAppear}
        />

        <motion.rect x="295" y="18" width="8" height="22" rx="2" fill="#8b5cf6" opacity={0.4} custom={5} variants={nodeAppear} />
        <motion.rect x="310" y="12" width="8" height="28" rx="2" fill="#3b82f6" opacity={0.5} custom={6} variants={nodeAppear} />
        <motion.rect x="325" y="22" width="8" height="18" rx="2" fill="#06b6d4" opacity={0.4} custom={7} variants={nodeAppear} />

        <motion.line x1="0" y1="105" x2="520" y2="105" stroke="url(#logoGrad1)" strokeWidth="1" opacity={0.15} custom={5} variants={draw} />

        <motion.text
          x="260"
          y="128"
          textAnchor="middle"
          style={{ fontSize: "14px", fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.2em" }}
          fill="currentColor"
          className="text-muted-foreground"
          opacity={0.7}
          custom={3}
          variants={fadeIn}
        >
          BRIDGING KNOWLEDGE GRAPHS, GENAI & NARRATIVE
        </motion.text>
      </motion.svg>
    </div>
  );
}
