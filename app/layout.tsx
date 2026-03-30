import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KRAFT artisan fleuriste — Bordeaux",
  description:
    "Bouquets et compositions florales artisanales à Bordeaux. KRAFT, fleuriste passionné au cœur de la ville.",
  keywords: [
    "fleuriste",
    "Bordeaux",
    "bouquets",
    "artisan",
    "fleurs",
    "compositions florales",
  ],
  openGraph: {
    title: "KRAFT artisan fleuriste — Bordeaux",
    description:
      "Bouquets et compositions florales artisanales à Bordeaux. KRAFT, fleuriste passionné au cœur de la ville.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
