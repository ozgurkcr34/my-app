import Link from "next/link";
import ProductImage from "./ProductImage";
import { formatPrice, type Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/urun/${product.id}`}
      id={`product-card-${product.id}`}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative">
        <ProductImage
          src={product.images[0]}
          alt={product.name}
          className="transition-opacity duration-500 ease-in-out group-hover:opacity-90"
        />

        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-3 left-3 z-20 small-caps tracking-wide-custom text-[9px] px-2 py-1 bg-[var(--color-bg)]"
            style={{ border: "1px solid var(--color-fg)" }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="pt-3 pb-1">
        <h3
          className="text-sm leading-tight mb-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {product.name}
        </h3>
        <span className="text-[11px] text-[var(--color-muted)] tracking-wide-custom">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}
