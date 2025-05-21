"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/50 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      } border-b`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-64 h-8">
              <Image src="/extended_logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1">
              {/* Item com menu suspenso */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-zinc-100 transition-all cursor-pointer">
                  Recursos
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-lg p-2">
                  <div className="flex gap-2">
                    <NavigationMenuLink href="/" className="top-0 bottom-0 w-40 flex flex-col items-start justify-end bg-zinc-100">
                      <div className="relative w-20 h-8">
                        <Image src="/extended_logo_gray.png" alt="Logo" fill className="object-contain" />
                      </div>
                      <p className="text-xs text-zinc-500">
                        A ferramenta poderosa para a construção de um futuro mais limpo e sustentável.
                      </p>
                    </NavigationMenuLink>
                    <div className="flex flex-col gap-1">
                      <NavigationMenuLink href="/coleta-agendada" className="w-64 flex flex-col items-start justify-start gap-1 hover:bg-zinc-100 rounded-md">
                        <p className="font-medium">
                          Coleta Agendada
                        </p>
                        <p className="text-xs text-zinc-500">
                          Entenda como a coleta agendada ajuda você cuidar do seu descarte.
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/certificados" className="w-64 flex flex-col items-start justify-start gap-1 hover:bg-zinc-100 rounded-md">
                        <p className="font-medium">
                          Certificados
                        </p>
                        <p className="text-xs text-zinc-500">
                          Encontre os certificados disponibilizados aos perceiros do projeto.
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/beneficios-fiscais" className="w-64 flex flex-col items-start justify-start gap-1 hover:bg-zinc-100 rounded-md">
                        <p className="font-medium">
                          Benefícios Fiscais
                        </p>
                        <p className="text-xs text-zinc-500">
                          Descubra os benefícios fiscais disponibilizados aos participantes.
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Item simples, sem dropdown */}
              <NavigationMenuItem>
                <NavigationMenuLink href="/sobre" className="cursor-pointer">
                  Sobre
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="default">
              Cadastre-se
            </Button>
            <Button className="cursor-pointer" onClick={() => {}} size="default">
              Entrar
            </Button>
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
                      <Image src="/extended_logo.png" alt="Logo" fill className="object-contain" />
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
  )
}