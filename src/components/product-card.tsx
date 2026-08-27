import Link from "next/link";

import { ProductVisual } from "@/components/product-visual";
import { Badge } from "@/components/ui/badge";
import { formatPrice, type Product } from "@/lib/products";

function availabilityLabel(product: Product) {
  if (product.availability === "sold") return "Sold";
  if (product.availability === "made-to-order") return "Made to order";
  return "In studio";
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <div className="relative aspect-[4/5] overflow-hidden">
          <ProductVisual product={product} className="absolute inset-0" />
          <Badge className="absolute top-3 left-3 rounded-none bg-background/90 text-primary hover:bg-background/90">
            {availabilityLabel(product)}
          </Badge>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <p className="text-[0.65rem] tracking-[0.24em] text-primary/40 uppercase">
            {product.category}
          </p>
          <h3 className="font-display text-[1.35rem] leading-snug text-primary italic transition-opacity group-hover:opacity-70">
            {product.name}
          </h3>
          <div className="flex items-baseline justify-between gap-4 text-sm">
            <p className="text-primary/55">{product.colorName}</p>
            <p className="shrink-0 tabular-nums tracking-wide text-primary">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
