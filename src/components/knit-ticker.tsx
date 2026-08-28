const defaultPhrases = [
  "Bloom Beanie",
  "Ribbon Scarf",
  "Petal Headband",
  "Mini Bloom Beanie Charm",
  "Signature Flower Charm",
  "Knit slowly",
  "Crochet accessories",
];

export function KnitTicker({ phrases = defaultPhrases }: { phrases?: string[] }) {
  const line = [...phrases, ...phrases].map((phrase, index) => (
    <span key={`${phrase}-${index}`} className="flex items-center gap-8">
      <span className="font-display text-2xl italic sm:text-3xl">{phrase}</span>
      <span aria-hidden className="text-band-foreground/50 palette-invert:text-band/50">
        ·
      </span>
    </span>
  ));

  return (
    <div className="group/ticker relative overflow-hidden bg-band py-4 text-band-foreground palette-invert:bg-foreground palette-invert:text-band">
      <div className="animate-marquee flex w-max gap-8 pr-8 group-hover/ticker:[animation-play-state:paused]">
        {line}
      </div>
    </div>
  );
}
