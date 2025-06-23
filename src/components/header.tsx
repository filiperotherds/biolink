"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headerVariants = cva("absolute w-full px-16 top-0 left-0 right-0 z-50", {
  variants: {
    variant: {
      white: "text-white",
      default: "text-[#3D3D3D]",
    },
  },
  defaultVariants: {
    variant: "white",
  },
});

export interface HeaderProps extends VariantProps<typeof headerVariants> {}

const navLinks = [
  { href: "/about", label: "A Biolink" },
  { href: "/services", label: "Serviços" },
  { href: "/esg", label: "ESG" },
  { href: "/results", label: "Resultados" },
  { href: "/blog", label: "Blog" },
];

export function Header({ variant }: HeaderProps) {
  const logoSrc = {
    white: "/logo_biolink_white.png",
    default: "/logo_biolink.png",
  };

  const currentLogo = variant === "white" ? logoSrc.white : logoSrc.default;
  const mobileLogo = logoSrc.default;

  return (
    <header className={cn(headerVariants({ variant }))}>
      <div className="container max-w-7xl mx-auto flex h-24 items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-44 h-10">
              <Image
                src={currentLogo}
                alt="Logo Biolink"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden md:flex md:flex-row items-center justify-start gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-2"
              >
                <span className="text-base font-semibold group-hover:opacity-80 transition-opacity">
                  {link.label}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-12">
          <Link
            href={"/login"}
            className={cn(
              "inline-flex h-8 items-center justify-center rounded-md px-4 shadow transition-colors",
              {
                "bg-primary hover:bg-primary/80": variant === "white",
                "": variant === "default",
              }
            )}
          >
            <span
              className={cn({
                "text-sm font-semibold bg-[url('/ocean-background.jpg')] bg-fixed bg-clip-text text-transparent":
                  variant === "white",
                "text-sm font-semibold text-white":
                  variant === "default",
              })}
            >
              Acessar Painel
            </span>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white text-[#3D3D3D]"
            >
              <div className="flex flex-col h-full">
                <div className="px-2 py-4">
                  <Link href="/" className="flex items-center gap-2 mb-8">
                    <div className="relative w-32 h-8">
                      <Image
                        src={mobileLogo}
                        alt="Logo Biolink"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  {/* --- Documentação (Navegação Mobile Dinâmica) --- */}
                  <nav className="flex flex-col space-y-2 mb-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium hover:text-primary hover:bg-zinc-100 px-4 py-2 rounded-md transition-all duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="mt-auto p-4 border-t">
                  <div className="flex flex-col gap-2 w-full">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-center"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild className="w-full justify-center">
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
