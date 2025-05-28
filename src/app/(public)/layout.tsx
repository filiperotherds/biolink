import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { GeistSans } from "geist/font/sans";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${GeistSans.className} scroll-smooth`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

