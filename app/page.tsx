"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export default function HomePage() {
  const products = getAllProducts();
  const featured = products.slice(0, 8);

  return (
    <div>
      {/* ─── Hero ─── */}
      <section
        id="hero-section"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          {/* Overline */}
          <p className="small-caps tracking-wide-custom text-[10px] text-[var(--color-muted)] mb-8">
            El Emeği — Gönül Bağı
          </p>

          {/* Main Title */}
          <h1
            className="leading-[0.9] mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
            }}
          >
            GÖNÜL&apos;DEN
            <br />
            KOPANLAR
          </h1>

          {/* Divider */}
          <div
            className="w-16 mx-auto mb-6"
            style={{ height: "1px", background: "var(--color-fg)" }}
          />

          {/* Subtitle */}
          <p
            className="text-sm tracking-wide-custom text-[var(--color-muted)] mb-10 max-w-md mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            Anadolu&apos;nun kadim zanaatlarını
            <br />
            çağdaş yaşama taşıyoruz.
          </p>

          {/* CTA */}
          <Link
            href="/koleksiyon"
            className="small-caps tracking-wide-custom text-[11px] link-underline"
            id="hero-cta"
          >
            Koleksiyonu Keşfet
          </Link>
        </motion.div>
      </section>

      {/* ─── Featured Products ─── */}
      <section
        id="featured-section"
        className="px-6 md:px-10 pb-20"
        style={{ borderTop: "1px solid var(--color-fg)" }}
      >
        {/* Section Header */}
        <div className="py-10 flex items-center justify-between">
          <h2 className="small-caps tracking-wide-custom text-[11px]">
            Seçilmiş Parçalar
          </h2>
          <Link
            href="/koleksiyon"
            className="small-caps tracking-wide-custom text-[10px] text-[var(--color-muted)] link-underline"
          >
            Tümünü Gör
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featured.map((product, index) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Statement Banner ─── */}
      <section
        className="px-6 md:px-10 py-24 md:py-32 text-center"
        style={{
          borderTop: "1px solid var(--color-fg)",
          borderBottom: "1px solid var(--color-fg)",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            lineHeight: 1.5,
          }}
        >
          Her parçanın bir hikayesi var.
          <br />
          <span className="text-[var(--color-muted)]">
            O hikaye, bir zanaatkârın ellerinde başlar.
          </span>
        </motion.p>
      </section>
    </div>
  );
}
