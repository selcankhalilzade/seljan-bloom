const cream = "#F3E6D6";
const bone = "#E6D3B8";
const blush = "#E8B8A8";
const clay = "#C9896A";
const red = "#A24A3E";
const oxblood = "#6E2C28";
const espresso = "#1C1412";

function Ball({
  cx,
  cy,
  r,
  fill,
}: {
  cx: number;
  cy: number;
  r: number;
  fill: string;
}) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.92} fill={fill} />
      <path
        d={`M ${cx - r * 0.55} ${cy} Q ${cx} ${cy - r * 0.55} ${cx + r * 0.55} ${cy}`}
        stroke={cream}
        strokeWidth="0.9"
        opacity="0.35"
      />
    </g>
  );
}

function Skein({
  cx,
  cy,
  rx,
  ry,
  fill,
}: {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  fill: string;
}) {
  return (
    <g>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />
      <rect
        x={cx - rx * 0.7}
        y={cy - ry * 0.18}
        width={rx * 1.4}
        height={ry * 0.36}
        rx="1.4"
        fill={cream}
      />
    </g>
  );
}

function Hank({
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
  return (
    <rect
      x={cx - 4}
      y={cy - h / 2}
      width="8"
      height={h}
      rx="4"
      fill={fill}
    />
  );
}

export function YarnShelfScene() {
  return (
    <div
      className="relative mx-auto h-[24rem] w-[17rem] text-primary sm:h-[28rem] sm:w-[20rem] md:mx-0 md:h-[30rem]"
      aria-hidden
    >
      <svg viewBox="0 0 320 400" className="h-full w-full" fill="none">
        <path
          d="M118 40 L118 360 L300 360 L300 40"
          stroke={oxblood}
          strokeWidth="6"
        />
        <path d="M112 40 L306 40" stroke={oxblood} strokeWidth="8" />
        <path d="M110 186 L308 186" stroke={oxblood} strokeWidth="8" />
        <path d="M110 328 L308 328" stroke={oxblood} strokeWidth="8" />

        <Skein cx={158} cy={142} rx={22} ry={28} fill={oxblood} />
        <Hank cx={190} cy={146} h={50} fill={cream} />
        <Hank cx={208} cy={150} h={42} fill={espresso} />
        <Skein cx={242} cy={144} rx={20} ry={26} fill={clay} />
        <Hank cx={274} cy={148} h={48} fill={blush} />
        <Skein cx={296} cy={150} rx={12} ry={18} fill={red} />

        <Skein cx={164} cy={284} rx={18} ry={24} fill={blush} />
        <Hank cx={198} cy={286} h={44} fill={bone} />
        <Skein cx={236} cy={286} rx={20} ry={26} fill={red} />
        <Hank cx={270} cy={288} h={40} fill={oxblood} />
        <Skein cx={294} cy={290} rx={12} ry={16} fill={clay} />

        <g transform="translate(8 228)">
          <path d="M22 148 Q 32 156 44 148" stroke={espresso} strokeWidth="4" strokeLinecap="round" />
          <path d="M56 148 Q 66 156 78 148" stroke={espresso} strokeWidth="4" strokeLinecap="round" />
          <rect x="22" y="92" width="24" height="56" fill={cream} />
          <rect x="54" y="92" width="24" height="56" fill={cream} />
          <path d="M28 94 L26 146" stroke={oxblood} strokeWidth="1.2" />
          <path d="M36 94 L34 146" stroke={oxblood} strokeWidth="1.2" />
          <path d="M60 94 L58 146" stroke={oxblood} strokeWidth="1.2" />
          <path d="M68 94 L66 146" stroke={oxblood} strokeWidth="1.2" />
          <path d="M24 58 L20 94 H80 L76 58 Z" fill={oxblood} />
          <path d="M16 72 L8 108" stroke={red} strokeWidth="2.2" strokeLinecap="round" />
          <path d="M22 74 L14 110" stroke={red} strokeWidth="2.2" strokeLinecap="round" />
          <Ball cx={38} cy={44} r={15} fill={clay} />
          <Ball cx={58} cy={36} r={17} fill={oxblood} />
          <Ball cx={76} cy={48} r={13} fill={blush} />
          <Ball cx={52} cy={54} r={11} fill={cream} />
          <Ball cx={68} cy={28} r={10} fill={red} />
          <circle cx="54" cy="18" r="8.5" fill={blush} />
          <circle cx="51" cy="16.5" r="1.1" fill={espresso} />
          <circle cx="57" cy="16.5" r="1.1" fill={espresso} />
        </g>
      </svg>
    </div>
  );
}
