import { Header } from "@/components/header";
import { GeistSans } from "geist/font/sans";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${GeistSans.className} scroll-smooth`}>
      <Header variant="default" />
      <main>{children}</main>
    </div>
  );
}
