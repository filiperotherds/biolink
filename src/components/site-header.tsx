"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image src="/placeholder.svg?height=32&width=32" alt="Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl">SaaSPro</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 relative">
            {/* Features Menu */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("features")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Features{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeMenu === "features" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "features" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-background rounded-md shadow-lg border p-6 grid grid-cols-2 gap-6"
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
                      <p className="text-sm text-muted-foreground mb-2">Everything you need to manage your business.</p>
                      <div className="space-y-2">
                        <Link href="#dashboard" className="block text-sm hover:text-primary">
                          Dashboard
                        </Link>
                        <Link href="#analytics" className="block text-sm hover:text-primary">
                          Analytics
                        </Link>
                        <Link href="#automation" className="block text-sm hover:text-primary">
                          Automation
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-medium mb-2">Advanced Tools</h4>
                      <p className="text-sm text-muted-foreground mb-2">Take your workflow to the next level.</p>
                      <div className="space-y-2">
                        <Link href="#ai" className="block text-sm hover:text-primary">
                          AI Assistant
                        </Link>
                        <Link href="#integrations" className="block text-sm hover:text-primary">
                          Integrations
                        </Link>
                        <Link href="#api" className="block text-sm hover:text-primary">
                          API Access
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Resources{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeMenu === "resources" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "resources" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-background rounded-md shadow-lg border p-6 grid grid-cols-2 gap-6"
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
                      <div className="space-y-2">
                        <Link href="#introduction" className="block text-sm hover:text-primary">
                          Introduction
                        </Link>
                        <Link href="#installation" className="block text-sm hover:text-primary">
                          Installation
                        </Link>
                        <Link href="#quickstart" className="block text-sm hover:text-primary">
                          Quick Start Guide
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-medium mb-2">Resources</h4>
                      <p className="text-sm text-muted-foreground mb-2">Additional resources to help you succeed.</p>
                      <div className="space-y-2">
                        <Link href="#blog" className="block text-sm hover:text-primary">
                          Blog
                        </Link>
                        <Link href="#tutorials" className="block text-sm hover:text-primary">
                          Tutorials
                        </Link>
                        <Link href="#community" className="block text-sm hover:text-primary">
                          Community
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Menu */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Company{" "}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeMenu === "company" ? "rotate-180" : ""}`}
                />
              </button>
              {activeMenu === "company" && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-background rounded-md shadow-lg border p-6 grid grid-cols-2 gap-6"
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
                      <div className="space-y-2">
                        <Link href="#about" className="block text-sm hover:text-primary">
                          About Us
                        </Link>
                        <Link href="#team" className="block text-sm hover:text-primary">
                          Our Team
                        </Link>
                        <Link href="#careers" className="block text-sm hover:text-primary">
                          Careers
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-medium mb-2">Connect</h4>
                      <p className="text-sm text-muted-foreground mb-2">Reach out and stay in touch.</p>
                      <div className="space-y-2">
                        <Link href="#contact" className="block text-sm hover:text-primary">
                          Contact Us
                        </Link>
                        <Link href="#support" className="block text-sm hover:text-primary">
                          Support
                        </Link>
                        <Link href="#social" className="block text-sm hover:text-primary">
                          Social Media
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
          </nav>
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}
