import { motion, useReducedMotion } from "framer-motion";

function DataNode({ cx, cy, r, opacity }: { cx: number; cy: number; r: number; opacity: number }) {
  return <circle cx={cx} cy={cy} r={r} fill="currentColor" opacity={opacity} />;
}

function KnowledgeGraph({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="text-primary" style={{ opacity }}>
      <line x1="20" y1="30" x2="50" y2="15" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <line x1="50" y1="15" x2="80" y2="35" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <line x1="20" y1="30" x2="35" y2="70" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <line x1="50" y1="15" x2="65" y2="55" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <line x1="80" y1="35" x2="65" y2="55" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <line x1="35" y1="70" x2="65" y2="55" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <line x1="35" y1="70" x2="55" y2="85" stroke="currentColor" strokeWidth="1.5" opacity={0.6} />
      <DataNode cx={20} cy={30} r={5} opacity={0.8} />
      <DataNode cx={50} cy={15} r={6} opacity={0.9} />
      <DataNode cx={80} cy={35} r={4.5} opacity={0.7} />
      <DataNode cx={35} cy={70} r={5} opacity={0.8} />
      <DataNode cx={65} cy={55} r={5.5} opacity={0.85} />
      <DataNode cx={55} cy={85} r={4} opacity={0.7} />
    </svg>
  );
}

function BarChart({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="text-purple-500" style={{ opacity }}>
      <rect x="10" y="55" width="14" height="40" rx="3" fill="currentColor" opacity={0.5} />
      <rect x="30" y="30" width="14" height="65" rx="3" fill="currentColor" opacity={0.6} />
      <rect x="50" y="45" width="14" height="50" rx="3" fill="currentColor" opacity={0.5} />
      <rect x="70" y="15" width="14" height="80" rx="3" fill="currentColor" opacity={0.7} />
      <line x1="5" y1="95" x2="95" y2="95" stroke="currentColor" strokeWidth="2" opacity={0.3} />
    </svg>
  );
}

function DocumentPage({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 80 100" width={size * 0.8} height={size} className="text-primary" style={{ opacity }}>
      <rect x="5" y="5" width="55" height="70" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M60 5 L60 25 L75 25" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="60" y1="5" x2="75" y2="25" stroke="currentColor" strokeWidth="2" />
      <rect x="5" y="25" width="70" height="55" rx="0 0 4 4" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="15" y1="40" x2="55" y2="40" stroke="currentColor" strokeWidth="2" opacity={0.4} />
      <line x1="15" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="2" opacity={0.4} />
      <line x1="15" y1="60" x2="50" y2="60" stroke="currentColor" strokeWidth="2" opacity={0.4} />
      <line x1="15" y1="70" x2="60" y2="70" stroke="currentColor" strokeWidth="2" opacity={0.4} />
    </svg>
  );
}

function FlowArrow({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 120 40" width={size * 1.5} height={size * 0.5} className="text-primary" style={{ opacity }}>
      <path d="M5 20 C30 5, 50 35, 80 20 S110 10, 115 20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
      <polygon points="115,20 105,14 105,26" fill="currentColor" opacity={0.6} />
    </svg>
  );
}

function PieChart({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="text-purple-500" style={{ opacity }}>
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity={0.3} />
      <path d="M50 50 L50 10 A40 40 0 0 1 84.6 30 Z" fill="currentColor" opacity={0.25} />
      <path d="M50 50 L84.6 30 A40 40 0 0 1 84.6 70 Z" fill="currentColor" opacity={0.15} />
      <path d="M50 50 L84.6 70 A40 40 0 0 1 50 90 Z" fill="currentColor" opacity={0.35} />
    </svg>
  );
}

function ScatterPlot({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="text-primary" style={{ opacity }}>
      <line x1="10" y1="90" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" opacity={0.3} />
      <line x1="10" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="1.5" opacity={0.3} />
      <circle cx="25" cy="70" r="3" fill="currentColor" opacity={0.5} />
      <circle cx="35" cy="55" r="3.5" fill="currentColor" opacity={0.6} />
      <circle cx="50" cy="45" r="3" fill="currentColor" opacity={0.5} />
      <circle cx="55" cy="30" r="4" fill="currentColor" opacity={0.7} />
      <circle cx="70" cy="25" r="3" fill="currentColor" opacity={0.5} />
      <circle cx="80" cy="20" r="3.5" fill="currentColor" opacity={0.6} />
      <path d="M25 70 Q40 50, 55 30 T80 20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" opacity={0.3} />
    </svg>
  );
}

const elements = [
  { x: "5%", y: "10%", duration: 25, delay: 0, opacity: 0.1, type: "graph", size: 140 },
  { x: "75%", y: "8%", duration: 28, delay: 1, opacity: 0.08, type: "barchart", size: 100 },
  { x: "60%", y: "60%", duration: 22, delay: 2, opacity: 0.09, type: "document", size: 80 },
  { x: "15%", y: "65%", duration: 20, delay: 0.5, opacity: 0.07, type: "flow", size: 90 },
  { x: "85%", y: "50%", duration: 24, delay: 3, opacity: 0.08, type: "pie", size: 90 },
  { x: "40%", y: "75%", duration: 26, delay: 1.5, opacity: 0.07, type: "scatter", size: 100 },
  { x: "50%", y: "15%", duration: 30, delay: 4, opacity: 0.06, type: "graph", size: 110 },
  { x: "25%", y: "40%", duration: 23, delay: 2.5, opacity: 0.08, type: "document", size: 70 },
  { x: "90%", y: "25%", duration: 21, delay: 1, opacity: 0.06, type: "flow", size: 80 },
];

export default function HeroParticles() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -15, 0, 15, 0],
            x: [0, 10, 0, -10, 0],
            rotate: el.type === "flow" ? [0, 0, 0] : [0, 3, -3, 0],
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

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-blue-400/3 rounded-full blur-3xl" />
    </div>
  );
}
