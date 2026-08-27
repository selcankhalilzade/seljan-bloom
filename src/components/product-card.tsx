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
      <div className="overflow-hidden border border-primary/10 bg-card">
        <div className="relative aspect-[4/5]">
          <ProductVisual product={product} className="absolute inset-0" />
          <Badge className="absolute top-3 left-3 rounded-none bg-background/90 text-primary hover:bg-background/90">
            {availabilityLabel(product)}
          </Badge>
        </div>
        <div className="space-y-1 px-0 py-4">
          <p className="text-[0.65rem] tracking-[0.22em] text-primary/45 uppercase">
            {product.category}
          </p>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-xl text-primary italic group-hover:opacity-70">
              {product.name}
            </h3>
            <p className="text-sm text-primary/70">{formatPrice(product.price)}</p>
          </div>
          <p className="text-sm text-primary/55">{product.colorName}</p>
        </div>
      </div>
    </Link>
  );
}
