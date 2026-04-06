"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice, type Product } from "@/lib/products";
import { useStore } from "@/lib/store";
import ProductImage from "@/components/ProductImage";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const addToCart = useStore((s) => s.addToCart);

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
      <div
        className="md:flex"
        style={{ borderTop: "1px solid var(--color-fg)" }}
      >
        {/* Left — Scrollable Images */}
        <div
          className="md:w-[58%]"
          style={{ borderRight: "1px solid var(--color-fg)" }}
        >
          <div className="p-6 md:p-10 space-y-5">
            {product.images.map((img, i) => (
              <div key={i} data-cursor="view">
                <ProductImage
                  src={img}
                  alt={`${product.name} — ${i + 1}`}
                  sizes="(max-width: 768px) 100vw, 58vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right — Sticky Product Info */}
        <div className="md:w-[42%] md:sticky md:top-12 md:h-[calc(100vh-48px)] md:overflow-y-auto">
          <div className="p-6 md:p-10 md:py-14 flex flex-col justify-center min-h-full">
            {/* Badge */}
            {product.badge && (
              <span
                className="small-caps tracking-wide-custom text-[9px] px-2 py-1 w-fit mb-6"
                style={{ border: "1px solid var(--color-fg)" }}
              >
                {product.badge}
              </span>
            )}

            {/* Category */}
            <p className="small-caps tracking-wide-custom text-[10px] text-[var(--color-muted)] mb-3">
              {product.categoryLabel}
            </p>

            {/* Name */}
            <h1
              className="mb-3"
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
              className="text-base text-[var(--color-muted)] mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {formatPrice(product.price)}
            </p>

            {/* Divider */}
            <div
              className="w-full mb-8"
              style={{ height: "1px", background: "var(--color-fg)" }}
            />

            {/* Description */}
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-1.5 h-1.5 block"
                style={{
                  background: product.inStock
                    ? "var(--color-fg)"
                    : "var(--color-muted)",
                }}
              />
              <span className="text-[10px] tracking-wide-custom text-[var(--color-muted)]">
                {product.inStock ? "Stokta mevcut" : "Stokta yok"}
              </span>
            </div>

            {/* Add to Cart — Desktop */}
            <button
              id="add-to-cart-button"
              className="btn-primary mb-10 hidden md:flex"
              onClick={() => addToCart(product.id)}
              disabled={!product.inStock}
              style={{
                opacity: product.inStock ? 1 : 0.4,
                cursor: product.inStock ? "pointer" : "not-allowed",
              }}
            >
              Sepete Ekle
            </button>

            {/* ─── Accordion: Detaylar ─── */}
            <details
              className="group"
              style={{
                borderTop: "1px solid var(--color-fg)",
                borderBottom: "1px solid var(--color-fg)",
              }}
            >
              <summary
                className="flex items-center justify-between py-4 cursor-pointer list-none small-caps tracking-wide-custom text-[11px]"
                style={{ userSelect: "none" }}
              >
                <span>Ürün Detayları</span>
                <span
                  className="text-sm transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="pb-5">
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-xs tracking-wide-custom text-[var(--color-muted)] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-[var(--color-fg)] block shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            {/* ─── Accordion: Bakım ─── */}
            <details
              className="group"
              style={{ borderBottom: "1px solid var(--color-fg)" }}
            >
              <summary
                className="flex items-center justify-between py-4 cursor-pointer list-none small-caps tracking-wide-custom text-[11px]"
                style={{ userSelect: "none" }}
              >
                <span>Bakım &amp; Kullanım</span>
                <span
                  className="text-sm transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="pb-5">
                <ul className="space-y-2">
                  {product.care.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs tracking-wide-custom text-[var(--color-muted)] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-[var(--color-fg)] block shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* ─── Mobile Sticky Add to Cart ─── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[var(--color-bg)] px-6 py-4"
        style={{ borderTop: "1px solid var(--color-fg)" }}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p
              className="text-sm leading-tight truncate"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {product.name}
            </p>
            <p className="text-[11px] text-[var(--color-muted)] tracking-wide-custom">
              {formatPrice(product.price)}
            </p>
          </div>
          <button
            className="btn-primary w-auto px-8 shrink-0"
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

      {/* Spacer for mobile sticky bar */}
      <div className="h-20 md:hidden" />
    </motion.div>
  );
}
