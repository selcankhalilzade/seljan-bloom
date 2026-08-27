import { Suspense } from "react";

import { BrandSeal } from "@/components/brand/seal";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-[0.65rem] tracking-[0.28em] text-primary uppercase">
          The studio
        </p>
        <h1 className="mt-3 font-display text-5xl text-primary italic sm:text-6xl">
          Write to Seljan
        </h1>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary/75 sm:text-base">
          Ask about a beanie on the table, a scarf in another color, or a charm
          for someone else. There is no checkout yet — this note is how a piece
          is reserved.
        </p>
        <BrandSeal className="mt-10 hidden size-36 lg:block" />
      </div>
      <Suspense
        fallback={
          <div className="h-80 animate-pulse bg-card" />
        }
      >
        <ContactForm />
      </Suspense>
    </div>
  );
}
