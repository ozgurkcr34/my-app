import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GÖNÜL'DEN KOPANLAR — El Emeği, Gönül Bağı",
    template: "%s | GÖNÜL'DEN KOPANLAR",
  },
  description:
    "Anadolu'nun zanaatkâr ruhunu modern yaşama taşıyan butik el yapımı ürünler. Kilim, seramik, deri aksesuar ve daha fazlası.",
  keywords: [
    "el yapımı",
    "zanaatkâr",
    "Anadolu",
    "kilim",
    "seramik",
    "deri",
    "butik",
    "gönülden kopanlar",
  ],
  openGraph: {
    title: "GÖNÜL'DEN KOPANLAR — El Emeği, Gönül Bağı",
    description:
      "Anadolu'nun zanaatkâr ruhunu modern yaşama taşıyan butik el yapımı ürünler.",
    type: "website",
    locale: "tr_TR",
    siteName: "GÖNÜL'DEN KOPANLAR",
  },
  twitter: {
    card: "summary_large_image",
    title: "GÖNÜL'DEN KOPANLAR",
    description:
      "Anadolu'nun zanaatkâr ruhunu modern yaşama taşıyan butik el yapımı ürünler.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-serif: ${playfair.style.fontFamily}, "Georgia", serif;
                --font-sans: ${inter.style.fontFamily}, "Helvetica Neue", "Arial", sans-serif;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased cursor-none">
        <CustomCursor />
        <Navigation />
        <main className="flex-1 pt-12 md:pt-12">{children}</main>
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
