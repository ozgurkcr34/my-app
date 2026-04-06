"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProductById, formatPrice } from "@/lib/products";
import { useStore } from "@/lib/store";
import GrainOverlay from "@/components/GrainOverlay";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);
  const addToCart = useStore((s) => s.addToCart);

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Breadcrumb */}
      <div className="px-6 md:px-10 pt-6 pb-4 flex items-center gap-2 text-[10px] tracking-wide-custom text-[var(--color-muted)]">
        <Link href="/koleksiyon" className="link-underline">
          Koleksiyon
        </Link>
        <span>/</span>
        <Link
          href={`/koleksiyon/${product.category}`}
          className="link-underline"
        >
          {product.categoryLabel}
        </Link>
        <span>/</span>
        <span className="text-[var(--color-fg)]">{product.name}</span>
      </div>

      {/* Split Layout */}
      <div className="md:flex md:min-h-[calc(100vh-120px)]">
        {/* Left — Images */}
        <div className="md:w-[60%]" style={{ borderRight: "1px solid var(--color-border-light)" }}>
          <div className="p-6 md:p-10 space-y-4">
            {product.images.map((img, i) => (
              <div
                key={i}
                className="aspect-3-4 relative overflow-hidden border-sharp bg-[var(--color-white)]"
              >
                <Image
                  src={img}
                  alt={`${product.name} - Görsel ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={i === 0}
                />
                <GrainOverlay />
              </div>
            ))}
          </div>
        </div>

        {/* Right — Product Info */}
        <div className="md:w-[40%] md:sticky md:top-12 md:h-[calc(100vh-48px)] md:overflow-y-auto">
          <div className="p-6 md:p-10 flex flex-col justify-center min-h-full">
            {/* Category */}
            <p className="small-caps tracking-wide-custom text-[10px] text-[var(--color-muted)] mb-4">
              {product.categoryLabel}
            </p>

            {/* Name */}
            <h1
              className="mb-4"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <p
              className="text-base mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {formatPrice(product.price)}
            </p>

            {/* Divider */}
            <div
              className="w-full mb-8"
              style={{ height: "1px", background: "var(--color-border-light)" }}
            />

            {/* Description */}
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Details */}
            <div className="mb-10">
              <p className="small-caps tracking-wide-custom text-[10px] text-[var(--color-muted)] mb-3">
                Detaylar
              </p>
              <ul className="space-y-1.5">
                {product.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-xs tracking-wide-custom flex items-center gap-2"
                  >
                    <span
                      className="w-1 h-1 bg-[var(--color-fg)] block shrink-0"
                      style={{ borderRadius: 0 }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-1.5 h-1.5 block"
                style={{
                  background: product.inStock ? "var(--color-fg)" : "var(--color-border-light)",
                }}
              />
              <span className="text-[10px] tracking-wide-custom text-[var(--color-muted)]">
                {product.inStock ? "Stokta mevcut" : "Stokta yok"}
              </span>
            </div>

            {/* Add to Cart */}
            <button
              id="add-to-cart-button"
              className="btn-primary"
              onClick={() => addToCart(product.id)}
              disabled={!product.inStock}
              style={{
                opacity: product.inStock ? 1 : 0.4,
                cursor: product.inStock ? "pointer" : "not-allowed",
              }}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
