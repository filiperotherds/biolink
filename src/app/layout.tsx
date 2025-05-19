import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaSPro - Streamline Your Workflow",
  description:
    "The all-in-one platform that helps teams build better products, faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
