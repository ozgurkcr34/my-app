import productsData from "@/data/products.json";

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  category: string;
  categoryLabel: string;
  badge: string | null;
  description: string;
  details: string[];
  care: string[];
  images: string[];
  inStock: boolean;
}

export function getAllProducts(): Product[] {
  return productsData as Product[];
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return getAllProducts().filter((p) => p.category === category);
}

export interface Category {
  slug: string;
  label: string;
}

export function getCategories(): Category[] {
  const products = getAllProducts();
  const seen = new Map<string, string>();
  for (const p of products) {
    if (!seen.has(p.category)) {
      seen.set(p.category, p.categoryLabel);
    }
  }
  return Array.from(seen.entries()).map(([slug, label]) => ({ slug, label }));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
