import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { createMetadata, siteConfig } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = createMetadata({
  title: "Public Organization | Art Portfolio & Sound Collective",
  description:
    "Public Organization is a contemporary art and sound collective presenting immersive music programs, discography, and events.",
  path: "/",
  keywords: [
    "art portfolio",
    "music collective",
    "discography",
    "curated events",
    "creative programs",
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="site-main">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
              logo: `${siteConfig.url}/og-default.jpg`,
              sameAs: [
                "https://instagram.com",
                "https://soundcloud.com",
                "https://youtube.com",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}