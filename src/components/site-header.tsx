"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRefs = useRef<Record<string, HTMLDivElement | null>>({
    features: null,
    resources: null,
    company: null,
  })

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    // Use a small delay to prevent the menu from closing immediately
    // This allows the user to move the mouse from the button to the dropdown
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 250)
  }

  // Add scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to calculate dropdown position
  const getDropdownPosition = (menuName: string) => {
    if (typeof window === "undefined") return {}

    const menuButton = menuRefs.current[menuName]
    if (!menuButton) return {}

    const buttonRect = menuButton.getBoundingClientRect()
    const windowWidth = window.innerWidth
    const dropdownWidth = 600 // Width of dropdown

    // Calculate center position
    const buttonCenter = buttonRect.left + buttonRect.width / 2
    const halfDropdownWidth = dropdownWidth / 2

    // Check if dropdown would overflow on the right
    if (buttonCenter + halfDropdownWidth > windowWidth - 16) {
      // Align to the right edge of the window with padding
      return {
        right: "16px",
        left: "auto",
        transform: "none",
      }
    }

    // Check if dropdown would overflow on the left
    if (buttonCenter - halfDropdownWidth < 16) {
      // Align to the left edge of the window with padding
      return {
        left: "16px",
        right: "auto",
        transform: "none",
      }
    }

    // Default center alignment
    return {
      left: `${buttonCenter}px`,
      transform: "translateX(-50%)",
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      } border-b`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image src="/placeholder.svg?height=32&width=32" alt="Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl">SaaSPro</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-6 relative">
            {/* Features Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("features")}
              onMouseLeave={handleMouseLeave}
              ref={(el) => {
                menuRefs.current.features = el
              }}

            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Features{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeMenu === "features" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeMenu === "features" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-background rounded-md shadow-lg border p-6 grid grid-cols-2 gap-6"
                    style={getDropdownPosition("features")}
                    onMouseEnter={() => handleMouseEnter("features")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="col-span-1 bg-muted/50 p-6 rounded-md">
                      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">SaaSPro</h3>
                      <p className="text-muted-foreground text-sm">
                        Powerful features built to streamline your workflow and boost productivity.
                      </p>
                    </div>
                    <div className="col-span-1 space-y-6">
                      <div>
                        <h4 className="text-base font-medium mb-2">Core Features</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Everything you need to manage your business.
                        </p>
                        <div className="space-y-0.5">
                          <Link
                            href="#dashboard"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Dashboard
                          </Link>
                          <Link
                            href="#analytics"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Analytics
                          </Link>
                          <Link
                            href="#automation"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Automation
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-medium mb-2">Advanced Tools</h4>
                        <p className="text-sm text-muted-foreground mb-2">Take your workflow to the next level.</p>
                        <div className="space-y-0.5">
                          <Link
                            href="#ai"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            AI Assistant
                          </Link>
                          <Link
                            href="#integrations"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Integrations
                          </Link>
                          <Link
                            href="#api"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            API Access
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
              ref={(el) => {menuRefs.current.resources = el}}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Resources{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeMenu === "resources" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeMenu === "resources" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-background rounded-md shadow-lg border p-6 grid grid-cols-2 gap-6"
                    style={getDropdownPosition("resources")}
                    onMouseEnter={() => handleMouseEnter("resources")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="col-span-1 bg-muted/50 p-6 rounded-md">
                      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                      <p className="text-muted-foreground text-sm">
                        Comprehensive guides and resources to help you get the most out of SaaSPro.
                      </p>
                    </div>
                    <div className="col-span-1 space-y-6">
                      <div>
                        <h4 className="text-base font-medium mb-2">Getting Started</h4>
                        <p className="text-sm text-muted-foreground mb-2">Learn the basics and set up your account.</p>
                        <div className="space-y-0.5">
                          <Link
                            href="#introduction"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Introduction
                          </Link>
                          <Link
                            href="#installation"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Installation
                          </Link>
                          <Link
                            href="#quickstart"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Quick Start Guide
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-medium mb-2">Resources</h4>
                        <p className="text-sm text-muted-foreground mb-2">Additional resources to help you succeed.</p>
                        <div className="space-y-0.5">
                          <Link
                            href="#blog"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Blog
                          </Link>
                          <Link
                            href="#tutorials"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Tutorials
                          </Link>
                          <Link
                            href="#community"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Community
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
              ref={(el) => {menuRefs.current.company = el}}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Company{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeMenu === "company" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeMenu === "company" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-background rounded-md shadow-lg border p-6 grid grid-cols-2 gap-6"
                    style={getDropdownPosition("company")}
                    onMouseEnter={() => handleMouseEnter("company")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="col-span-1 bg-muted/50 p-6 rounded-md">
                      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">About Us</h3>
                      <p className="text-muted-foreground text-sm">
                        Learn more about our mission, values, and the team behind SaaSPro.
                      </p>
                    </div>
                    <div className="col-span-1 space-y-6">
                      <div>
                        <h4 className="text-base font-medium mb-2">Company</h4>
                        <p className="text-sm text-muted-foreground mb-2">Get to know who we are and what we do.</p>
                        <div className="space-y-0.5">
                          <Link
                            href="#about"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            About Us
                          </Link>
                          <Link
                            href="#team"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Our Team
                          </Link>
                          <Link
                            href="#careers"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Careers
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-medium mb-2">Connect</h4>
                        <p className="text-sm text-muted-foreground mb-2">Reach out and stay in touch.</p>
                        <div className="space-y-0.5">
                          <Link
                            href="#contact"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Contact Us
                          </Link>
                          <Link
                            href="#support"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Support
                          </Link>
                          <Link
                            href="#social"
                            className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                          >
                            Social Media
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
                      <Image src="/placeholder.svg?height=32&width=32" alt="Logo" fill className="object-contain" />
                    </div>
                    <span className="font-bold text-xl">SaaSPro</span>
                  </Link>

                  <nav className="flex flex-col space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-muted-foreground px-4">Features</h4>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="#dashboard"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Dashboard
                        </Link>
                        <Link
                          href="#analytics"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Analytics
                        </Link>
                        <Link
                          href="#automation"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Automation
                        </Link>
                        <Link
                          href="#ai"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          AI Assistant
                        </Link>
                        <Link
                          href="#integrations"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Integrations
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-muted-foreground px-4">Resources</h4>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="#blog"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Blog
                        </Link>
                        <Link
                          href="#tutorials"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Tutorials
                        </Link>
                        <Link
                          href="#community"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Community
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-muted-foreground px-4">Company</h4>
                      <div className="space-y-2 pl-4">
                        <Link
                          href="#about"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          About Us
                        </Link>
                        <Link
                          href="#team"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Our Team
                        </Link>
                        <Link
                          href="#careers"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Careers
                        </Link>
                        <Link
                          href="#contact"
                          className="block text-sm hover:text-primary hover:bg-zinc-100 px-2 py-1.5 rounded-md transition-all duration-200"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>

                    <Link
                      href="#pricing"
                      className="text-sm font-medium hover:text-primary hover:bg-zinc-100 px-4 py-1.5 rounded-md transition-all duration-200"
                    >
                      Pricing
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