import { ProductCard } from "@/components/product-card";
import { ShopFilters } from "@/components/shop-filters";
import { getProductsByCategory } from "@/lib/products";

export const metadata = {
  title: "Shop",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const params = await searchParams;
  const category = typeof params.category === "string" ? params.category : undefined;
  const pieces = getProductsByCategory(category);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-[0.65rem] tracking-[0.28em] text-primary uppercase">
        The studio table
      </p>
      <h1 className="mt-2 font-script text-5xl text-primary sm:text-6xl">
        Shop
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary/75 sm:text-base">
        Handmade accessories in small numbers. Browse, then write to the studio
        if a piece should be yours — checkout comes later.
      </p>
      <div className="mt-8">
        <ShopFilters active={category} />
      </div>

      {pieces.length === 0 ? (
        <div className="mt-16 rounded-[1.6rem] border border-dashed border-primary/20 px-6 py-16 text-center">
          <p className="font-script text-4xl text-primary">Nothing here yet</p>
          <p className="mx-auto mt-3 max-w-sm text-sm text-primary/70">
            That shelf is empty for now. Try another category, or ask about a
            custom knit.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
