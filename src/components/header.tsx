"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import * as React from "react";

export function Header() {
  return (
    <header className="absolute w-full px-16 top-0 left-0 right-0 z-50">
      <div className="container max-w-7xl mx-auto flex h-24 items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-44 h-10">
              <Image
                src="/logo_biolink_white.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <nav className="hidden md:flex md:flex-row items-center justify-start gap-8 text-white">
            <Link href="/about" className="group relative py-2">
              <span className="text-base font-semibold group-hover:text-white/80">
                A Biolink
              </span>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </Link>

            <Link href="/services" className="group relative py-2">
              <span className="text-base font-semibold group-hover:text-white/80">
                Serviços
              </span>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </Link>

            <Link href="/esg" className="group relative py-2">
              <span className="text-base font-semibold group-hover:text-white/80">
                ESG
              </span>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </Link>

            <Link href="/results" className="group relative py-2">
              <span className="text-base font-semibold group-hover:text-white/80">
                Resultados
              </span>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </Link>

            <Link href="/news" className="group relative py-2">
              <span className="text-base font-semibold group-hover:text-white/80">
                Notícias
              </span>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></div>
            </Link>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-2">
            <Button
              variant="default"
              size="default"
              className="bg-transparent text-white border-2 border-white hover:border-white/70 hover:text-white/70 hover:bg-transparent transition-all cursor-pointer"
            >
              Cadastre-se
            </Button>
            <Link
              href={"/login"}
              className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-[#3d3d3d] shadow transition-colors hover:bg-primary/90"
            >
              Entrar
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="px-2 py-4">
                  <Link href="/" className="flex items-center gap-2 mb-8">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/logo_biolink.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  <nav className="flex flex-col space-y-4 mb-8">
                    <Link
                      href="/about"
                      className="text-base font-medium hover:text-primary hover:bg-zinc-100 px-4 py-2 rounded-md transition-all duration-200"
                    >
                      A Biolink
                    </Link>
                    <Link
                      href="/services"
                      className="text-base font-medium hover:text-primary hover:bg-zinc-100 px-4 py-2 rounded-md transition-all duration-200"
                    >
                      Serviços
                    </Link>
                    <Link
                      href="/esg"
                      className="text-base font-medium hover:text-primary hover:bg-zinc-100 px-4 py-2 rounded-md transition-all duration-200"
                    >
                      ESG
                    </Link>
                    <Link
                      href="/results"
                      className="text-base font-medium hover:text-primary hover:bg-zinc-100 px-4 py-2 rounded-md transition-all duration-200"
                    >
                      Resultados
                    </Link>
                    <Link
                      href="/news"
                      className="text-base font-medium hover:text-primary hover:bg-zinc-100 px-4 py-2 rounded-md transition-all duration-200"
                    >
                      Notícias
                    </Link>
                  </nav>
                </div>

                <div className="mt-auto p-4 border-t">
                  <div className="flex flex-col gap-2 w-full">
                    <Button variant="outline" className="w-full justify-center">
                      Login
                    </Button>
                    <Button className="w-full justify-center">Sign Up</Button>
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
