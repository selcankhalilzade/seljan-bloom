import Link from "next/link";
import { Menu } from "lucide-react";

import { FlowerMark, Wordmark } from "@/components/brand/marks";
import { PaletteToggle } from "@/components/palette-toggle";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <Wordmark className="text-[2rem] sm:text-[2.15rem]" />
          <FlowerMark className="size-9 sm:size-10" />
          <span className="sr-only">Seljan home</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.7rem] font-medium tracking-[0.28em] text-primary uppercase transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
          <PaletteToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <PaletteToggle />
          <details className="relative">
          <summary className="flex size-10 list-none cursor-pointer items-center justify-center rounded-full text-primary hover:bg-secondary [&::-webkit-details-marker]:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-primary/15 bg-background p-3 shadow-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm text-primary hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>
          </details>
        </div>
      </div>
    </header>
  );
}
