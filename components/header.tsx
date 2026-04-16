'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d0d0d]/95 backdrop-blur-xl border-b border-[#C8A96A]/20 shadow-[0_2px_20px_rgba(0,0,0,0.4)] transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Aurex Group Logo"
            className="h-10 w-auto smooth-transition group-hover:opacity-90"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: '/', label: 'Startseite' },
            { href: '/leistungen', label: 'Leistungen' },
            { href: '/zielkunden', label: 'Zielkunden' },
            { href: '/about', label: 'Über uns' },
            { href: '/kontakt', label: 'Kontakt' }
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-white/80 hover:text-[#C8A96A] smooth-transition relative group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C8A96A] group-hover:w-full smooth-transition"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <a href="/kontakt" className="px-6 py-2.5 bg-[#C8A96A] text-[#0B0B0B] rounded-lg hover:shadow-lg hover:shadow-[#C8A96A]/40 smooth-transition font-bold flex items-center gap-2 group tracking-wide">
            Projekt anfragen
            <ArrowRight size={16} className="group-hover:translate-x-1 smooth-transition" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/10 rounded-lg smooth-transition text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#C8A96A]/20 bg-[#0d0d0d]/98 backdrop-blur-md p-4 space-y-3 fade-in-down">
          {[
            { href: '/', label: 'Startseite' },
            { href: '/leistungen', label: 'Leistungen' },
            { href: '/zielkunden', label: 'Zielkunden' },
            { href: '/about', label: 'Über uns' },
            { href: '/kontakt', label: 'Kontakt' }
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block text-sm font-medium text-white/80 hover:text-[#C8A96A] smooth-transition py-2"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a href="/kontakt" className="block w-full px-6 py-2.5 bg-[#C8A96A] text-[#0B0B0B] rounded-lg hover:shadow-lg smooth-transition font-bold flex items-center justify-center gap-2">
            Projekt anfragen
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </header>
  )
}
