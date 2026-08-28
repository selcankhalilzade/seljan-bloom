"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import { FlowerMark } from "@/components/brand/marks";
import { cn } from "@/lib/utils";

type Petal = {
  id: string;
  startX: number;
  delay: number;
  duration: number;
  size: number;
  sway1: number;
  sway2: number;
  sway3: number;
  sway4: number;
  spin: number;
  flip: number;
  opacity: number;
  blur: number;
  z: number;
};

type Origin = { x: number; y: number };

type FlowerRainContextValue = {
  bloom: (origin?: Origin) => void;
};

const FlowerRainContext = createContext<FlowerRainContextValue | null>(null);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function makeBurst(originX: number, count: number): Petal[] {
  return Array.from({ length: count }, () => {
    const depth = Math.random();
    const dir = Math.random() > 0.5 ? 1 : -1;
    const wobble = 48 + Math.random() * 110;
    const spread = (Math.random() - 0.5) * window.innerWidth * 0.92;

    return {
      id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      startX: originX + spread * (0.2 + depth * 0.8),
      delay: Math.random() * 0.75,
      duration: 2.6 + (1 - depth) * 1.9 + Math.random() * 0.5,
      size: 18 + depth * 42,
      sway1: dir * wobble * 0.45,
      sway2: dir * -wobble * 0.85,
      sway3: dir * wobble * 0.6,
      sway4: dir * -wobble * 0.25,
      spin: dir * (220 + Math.random() * 480),
      flip: (Math.random() - 0.5) * 200,
      opacity: 0.5 + depth * 0.5,
      blur: (1 - depth) * 0.7,
      z: Math.round(depth * 24),
    };
  });
}

export function FlowerRainProvider({ children }: { children: ReactNode }) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const waveTimers = useRef<number[]>([]);
  const clearTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      waveTimers.current.forEach((id) => window.clearTimeout(id));
      if (clearTimer.current) window.clearTimeout(clearTimer.current);
    },
    [],
  );

  const bloom = useCallback((origin?: Origin) => {
    if (prefersReducedMotion()) return;

    const originX = origin?.x ?? window.innerWidth / 2;
    const waves = [7, 10, 8];

    waves.forEach((count, index) => {
      const id = window.setTimeout(() => {
        setPetals((current) =>
          [...current, ...makeBurst(originX, count)].slice(-64),
        );
      }, index * 220);
      waveTimers.current.push(id);
    });

    if (clearTimer.current) window.clearTimeout(clearTimer.current);
    clearTimer.current = window.setTimeout(() => setPetals([]), 6400);
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
            <div
              key={petal.id}
              className="flower-fall absolute top-0 left-0"
              style={
                {
                  width: petal.size,
                  height: petal.size,
                  zIndex: petal.z,
                  filter: petal.blur ? `blur(${petal.blur}px)` : undefined,
                  animationDuration: `${petal.duration}s`,
                  animationDelay: `${petal.delay}s`,
                  "--flower-x": `${petal.startX}px`,
                  "--flower-opacity": petal.opacity,
                  "--sway-1": `${petal.sway1}px`,
                  "--sway-2": `${petal.sway2}px`,
                  "--sway-3": `${petal.sway3}px`,
                  "--sway-4": `${petal.sway4}px`,
                } as CSSProperties
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/flower.png"
                alt=""
                className="flower-tumble h-full w-full object-contain"
                style={
                  {
                    animationDuration: `${petal.duration * 0.95}s`,
                    animationDelay: `${petal.delay}s`,
                    "--flower-spin": `${petal.spin}deg`,
                    "--flower-flip": `${petal.flip}deg`,
                  } as CSSProperties
                }
              />
            </div>
          ))}
        </div>
      ) : null}
    </FlowerRainContext.Provider>
  );
}

export function BloomFlower({ className }: { className?: string }) {
  const rain = useContext(FlowerRainContext);
  const [pop, setPop] = useState(false);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        const rect = event.currentTarget.getBoundingClientRect();
        rain?.bloom({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
        setPop(true);
        window.setTimeout(() => setPop(false), 520);
      }}
      aria-label="Let flowers fall"
      className={cn(
        "relative z-10 shrink-0 cursor-pointer rounded-full text-primary outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary/40",
        pop && "animate-flower-pop",
      )}
    >
      <FlowerMark className={cn(className)} />
    </button>
  );
}
