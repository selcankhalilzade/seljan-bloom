import Link from "next/link";

import { FlowerMark } from "@/components/brand/marks";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center px-4 py-24 text-center">
      <FlowerMark className="size-14 text-primary" />
      <h1 className="mt-6 font-script text-5xl text-primary">That piece is gone</h1>
      <p className="mt-3 text-sm text-primary/70">
        This page is not in the studio. Head back to the shop to browse what is
        on the table.
      </p>
      <Link
        href="/shop"
        className={cn(buttonVariants(), "mt-8 h-11 rounded-full px-6")}
      >
        Browse the shop
      </Link>
    </div>
  );
}
