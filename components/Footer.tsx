import Link from "next/link";
import { AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="mt-auto"
      style={{ borderTop: "1px solid var(--color-fg)" }}
    >
      <div className="px-6 md:px-10 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <p
              className="text-lg mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Gönül&apos;den Kopanlar
            </p>
            <p className="text-[11px] text-[var(--color-muted)] leading-relaxed max-w-[240px]">
              El emeği, gönül bağı. Anadolu&apos;nun zanaatkâr ruhunu
              modern yaşama taşıyoruz.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p className="small-caps tracking-wide-custom text-[10px] mb-4 text-[var(--color-muted)]">
              Mağaza
            </p>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/koleksiyon"
                className="text-[11px] tracking-wide-custom link-underline w-fit"
              >
                Tüm Ürünler
              </Link>
              <Link
                href="/koleksiyon/ev-tekstil"
                className="text-[11px] tracking-wide-custom link-underline w-fit"
              >
                Ev & Tekstil
              </Link>
              <Link
                href="/koleksiyon/seramik"
                className="text-[11px] tracking-wide-custom link-underline w-fit"
              >
                Seramik
              </Link>
              <Link
                href="/koleksiyon/aksesuar"
                className="text-[11px] tracking-wide-custom link-underline w-fit"
              >
                Aksesuar
              </Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="small-caps tracking-wide-custom text-[10px] mb-4 text-[var(--color-muted)]">
              Bilgi
            </p>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/hakkimizda"
                className="text-[11px] tracking-wide-custom link-underline w-fit"
              >
                Hakkımızda
              </Link>
              <span className="text-[11px] tracking-wide-custom">Kargo & İade</span>
              <span className="text-[11px] tracking-wide-custom">Gizlilik Politikası</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="small-caps tracking-wide-custom text-[10px] mb-4 text-[var(--color-muted)]">
              İletişim
            </p>
            <div className="flex flex-col gap-2.5">
              <span className="text-[11px] tracking-wide-custom">
                info@gonuldenkopanlar.com
              </span>
              <div className="flex items-center gap-3 mt-2">
                <AtSign size={15} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-6 md:px-10 py-4 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--color-border-light)" }}
      >
        <span className="text-[10px] text-[var(--color-muted)] tracking-wide-custom">
          © 2026 Gönül&apos;den Kopanlar
        </span>
        <span className="text-[10px] text-[var(--color-muted)] tracking-wide-custom">
          Tüm hakları saklıdır
        </span>
      </div>
    </footer>
  );
}
