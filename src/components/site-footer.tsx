import Link from "next/link";

import { FlowerMark, Wordmark } from "@/components/brand/marks";
import { BrandSeal } from "@/components/brand/seal";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-primary/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_auto]">
        <div className="space-y-3 text-primary">
          <div className="flex items-center gap-2">
            <Wordmark className="text-3xl" />
            <FlowerMark className="size-7" />
          </div>
          <div className="space-y-1.5 text-sm text-primary/75">
            <p>Email:</p>
            <p>Instagram:</p>
            <p>TikTok:</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-[0.65rem] tracking-[0.28em] text-primary uppercase">
            Visit
          </p>
          <div className="flex flex-col gap-2 text-primary/80">
            <Link href="/shop" className="hover:text-primary">
              Shop
            </Link>
            <Link href="/about" className="hover:text-primary">
              About the studio
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Ask about a piece
            </Link>
          </div>
        </div>
        <BrandSeal className="hidden size-28 justify-self-end md:block" />
      </div>
    </footer>
  );
}
