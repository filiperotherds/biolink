import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BioLink - Conectando a Produção de Biodiesel",
  description: "Facilitando a Logística Reversa de Óleo Vegetal Usado"
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
