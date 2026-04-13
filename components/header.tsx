'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold smooth-transition group-hover:shadow-lg group-hover:shadow-accent/20">
            A
          </div>
          <span className="text-xl font-bold text-primary hidden sm:inline">Aurex</span>
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
              className="text-sm font-medium text-foreground hover:text-accent smooth-transition relative group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full smooth-transition"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <button className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg hover:shadow-lg hover:shadow-accent/30 smooth-transition font-medium flex items-center gap-2 group">
            Projekt anfragen
            <ArrowRight size={16} className="group-hover:translate-x-1 smooth-transition" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg smooth-transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/50 backdrop-blur-md p-4 space-y-3 fade-in-down">
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
              className="block text-sm font-medium hover:text-accent smooth-transition py-2"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <button className="w-full px-6 py-2.5 bg-accent text-accent-foreground rounded-lg hover:shadow-lg smooth-transition font-medium flex items-center justify-center gap-2">
            Projekt anfragen
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  )
}
