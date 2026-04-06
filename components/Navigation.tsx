"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useStore } from "@/lib/store";

export default function Navigation() {
  const toggleSidebar = useStore((s) => s.toggleSidebar);
  const cartItemCount = useStore((s) => s.cartItemCount);

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)] cursor-auto"
      style={{
        borderBottom: "1px solid var(--color-fg)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-12">
        {/* Brand */}
        <Link
          href="/"
          className="text-base tracking-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          GK
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/koleksiyon"
            className="small-caps tracking-wide-custom text-xs link-underline"
          >
            Koleksiyon
          </Link>
          <Link
            href="/koleksiyon/ev-tekstil"
            className="small-caps tracking-wide-custom text-xs link-underline"
          >
            Ev &amp; Tekstil
          </Link>
          <Link
            href="/koleksiyon/seramik"
            className="small-caps tracking-wide-custom text-xs link-underline"
          >
            Seramik
          </Link>
          <Link
            href="/koleksiyon/aksesuar"
            className="small-caps tracking-wide-custom text-xs link-underline"
          >
            Aksesuar
          </Link>
          <Link
            href="/hakkimizda"
            className="small-caps tracking-wide-custom text-xs link-underline"
          >
            Hakkımızda
          </Link>
        </div>

        {/* Cart */}
        <button
          id="cart-toggle"
          onClick={toggleSidebar}
          className="relative flex items-center gap-2 cursor-pointer bg-transparent border-none"
          aria-label="Sepeti aç"
        >
          <ShoppingBag size={18} strokeWidth={1} />
          {cartItemCount() > 0 && (
            <span
              className="absolute -top-1.5 -right-2.5 w-4 h-4 flex items-center justify-center text-[9px] bg-[var(--color-fg)] text-[var(--color-bg)]"
              style={{ lineHeight: 1 }}
            >
              {cartItemCount()}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="flex md:hidden items-center justify-center gap-5 h-10 overflow-x-auto"
        style={{ borderTop: "1px solid var(--color-fg)" }}
      >
        <Link
          href="/koleksiyon"
          className="small-caps tracking-wide-custom text-[10px] link-underline shrink-0"
        >
          Koleksiyon
        </Link>
        <Link
          href="/koleksiyon/ev-tekstil"
          className="small-caps tracking-wide-custom text-[10px] link-underline shrink-0"
        >
          Tekstil
        </Link>
        <Link
          href="/koleksiyon/seramik"
          className="small-caps tracking-wide-custom text-[10px] link-underline shrink-0"
        >
          Seramik
        </Link>
        <Link
          href="/koleksiyon/aksesuar"
          className="small-caps tracking-wide-custom text-[10px] link-underline shrink-0"
        >
          Aksesuar
        </Link>
        <Link
          href="/hakkimizda"
          className="small-caps tracking-wide-custom text-[10px] link-underline shrink-0"
        >
          Hakkımızda
        </Link>
      </div>
    </nav>
  );
}
