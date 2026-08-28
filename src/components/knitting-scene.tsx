export function KnittingScene() {
  return (
    <div
      className="knitting-scene relative mx-auto h-[24rem] w-[14rem] text-primary sm:h-[28rem] sm:w-[16.5rem] md:mx-0 md:h-[30rem]"
      aria-hidden
    >
      <svg
        viewBox="0 0 240 540"
        className="h-full w-full overflow-visible"
        fill="none"
      >
        <defs>
          <pattern
            id="v-knit"
            width="11"
            height="9"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(-2)"
          >
            <path
              d="M1.2 1.4 L5.4 7.1 L9.8 1.6"
              stroke="currentColor"
              strokeWidth="1.15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </pattern>
          <clipPath id="scarf-clip">
            <rect className="scarf-reveal" x="20" y="88" width="200" height="36" />
          </clipPath>
        </defs>

        <g className="knit-needle knit-needle-a">
          <path
            d="M22 20 Q 68 52 114 96"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="22" cy="20" r="5.2" stroke="currentColor" strokeWidth="1.8" />
        </g>
        <g className="knit-needle knit-needle-b">
          <path
            d="M218 18 Q 172 54 126 96"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="218" cy="18" r="5.2" stroke="currentColor" strokeWidth="1.8" />
        </g>

        <path
          className="knit-yarn-loop"
          d="M108 78 C 96 58 132 52 128 78 M118 70 C 148 42 168 64 154 88"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        <g clipPath="url(#scarf-clip)">
          <g className="scarf-drape">
            <path
              d="M90 96
                 C 87 150 84 210 88 268
                 C 90 310 78 338 58 372
                 C 40 402 46 438 78 456
                 C 112 476 162 470 186 442
                 C 206 420 204 388 176 372
                 C 154 360 148 340 150 318
                 C 154 250 156 190 152 140
                 C 150 114 148 100 146 96
                 Z"
              fill="url(#v-knit)"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinejoin="round"
            />
            <path
              className="scarf-pool"
              d="M64 400
                 C 52 424 70 448 108 454
                 C 148 460 178 444 182 420
                 C 186 398 160 392 138 404
                 C 116 416 92 418 74 406"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path
              className="scarf-pool"
              d="M82 428 C 102 442 140 440 158 426"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              opacity="0.75"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
