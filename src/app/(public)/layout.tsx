import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "BioLink",
  description: "Gestão sustentável de óleo usado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
