import Link from "next/link";
import Image from "next/image";
import GrainOverlay from "./GrainOverlay";
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
      <div className="aspect-3-4 relative overflow-hidden border-sharp bg-[var(--color-white)]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-90"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <GrainOverlay />
      </div>

      {/* Info */}
      <div className="pt-3 pb-1">
        <p className="small-caps tracking-wide-custom text-[9px] text-[var(--color-muted)] mb-1">
          {product.categoryLabel}
        </p>
        <div className="flex items-baseline justify-between gap-2">
          <h3
            className="text-sm leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {product.name}
          </h3>
          <span className="text-xs text-[var(--color-muted)] shrink-0">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
