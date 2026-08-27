import { useId } from "react";

export function BrandSeal({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const topId = `seljan-arc-top-${uid}`;
  const bottomId = `seljan-arc-bottom-${uid}`;
  const maskId = `seljan-seal-hole-${uid}`;

  return (
    <div className={className} aria-label="Seljan, made with heart">
      <svg viewBox="0 0 200 200" className="h-full w-full text-primary">
        <defs>
          <mask id={maskId}>
            <rect x="66" y="66" width="68" height="68" fill="white" />
            <circle cx="100" cy="100" r="7.8" fill="black" />
          </mask>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="94"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <circle
          cx="100"
          cy="100"
          r="86"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          id={topId}
          d="M 38 100 A 62 62 0 0 1 162 100"
          fill="none"
        />
        <path
          id={bottomId}
          d="M 162 100 A 62 62 0 0 1 38 100"
          fill="none"
        />
        <text
          fill="currentColor"
          fontSize="11"
          letterSpacing="4"
          fontFamily="var(--font-outfit), sans-serif"
        >
          <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
            SELJAN
          </textPath>
        </text>
        <text
          fill="currentColor"
          fontSize="8"
          letterSpacing="2.4"
          fontFamily="var(--font-outfit), sans-serif"
        >
          <textPath href={`#${bottomId}`} startOffset="50%" textAnchor="middle">
            MADE WITH HEART
          </textPath>
        </text>
        <g fill="currentColor" mask={`url(#${maskId})`}>
          <circle cx="100" cy="84.5" r="14.1" />
          <circle cx="113.45" cy="92.2" r="14.1" />
          <circle cx="113.45" cy="107.8" r="14.1" />
          <circle cx="100" cy="115.5" r="14.1" />
          <circle cx="86.55" cy="107.8" r="14.1" />
          <circle cx="86.55" cy="92.2" r="14.1" />
        </g>
      </svg>
    </div>
  );
}
