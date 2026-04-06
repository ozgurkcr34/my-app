import type { Metadata } from "next";
import Link from "next/link";
import { getProductById, formatPrice, getAllProducts } from "@/lib/products";
import ProductDetailClient from "@/components/ProductDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Ürün Bulunamadı — GÖNÜL'DEN KOPANLAR",
    };
  }

  const price = formatPrice(product.price);

  return {
    title: `${product.name} — GÖNÜL'DEN KOPANLAR`,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${price}`,
      description: product.description,
      type: "website",
      images: product.images.map((img) => ({
        url: img,
        width: 900,
        height: 1200,
        alt: product.name,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} — GÖNÜL'DEN KOPANLAR`,
      description: product.description,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-2xl mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ürün bulunamadı
          </h1>
          <Link
            href="/koleksiyon"
            className="small-caps tracking-wide-custom text-[11px] link-underline"
          >
            Koleksiyona Dön
          </Link>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}
