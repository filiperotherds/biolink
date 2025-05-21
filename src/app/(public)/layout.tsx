import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import Footer from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "BioLink - Conectando a Produção de Biodiesel",
  description: "Facilitando a Logística Reversa de Óleo Vegetal Usado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${GeistSans.className} antialiased`}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
