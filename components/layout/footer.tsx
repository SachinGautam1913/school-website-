"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Events & News", href: "/events" },
]

const usefulLinks = [
  { name: "Faculty", href: "/faculty" },
  { name: "Achievements", href: "/achievements" },
  { name: "Career", href: "/career" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                KV
              </div>
              <div>
                <p className="text-base font-semibold text-white">
                  Kirnajay Vidya Mandir
                </p>
                <p className="text-[11px] text-neutral-400">
                  Excellence in Education
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed">
              Shaping future leaders through quality education and values.
            </p>

            <div className="flex gap-2">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Useful Links</h3>
            <ul className="space-y-1.5 text-sm">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-xs">
              <li className="flex gap-2 items-start">
                <MapPin size={14} />
                <span>Knowledge Nagar, City – 400001</span>
              </li>
              <li className="flex gap-2">
                <Phone size={14} />
                <span>+91 ******3210</span>
              </li>
              <li className="flex gap-2">
                <Mail size={14} />
                <span>info@kirnajayvidyamandir.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 border-t border-neutral-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} Kirnajay Vidya Mandir
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
