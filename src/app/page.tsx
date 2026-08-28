import type { Metadata } from "next";

import { ComingSoonView } from "@/components/coming-soon-view";

export const metadata: Metadata = {
  title: "Coming soon",
  description:
    "Seljan is a small studio of handmade knitted accessories. The table is not open yet.",
};

export default function HomePage() {
  return <ComingSoonView />;
}
