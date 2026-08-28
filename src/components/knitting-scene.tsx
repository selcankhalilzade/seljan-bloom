const cream = "#F3E6D6";
const pink = "#E8B8A8";
const pinkDeep = "#D98980";
const red = "#C45C52";
const clay = "#B07850";
const wicker = "#8C5A3C";
const wickerDark = "#6B3E28";
const bone = "#E6D3B8";
const wood = "#5C3A2A";

function YarnBall({
  cx,
  cy,
  r,
  color,
}: {
  cx: number;
  cy: number;
  r: number;
  color: string;
}) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <circle r={r} fill={color} filter="url(#crayon)" />
      {Array.from({ length: 10 }).map((_, i) => (
        <ellipse
          key={i}
          rx={r * (0.92 - i * 0.07)}
          ry={r * (0.78 - i * 0.05)}
          fill="none"
          stroke={wickerDark}
          strokeWidth="1.05"
          opacity={0.22 + (i % 3) * 0.06}
          transform={`rotate(${i * 18})`}
        />
      ))}
    </g>
  );
}

const COLS = 6;
const ROWS = 14;
const STITCH_W = 20;
const STITCH_H = 18;
const ORIGIN_X = 34;
const ORIGIN_Y = 92;

function chunkyStitches() {
  const stitches: { d: string; color: string }[] = [];
  for (let row = 0; row < ROWS; row++) {
    const color = row % 3 === 0 ? cream : row % 3 === 1 ? pink : red;
    for (let col = 0; col < COLS; col++) {
      const wave = Math.sin(row * 0.4) * 5 + Math.sin(col * 0.9) * 2.5;
      const x = ORIGIN_X + col * STITCH_W + wave;
      const y = ORIGIN_Y + row * STITCH_H;
      const w = STITCH_W * 0.92;
      const h = STITCH_H * 0.82;
      stitches.push({
        color,
        d: `M ${x} ${y} L ${x + w / 2} ${y + h} L ${x + w} ${y}`,
      });
    }
  }
  return stitches;
}

export function KnittingScene() {
  const slats = Array.from({ length: 13 }, (_, i) => 28 + i * 11.2);
  const stitches = chunkyStitches();
  const panelBottom = ORIGIN_Y + ROWS * STITCH_H + 8;
  const scallops = Array.from({ length: COLS }, (_, col) => {
    const x = ORIGIN_X + col * STITCH_W + 4;
    return `A 9 8 0 0 0 ${x + STITCH_W} ${panelBottom}`;
  }).join(" ");

  return (
    <div
      className="knitting-scene relative mx-auto h-[26rem] w-[19rem] text-primary sm:h-[30rem] sm:w-[22rem] md:mx-0 md:h-[32rem] md:w-[24rem]"
      aria-hidden
    >
      <svg viewBox="0 0 400 560" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <filter id="crayon" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" />
          </filter>
          <clipPath id="scarf-clip">
            <rect className="scarf-reveal" x="8" y="62" width="180" height="28" />
          </clipPath>
        </defs>

        <g clipPath="url(#scarf-clip)">
          <g className="scarf-drape">
            <path
              d={`M ${ORIGIN_X - 6} 78
                  C ${ORIGIN_X - 10} 160 ${ORIGIN_X + 4} 240 ${ORIGIN_X - 2} ${panelBottom}
                  ${scallops}
                  C ${ORIGIN_X + COLS * STITCH_W + 18} 240 ${ORIGIN_X + COLS * STITCH_W + 8} 150 ${ORIGIN_X + COLS * STITCH_W + 10} 78
                  Z`}
              fill={red}
              opacity="0.92"
            />
            {stitches.map((stitch) => (
              <path
                key={stitch.d}
                d={stitch.d}
                stroke={stitch.color}
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </g>
        </g>

        <g className="knit-needle knit-needle-a">
          <line x1="16" y1="74" x2="168" y2="80" stroke={wood} strokeWidth="5.2" strokeLinecap="round" />
          <circle cx="16" cy="74" r="6" fill={bone} stroke={wood} strokeWidth="1.1" />
        </g>
        {Array.from({ length: 7 }).map((_, i) => (
          <ellipse
            key={`loop-${i}`}
            className="knit-yarn-loop"
            cx={42 + i * 16}
            cy="78"
            rx="8"
            ry="6.5"
            stroke={pink}
            strokeWidth="2.8"
            fill="none"
          />
        ))}
        <g className="knit-needle knit-needle-b">
          <line x1="148" y1="78" x2="214" y2="18" stroke={wood} strokeWidth="5.2" strokeLinecap="round" />
          <circle cx="214" cy="18" r="6" fill={bone} stroke={wood} strokeWidth="1.1" />
        </g>
        <path
          d="M168 52 C 186 40 198 44 208 28"
          stroke={pink}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          className="yarn-feed"
          d="M210 22 C 248 48 268 120 292 200 C 310 280 318 340 304 400"
          stroke={red}
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <g className="yarn-loose">
          <YarnBall cx={236} cy={528} r={17} color={cream} />
        </g>
        <path
          d="M222 536 C 204 548 180 544 164 526"
          stroke={cream}
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <g transform="translate(228 408)">
          <ellipse cx="90" cy="134" rx="76" ry="11" fill={wickerDark} opacity="0.18" />
          <ellipse cx="90" cy="118" rx="72" ry="16" fill={clay} />
          <ellipse cx="90" cy="118" rx="72" ry="16" fill="none" stroke={wicker} strokeWidth="1.6" />

          <ellipse cx="90" cy="52" rx="70" ry="22" fill={wickerDark} opacity="0.45" />

          {slats.map((x, i) => {
            const t = (x - 90) / 70;
            const endX = 90 + t * 68;
            const endY = 118 - Math.sqrt(Math.max(0, 1 - t * t)) * 10;
            return (
              <path
                key={x}
                d={`M ${x} 50 Q ${x + (i - 6) * 0.35} ${80 + Math.abs(i - 6)} ${endX} ${endY}`}
                stroke={clay}
                strokeWidth="4.4"
                strokeLinecap="round"
              />
            );
          })}
          {slats.map((x, i) => {
            const t = (x - 90) / 70;
            const endX = 90 + t * 68;
            const endY = 118 - Math.sqrt(Math.max(0, 1 - t * t)) * 10;
            return (
              <path
                key={`edge-${x}`}
                d={`M ${x} 50 Q ${x} 86 ${endX} ${endY}`}
                stroke={wicker}
                strokeWidth="1.2"
                opacity="0.75"
              />
            );
          })}
          {[0, 1, 2].map((row) => (
            <path
              key={`weft-${row}`}
              d={`M 32 ${64 + row * 14} Q 90 ${70 + row * 14} 148 ${64 + row * 14}`}
              stroke={wicker}
              strokeWidth="2.2"
              opacity="0.5"
            />
          ))}

          <ellipse cx="90" cy="48" rx="80" ry="26" fill="none" stroke={clay} strokeWidth="9" strokeLinecap="round" />
          <ellipse
            cx="90"
            cy="46"
            rx="80"
            ry="26"
            fill="none"
            stroke={bone}
            strokeWidth="2.2"
            strokeDasharray="6 7"
            opacity="0.7"
          />
          <ellipse
            cx="90"
            cy="50"
            rx="80"
            ry="26"
            fill="none"
            stroke={wickerDark}
            strokeWidth="2"
            strokeDasharray="6 7"
            strokeDashoffset="6"
            opacity="0.8"
          />
          <ellipse cx="90" cy="48" rx="80" ry="26" fill="none" stroke={wicker} strokeWidth="1.3" />

          <YarnBall cx={60} cy={36} r={22} color={red} />
          <YarnBall cx={94} cy={24} r={17} color={pinkDeep} />
          <YarnBall cx={124} cy={40} r={18} color={pink} />
          <YarnBall cx={88} cy={50} r={14} color={cream} />

          <g transform="translate(50 14) rotate(-38)">
            <line x1="0" y1="0" x2="48" y2="-30" stroke={bone} strokeWidth="3" strokeLinecap="round" />
            <line x1="8" y1="6" x2="52" y2="-24" stroke={bone} strokeWidth="3" strokeLinecap="round" />
            <circle cx="0" cy="0" r="3.4" fill={cream} stroke={wicker} strokeWidth="0.9" />
            <circle cx="8" cy="6" r="3.4" fill={cream} stroke={wicker} strokeWidth="0.9" />
          </g>
        </g>

        <path
          d="M352 438 C 378 448 392 442 408 422"
          stroke={pink}
          strokeWidth="1.55"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
