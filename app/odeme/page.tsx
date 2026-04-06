"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useStore } from "@/lib/store";
import { getProductById, formatPrice } from "@/lib/products";

export default function OdemePage() {
  const cart = useStore((s) => s.cart);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const updateQuantity = useStore((s) => s.updateQuantity);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: "",
  });

  const cartItems = cart
    .map((item) => {
      const product = getProductById(item.productId);
      return product ? { ...item, product } : null;
    })
    .filter(Boolean) as Array<{
    productId: string;
    quantity: number;
    product: NonNullable<ReturnType<typeof getProductById>>;
  }>;

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (cartItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col items-center justify-center px-6"
      >
        <span
          className="text-[80px] leading-none mb-6"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-muted)",
          }}
          aria-hidden="true"
        >
          ∅
        </span>
        <h1
          className="text-xl mb-3"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Sepetiniz boş
        </h1>
        <p className="text-xs text-[var(--color-muted)] tracking-wide-custom mb-8 text-center">
          Sipariş verebilmek için önce ürün eklemelisiniz.
        </p>
        <Link href="/koleksiyon" className="btn-primary w-auto px-10">
          Koleksiyonu Keşfet
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div
        className="px-6 md:px-10 py-10"
        style={{ borderBottom: "1px solid var(--color-fg)" }}
      >
        <div className="flex items-center gap-2 text-[10px] tracking-wide-custom text-[var(--color-muted)] mb-4">
          <Link href="/" className="link-underline">
            Ana Sayfa
          </Link>
          <span>/</span>
          <span className="text-[var(--color-fg)]">Sipariş Özeti</span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
          }}
        >
          Sipariş Özeti
        </h1>
      </div>

      {/* Two-Column Layout */}
      <div className="md:flex">
        {/* Left — Form */}
        <div
          className="md:w-[58%] p-6 md:p-10"
          style={{ borderRight: "1px solid var(--color-fg)" }}
        >
          {/* Contact Info */}
          <div className="mb-10">
            <p className="small-caps tracking-wide-custom text-[11px] mb-6">
              İletişim Bilgileri
            </p>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="checkout-name"
                  className="block text-[10px] tracking-wide-custom text-[var(--color-muted)] mb-2"
                >
                  Ad Soyad
                </label>
                <input
                  id="checkout-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent text-sm"
                  style={{
                    border: "1px solid var(--color-fg)",
                    outline: "none",
                    fontFamily: "var(--font-sans)",
                  }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="checkout-email"
                    className="block text-[10px] tracking-wide-custom text-[var(--color-muted)] mb-2"
                  >
                    E-posta
                  </label>
                  <input
                    id="checkout-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent text-sm"
                    style={{
                      border: "1px solid var(--color-fg)",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="checkout-phone"
                    className="block text-[10px] tracking-wide-custom text-[var(--color-muted)] mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    id="checkout-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent text-sm"
                    style={{
                      border: "1px solid var(--color-fg)",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div
            className="mb-10 pt-10"
            style={{ borderTop: "1px solid var(--color-fg)" }}
          >
            <p className="small-caps tracking-wide-custom text-[11px] mb-6">
              Teslimat Adresi
            </p>
            <div>
              <label
                htmlFor="checkout-address"
                className="block text-[10px] tracking-wide-custom text-[var(--color-muted)] mb-2"
              >
                Adres
              </label>
              <textarea
                id="checkout-address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-transparent text-sm resize-none"
                style={{
                  border: "1px solid var(--color-fg)",
                  outline: "none",
                  fontFamily: "var(--font-sans)",
                }}
              />
            </div>
          </div>

          {/* Note to the Maker */}
          <div
            className="pt-10"
            style={{ borderTop: "1px solid var(--color-fg)" }}
          >
            <p className="small-caps tracking-wide-custom text-[11px] mb-2">
              Zanaatkâra Not
            </p>
            <p className="text-[10px] text-[var(--color-muted)] tracking-wide-custom mb-6">
              Siparişinize kişisel bir dokunuş katın. Mesajınız zanaatkâra
              iletilecektir.
            </p>
            <textarea
              id="checkout-note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              rows={4}
              placeholder="Örn: Hediye paketi olabilir mi? Doğum günü için özel bir not ekleyebilir misiniz?"
              className="w-full px-4 py-3 bg-transparent text-sm resize-none"
              style={{
                border: "1px solid var(--color-fg)",
                outline: "none",
                fontFamily: "var(--font-sans)",
              }}
            />
          </div>
        </div>

        {/* Right — Order Summary (Sticky) */}
        <div className="md:w-[42%] md:sticky md:top-12 md:h-[calc(100vh-48px)] md:overflow-y-auto">
          <div className="p-6 md:p-10">
            <p className="small-caps tracking-wide-custom text-[11px] mb-8">
              Sepetiniz
            </p>

            {/* Cart Items */}
            <div className="space-y-0">
              {cartItems.map((item) => (
                <div
                  key={item.productId}
                  className="flex gap-4 py-5"
                  style={{ borderBottom: "1px solid var(--color-fg)" }}
                >
                  <div
                    className="w-16 h-[85px] relative shrink-0 overflow-hidden"
                    style={{
                      border: "1px solid var(--color-fg)",
                      background: "#EEE",
                    }}
                  >
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <p
                        className="text-sm leading-tight mb-0.5"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {item.product.name}
                      </p>
                      <p className="text-[10px] text-[var(--color-muted)] tracking-wide-custom">
                        Adet: {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs" style={{ fontFamily: "var(--font-serif)" }}>
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="text-[10px] tracking-wide-custom text-[var(--color-muted)] cursor-pointer bg-transparent border-none link-underline"
                      >
                        Kaldır
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="py-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--color-muted)] tracking-wide-custom">
                  Ara Toplam
                </span>
                <span className="text-xs" style={{ fontFamily: "var(--font-serif)" }}>
                  {formatPrice(cartTotal)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--color-muted)] tracking-wide-custom">
                  Kargo
                </span>
                <span className="text-xs text-[var(--color-muted)] tracking-wide-custom">
                  Ücretsiz
                </span>
              </div>
            </div>

            <div
              className="flex items-center justify-between py-6"
              style={{ borderTop: "1px solid var(--color-fg)" }}
            >
              <span className="small-caps tracking-wide-custom text-xs">
                Toplam
              </span>
              <span
                className="text-base"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {formatPrice(cartTotal)}
              </span>
            </div>

            {/* Submit */}
            <button
              id="place-order-button"
              className="btn-primary mt-4"
              onClick={() => {
                alert(
                  "Siparişiniz alındı! Bu bir demo sitesidir."
                );
              }}
            >
              Siparişi Onayla
            </button>

            <p className="text-[9px] text-[var(--color-muted)] tracking-wide-custom mt-4 text-center leading-relaxed">
              Siparişi onaylayarak gizlilik politikamızı
              ve iade koşullarımızı kabul etmiş olursunuz.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
