"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { ColorSwatches } from "@/components/color-swatches";
import { ProductVisual } from "@/components/product-visual";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  formatPrice,
  type ColorOption,
  type Product,
} from "@/lib/products";
import { cn } from "@/lib/utils";

export function ProductView({ product }: { product: Product }) {
  const palette = product.colors ?? [];
  const [color, setColor] = useState<ColorOption | undefined>(palette[0]);

  const inquireHref = useMemo(() => {
    const params = new URLSearchParams({ piece: product.name });
    if (color?.name) params.set("color", color.name);
    return `/contact?${params.toString()}`;
  }, [product.name, color?.name]);

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
      <div className="group overflow-hidden border border-primary/10">
        <ProductVisual
          product={product}
          color={color}
          className="relative aspect-[4/5] w-full"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[0.65rem] tracking-[0.28em] text-primary/50 uppercase">
          {product.category}
        </p>
        <h1 className="mt-2 font-display text-5xl text-primary italic sm:text-6xl">
          {product.name}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="text-lg text-primary">{formatPrice(product.price)}</p>
          <Badge variant="secondary">
            {product.availability === "sold"
              ? "Sold"
              : product.availability === "made-to-order"
                ? "Made to order"
                : "In studio"}
          </Badge>
        </div>
        {palette.length > 0 ? (
          <div className="mt-5 space-y-2">
            <p className="text-[0.65rem] tracking-[0.2em] text-primary/50 uppercase">
              Color — {color?.name}
            </p>
            <ColorSwatches
              colors={palette}
              value={color?.name}
              onChange={setColor}
            />
          </div>
        ) : null}
        <p className="mt-6 max-w-md text-sm leading-relaxed text-primary/80 sm:text-base">
          {product.description}
        </p>
        <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-[0.65rem] tracking-[0.2em] text-primary/50 uppercase">
              Yarn
            </dt>
            <dd className="mt-1 text-primary">{product.yarn}</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] tracking-[0.2em] text-primary/50 uppercase">
              Color
            </dt>
            <dd className="mt-1 text-primary">
              {color?.name ?? product.colorName}
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] tracking-[0.2em] text-primary/50 uppercase">
              Size
            </dt>
            <dd className="mt-1 text-primary">{product.size}</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] tracking-[0.2em] text-primary/50 uppercase">
              Care
            </dt>
            <dd className="mt-1 text-primary">{product.care}</dd>
          </div>
        </dl>
        {product.leadTime ? (
          <p className="mt-4 text-sm text-primary/70">
            Lead time: {product.leadTime}.
          </p>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={inquireHref}
            className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-[var(--btn-radius)] px-8")}
          >
            {product.availability === "sold"
              ? "Ask for a similar knit"
              : "Ask about this piece"}
          </Link>
          <Link
            href="/shop"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 rounded-[var(--btn-radius)] px-8",
            )}
          >
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}
