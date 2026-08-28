const cream = "#F3E6D6";
const blush = "#E8B8A8";
const red = "#A24A3E";
const bordeaux = "#6E2C28";
const bone = "#E6D3B8";
const wood = "#9A7A58";

const COLS = 12;
const ROWS = 14;
const STITCH_W = 16;
const STITCH_H = 14;
const ORIGIN_X = 38;
const ORIGIN_Y = 118;

function chunkyStitches() {
  const stitches: { d: string }[] = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const x = ORIGIN_X + col * STITCH_W + Math.sin(row * 0.35) * 2;
      const y = ORIGIN_Y + row * STITCH_H;
      const w = STITCH_W * 0.88;
      const h = STITCH_H * 0.78;
      stitches.push({
        d: `M ${x} ${y} L ${x + w / 2} ${y + h} L ${x + w} ${y}`,
      });
    }
  }
  return stitches;
}

export function KnittingScene() {
  const stitches = chunkyStitches();
  const width = COLS * STITCH_W;
  const bottom = ORIGIN_Y + ROWS * STITCH_H + 6;

  return (
    <div
      className="knitting-scene relative mx-auto h-[24rem] w-[16rem] text-primary sm:h-[28rem] sm:w-[18.5rem] md:mx-0 md:h-[30rem]"
      aria-hidden
    >
      <svg viewBox="0 0 270 360" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <pattern
            id="v-knit"
            width="10"
            height="9"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M1 1.2 L5 7.4 L9.2 1.3"
              stroke={cream}
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
          <clipPath id="garment-clip">
            <rect className="scarf-reveal" x="24" y="108" width="222" height="24" />
          </clipPath>
        </defs>

        <g clipPath="url(#garment-clip)">
          <g className="scarf-drape">
            <path
              d={`M ${ORIGIN_X - 10} 112
                  Q ${ORIGIN_X + width / 2} 104 ${ORIGIN_X + width + 10} 112
                  L ${ORIGIN_X + width + 6} ${bottom}
                  Q ${ORIGIN_X + width / 2} ${bottom + 12} ${ORIGIN_X - 6} ${bottom}
                  Z`}
              fill={red}
            />
            <path
              d={`M ${ORIGIN_X - 10} 112
                  Q ${ORIGIN_X + width / 2} 104 ${ORIGIN_X + width + 10} 112
                  L ${ORIGIN_X + width + 6} ${bottom}
                  Q ${ORIGIN_X + width / 2} ${bottom + 12} ${ORIGIN_X - 6} ${bottom}
                  Z`}
              fill="url(#v-knit)"
              opacity="0.55"
            />
            {stitches.map((stitch) => (
              <path
                key={stitch.d}
                d={stitch.d}
                stroke={blush}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
            ))}
          </g>
        </g>

        <path
          className="knit-yarn-loop"
          d="M124 102 C 118 84 152 84 146 102"
          fill="none"
          stroke={bordeaux}
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        <g className="knit-needle knit-needle-a">
          <line
            x1="22"
            y1="18"
            x2="138"
            y2="108"
            stroke={bone}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="22"
            y1="18"
            x2="138"
            y2="108"
            stroke={wood}
            strokeWidth="1.25"
            opacity="0.55"
            strokeLinecap="round"
          />
          <circle cx="22" cy="18" r="7" fill={cream} stroke={wood} strokeWidth="1.2" />
        </g>
        <g className="knit-needle knit-needle-b">
          <line
            x1="248"
            y1="18"
            x2="132"
            y2="108"
            stroke={bone}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="248"
            y1="18"
            x2="132"
            y2="108"
            stroke={wood}
            strokeWidth="1.25"
            opacity="0.55"
            strokeLinecap="round"
          />
          <circle cx="248" cy="18" r="7" fill={cream} stroke={wood} strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}
