const cream = "#F3E6D6";
const blush = "#E8B8A8";
const clay = "#C9896A";
const red = "#A24A3E";
const bordeaux = "#6E2C28";
const wicker = "#8A5340";
const bone = "#E6D3B8";

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
      <circle r={r} fill={color} filter="url(#yarn-grain)" />
      <circle r={r * 0.82} fill="none" stroke={cream} strokeWidth="1.1" opacity="0.25" />
      <path
        d={`M ${-r * 0.75} ${-r * 0.08} C ${-r * 0.15} ${-r * 0.9} ${r * 0.4} ${-r * 0.72} ${r * 0.78} ${-r * 0.05}
            M ${-r * 0.72} ${r * 0.22} C ${-r * 0.05} ${r * 0.82} ${r * 0.42} ${r * 0.7} ${r * 0.72} ${r * 0.1}
            M ${-r * 0.2} ${-r * 0.7} C ${r * 0.6} ${-r * 0.15} ${r * 0.45} ${r * 0.4} ${0} ${r * 0.72}`}
        fill="none"
        stroke={bordeaux}
        strokeWidth="0.85"
        opacity="0.32"
        strokeLinecap="round"
      />
    </g>
  );
}

const scarfLine =
  "M218 92 C 219 150 217 198 218 238 C 220 278 168 292 156 328 C 144 364 214 378 222 418 C 230 456 168 472 176 512";

export function KnittingScene() {
  return (
    <div
      className="knitting-scene relative mx-auto h-[26rem] w-[16.5rem] text-primary sm:h-[30rem] sm:w-[19rem] md:mx-0 md:h-[32rem] md:w-[20.5rem]"
      aria-hidden
    >
      <svg viewBox="0 0 320 580" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <filter id="yarn-grain" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" />
          </filter>
          <linearGradient id="scarf-colors" gradientUnits="userSpaceOnUse" x1="218" y1="90" x2="180" y2="520">
            <stop offset="0%" stopColor={bordeaux} />
            <stop offset="28%" stopColor={red} />
            <stop offset="52%" stopColor={blush} />
            <stop offset="76%" stopColor={cream} />
            <stop offset="100%" stopColor={bordeaux} />
          </linearGradient>
          <pattern
            id="v-knit"
            width="9"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-8)"
          >
            <path
              d="M1 1.2 L4.5 6.4 L8.2 1.3"
              stroke={bordeaux}
              strokeWidth="0.9"
              strokeLinecap="round"
              opacity="0.55"
            />
          </pattern>
          <clipPath id="scarf-clip">
            <rect className="scarf-reveal" x="120" y="78" width="140" height="28" />
          </clipPath>
        </defs>

        <g className="knit-needle knit-needle-a">
          <path d="M118 16 Q 168 48 214 88" stroke={bone} strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="118" cy="16" r="5.2" fill={cream} stroke={wicker} strokeWidth="1.1" />
        </g>
        <g className="knit-needle knit-needle-b">
          <path d="M302 14 Q 258 50 222 88" stroke={bone} strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="302" cy="14" r="5.2" fill={cream} stroke={wicker} strokeWidth="1.1" />
        </g>
        <path
          className="knit-yarn-loop"
          d="M208 72 C 196 54 232 48 228 74"
          stroke={red}
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <g clipPath="url(#scarf-clip)">
          <g className="scarf-drape">
            <path
              d={scarfLine}
              stroke="url(#scarf-colors)"
              strokeWidth="26"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={scarfLine}
              stroke="url(#v-knit)"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
          </g>
        </g>

        <path
          className="yarn-feed"
          d="M96 455 C 72 380 96 250 150 160 C 178 122 200 104 214 90"
          stroke={red}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 6"
        />

        <ellipse cx="108" cy="568" rx="72" ry="11" fill={bordeaux} opacity="0.08" />

        <g transform="translate(18 430)">
          <path
            d="M22 48 C 24 96 52 118 92 120 C 134 118 160 96 162 48"
            fill={clay}
            filter="url(#yarn-grain)"
          />
          <path
            d="M22 48 C 24 96 52 118 92 120 C 134 118 160 96 162 48"
            stroke={wicker}
            strokeWidth="1.8"
          />
          {Array.from({ length: 11 }).map((_, i) => {
            const x = 32 + i * 11.5;
            return (
              <path
                key={x}
                d={`M ${x} 50 C ${x + 2} 82 ${x + 3} 104 ${92 + (x - 92) * 0.2} 118`}
                stroke={wicker}
                strokeWidth="1.35"
                opacity="0.75"
              />
            );
          })}
          {Array.from({ length: 4 }).map((_, i) => (
            <path
              key={`weave-${i}`}
              d={`M 28 ${62 + i * 12} Q 92 ${68 + i * 12} 156 ${62 + i * 12}`}
              stroke={bone}
              strokeWidth="0.9"
              opacity="0.35"
            />
          ))}
          <ellipse cx="92" cy="46" rx="74" ry="20" fill="#5c382c" opacity="0.55" />
          <ellipse cx="92" cy="44" rx="76" ry="21" fill="none" stroke={wicker} strokeWidth="5.5" />
          <ellipse cx="92" cy="42" rx="70" ry="16" fill="none" stroke={bone} strokeWidth="1.2" opacity="0.45" />

          <YarnBall cx={68} cy={38} r={22} color={bordeaux} />
          <YarnBall cx={108} cy={30} r={18} color={red} />
          <YarnBall cx={138} cy={44} r={16} color={blush} />
          <YarnBall cx={96} cy={52} r={14} color={cream} />

          <g transform="translate(58 16) rotate(-32)">
            <line x1="0" y1="0" x2="42" y2="-26" stroke={bone} strokeWidth="2.6" strokeLinecap="round" />
            <line x1="7" y1="5" x2="46" y2="-20" stroke={bone} strokeWidth="2.6" strokeLinecap="round" />
            <circle cx="0" cy="0" r="3" fill={cream} stroke={wicker} strokeWidth="0.9" />
            <circle cx="7" cy="5" r="3" fill={cream} stroke={wicker} strokeWidth="0.9" />
          </g>
        </g>

        <g className="yarn-loose">
          <YarnBall cx={36} cy={548} r={17} color={cream} />
        </g>
        <path
          d="M50 556 C 74 572 104 564 118 542"
          stroke={cream}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M156 512 C 178 528 204 522 228 500"
          stroke={blush}
          strokeWidth="1.45"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
