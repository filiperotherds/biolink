"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
          <NavigationMenu className="hidden md:flex text-white">
            <NavigationMenuList className="flex gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/benefits"
                  className="text-base font-semibold cursor-pointer"
                >
                  Benefícios
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/benefits" className="group" asChild>
                  <div className="relative py-2 cursor-pointer">
                    <span className="text-base font-semibold group-hover:text-white">
                      Benefícios
                    </span>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></div>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Item simples, sem dropdown */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="text-base font-semibold cursor-pointer"
                >
                  A Biolink
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Item com menu suspenso */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-semibold cursor-pointer bg-transparent">
                  Recursos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-lg p-2">
                  <div className="flex gap-2">
                    <NavigationMenuLink
                      href="/"
                      className="top-0 bottom-0 w-40 flex flex-col items-start justify-end bg-zinc-100"
                    >
                      <div className="relative w-28 h-8">
                        <Image
                          src="/extended_logo_gray.svg"
                          alt="Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-xs text-zinc-500">
                        Ligando sua empresa a um futuro mais limpo.
                      </p>
                    </NavigationMenuLink>
                    <div className="flex flex-col gap-1">
                      <NavigationMenuLink
                        href="/coleta-agendada"
                        className="w-64 flex flex-col items-start justify-start gap-1 hover:bg-zinc-100 rounded-md"
                      >
                        <p className="font-medium">Coleta Agendada</p>
                        <p className="text-xs text-zinc-500">
                          Entenda como a coleta agendada ajuda você cuidar do
                          seu descarte.
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/certificados"
                        className="w-64 flex flex-col items-start justify-start gap-1 hover:bg-zinc-100 rounded-md"
                      >
                        <p className="font-medium">Certificados</p>
                        <p className="text-xs text-zinc-500">
                          Encontre os certificados disponibilizados aos
                          perceiros do projeto.
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/tax-benefits"
                        className="w-64 flex flex-col items-start justify-start gap-1 hover:bg-zinc-100 rounded-md"
                      >
                        <p className="font-medium">Benefícios Fiscais</p>
                        <p className="text-xs text-zinc-500">
                          Descubra os benefícios fiscais disponibilizados aos
                          participantes.
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
                        src="/extended_logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>

                  <nav className="flex flex-col space-y-4 mb-8">
                    <Link
                      href="#features"
                      className="text-base font-medium hover:text-primary hover:bg-zinc-100 px-4 py-2 rounded-md transition-all duration-200"
                    >
                      Features
                    </Link>
                    <Link
                      href="#pricing"
                      className="text-base font-medium hover:text-primary hover:bg-zinc-100 px-4 py-2 rounded-md transition-all duration-200"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="#about"
                      className="text-base font-medium hover:text-primary hover:bg-zinc-100 px-4 py-2 rounded-md transition-all duration-200"
                    >
                      About
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
