import { BrandSeal } from "@/components/brand/seal";
import { FlowerMark } from "@/components/brand/marks";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-[0.65rem] tracking-[0.28em] text-primary uppercase">
        The studio
      </p>
      <h1 className="mt-3 font-display text-5xl text-primary italic sm:text-7xl">
        Made with heart
      </h1>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-sm leading-relaxed text-primary/80 sm:text-base">
          <p>
            Seljan is a handmade knit and crochet studio for accessories you
            actually wear: beanies for cold mornings, scarves that drape without
            bulk, and small charms that clip onto a zipper or a bag.
          </p>
          <p>
            Pieces are knit in small batches, often from leftover cones so the
            palette stays warm — oatmeal, clay, terracotta, blush. Nothing is
            mass-produced. If a beanie is marked sold, a similar one can usually
            be made to order.
          </p>
          <p>
            This site is for browsing. When something feels right, write to the
            studio. Checkout will come later; for now the conversation is the
            shop.
          </p>
          <div className="flex items-center gap-3 pt-4 text-primary">
            <FlowerMark className="size-8" />
            <span className="text-[0.7rem] tracking-[0.28em] uppercase">
              Knit slowly · Crochet accessories
            </span>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <BrandSeal className="size-48 sm:size-56" />
        </div>
      </div>
    </div>
  );
}
