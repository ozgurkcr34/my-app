import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

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
  title: "GÖNÜL'DEN KOPANLAR — El Emeği, Gönül Bağı",
  description:
    "Anadolu'nun zanaatkâr ruhunu modern yaşama taşıyan butik el yapımı ürünler. Kilim, seramik, deri aksesuar ve daha fazlası.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
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
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1 pt-12 md:pt-12">{children}</main>
        <Sidebar />
        <Footer />
      </body>
    </html>
  );
}
