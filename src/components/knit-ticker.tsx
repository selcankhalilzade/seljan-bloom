const phrases = [
  "Bloom beanie",
  "Ribbon scarf",
  "Petal charm",
  "Knit slowly",
  "Worn constantly",
  "Small batch",
  "Made by hand",
];

export function KnitTicker() {
  const line = [...phrases, ...phrases].map((phrase, index) => (
    <span key={`${phrase}-${index}`} className="flex items-center gap-8">
      <span className="font-display text-2xl italic sm:text-3xl">{phrase}</span>
      <span aria-hidden className="text-primary/40">
        ·
      </span>
    </span>
  ));

  return (
    <div className="group/ticker relative overflow-hidden border-y border-primary/15 py-4 text-primary">
      <div className="animate-marquee flex w-max gap-8 pr-8 group-hover/ticker:[animation-play-state:paused]">
        {line}
      </div>
    </div>
  );
}
