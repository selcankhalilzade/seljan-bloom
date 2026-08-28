export function YarnShelfScene() {
  return (
    <div
      className="yarn-scene relative mx-auto h-[26rem] w-[18.5rem] overflow-hidden text-primary sm:h-[30rem] sm:w-[22rem] md:mx-0 md:h-[32rem] md:w-[24rem]"
      aria-hidden
    >
      <svg
        viewBox="0 0 320 420"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <ellipse
          cx="168"
          cy="404"
          rx="118"
          ry="10"
          fill="currentColor"
          opacity="0.07"
        />
        <path
          d="M78 48 L78 388 L252 388 L252 48"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="square"
          opacity="0.88"
        />
        <path d="M78 48 L252 48" stroke="currentColor" strokeWidth="10" />
        <path d="M72 186 L258 186" stroke="currentColor" strokeWidth="11" />
        <path d="M72 338 L258 338" stroke="currentColor" strokeWidth="11" />
        <path
          d="M86 56 L86 378"
          stroke="#E6D3B8"
          strokeWidth="1.4"
          opacity="0.45"
        />
        <path
          d="M244 56 L244 378"
          stroke="#E6D3B8"
          strokeWidth="1.4"
          opacity="0.45"
        />
      </svg>

      <div className="absolute top-[12%] right-[14%] left-[22%] flex h-[32%] items-end">
        <img
          src="/illustrations/yarn-row.png"
          alt=""
          className="yarn-row-art h-full w-full object-contain object-bottom"
        />
      </div>

      <div className="yarn-carrier-path absolute bottom-[2%] left-[-8%] z-10 w-[48%] sm:left-[-6%]">
        <div className="yarn-carrier-bob">
          <img
            src="/illustrations/yarn-carrier.png"
            alt=""
            className="yarn-carrier-art h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
