import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Blog EBAC - Artigos sobre Desenvolvimento Web",
    template: "%s | Blog EBAC"
  },
  description: "Explore artigos sobre Next.js, React, TypeScript e as melhores práticas de desenvolvimento web moderno.",
  keywords: ["Next.js", "React", "TypeScript", "Desenvolvimento Web", "JavaScript", "Frontend"],
  authors: [{ name: "Blog EBAC" }],
  creator: "Blog EBAC",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seu-dominio.vercel.app",
    siteName: "Blog EBAC",
    title: "Blog EBAC - Artigos sobre Desenvolvimento Web",
    description: "Explore artigos sobre Next.js, React, TypeScript e as melhores práticas de desenvolvimento web moderno.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog EBAC - Artigos sobre Desenvolvimento Web",
    description: "Explore artigos sobre Next.js, React, TypeScript e as melhores práticas de desenvolvimento web moderno.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
