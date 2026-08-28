import { FlowerMark, Wordmark } from "@/components/brand/marks";
import { BloomFlower } from "@/components/flower-rain";
import { KnitTicker } from "@/components/knit-ticker";
import { WaitlistForm } from "@/components/waitlist-form";

export function ComingSoonView() {
  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col px-4 py-16 sm:px-6 sm:py-24 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-16">
        <div className="animate-rise max-w-xl">
          <div className="mb-8 flex items-center gap-3 text-primary">
            <BloomFlower className="animate-flower-turn size-10 sm:size-12" />
            <Wordmark className="text-5xl sm:text-6xl" />
          </div>
          <h1 className="font-display text-5xl leading-[1.05] text-primary italic sm:text-6xl md:text-7xl">
            Coming soon.
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary/70 sm:text-base">
            The studio table is not open yet. Made slowly, meant to stay. The
            Bloom Collection, a world of knit and crochet accessories, is
            coming soon.
          </p>
          <WaitlistForm />
        </div>
        <div className="mt-12 flex flex-col items-center md:mt-0 md:items-end">
          <p className="max-w-[14rem] text-center text-[0.65rem] leading-relaxed tracking-[0.18em] text-primary/50 uppercase md:text-right">
            Knit slowly.
            <br />
            Crochet accessories.
            <br />
            Worn constantly.
          </p>
        </div>
      </section>

      <KnitTicker
        phrases={[
          "Coming soon",
          "Knit slowly",
          "Crochet accessories",
          "Worn constantly",
          "Bloom Beanie",
          "Ribbon Scarf",
          "Petal Headband",
          "Made with heart",
        ]}
      />

      <section className="border-t border-primary/15 text-primary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <FlowerMark className="animate-flower-float size-36 sm:size-44 md:size-52" />
          </div>
          <div className="-ml-4 max-w-md space-y-5 md:-ml-6">
            <h2 className="font-display text-5xl italic">
              By hand, on purpose.
            </h2>
            <p className="text-sm leading-relaxed text-primary/70 sm:text-base">
              No factory runs. Just knit and crochet accessories made slowly,
              in small batches, with care. Thoughtful colors, soft textures,
              and pieces made to be worn again and again.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
