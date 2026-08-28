export const categories = ["beanies", "scarves", "headbands", "charms"] as const;

export type Category = (typeof categories)[number];

export type Availability = "in-studio" | "made-to-order" | "sold";

export type ColorOption = {
  name: string;
  hex: string;
  accent: string;
};

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  yarn: string;
  colorName: string;
  hex: string;
  accent: string;
  colors?: ColorOption[];
  availability: Availability;
  leadTime?: string;
  size: string;
  care: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: "bloom-beanie",
    name: "Bloom Beanie",
    category: "beanies",
    price: 72,
    yarn: "Merino and alpaca",
    colorName: "Four studio colors",
    hex: "#A24A3E",
    accent: "#7A322C",
    colors: [
      { name: "Terracotta", hex: "#A24A3E", accent: "#7A322C" },
      { name: "Oatmeal", hex: "#E6D3B8", accent: "#C4A882" },
      { name: "Cream", hex: "#F3E6D6", accent: "#D7C2A8" },
      { name: "Blush", hex: "#E8B8A8", accent: "#C97C72" },
    ],
    availability: "made-to-order",
    leadTime: "About two weeks",
    size: "Adult, one size with slouch crown",
    care: "Hand wash cold, lay flat to dry",
    description:
      "The studio beanie. A slightly slouchy crown in merino-alpaca, finished with a small flower at the brim. Four colors. Each piece comes with a pouch for keeping.",
    featured: true,
  },
  {
    slug: "ribbon-scarf",
    name: "Ribbon Scarf",
    category: "scarves",
    price: 128,
    yarn: "Merino wool",
    colorName: "Cream",
    hex: "#F3E6D6",
    accent: "#D7C2A8",
    availability: "in-studio",
    size: "180 cm × 22 cm",
    care: "Hand wash cold, lay flat to dry",
    description:
      "A long, narrow scarf with a ribbon drape. Cream merino that layers over coats without feeling bulky at the neck. Each piece comes with a pouch for keeping.",
    featured: true,
  },
  {
    slug: "petal-headband",
    name: "Petal Headband",
    category: "headbands",
    price: 42,
    yarn: "Merino wool",
    colorName: "Blush",
    hex: "#E8B8A8",
    accent: "#C97C72",
    availability: "in-studio",
    size: "Adult, one size with a little give",
    care: "Hand wash cold, lay flat to dry",
    description:
      "A soft headband with a petal overlap at the front. Knit or crochet to order in blush merino. Each piece comes with a pouch for keeping.",
    featured: true,
  },
  {
    slug: "mini-bloom-beanie-charm",
    name: "Mini Bloom Beanie Charm",
    category: "charms",
    price: 24,
    yarn: "Leftover merino",
    colorName: "Seven studio colors",
    hex: "#E6D3B8",
    accent: "#C4A882",
    colors: [
      { name: "Oatmeal", hex: "#E6D3B8", accent: "#C4A882" },
      { name: "Terracotta", hex: "#A24A3E", accent: "#7A322C" },
      { name: "Cream", hex: "#F3E6D6", accent: "#D7C2A8" },
      { name: "Blush", hex: "#E8B8A8", accent: "#C97C72" },
      { name: "Studio red", hex: "#8F3A36", accent: "#C45C52" },
      { name: "Clay", hex: "#C9896A", accent: "#9A5A3E" },
      { name: "Charcoal rose", hex: "#6B4A4A", accent: "#3F2A2A" },
    ],
    availability: "in-studio",
    size: "About 3 cm, with a metal clasp",
    care: "Spot clean only",
    description:
      "A tiny Bloom Beanie for keys or a bag. Seven colors, made from leftover merino so each one is a little different. Each piece comes with a pouch for keeping.",
    featured: true,
  },
  {
    slug: "signature-flower-charm",
    name: "Signature Flower Charm",
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
      "The six-petal Seljan flower, as a charm. Clips to keys, a bag, or the Bloom Beanie itself. Each piece comes with a pouch for keeping.",
    featured: true,
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
    line: "The studio beanie — four colors, flower at the brim.",
  },
  scarves: {
    title: "Ribbon Scarf",
    line: "Long, narrow, meant to move with a coat.",
  },
  headbands: {
    title: "Petal Headband",
    line: "A soft band with a petal overlap at the front.",
  },
  charms: {
    title: "Charms",
    line: "Mini Bloom Beanie and the Signature Flower, for keys or a bag.",
  },
};
