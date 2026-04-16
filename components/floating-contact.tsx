'use client'

import { useState } from 'react'
import { MessageCircle, Phone, X, Mail } from 'lucide-react'
import Link from 'next/link'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Menu */}
      <div 
        className={`bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl p-4 mb-4 w-[calc(100vw-3rem)] max-w-[18rem] transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 visible pointer-events-auto' : 'scale-75 opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="mb-4 text-center">
          <p className="font-bold text-primary">Schnelle Anfrage möglich</p>
          <p className="text-sm text-foreground/70">Wählen Sie Ihre bevorzugte Methode</p>
        </div>

        <div className="space-y-3">
          <a 
            href="https://wa.me/4917592777097" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl smooth-transition group"
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
              <MessageCircle size={24} className="text-accent-foreground" />
            </div>
            <div>
              <p className="font-bold text-sm">WhatsApp Chat</p>
              <p className="text-xs opacity-80">+49 175 92 777 97</p>
            </div>
          </a>

          <Link href="/kontakt" className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl smooth-transition group">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
              <Phone size={24} className="text-accent-foreground" />
            </div>
            <div>
              <p className="font-bold text-sm">Rückruf anfordern</p>
              <p className="text-xs opacity-80">Zeitpunkt wählen</p>
            </div>
          </Link>

          <Link href="/kontakt" className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl smooth-transition group">
            <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition">
              <Mail size={24} className="text-accent-foreground" />
            </div>
            <div>
              <p className="font-bold text-sm">Kontaktformular</p>
              <p className="text-xs opacity-80">Detaillierte Projektanfrage</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-2xl flex items-center justify-center hover:scale-105 smooth-transition relative group"
      >
        <span className="absolute -inset-2 bg-accent/20 rounded-full animate-ping"></span>
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  )
}
