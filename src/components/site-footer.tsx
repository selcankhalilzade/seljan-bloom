import Link from "next/link";

import { FlowerMark, Wordmark } from "@/components/brand/marks";
import { BrandSeal } from "@/components/brand/seal";

const visit = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const social = ["Email", "Instagram", "TikTok"];

export function SiteFooter() {
  return (
    <footer className="band-oxblood mt-auto bg-band text-band-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex items-center gap-3">
          <Wordmark className="text-3xl" />
          <FlowerMark className="size-7 animate-flower-turn" />
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.7rem] tracking-[0.22em] uppercase">
          {visit.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.7rem] tracking-[0.22em] uppercase">
          {social.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>

        <BrandSeal className="hidden size-20 shrink-0 md:block" />
      </div>
    </footer>
  );
}
