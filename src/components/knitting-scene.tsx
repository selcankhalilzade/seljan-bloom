export function KnittingScene() {
  return (
    <div
      className="knitting-scene relative mx-auto h-[22rem] w-[13.5rem] text-primary sm:h-[26rem] sm:w-[15.5rem] md:mx-0 md:h-[28rem]"
      aria-hidden
    >
      <svg
        viewBox="0 0 200 120"
        className="absolute top-0 left-1/2 z-10 h-[5.5rem] w-[11.5rem] -translate-x-1/2 overflow-visible sm:h-24 sm:w-[13rem]"
      >
        <g className="knit-needle knit-needle-a">
          <line
            x1="18"
            y1="14"
            x2="102"
            y2="86"
            stroke="#d7c2a8"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="18"
            y1="14"
            x2="102"
            y2="86"
            stroke="#9a7a58"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="18" cy="14" r="7" fill="#f3e6d6" stroke="#c4a882" strokeWidth="1.2" />
        </g>
        <g className="knit-needle knit-needle-b">
          <line
            x1="182"
            y1="14"
            x2="98"
            y2="86"
            stroke="#d7c2a8"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <line
            x1="182"
            y1="14"
            x2="98"
            y2="86"
            stroke="#9a7a58"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="182" cy="14" r="7" fill="#f3e6d6" stroke="#c4a882" strokeWidth="1.2" />
        </g>
        <path
          className="knit-yarn-loop"
          d="M92 82 C88 70 112 70 108 82"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute top-[4.4rem] left-1/2 flex w-24 -translate-x-1/2 flex-col items-center sm:top-[5rem] sm:w-28">
        <div className="scarf-length scarf-knit w-full origin-top" />
        <div className="scarf-pile relative mt-[-0.4rem] w-[9.5rem] sm:w-[11rem]">
          {[0, 1, 2, 3, 4, 5].map((fold) => (
            <div
              key={fold}
              className="scarf-fold scarf-knit absolute left-1/2 h-7 w-[78%] -translate-x-1/2 rounded-full sm:h-8"
              style={{
                top: `${fold * 14}px`,
                width: `${70 + (fold % 3) * 10}%`,
                animationDelay: `${4.2 + fold * 0.85}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
