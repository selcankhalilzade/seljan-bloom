"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { FlowerMark } from "@/components/brand/marks";
import { cn } from "@/lib/utils";

type Petal = {
  id: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  spin: number;
};

type FlowerRainContextValue = {
  bloom: () => void;
};

const FlowerRainContext = createContext<FlowerRainContextValue | null>(null);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function FlowerRainProvider({ children }: { children: ReactNode }) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const clearTimer = useRef<number | null>(null);

  const bloom = useCallback(() => {
    if (prefersReducedMotion()) return;

    const burst: Petal[] = Array.from({ length: 20 }, (_, index) => ({
      id: `${Date.now()}-${index}-${Math.random().toString(16).slice(2, 6)}`,
      left: Math.random() * 100,
      delay: Math.random() * 0.55,
      duration: 2.8 + Math.random() * 1.4,
      size: 22 + Math.random() * 26,
      drift: (Math.random() - 0.5) * 90,
      spin: 140 + Math.random() * 220,
    }));

    setPetals((current) => [...current, ...burst].slice(-48));

    if (clearTimer.current) window.clearTimeout(clearTimer.current);
    clearTimer.current = window.setTimeout(() => setPetals([]), 4800);
  }, []);

  return (
    <FlowerRainContext.Provider value={{ bloom }}>
      {children}
      {petals.length > 0 ? (
        <div
          className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
          aria-hidden
        >
          {petals.map((petal) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={petal.id}
              src="/brand/flower.png"
              alt=""
              className="flower-fall absolute top-0 object-contain"
              style={{
                left: `${petal.left}vw`,
                width: petal.size,
                height: petal.size,
                animationDuration: `${petal.duration}s`,
                animationDelay: `${petal.delay}s`,
                ["--flower-drift" as string]: `${petal.drift}px`,
                ["--flower-spin" as string]: `${petal.spin}deg`,
              }}
            />
          ))}
        </div>
      ) : null}
    </FlowerRainContext.Provider>
  );
}

export function BloomFlower({ className }: { className?: string }) {
  const rain = useContext(FlowerRainContext);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        rain?.bloom();
      }}
      aria-label="Let flowers fall"
      className="relative z-10 shrink-0 cursor-pointer rounded-full text-primary outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <FlowerMark className={cn(className)} />
    </button>
  );
}
