import type { Product } from "@/lib/products";
import { FlowerMark } from "@/components/brand/marks";

function KnitField({ slug, hex, accent }: { slug: string; hex: string; accent: string }) {
  const patternId = `knit-${slug}`;

  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <pattern
          id={patternId}
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <rect width="12" height="12" fill={hex} />
          <path
            d="M0 6 Q3 1.5 6 6 T12 6"
            fill="none"
            stroke={accent}
            strokeWidth="1.35"
            opacity="0.7"
          />
          <path
            d="M0 0 Q3 4.5 6 0"
            fill="none"
            stroke={accent}
            strokeWidth="1.2"
            opacity="0.45"
          />
          <circle cx="6" cy="6" r="0.7" fill={accent} opacity="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export function ProductVisual({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div
      className={`${className ?? ""} overflow-hidden`}
      style={{ backgroundColor: product.hex }}
    >
      <KnitField slug={product.slug} hex={product.hex} accent={product.accent} />
      <div className="relative flex h-full items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
        {product.category === "charms" ? (
          product.slug === "mini-bloom-beanie-charm" ? (
            <svg viewBox="0 0 128 140" className="h-[42%] w-[42%]" fill="none">
              <path
                d="M48 118 C22 118 18 92 22 74 C26 48 40 32 64 30 C90 28 108 46 110 74 C112 96 106 118 80 118 Z M28 108 C36 122 92 124 100 108"
                fill={product.accent}
                opacity="0.88"
              />
            </svg>
          ) : (
            <FlowerMark className="size-24 sm:size-28" />
          )
        ) : (
          <svg viewBox="0 0 128 140" className="h-[58%] w-[58%]" fill="none">
            {product.category === "beanies" ? (
              <path
                d="M48 118 C22 118 18 92 22 74 C26 48 40 32 64 30 C90 28 108 46 110 74 C112 96 106 118 80 118 Z M28 108 C36 122 92 124 100 108"
                fill={product.accent}
                opacity="0.88"
              />
            ) : product.category === "headbands" ? (
              <path
                d="M18 78 C28 48 48 36 64 36 C80 36 100 48 110 78 C102 70 84 64 64 64 C44 64 26 70 18 78 Z"
                fill={product.accent}
                opacity="0.88"
              />
            ) : (
              <path
                d="M42 24h26c8 0 12 8 12 16v82c0 20-10 30-28 36-12 4-26 2-32-8-4-8 2-14 10-16 12-2 18 4 24 2 6-2 8-10 8-18V40H42c-8 0-12-12-4-16 4-2 8 0 4 0z"
                fill={product.accent}
                opacity="0.88"
              />
            )}
          </svg>
        )}
      </div>
    </div>
  );
}
