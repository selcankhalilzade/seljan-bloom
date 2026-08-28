"use client";

import type { ColorOption } from "@/lib/products";
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
    <div className="flex flex-wrap items-center gap-2.5">
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
              "size-8 rounded-full border border-primary/25 transition-[transform,box-shadow]",
              selected && "ring-2 ring-primary ring-offset-2 ring-offset-background",
              onChange && "cursor-pointer hover:scale-105",
              !onChange && "pointer-events-none size-5",
            )}
            style={{ backgroundColor: color.hex }}
          />
        );
      })}
    </div>
  );
}
