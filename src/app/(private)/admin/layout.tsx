import type React from "react";
import type { Metadata } from "next";
import "../../globals.css";
import { GeistSans } from "geist/font/sans";
import { auth } from "@/lib/db/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "BioLink - System Admin",
  description:
    "A Biolink transforma resíduos em impacto positivo — simples, gratuito e sustentável para quem produz e para o planeta.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session?.user.role !== "SYS_ADMIN") {
    redirect("/dashboard");
  } else if (session) {
    return (
      <html lang="en" className="scroll-smooth">
        <body className={GeistSans.className}>{children}</body>
      </html>
    );
  } else {
    redirect("/")
  }
}
