import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

function KnowledgeGraph({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ opacity }}>
      <defs>
        <linearGradient id="graphEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="nodeGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <line x1="20" y1="30" x2="50" y2="15" stroke="url(#graphEdge)" strokeWidth="1.5" opacity={0.7} />
      <line x1="50" y1="15" x2="80" y2="35" stroke="url(#graphEdge)" strokeWidth="1.5" opacity={0.7} />
      <line x1="20" y1="30" x2="35" y2="70" stroke="url(#graphEdge)" strokeWidth="1.5" opacity={0.7} />
      <line x1="50" y1="15" x2="65" y2="55" stroke="url(#graphEdge)" strokeWidth="1.5" opacity={0.7} />
      <line x1="80" y1="35" x2="65" y2="55" stroke="url(#graphEdge)" strokeWidth="1.5" opacity={0.7} />
      <line x1="35" y1="70" x2="65" y2="55" stroke="url(#graphEdge)" strokeWidth="1.5" opacity={0.7} />
      <line x1="35" y1="70" x2="55" y2="85" stroke="url(#graphEdge)" strokeWidth="1.5" opacity={0.7} />
      <circle cx={20} cy={30} r={5} fill="#3b82f6" filter="url(#nodeGlow)" />
      <circle cx={50} cy={15} r={6.5} fill="#8b5cf6" filter="url(#nodeGlow)" />
      <circle cx={80} cy={35} r={4.5} fill="#06b6d4" filter="url(#nodeGlow)" />
      <circle cx={35} cy={70} r={5} fill="#3b82f6" filter="url(#nodeGlow)" />
      <circle cx={65} cy={55} r={5.5} fill="#a855f7" filter="url(#nodeGlow)" />
      <circle cx={55} cy={85} r={4} fill="#06b6d4" filter="url(#nodeGlow)" />
    </svg>
  );
}

function BarChart({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ opacity }}>
      <defs>
        <linearGradient id="bar1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient id="bar2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient id="bar3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" stopOpacity={0.5} />
        </linearGradient>
      </defs>
      <rect x="10" y="55" width="15" height="38" rx="3" fill="url(#bar1)" />
      <rect x="30" y="28" width="15" height="65" rx="3" fill="url(#bar2)" />
      <rect x="50" y="42" width="15" height="51" rx="3" fill="url(#bar3)" />
      <rect x="70" y="12" width="15" height="81" rx="3" fill="url(#bar1)" />
      <line x1="5" y1="93" x2="92" y2="93" stroke="#8b5cf6" strokeWidth="1.5" opacity={0.4} />
    </svg>
  );
}

function PieChart({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ opacity }}>
      <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity={0.25} />
      <path d="M50 50 L50 10 A40 40 0 0 1 84.6 30 Z" fill="#3b82f6" opacity={0.35} />
      <path d="M50 50 L84.6 30 A40 40 0 0 1 84.6 70 Z" fill="#8b5cf6" opacity={0.3} />
      <path d="M50 50 L84.6 70 A40 40 0 0 1 50 90 Z" fill="#06b6d4" opacity={0.4} />
      <path d="M50 50 L50 90 A40 40 0 0 1 15.4 70 Z" fill="#a855f7" opacity={0.25} />
    </svg>
  );
}

function ScatterPlot({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ opacity }}>
      <line x1="10" y1="90" x2="10" y2="10" stroke="#8b5cf6" strokeWidth="1.5" opacity={0.3} />
      <line x1="10" y1="90" x2="90" y2="90" stroke="#8b5cf6" strokeWidth="1.5" opacity={0.3} />
      <circle cx="22" cy="72" r="4" fill="#3b82f6" opacity={0.7} />
      <circle cx="35" cy="55" r="5" fill="#8b5cf6" opacity={0.6} />
      <circle cx="48" cy="42" r="3.5" fill="#06b6d4" opacity={0.7} />
      <circle cx="58" cy="28" r="6" fill="#a855f7" opacity={0.6} />
      <circle cx="72" cy="22" r="4" fill="#3b82f6" opacity={0.7} />
      <circle cx="82" cy="16" r="4.5" fill="#06b6d4" opacity={0.65} />
      <path d="M22 72 Q38 48, 58 28 T82 16" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" opacity={0.35} />
    </svg>
  );
}

function FlowArrow({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 140 50" width={size * 1.6} height={size * 0.6} style={{ opacity }}>
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d="M5 25 C25 8, 45 42, 70 25 S105 8, 130 25" fill="none" stroke="url(#flowGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="130,25 120,18 120,32" fill="#06b6d4" opacity={0.7} />
      <circle cx="5" cy="25" r="3" fill="#3b82f6" opacity={0.6} />
      <circle cx="70" cy="25" r="3" fill="#8b5cf6" opacity={0.6} />
    </svg>
  );
}

function DocumentPage({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 80 100" width={size * 0.8} height={size} style={{ opacity }}>
      <rect x="5" y="5" width="60" height="75" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      <path d="M65 5 L65 25 L75 25" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      <line x1="65" y1="5" x2="75" y2="25" stroke="#3b82f6" strokeWidth="1.5" />
      <line x1="15" y1="35" x2="55" y2="35" stroke="#8b5cf6" strokeWidth="2" opacity={0.5} />
      <line x1="15" y1="45" x2="60" y2="45" stroke="#8b5cf6" strokeWidth="2" opacity={0.4} />
      <line x1="15" y1="55" x2="45" y2="55" stroke="#8b5cf6" strokeWidth="2" opacity={0.5} />
      <line x1="15" y1="65" x2="55" y2="65" stroke="#8b5cf6" strokeWidth="2" opacity={0.4} />
    </svg>
  );
}

const elements = [
  { x: "3%", y: "8%", duration: 28, delay: 0, opacity: 0.18, type: "graph", size: 160 },
  { x: "72%", y: "5%", duration: 32, delay: 1, opacity: 0.15, type: "barchart", size: 120 },
  { x: "58%", y: "58%", duration: 25, delay: 2, opacity: 0.16, type: "document", size: 90 },
  { x: "12%", y: "62%", duration: 22, delay: 0.5, opacity: 0.14, type: "flow", size: 100 },
  { x: "82%", y: "45%", duration: 27, delay: 3, opacity: 0.15, type: "pie", size: 110 },
  { x: "38%", y: "72%", duration: 30, delay: 1.5, opacity: 0.13, type: "scatter", size: 120 },
  { x: "48%", y: "12%", duration: 35, delay: 4, opacity: 0.12, type: "graph", size: 130 },
  { x: "22%", y: "35%", duration: 26, delay: 2.5, opacity: 0.14, type: "document", size: 80 },
  { x: "88%", y: "20%", duration: 24, delay: 1, opacity: 0.12, type: "flow", size: 85 },
  { x: "65%", y: "30%", duration: 29, delay: 3.5, opacity: 0.11, type: "scatter", size: 95 },
];

function FloatingOrbs() {
  const orbs = useMemo(() => [
    { x: "10%", y: "20%", size: 320, color: "rgba(59,130,246,0.12)", dur: 20, delay: 0 },
    { x: "70%", y: "10%", size: 280, color: "rgba(139,92,246,0.1)", dur: 25, delay: 2 },
    { x: "80%", y: "60%", size: 350, color: "rgba(6,182,212,0.08)", dur: 22, delay: 1 },
    { x: "25%", y: "70%", size: 260, color: "rgba(168,85,247,0.1)", dur: 28, delay: 3 },
    { x: "50%", y: "40%", size: 400, color: "rgba(59,130,246,0.06)", dur: 30, delay: 0.5 },
    { x: "5%", y: "50%", size: 200, color: "rgba(6,182,212,0.1)", dur: 18, delay: 4 },
  ], []);

  return (
    <>
      {orbs.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 40, -20, 30, 0],
            y: [0, -30, 20, -10, 0],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </>
  );
}

function ConnectingMesh() {
  const lines = useMemo(() => {
    const result = [];
    const points = [
      { x: 10, y: 20 }, { x: 30, y: 10 }, { x: 55, y: 25 },
      { x: 80, y: 15 }, { x: 90, y: 40 }, { x: 75, y: 65 },
      { x: 50, y: 70 }, { x: 20, y: 60 }, { x: 5, y: 45 },
      { x: 40, y: 45 }, { x: 65, y: 50 }, { x: 15, y: 80 },
      { x: 85, y: 80 }, { x: 45, y: 90 }, { x: 35, y: 30 },
    ];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 35) {
          result.push({
            x1: points[i].x, y1: points[i].y,
            x2: points[j].x, y2: points[j].y,
            opacity: Math.max(0.03, 0.12 - dist * 0.003),
          });
        }
      }
    }
    return { lines: result, points };
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="meshLine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {lines.lines.map((l, i) => (
        <motion.line
          key={`mesh-${i}`}
          x1={`${l.x1}%`} y1={`${l.y1}%`}
          x2={`${l.x2}%`} y2={`${l.y2}%`}
          stroke="url(#meshLine)"
          strokeWidth="0.15"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, l.opacity, l.opacity * 0.5, l.opacity, 0] }}
          transition={{ duration: 12 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}
      {lines.points.map((p, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={`${p.x}%`} cy={`${p.y}%`}
          r="0.4"
          fill={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4"}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0.15, 0.3, 0] }}
          transition={{ duration: 8 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
    </svg>
  );
}

function MiniParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      x: `${5 + Math.random() * 90}%`,
      y: `${5 + Math.random() * 90}%`,
      size: 2 + Math.random() * 4,
      dur: 10 + Math.random() * 15,
      delay: Math.random() * 5,
      color: ["#3b82f6", "#8b5cf6", "#06b6d4", "#a855f7"][i % 4],
    }))
  , []);

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          animate={{
            opacity: [0, 0.5, 0.2, 0.6, 0],
            y: [0, -20, 10, -15, 0],
            x: [0, 8, -5, 12, 0],
            scale: [1, 1.5, 0.8, 1.3, 1],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </>
  );
}

export default function HeroParticles() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <FloatingOrbs />
      <ConnectingMesh />
      <MiniParticles />

      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -18, 0, 18, 0],
            x: [0, 12, 0, -12, 0],
            rotate: el.type === "flow" ? [0, 0, 0] : [0, 4, -4, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: el.delay,
          }}
        >
          {el.type === "graph" && <KnowledgeGraph size={el.size} opacity={el.opacity} />}
          {el.type === "barchart" && <BarChart size={el.size} opacity={el.opacity} />}
          {el.type === "document" && <DocumentPage size={el.size} opacity={el.opacity} />}
          {el.type === "flow" && <FlowArrow size={el.size} opacity={el.opacity} />}
          {el.type === "pie" && <PieChart size={el.size} opacity={el.opacity} />}
          {el.type === "scatter" && <ScatterPlot size={el.size} opacity={el.opacity} />}
        </motion.div>
      ))}
    </div>
  );
}
