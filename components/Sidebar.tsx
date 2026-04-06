"use client";

import { X, Minus, Plus } from "lucide-react";
import { useStore } from "@/lib/store";
import { getProductById, formatPrice } from "@/lib/products";
import Image from "next/image";

export default function Sidebar() {
  const cart = useStore((s) => s.cart);
  const isOpen = useStore((s) => s.isSidebarOpen);
  const closeSidebar = useStore((s) => s.closeSidebar);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const updateQuantity = useStore((s) => s.updateQuantity);

  const cartTotal = cart.reduce((sum, item) => {
    const product = getProductById(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        id="cart-sidebar"
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-[var(--color-bg)] flex flex-col transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ borderLeft: "1px solid var(--color-fg)" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 h-12 shrink-0"
          style={{ borderBottom: "1px solid var(--color-fg)" }}
        >
          <span className="small-caps tracking-wide-custom text-xs">
            Sepet ({cart.length})
          </span>
          <button
            onClick={closeSidebar}
            className="cursor-pointer bg-transparent border-none"
            aria-label="Sepeti kapat"
          >
            <X size={18} strokeWidth={1} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-[var(--color-muted)] text-xs tracking-wide-custom">
                Sepetiniz boş
              </p>
            </div>
          ) : (
            <div>
              {cart.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;
                return (
                  <div
                    key={item.productId}
                    className="flex gap-4 px-6 py-5"
                    style={{ borderBottom: "1px solid var(--color-border-light)" }}
                  >
                    {/* Image */}
                    <div className="w-20 h-[106px] relative shrink-0 overflow-hidden border-sharp">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-between flex-1 min-w-0">
                      <div>
                        <p
                          className="text-sm leading-tight mb-1"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {product.name}
                        </p>
                        <p className="text-xs text-[var(--color-muted)]">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                            className="cursor-pointer bg-transparent border-none"
                            aria-label="Azalt"
                          >
                            <Minus size={14} strokeWidth={1} />
                          </button>
                          <span className="text-xs w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                            className="cursor-pointer bg-transparent border-none"
                            aria-label="Artır"
                          >
                            <Plus size={14} strokeWidth={1} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="text-[10px] tracking-wide-custom text-[var(--color-muted)] underline cursor-pointer bg-transparent border-none"
                        >
                          Kaldır
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div
            className="shrink-0 px-6 py-5"
            style={{ borderTop: "1px solid var(--color-fg)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="small-caps tracking-wide-custom text-xs">
                Toplam
              </span>
              <span className="text-sm" style={{ fontFamily: "var(--font-serif)" }}>
                {formatPrice(cartTotal)}
              </span>
            </div>
            <button className="btn-primary" id="checkout-button">
              Ödemeye Geç
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
