import Link from "next/link";

import { ColorSwatches } from "@/components/color-swatches";
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
        <div className="flex items-start justify-between gap-6 pt-3">
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-tight text-primary italic transition-opacity group-hover:opacity-70">
              {product.name}
            </h3>
            {product.colors && product.colors.length > 0 ? (
              <div className="mt-2">
                <ColorSwatches colors={product.colors} />
              </div>
            ) : (
              <p className="mt-1 text-sm text-primary/50">{product.colorName}</p>
            )}
          </div>
          <p className="shrink-0 pt-0.5 text-sm tabular-nums text-primary/80">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
