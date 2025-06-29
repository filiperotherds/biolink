import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "BioLink - Gestão sustentável e descomplicada de óleo usado",
  description:
    "A Biolink transforma resíduos em impacto positivo — simples, gratuito e sustentável para quem produz e para o planeta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>
        <Header variant="white"/>
        {children}
      </body>
    </html>
  );
}
