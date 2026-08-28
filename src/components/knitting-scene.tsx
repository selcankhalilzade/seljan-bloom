const cream = "#F3E6D6";
const pink = "#E8B8A8";
const red = "#C45C52";
const redDeep = "#8F3A36";
const wood = "#5C3A2A";
const bone = "#E8D5B8";

const COLS = 9;
const ROWS = 7;
const STITCH_W = 22;
const STITCH_H = 20;

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
  const stitches: { d: string; color: string }[] = [];
  for (let row = 0; row < ROWS; row++) {
    const widthScale = 1 - row * 0.028;
    for (let col = 0; col < COLS; col++) {
      const x0 = 52 + col * STITCH_W * widthScale + (1 - widthScale) * 18;
      const y0 = holdingY(x0 + STITCH_W / 2) + 14 + row * STITCH_H;
      const w = STITCH_W * 0.9 * widthScale;
      const h = STITCH_H * 0.78;
      stitches.push({
        color: stitchColor(col),
        d: `M ${x0} ${y0} L ${x0 + w / 2} ${y0 + h} L ${x0 + w} ${y0}`,
      });
    }
  }
  return stitches;
}

export function KnittingScene() {
  const stitches = chunkyStitches();
  const topLeft = 48;
  const topRight = 248;
  const topY = holdingY((topLeft + topRight) / 2) + 10;
  const bottomY = topY + ROWS * STITCH_H + 6;
  const bottomLeft = 62;
  const bottomRight = 230;

  return (
    <div
      className="knitting-scene relative mx-auto h-[26rem] w-[16.5rem] text-primary sm:h-[30rem] sm:w-[19rem] md:mx-0 md:h-[32rem] md:w-[20.5rem]"
      aria-hidden
    >
      <svg viewBox="0 0 280 430" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="knit-wash" x1="48" y1="0" x2="248" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={red} />
            <stop offset="55%" stopColor={pink} />
            <stop offset="100%" stopColor={cream} />
          </linearGradient>
          <clipPath id="scarf-clip">
            <rect className="scarf-reveal" x="20" y="70" width="250" height="36" />
          </clipPath>
        </defs>

        <g clipPath="url(#scarf-clip)">
          <g className="scarf-drape">
            <path
              d={`M ${topLeft} ${topY}
                  L ${topRight} ${holdingY(topRight) + 12}
                  L ${bottomRight} ${bottomY}
                  Q ${(bottomLeft + bottomRight) / 2} ${bottomY + 10} ${bottomLeft} ${bottomY}
                  Z`}
              fill="url(#knit-wash)"
            />
            {stitches.map((stitch) => (
              <path
                key={stitch.d}
                d={stitch.d}
                stroke={stitch.color === cream ? pink : cream}
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              />
            ))}
            <path
              d={`M ${bottomRight - 4} ${bottomY - 8} C ${bottomRight + 8} ${bottomY + 18} ${bottomRight + 14} ${bottomY + 28} ${bottomRight + 18} ${bottomY + 38}`}
              stroke={pink}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>

        <g className="knit-needle knit-needle-a">
          <line x1="22" y1="128" x2="258" y2="80" stroke="#B7D4A8" strokeWidth="6" strokeLinecap="round" />
          <circle cx="22" cy="128" r="5.5" fill={wood} />
        </g>

        {Array.from({ length: 8 }).map((_, i) => {
          const x = 58 + i * 20;
          const y = holdingY(x);
          return (
            <ellipse
              key={`loop-${i}`}
              className="knit-yarn-loop"
              cx={x}
              cy={y}
              rx="9"
              ry="7"
              stroke={stitchColor(i)}
              strokeWidth="3.1"
              fill="none"
            />
          );
        })}

        <g className="knit-needle knit-needle-b">
          <line x1="248" y1="34" x2="148" y2="118" stroke="#B7D4A8" strokeWidth="6" strokeLinecap="round" />
          <circle cx="248" cy="34" r="5.5" fill={wood} />
        </g>
        <ellipse cx="156" cy="108" rx="8" ry="6.5" stroke={red} strokeWidth="3" fill="none" />

        <path
          className="yarn-feed"
          d="M118 318 C 48 290 32 170 62 110 C 82 78 150 88 168 108"
          stroke={pink}
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeDasharray="8 6"
        />

        <g transform="translate(140 352)">
          <g className="yarn-ball">
            <circle r="40" fill={redDeep} />
            <circle r="40" fill={red} opacity="0.55" />
            {Array.from({ length: 9 }).map((_, i) => (
              <ellipse
                key={i}
                rx={36 - i * 3.2}
                ry={30 - i * 2.4}
                fill="none"
                stroke={wood}
                strokeWidth="1.15"
                opacity="0.35"
                transform={`rotate(${i * 19})`}
              />
            ))}
            <path d="M 28 18 C 48 32 46 48 34 52" stroke={pink} strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
