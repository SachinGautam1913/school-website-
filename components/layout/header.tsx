"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Director Message", href: "/director-message" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  {
    name: "More",
    children: [
      { name: "Infrastructure", href: "/infrastructure" },
      { name: "Faculty", href: "/faculty" },
      { name: "Events & News", href: "/events" },
      { name: "Achievements", href: "/achievements" },
      { name: "Career", href: "/career" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* TOP INFO BAR */}
      <div className="bg-neutral-900 text-neutral-300 text-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex gap-6">
              <a href="tel:+91*********10" className="flex items-center gap-2 hover:text-primary transition">
                <Phone size={14} />
                <span className="hidden sm:inline">+91 *********10</span>
              </a>
              <a href="mailto:info@kirnajayvidyamandir.edu.in" className="flex items-center gap-2 hover:text-primary transition">
                <Mail size={14} />
                <span className="hidden sm:inline">info@kirnajayvidyamandir.edu.in</span>
              </a>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-primary transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <nav className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-4">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                KV
              </div>
              <div className="hidden sm:block">
                <p className="text-lg font-bold text-neutral-900">
                  Kirnajay Vidya Mandir
                </p>
                <p className="text-xs text-neutral-500">
                  Excellence in Education
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-2">
              {navigation.map((item) =>
                item.children ? (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <button className="px-4 py-2 text-sm font-medium text-neutral-800 hover:text-primary flex items-center gap-1">
                        {item.name}
                        <ChevronDown size={14} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.name} asChild>
                          <Link href={child.href}>{child.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-neutral-800 hover:text-primary transition after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                )
              )}

              <Button className="ml-4 px-6">
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <p className="px-4 py-2 text-xs uppercase text-neutral-500">
                      {item.name}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-6 py-2 text-sm hover:bg-neutral-100 rounded"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-neutral-100 rounded"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="px-4 pt-2">
                <Button className="w-full">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
