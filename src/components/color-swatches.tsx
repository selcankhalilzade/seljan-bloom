"use client";

import { useState } from "react";

import { ProductVisual } from "@/components/product-visual";
import type { ColorOption, Product } from "@/lib/products";
import { cn } from "@/lib/utils";

export function ColorSwatches({
  colors,
  value,
  onChange,
}: {
  colors: ColorOption[];
  value?: string;
  onChange?: (color: ColorOption) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => {
        const selected = value === color.name;
        return (
          <button
            key={color.name}
            type="button"
            title={color.name}
            aria-label={color.name}
            aria-pressed={onChange ? selected : undefined}
            onClick={onChange ? () => onChange(color) : undefined}
            className={cn(
              "size-5 rounded-full border border-primary/20",
              selected && "ring-2 ring-primary ring-offset-2 ring-offset-background",
              !onChange && "pointer-events-none",
            )}
            style={{ backgroundColor: color.hex }}
          />
        );
      })}
    </div>
  );
}

export function ProductGallery({ product }: { product: Product }) {
  const palette = product.colors ?? [];
  const [color, setColor] = useState<ColorOption | undefined>(palette[0]);

  return (
    <div>
      <div className="group overflow-hidden border border-primary/10">
        <ProductVisual
          product={product}
          color={color}
          className="relative aspect-[4/5] w-full"
        />
      </div>
      {palette.length > 0 ? (
        <div className="mt-4 space-y-2">
          <p className="text-[0.65rem] tracking-[0.2em] text-primary/50 uppercase">
            {color?.name}
          </p>
          <ColorSwatches
            colors={palette}
            value={color?.name}
            onChange={setColor}
          />
        </div>
      ) : null}
    </div>
  );
}
