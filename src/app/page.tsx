import Image from "next/image";
import Link from "next/link";

import { FlowerMark, Wordmark } from "@/components/brand/marks";
import { ProductCard } from "@/components/product-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { categoryCopy, featuredProducts } from "@/lib/products";

export default function HomePage() {
  const featured = featuredProducts();

  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-[0.7rem] tracking-[0.42em] text-primary uppercase">
          Made with heart
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 text-primary sm:gap-5">
          <Wordmark className="text-7xl sm:text-8xl md:text-9xl" />
          <FlowerMark className="size-16 sm:size-24 md:size-28" />
        </div>
        <p className="mt-6 max-w-md text-base leading-relaxed text-primary/80 sm:text-lg">
          Handmade knitted accessories — beanies, scarves, and small charms —
          knit slowly, one piece at a time.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/shop"
            className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-6")}
          >
            Browse the studio
          </Link>
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-full px-6",
            )}
          >
            The maker
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:grid-cols-3 sm:px-6">
        {(
          [
            ["beanies", categoryCopy.beanies],
            ["scarves", categoryCopy.scarves],
            ["charms", categoryCopy.charms],
          ] as const
        ).map(([slug, copy]) => (
          <Link
            key={slug}
            href={`/shop?category=${slug}`}
            className="rounded-[1.6rem] border border-primary/10 bg-card px-6 py-8 text-left transition-colors hover:border-primary/25"
          >
            <FlowerMark className="mb-5 size-8 text-primary" />
            <h2 className="text-xl text-primary">{copy.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-primary/70">
              {copy.line}
            </p>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] tracking-[0.28em] text-primary uppercase">
              In the studio
            </p>
            <h2 className="mt-2 font-script text-4xl text-primary sm:text-5xl">
              Pieces to hold
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden text-[0.7rem] tracking-[0.2em] text-primary uppercase sm:block"
          >
            See all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-primary/10 bg-card/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-primary/10">
            <Image
              src="/brand/identity.png"
              alt="Seljan identity: script wordmark, six-petal flower, and made with heart seal"
              width={1200}
              height={700}
              className="h-auto w-full"
            />
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-[0.65rem] tracking-[0.28em] text-primary uppercase">
              A small studio
            </p>
            <h2 className="font-script text-5xl text-primary">Knit by hand</h2>
            <p className="text-sm leading-relaxed text-primary/75 sm:text-base">
              Every Seljan piece starts as a cone of yarn and a pair of
              needles. There is no factory run — only what can be finished with
              care this week. Browse what is on the table, then write if you
              want it made for you.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-11 rounded-full px-6",
              )}
            >
              Ask about a piece
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
