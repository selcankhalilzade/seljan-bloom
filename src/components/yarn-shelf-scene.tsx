const cream = "#F3E6D6";
const bone = "#E6D3B8";
const blush = "#E8B8A8";
const clay = "#C9896A";
const red = "#A24A3E";
const oxblood = "#6E2C28";
const espresso = "#1C1412";
const wood = "#9A7A58";

function WoolBall({
  cx,
  cy,
  r,
  fill,
  stroke = oxblood,
}: {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  stroke?: string;
}) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <ellipse rx={r} ry={r * 0.92} fill={fill} />
      <path
        d={`M ${-r * 0.72} ${-r * 0.12} C ${-r * 0.2} ${-r * 0.78} ${r * 0.35} ${-r * 0.7} ${r * 0.74} ${-r * 0.08}
            M ${-r * 0.7} ${r * 0.18} C ${-r * 0.1} ${r * 0.72} ${r * 0.38} ${r * 0.64} ${r * 0.68} ${r * 0.12}
            M ${-r * 0.18} ${-r * 0.68} C ${r * 0.55} ${-r * 0.18} ${r * 0.4} ${r * 0.32} ${0.04} ${r * 0.7}`}
        fill="none"
        stroke={stroke}
        strokeWidth="0.9"
        opacity="0.35"
        strokeLinecap="round"
      />
    </g>
  );
}

function BandedSkein({
  cx,
  cy,
  rx,
  ry,
  fill,
  label,
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  fill: string;
  label?: string;
}) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <ellipse rx={rx} ry={ry} fill={fill} />
      <path
        d={`M ${-rx * 0.78} ${-ry * 0.15} Q 0 ${-ry * 0.55} ${rx * 0.78} ${-ry * 0.1}
            M ${-rx * 0.74} ${ry * 0.22} Q 0 ${ry * 0.58} ${rx * 0.72} ${ry * 0.16}`}
        fill="none"
        stroke={cream}
        strokeWidth="1.1"
        opacity="0.38"
        strokeLinecap="round"
      />
      <rect
        x={-rx * 0.72}
        y={-ry * 0.22}
        width={rx * 1.44}
        height={ry * 0.44}
        rx="1.5"
        fill={cream}
        stroke={wood}
        strokeWidth="0.6"
      />
      {label ? (
        <text
          textAnchor="middle"
          y={2.2}
          fill={oxblood}
          style={{ fontSize: "5.2px", letterSpacing: "0.08em" }}
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}

function SlimHank({
  cx,
  cy,
  h,
  fill,
}: {
  cx: number;
  cy: number;
  h: number;
  fill: string;
}) {
  const w = 7.5;
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <path
        d={`M ${-w / 2} ${-h / 2} Q 0 ${-h / 2 - 3} ${w / 2} ${-h / 2}
            L ${w / 2} ${h / 2} Q 0 ${h / 2 + 3} ${-w / 2} ${h / 2} Z`}
        fill={fill}
      />
      <rect
        x={-w / 2 - 1}
        y={-5}
        width={w + 2}
        height="9"
        fill={cream}
        stroke={wood}
        strokeWidth="0.55"
      />
    </g>
  );
}

function TwistedHank({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <path
        d="M -5 -34 C 8 -24 -8 -12 6 0 C -8 12 8 24 -4 34"
        stroke={oxblood}
        strokeWidth="6.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 4 -34 C -7 -22 8 -10 -5 0 C 8 12 -6 24 5 34"
        stroke={red}
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </g>
  );
}

function Carrier() {
  return (
    <g>
      <path
        d="M22 148 Q 34 158 48 148"
        stroke={espresso}
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <path
        d="M58 148 Q 70 158 84 149"
        stroke={espresso}
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <path
        d="M24 92 L20 148 L50 148 L46 92 Z"
        fill={cream}
      />
      <path
        d="M60 92 L56 148 L86 148 L82 92 Z"
        fill={cream}
      />
      {[0, 1, 2, 3].map((i) => (
        <path
          key={`l-${i}`}
          d={`M ${28 + i * 5} 94 L ${24 + i * 5.2} 147`}
          stroke={oxblood}
          strokeWidth="1.2"
          opacity="0.7"
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <path
          key={`r-${i}`}
          d={`M ${64 + i * 5} 94 L ${60 + i * 5.2} 147`}
          stroke={oxblood}
          strokeWidth="1.2"
          opacity="0.7"
        />
      ))}
      <path
        d="M26 58 Q 18 78 24 94 L 82 94 Q 88 74 80 58 Z"
        fill={oxblood}
      />
      <path d="M18 70 L8 108" stroke={red} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 72 L14 110" stroke={red} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="18" cy="70" r="2.4" fill={cream} stroke={wood} strokeWidth="0.6" />
      <circle cx="24" cy="72" r="2.4" fill={cream} stroke={wood} strokeWidth="0.6" />
      <WoolBall cx={36} cy={44} r={16} fill={clay} />
      <WoolBall cx={58} cy={36} r={18} fill={oxblood} stroke={cream} />
      <WoolBall cx={78} cy={48} r={14} fill={blush} />
      <WoolBall cx={52} cy={56} r={12} fill={cream} stroke={clay} />
      <WoolBall cx={70} cy={28} r={11} fill={red} />
      <WoolBall cx={44} cy={24} r={10} fill={bone} stroke={oxblood} />
      <circle cx="54" cy="18" r="9" fill={blush} />
      <circle cx="50.5" cy="16.5" r="1.15" fill={espresso} />
      <circle cx="57.2" cy="16.5" r="1.15" fill={espresso} />
      <path
        d="M51.5 21 Q 54 23.4 56.8 21"
        stroke={red}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </g>
  );
}

export function YarnShelfScene() {
  return (
    <div
      className="yarn-scene relative mx-auto h-[26rem] w-[18rem] text-primary sm:h-[30rem] sm:w-[21rem] md:mx-0 md:h-[32rem] md:w-[23rem]"
      aria-hidden
    >
      <svg viewBox="0 0 340 430" className="h-full w-full overflow-visible" fill="none">
        <ellipse cx="188" cy="412" rx="128" ry="11" fill={oxblood} opacity="0.08" />

        <g className="yarn-shelf">
          <path
            d="M128 36 L128 392 L318 392 L318 36"
            stroke={oxblood}
            strokeWidth="7"
            strokeLinecap="square"
          />
          <path d="M122 36 L324 36" stroke={oxblood} strokeWidth="10" />
          <path d="M118 188 L328 188" stroke={oxblood} strokeWidth="11" />
          <path d="M118 348 L328 348" stroke={oxblood} strokeWidth="11" />
          <path d="M138 48 L138 380" stroke={bone} strokeWidth="1.3" opacity="0.4" />
          <path d="M308 48 L308 380" stroke={bone} strokeWidth="1.3" opacity="0.4" />

          <g className="yarn-row-art">
            <BandedSkein cx={168} cy={146} rx={22} ry={28} fill={oxblood} label="SELJAN" />
            <SlimHank cx={198} cy={150} h={52} fill={cream} />
            <SlimHank cx={214} cy={154} h={44} fill={espresso} />
            <SlimHank cx={230} cy={150} h={50} fill={blush} />
            <BandedSkein cx={258} cy={148} rx={20} ry={26} fill={clay} label="BLOOM" />
            <TwistedHank cx={288} cy={148} />
            <SlimHank cx={308} cy={156} h={36} fill={red} />
          </g>

          <g className="yarn-row-art" style={{ animationDelay: "-3.2s" }}>
            <BandedSkein cx={172} cy={306} rx={18} ry={24} fill={blush} label="MERINO" />
            <TwistedHank cx={208} cy={304} />
            <BandedSkein cx={248} cy={308} rx={21} ry={26} fill={red} label="PETAL" />
            <SlimHank cx={278} cy={310} h={46} fill={bone} />
            <BandedSkein cx={304} cy={310} rx={14} ry={20} fill={oxblood} />
          </g>
        </g>

        <g transform="translate(4 250)">
          <g className="yarn-carrier-path">
            <g className="yarn-carrier-bob">
              <Carrier />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
