import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Great_Vibes, Outfit, Geist_Mono, Instrument_Serif } from "next/font/google";

import { FlowerRainProvider } from "@/components/flower-rain";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Seljan — handmade knitted accessories",
    template: "%s · Seljan",
  },
  description:
    "Seljan is a small studio of handmade knitted accessories: beanies, scarves, and charms, made with heart.",
  icons: {
    icon: "/brand/flower.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${greatVibes.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <FlowerRainProvider>
          <div className="site-grain" aria-hidden />
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </FlowerRainProvider>
      </body>
    </html>
  );
}
