import Link from "next/link";

import { cn } from "@/lib/utils";
import { categories } from "@/lib/products";

const filters = [
  { href: "/shop", value: "all", label: "All" },
  ...categories.map((category) => ({
    href: `/shop?category=${category}`,
    value: category,
    label: category,
  })),
];

export function ShopFilters({ active }: { active?: string }) {
  const current = active ?? "all";

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = current === filter.value;
        return (
          <Link
            key={filter.value}
            href={filter.href}
            className={cn(
              "rounded-full border px-4 py-1.5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-primary/20 text-primary hover:border-primary/40",
            )}
          >
            {filter.label}
          </Link>
        );
      })}
    </div>
  );
}
