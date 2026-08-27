import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductVisual } from "@/components/product-visual";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { formatPrice, getProduct, products } from "@/lib/products";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piece" };
  return { title: product.name };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const inquireHref = `/contact?piece=${encodeURIComponent(product.name)}`;

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
      <div className="overflow-hidden border border-primary/10">
        <ProductVisual product={product} className="relative aspect-[4/5] w-full" />
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
            <dd className="mt-1 text-primary">{product.colorName}</dd>
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
