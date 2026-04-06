import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — GÖNÜL'DEN KOPANLAR",
  description:
    "Anadolu'nun kadim zanaatlarını çağdaş yaşama taşıyan butik atölye. El emeği, gönül bağı felsefesiyle üretiyoruz.",
  openGraph: {
    title: "Hakkımızda — GÖNÜL'DEN KOPANLAR",
    description:
      "Anadolu'nun kadim zanaatlarını çağdaş yaşama taşıyan butik atölye.",
    type: "website",
  },
};

export default function HakkimizdaPage() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section
        className="min-h-[70vh] flex flex-col items-center justify-center px-6 md:px-10"
        style={{ borderBottom: "1px solid var(--color-fg)" }}
      >
        <p className="small-caps tracking-wide-custom text-[10px] text-[var(--color-muted)] mb-8">
          Hikayemiz
        </p>
        <h1
          className="text-center mb-6"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 8vw, 7rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
          }}
        >
          Gönül&apos;den
          <br />
          Kopanlar
        </h1>
        <div
          className="w-16 mx-auto mb-6"
          style={{ height: "1px", background: "var(--color-fg)" }}
        />
        <p className="text-sm text-[var(--color-muted)] tracking-wide-custom text-center">
          El emeği, gönül bağı.
        </p>
      </section>

      {/* ─── Manifesto ─── */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-lg mx-auto">
          <p
            className="mb-10"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              lineHeight: 1.6,
              letterSpacing: "-0.01em",
            }}
          >
            Her parçamız bir zanaatkârın ellerinde doğar. Anadolu&apos;nun
            köylerinden, atölyelerinden, tezgâhlarından — gönülden koparak
            size ulaşır.
          </p>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8">
            Biz fabrika değiliz. Seri üretim yapmıyoruz. Her ürünümüz, nesiller
            boyu aktarılan bilgiyle, sabırla ve özenle şekillenir. Bir kilimin
            her düğümünde, bir seramiğin her eğrisinde, bir derinin her dikişinde
            — insan eli vardır.
          </p>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-8">
            &ldquo;Gönül&apos;den Kopanlar&rdquo; adı, tam olarak bunu anlatır:
            bu parçalar bir makineden değil, bir gönülden kopar. Zanaatkârın
            ruhundan bir parça taşır. O yüzden her biri eşsizdir — tıpkı onu
            yaratan eller gibi.
          </p>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            Misyonumuz basit: kadim Anadolu zanaatlarını yaşatmak, zanaatkârlara
            sürdürülebilir bir geçim sağlamak ve size hikayesi olan parçalar
            sunmak.
          </p>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section
        className="px-6 md:px-10 py-20 md:py-28"
        style={{
          borderTop: "1px solid var(--color-fg)",
          borderBottom: "1px solid var(--color-fg)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="small-caps tracking-wide-custom text-[10px] text-[var(--color-muted)] mb-12 text-center">
            Değerlerimiz
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <p
                className="text-4xl mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                I
              </p>
              <p
                className="text-sm mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                El Emeği
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Her parça insan eliyle, geleneksel tekniklerle üretilir.
                Makinenin değil, ustanın imzasını taşır.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <p
                className="text-4xl mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                II
              </p>
              <p
                className="text-sm mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Sürdürülebilirlik
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Doğal malzemeler, bitkisel boyalar, yerel tedarik.
                Doğaya saygı, üretimin her aşamasında.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <p
                className="text-4xl mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                III
              </p>
              <p
                className="text-sm mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Hikaye
              </p>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Satın aldığınız bir ürün değil, bir hikayedir.
                Zanaatkârın gönlünden kopan bir parça.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Quote ─── */}
      <section className="px-6 md:px-10 py-24 md:py-32 text-center">
        <p
          className="max-w-md mx-auto"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            lineHeight: 1.5,
          }}
        >
          &ldquo;Bir şeyi sevgiyle yapmak,
          <br />
          <span className="text-[var(--color-muted)]">
            onu ebedi kılar.&rdquo;
          </span>
        </p>
      </section>
    </div>
  );
}
