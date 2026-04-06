"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useStore } from "@/lib/store";

export default function Navigation() {
  const toggleSidebar = useStore((s) => s.toggleSidebar);
  const cartItemCount = useStore((s) => s.cartItemCount);

  return (
    <nav
      id="main-navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]"
      style={{ borderBottom: "1px solid var(--color-fg)" }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-12">
        {/* Brand */}
        <Link
          href="/"
          className="font-[var(--font-serif)] text-base tracking-tight"
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
            Ev & Tekstil
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
        className="flex md:hidden items-center justify-center gap-6 h-10"
        style={{ borderTop: "1px solid var(--color-border-light)" }}
      >
        <Link
          href="/koleksiyon"
          className="small-caps tracking-wide-custom text-[10px] link-underline"
        >
          Koleksiyon
        </Link>
        <Link
          href="/koleksiyon/ev-tekstil"
          className="small-caps tracking-wide-custom text-[10px] link-underline"
        >
          Tekstil
        </Link>
        <Link
          href="/koleksiyon/seramik"
          className="small-caps tracking-wide-custom text-[10px] link-underline"
        >
          Seramik
        </Link>
        <Link
          href="/koleksiyon/aksesuar"
          className="small-caps tracking-wide-custom text-[10px] link-underline"
        >
          Aksesuar
        </Link>
      </div>
    </nav>
  );
}
