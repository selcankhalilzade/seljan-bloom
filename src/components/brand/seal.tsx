import { useId } from "react";

export function BrandSeal({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const topId = `seljan-arc-top-${uid}`;
  const bottomId = `seljan-arc-bottom-${uid}`;

  return (
    <div className={className} aria-label="Seljan, made with heart">
      <svg viewBox="0 0 200 200" className="h-full w-full">
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
        <path id={topId} d="M 38 100 A 62 62 0 0 1 162 100" fill="none" />
        <path id={bottomId} d="M 162 100 A 62 62 0 0 1 38 100" fill="none" />
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
        <image
          href="/brand/flower.png"
          x="58"
          y="58"
          width="84"
          height="84"
        />
      </svg>
    </div>
  );
}
