import { FlowerMark } from "@/components/brand/marks";

export function BrandSeal({ className }: { className?: string }) {
  return (
    <div
      className={className}
      aria-label="Seljan, made with heart"
    >
      <svg viewBox="0 0 200 200" className="h-full w-full text-primary">
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
          id="seljan-arc-top"
          d="M 40 100 A 60 60 0 0 1 160 100"
          fill="none"
        />
        <path
          id="seljan-arc-bottom"
          d="M 160 100 A 60 60 0 0 1 40 100"
          fill="none"
        />
        <text
          fill="currentColor"
          fontSize="11"
          letterSpacing="4"
          fontFamily="var(--font-outfit), sans-serif"
        >
          <textPath href="#seljan-arc-top" startOffset="50%" textAnchor="middle">
            SELJAN
          </textPath>
        </text>
        <text
          fill="currentColor"
          fontSize="8"
          letterSpacing="2.4"
          fontFamily="var(--font-outfit), sans-serif"
        >
          <textPath
            href="#seljan-arc-bottom"
            startOffset="50%"
            textAnchor="middle"
          >
            MADE WITH HEART
          </textPath>
        </text>
        <g transform="translate(68 68) scale(0.64)">
          <FlowerMark className="h-[100px] w-[100px]" />
        </g>
      </svg>
    </div>
  );
}
