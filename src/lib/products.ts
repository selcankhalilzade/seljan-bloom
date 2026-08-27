export const categories = ["beanies", "scarves", "charms"] as const;

export type Category = (typeof categories)[number];

export type Availability = "in-studio" | "made-to-order" | "sold";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  yarn: string;
  colorName: string;
  hex: string;
  accent: string;
  availability: Availability;
  leadTime?: string;
  size: string;
  care: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "harbor-beanie",
    name: "Harbor Beanie",
    category: "beanies",
    price: 68,
    yarn: "Merino wool",
    colorName: "Oatmeal",
    hex: "#E6D3B8",
    accent: "#C4A882",
    availability: "in-studio",
    size: "Adult, one size with ribbed brim",
    care: "Hand wash cold, lay flat to dry",
    description:
      "A close, ribbed beanie with a folded brim. Knit in oatmeal merino so it sits soft against the hairline without itching.",
    featured: true,
  },
  {
    slug: "ember-beanie",
    name: "Ember Beanie",
    category: "beanies",
    price: 72,
    yarn: "Merino and alpaca",
    colorName: "Terracotta",
    hex: "#A24A3E",
    accent: "#7A322C",
    availability: "made-to-order",
    leadTime: "About two weeks",
    size: "Adult, one size with slouch crown",
    care: "Hand wash cold, lay flat to dry",
    description:
      "The studio color. A slightly slouchy crown in terracotta merino-alpaca, finished with a small flower tag at the brim.",
    featured: true,
  },
  {
    slug: "coastal-beanie",
    name: "Coastal Beanie",
    category: "beanies",
    price: 68,
    yarn: "Cotton-linen blend",
    colorName: "Sea salt",
    hex: "#D9D4C8",
    accent: "#A8B0A4",
    availability: "sold",
    size: "Adult, one size",
    care: "Hand wash cold, lay flat to dry",
    description:
      "A lighter summer beanie in sea-salt cotton-linen. This one has already found a home; a similar piece can be knit to order.",
  },
  {
    slug: "drift-scarf",
    name: "Drift Scarf",
    category: "scarves",
    price: 128,
    yarn: "Merino wool",
    colorName: "Cream",
    hex: "#F3E6D6",
    accent: "#D7C2A8",
    availability: "in-studio",
    size: "180 cm × 28 cm",
    care: "Hand wash cold, lay flat to dry",
    description:
      "A long ribbed scarf with a quiet drape. Cream merino that layers over coats without feeling bulky at the neck.",
    featured: true,
  },
  {
    slug: "evening-wrap",
    name: "Evening Wrap",
    category: "scarves",
    price: 148,
    yarn: "Baby alpaca",
    colorName: "Charcoal rose",
    hex: "#6B4A4A",
    accent: "#3F2A2A",
    availability: "made-to-order",
    leadTime: "About three weeks",
    size: "200 cm × 40 cm",
    care: "Hand wash cold, lay flat to dry",
    description:
      "A wider wrap in baby alpaca, knit in a slow garter so the edges stay wavy and the fabric feels almost weightless.",
  },
  {
    slug: "pocket-scarf",
    name: "Pocket Scarf",
    category: "scarves",
    price: 138,
    yarn: "Merino wool",
    colorName: "Clay",
    hex: "#C9896A",
    accent: "#9A5A3E",
    availability: "in-studio",
    size: "160 cm × 22 cm, hidden pocket at one end",
    care: "Hand wash cold, lay flat to dry",
    description:
      "A narrower scarf with a hidden pocket for keys or a charm. Knit in clay merino with a firm edge so it holds its line.",
  },
  {
    slug: "petal-charm",
    name: "Petal Charm",
    category: "charms",
    price: 28,
    yarn: "Leftover merino",
    colorName: "Studio red",
    hex: "#8F3A36",
    accent: "#C45C52",
    availability: "in-studio",
    size: "About 4 cm across, with a metal clasp",
    care: "Spot clean only",
    description:
      "A tiny six-petal flower, the same mark as the studio seal. Clips to a beanie, bag, or zipper pull.",
    featured: true,
  },
  {
    slug: "heart-charm",
    name: "Heart Charm",
    category: "charms",
    price: 24,
    yarn: "Leftover merino",
    colorName: "Blush",
    hex: "#E8B8A8",
    accent: "#C97C72",
    availability: "in-studio",
    size: "About 3 cm, with a metal clasp",
    care: "Spot clean only",
    description:
      "A small stuffed heart in blush merino. Made from leftover yarn so each one is a slightly different pink.",
  },
  {
    slug: "stitch-marker-set",
    name: "Stitch Marker Set",
    category: "charms",
    price: 32,
    yarn: "Cotton thread over brass",
    colorName: "Mixed studio colors",
    hex: "#D4B896",
    accent: "#8F3A36",
    availability: "made-to-order",
    leadTime: "About one week",
    size: "Set of six, ring diameter 8 mm",
    care: "Wipe dry if needed",
    description:
      "Six wrapped stitch markers in the studio palette. For knitters who want a little Seljan on the needles.",
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category?: string) {
  if (!category || category === "all") return products;
  return products.filter((product) => product.category === category);
}

export function featuredProducts() {
  return products.filter((product) => product.featured);
}

export const categoryCopy: Record<Category, { title: string; line: string }> = {
  beanies: {
    title: "Bloom Beanie",
    line: "Ribbed brims, soft crowns, made to sit through a whole winter.",
  },
  scarves: {
    title: "Ribbon Scarf",
    line: "Long ribs, light wraps, and one with a hidden pocket.",
  },
  charms: {
    title: "Charms",
    line: "Small knitted marks for a zipper, a bag, or the needles.",
  },
};
