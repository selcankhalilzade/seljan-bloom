import Link from "next/link";

import { FlowerMark, Wordmark } from "@/components/brand/marks";
import { KnitTicker } from "@/components/knit-ticker";
import { ProductCard } from "@/components/product-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { categoryCopy, featuredProducts } from "@/lib/products";

const btn = "h-11 rounded-[var(--btn-radius)] px-8 text-[0.7rem] tracking-[0.22em] uppercase";

export default function HomePage() {
  const featured = featuredProducts();

  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col px-4 py-16 sm:px-6 sm:py-24 md:flex-row md:items-end md:justify-between md:gap-16">
        <div className="animate-rise max-w-xl">
          <div className="mb-8 flex items-center gap-3 text-primary">
            <FlowerMark className="animate-flower-turn size-10 sm:size-12" />
            <Wordmark className="text-5xl sm:text-6xl" />
          </div>
          <h1 className="font-display text-5xl leading-[1.05] text-primary italic sm:text-6xl md:text-7xl">
            Soft, but not sweet.
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary/70 sm:text-base">
            Bloom Beanie, Ribbon Scarf, Petal Headband, and charms. Knit and
            crochet in small batches — the piece that does the outfit.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className={cn(buttonVariants({ size: "lg" }), btn)}>
              Shop
            </Link>
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), btn)}
            >
              About
            </Link>
          </div>
        </div>
        <p className="mt-10 max-w-[14rem] text-[0.65rem] leading-relaxed tracking-[0.18em] text-primary/50 uppercase md:mt-0 md:text-right">
          Knit slowly.
          <br />
          Crochet accessories.
          <br />
          Worn constantly.
        </p>
      </section>

      <KnitTicker />

      <section className="mx-auto grid max-w-6xl gap-0 border-t border-primary/15 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        {(
          [
            ["beanies", categoryCopy.beanies, "01"],
            ["scarves", categoryCopy.scarves, "02"],
            ["headbands", categoryCopy.headbands, "03"],
            ["charms", categoryCopy.charms, "04"],
          ] as const
        ).map(([slug, copy, index]) => (
          <Link
            key={slug}
            href={`/shop?category=${slug}`}
            className="group border-primary/15 px-0 py-10 text-left transition-colors hover:bg-primary/[0.03] sm:border-l sm:px-8 sm:first:border-l-0"
          >
            <p className="text-[0.65rem] tracking-[0.28em] text-primary/40 uppercase">
              {index}
            </p>
            <h2 className="mt-4 font-display text-3xl text-primary italic transition-transform duration-500 group-hover:translate-x-1">
              {copy.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/60">
              {copy.line}
            </p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between gap-4 border-b border-primary/15 pb-4">
          <h2 className="font-display text-4xl text-primary italic sm:text-5xl">
            On the rail
          </h2>
          <Link
            href="/shop"
            className="text-[0.7rem] tracking-[0.2em] text-primary uppercase"
          >
            See all
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="story-checkered band-oxblood border-y border-band-foreground/45 bg-band text-band-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <FlowerMark className="animate-flower-float size-36 sm:size-44 md:size-52" />
          </div>
          <div className="-ml-4 max-w-md space-y-5 md:-ml-6">
            <h2 className="font-display text-5xl italic">
              By hand, on purpose.
            </h2>
            <p className="text-sm leading-relaxed text-band-foreground/80 palette-invert:text-foreground/75 sm:text-base">
              No factory run. Cones of merino, leftover blush, terracotta that
              matches the flower. If a piece is gone, a similar one can usually
              be knit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
