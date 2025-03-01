import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { jsonLd, seoMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = seoMetadata;

export const viewport: Viewport = {
  userScalable: false,
  maximumScale: 1.0,
  initialScale: 1,
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  fallback: ["Arial"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("antialiased", montserrat.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
