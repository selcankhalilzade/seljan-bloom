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
      <h1 className="mt-2 font-script text-5xl text-primary sm:text-7xl">
        Made with heart
      </h1>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-sm leading-relaxed text-primary/80 sm:text-base">
          <p>
            Seljan is a handmade knit studio for accessories you actually wear:
            beanies for cold mornings, scarves that drape without bulk, and
            small charms that clip onto a zipper or a bag.
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
              Knit slowly
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <BrandSeal className="size-48 sm:size-56" />
          <FlowerMark className="size-28 text-primary sm:size-32" />
        </div>
      </div>
    </div>
  );
}
