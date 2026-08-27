import { cn } from "@/lib/utils";

type FlowerMarkProps = {
  className?: string;
};

export function FlowerMark({ className }: FlowerMarkProps) {
  return (
    // Official Seljan six-petal mark
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/flower.png"
      alt=""
      className={cn("shrink-0 object-contain", className)}
      aria-hidden
    />
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-script leading-none tracking-tight", className)}>
      Seljan
    </span>
  );
}
