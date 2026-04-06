"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getAllProducts, getCategories } from "@/lib/products";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function KoleksiyonPage() {
  const products = getAllProducts();
  const categories = getCategories();

  return (
    <div className="px-6 md:px-10 pb-20">
      {/* Header */}
      <div className="pt-16 pb-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          Koleksiyon
        </motion.h1>
        <p className="text-xs text-[var(--color-muted)] tracking-wide-custom mt-3">
          {products.length} ürün
        </p>
      </div>

      {/* Category Filters */}
      <div
        className="flex items-center gap-6 pb-8 mb-8"
        style={{ borderBottom: "1px solid var(--color-border-light)" }}
      >
        <Link
          href="/koleksiyon"
          className="small-caps tracking-wide-custom text-[11px] link-underline"
          style={{ fontWeight: 500 }}
        >
          Tümü
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/koleksiyon/${cat.slug}`}
            className="small-caps tracking-wide-custom text-[11px] text-[var(--color-muted)] link-underline"
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product, index) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
