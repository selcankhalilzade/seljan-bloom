const cream = "#F3E6D6";
const pink = "#E8B8A8";
const red = "#C45C52";
const redDeep = "#8F3A36";
const ink = "#2A1814";
const wood = "#5C3A2A";
const needleFill = "#C5D6A8";

const COLS = 9;
const ROWS = 7;
const STITCH_W = 22;
const STITCH_H = 20;

function jig(seed: number, amp = 1.4) {
  const n = Math.sin(seed * 12.9898) * 43758.5453;
  return (n - Math.floor(n) - 0.5) * 2 * amp;
}

function holdingY(x: number) {
  const t = (x - 24) / (255 - 24);
  return 128 + t * (82 - 128);
}

function stitchColor(col: number) {
  const t = col / (COLS - 1);
  if (t < 0.35) return red;
  if (t < 0.7) return pink;
  return cream;
}

function chunkyStitches() {
  const stitches: { d: string; color: string; ink: string }[] = [];
  for (let row = 0; row < ROWS; row++) {
    const widthScale = 1 - row * 0.028;
    for (let col = 0; col < COLS; col++) {
      const seed = row * 17 + col * 9;
      const x0 = 52 + col * STITCH_W * widthScale + (1 - widthScale) * 18 + jig(seed, 1.8);
      const y0 = holdingY(x0 + STITCH_W / 2) + 14 + row * STITCH_H + jig(seed + 3, 1.4);
      const w = STITCH_W * 0.9 * widthScale + jig(seed + 5, 1.2);
      const h = STITCH_H * 0.78 + jig(seed + 7, 1.6);
      const mid = x0 + w / 2 + jig(seed + 2, 1.1);
      stitches.push({
        color: stitchColor(col),
        d: `M ${x0} ${y0} Q ${x0 + w * 0.22} ${y0 + h * 0.45} ${mid} ${y0 + h} Q ${x0 + w * 0.78} ${y0 + h * 0.42} ${x0 + w} ${y0}`,
        ink: `M ${x0 + jig(seed, 0.6)} ${y0} Q ${mid} ${y0 + h + jig(seed, 0.8)} ${x0 + w} ${y0 + jig(seed + 1, 0.7)}`,
      });
    }
  }
  return stitches;
}

export function KnittingScene() {
  const stitches = chunkyStitches();
  const topLeft = 46 + jig(1, 2);
  const topRight = 250 + jig(2, 2);
  const topY = holdingY((topLeft + topRight) / 2) + 10;
  const bottomY = topY + ROWS * STITCH_H + 8;
  const bottomLeft = 64 + jig(4, 3);
  const bottomRight = 228 + jig(5, 3);

  return (
    <div
      className="knitting-scene relative mx-auto h-[26rem] w-[16.5rem] text-primary sm:h-[30rem] sm:w-[19rem] md:mx-0 md:h-[32rem] md:w-[20.5rem]"
      aria-hidden
    >
      <svg viewBox="0 0 280 430" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <filter id="sketch-grain" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" />
          </filter>
          <filter id="wash" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="t" />
            <feDisplacementMap in="SourceGraphic" in2="t" scale="4" />
          </filter>
          <linearGradient id="knit-wash" x1="48" y1="0" x2="248" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={red} />
            <stop offset="55%" stopColor={pink} />
            <stop offset="100%" stopColor={cream} />
          </linearGradient>
          <clipPath id="scarf-clip">
            <rect className="scarf-reveal" x="16" y="68" width="256" height="36" />
          </clipPath>
        </defs>

        <g clipPath="url(#scarf-clip)">
          <g className="scarf-drape">
            <path
              d={`M ${topLeft} ${topY}
                  Q ${topLeft + 70} ${topY - 4} ${topRight} ${holdingY(topRight) + 12}
                  Q ${bottomRight + 6} ${topY + 70} ${bottomRight} ${bottomY}
                  Q ${(bottomLeft + bottomRight) / 2} ${bottomY + 14} ${bottomLeft} ${bottomY}
                  Q ${topLeft - 8} ${topY + 80} ${topLeft} ${topY}
                  Z`}
              fill="url(#knit-wash)"
              filter="url(#wash)"
              opacity="0.88"
              transform="translate(1.5 1.2)"
            />
            <path
              d={`M ${topLeft} ${topY}
                  Q ${topLeft + 70} ${topY - 2} ${topRight} ${holdingY(topRight) + 12}
                  Q ${bottomRight + 4} ${topY + 72} ${bottomRight} ${bottomY}
                  Q ${(bottomLeft + bottomRight) / 2} ${bottomY + 12} ${bottomLeft} ${bottomY}
                  Q ${topLeft - 6} ${topY + 78} ${topLeft} ${topY}
                  Z`}
              stroke={ink}
              strokeWidth="1.35"
              strokeLinejoin="round"
            />
            {stitches.map((stitch) => (
              <g key={stitch.d}>
                <path
                  d={stitch.d}
                  stroke={stitch.color}
                  strokeWidth="4.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#wash)"
                  opacity="0.9"
                />
                <path
                  d={stitch.ink}
                  stroke={ink}
                  strokeWidth="1.05"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.75"
                />
              </g>
            ))}
            <path
              d={`M ${bottomRight - 6} ${bottomY - 6} Q ${bottomRight + 10} ${bottomY + 16} ${bottomRight + 16} ${bottomY + 36}`}
              stroke={ink}
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d={`M ${bottomRight - 5} ${bottomY - 7} Q ${bottomRight + 8} ${bottomY + 14} ${bottomRight + 14} ${bottomY + 32}`}
              stroke={pink}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.85"
            />
          </g>
        </g>

        <g className="knit-needle knit-needle-a">
          <path
            d="M22 128 Q 92 116 155 100 Q 214 88 258 80"
            stroke={needleFill}
            strokeWidth="7.2"
            strokeLinecap="round"
            filter="url(#wash)"
          />
          <path
            d="M22 128 Q 90 118 154 101 Q 212 89 258 80"
            stroke={ink}
            strokeWidth="1.55"
            strokeLinecap="round"
          />
          <circle cx="22" cy="128" r="6" fill={wood} />
          <circle cx="22" cy="128" r="6" stroke={ink} strokeWidth="1.3" fill="none" />
        </g>

        {Array.from({ length: 8 }).map((_, i) => {
          const x = 58 + i * 20 + jig(i + 20, 1.2);
          const y = holdingY(x) + jig(i + 8, 1);
          return (
            <path
              key={`loop-${i}`}
              className="knit-yarn-loop"
              d={`M ${x - 8} ${y} Q ${x - 2} ${y - 8} ${x + 2} ${y - 1} Q ${x + 9} ${y + 7} ${x - 6} ${y + 2}`}
              stroke={ink}
              strokeWidth="1.25"
              fill={stitchColor(i)}
              opacity="0.92"
            />
          );
        })}

        <g className="knit-needle knit-needle-b">
          <path
            d="M248 34 Q 204 72 148 118"
            stroke={needleFill}
            strokeWidth="7.2"
            strokeLinecap="round"
            filter="url(#wash)"
          />
          <path
            d="M248 34 Q 206 70 148 118"
            stroke={ink}
            strokeWidth="1.55"
            strokeLinecap="round"
          />
          <circle cx="248" cy="34" r="6" fill={wood} />
          <circle cx="248" cy="34" r="6" stroke={ink} strokeWidth="1.3" fill="none" />
        </g>
        <path
          d="M148 112 Q 156 100 166 110 Q 158 122 148 114"
          stroke={ink}
          strokeWidth="1.2"
          fill={red}
        />

        <path
          className="yarn-feed"
          d="M118 318 Q 70 300 42 250 Q 28 190 48 140 Q 62 96 98 88 Q 140 82 168 108"
          stroke={pink}
          strokeWidth="2.6"
          strokeLinecap="round"
          filter="url(#wash)"
        />
        <path
          d="M118 318 Q 68 298 44 248 Q 30 188 50 138 Q 64 94 100 90 Q 142 84 168 108"
          stroke={ink}
          strokeWidth="1.15"
          strokeLinecap="round"
        />

        <g transform="translate(140 352)">
          <g className="yarn-ball">
            <circle r="41" fill={redDeep} filter="url(#wash)" transform="translate(1.2 0.8)" />
            <circle r="39" fill={red} filter="url(#sketch-grain)" opacity="0.8" />
            <circle r="40" stroke={ink} strokeWidth="1.4" fill="none" />
            {Array.from({ length: 11 }).map((_, i) => (
              <path
                key={i}
                d={`M ${-28 + jig(i, 4)} ${-8 + i * 2} Q ${jig(i + 4, 10)} ${-22 + i} ${24 + jig(i + 2, 5)} ${-4 + i * 1.5}`}
                stroke={ink}
                strokeWidth="0.9"
                opacity="0.45"
              />
            ))}
            <path d="M 22 16 Q 40 28 32 48" stroke={ink} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 24 18 Q 38 30 30 46" stroke={pink} strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
