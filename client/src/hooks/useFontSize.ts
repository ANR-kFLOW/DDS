import { useState, useEffect, useCallback } from "react";

const SIZES = [100, 112, 125] as const;
type SizeIndex = 0 | 1 | 2;

export function useFontSize() {
  const [sizeIndex, setSizeIndex] = useState<SizeIndex>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dds-font-size");
      if (saved !== null) {
        const idx = Number(saved);
        if (idx >= 0 && idx <= 2) return idx as SizeIndex;
      }
    }
    return 0;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${SIZES[sizeIndex]}%`;
    localStorage.setItem("dds-font-size", String(sizeIndex));
    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [sizeIndex]);

  const increase = useCallback(() => {
    setSizeIndex((prev) => (prev < 2 ? ((prev + 1) as SizeIndex) : prev));
  }, []);

  const decrease = useCallback(() => {
    setSizeIndex((prev) => (prev > 0 ? ((prev - 1) as SizeIndex) : prev));
  }, []);

  return { sizeIndex, sizePercent: SIZES[sizeIndex], increase, decrease, canIncrease: sizeIndex < 2, canDecrease: sizeIndex > 0 };
}
