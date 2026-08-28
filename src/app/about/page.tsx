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
        Seljan
      </h1>

      <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-sm leading-relaxed text-primary/80 sm:text-base">
          <p>
            Seljan is a handmade knit and crochet studio for accessories you
            actually wear — soft, thoughtful pieces designed to become part of
            your everyday.
          </p>
          <p>
            Each piece is made in small batches, often from leftover yarn,
            keeping every release limited and intentional. Nothing is
            mass-produced; each piece is made slowly, with attention to the
            little details.
          </p>
          <p>
            This is a space to browse, discover, and find something that feels
            like you. New pieces will arrive in their own time — and if
            something you love is gone, a similar piece may sometimes be made
            just for you.
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
