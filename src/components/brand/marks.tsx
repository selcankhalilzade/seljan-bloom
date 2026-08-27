import { useId } from "react";

import { cn } from "@/lib/utils";

type FlowerMarkProps = {
  className?: string;
  color?: string;
};

export function FlowerMark({ className, color = "currentColor" }: FlowerMarkProps) {
  const id = useId().replace(/:/g, "");
  const maskId = `flower-hole-${id}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("shrink-0", className)}
      fill="none"
      aria-hidden
    >
      <defs>
        <mask id={maskId}>
          <rect width="100" height="100" fill="white" />
          <circle cx="50" cy="50" r="11" fill="black" />
        </mask>
      </defs>
      <g fill={color} mask={`url(#${maskId})`}>
        <circle cx="50" cy="28" r="20" />
        <circle cx="69.05" cy="39" r="20" />
        <circle cx="69.05" cy="61" r="20" />
        <circle cx="50" cy="72" r="20" />
        <circle cx="30.95" cy="61" r="20" />
        <circle cx="30.95" cy="39" r="20" />
      </g>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-script leading-none tracking-tight", className)}>
      Seljan
    </span>
  );
}
