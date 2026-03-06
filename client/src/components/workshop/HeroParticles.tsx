import { motion, useReducedMotion } from "framer-motion";

const shapes = [
  { size: 80, x: "10%", y: "20%", duration: 18, delay: 0, opacity: 0.08, type: "circle" },
  { size: 120, x: "85%", y: "15%", duration: 22, delay: 2, opacity: 0.06, type: "circle" },
  { size: 60, x: "70%", y: "70%", duration: 20, delay: 1, opacity: 0.07, type: "square" },
  { size: 100, x: "20%", y: "75%", duration: 24, delay: 3, opacity: 0.05, type: "circle" },
  { size: 50, x: "50%", y: "30%", duration: 16, delay: 0.5, opacity: 0.06, type: "square" },
  { size: 70, x: "35%", y: "55%", duration: 19, delay: 2.5, opacity: 0.07, type: "circle" },
  { size: 40, x: "90%", y: "50%", duration: 15, delay: 1.5, opacity: 0.08, type: "triangle" },
  { size: 90, x: "5%", y: "45%", duration: 21, delay: 4, opacity: 0.05, type: "circle" },
];

export default function HeroParticles() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y, width: shape.size, height: shape.size }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        >
          {shape.type === "circle" && (
            <div
              className="w-full h-full rounded-full border-2 border-primary"
              style={{ opacity: shape.opacity }}
            />
          )}
          {shape.type === "square" && (
            <div
              className="w-full h-full rounded-xl border-2 border-purple-500"
              style={{ opacity: shape.opacity }}
            />
          )}
          {shape.type === "triangle" && (
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ opacity: shape.opacity }}>
              <polygon
                points="50,5 95,95 5,95"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-primary"
              />
            </svg>
          )}
        </motion.div>
      ))}

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
    </div>
  );
}
