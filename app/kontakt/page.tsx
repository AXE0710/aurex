'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function Kontakt() {
  const [wantsCallback, setWantsCallback] = useState(false)

  const handleCallbackClick = () => {
    setWantsCallback(true)
    const form = document.getElementById('contact-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 md:py-32 px-4 bg-gray-50/50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-20 fade-in-up text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Projekt anfragen
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Beschreiben Sie Ihr Vorhaben – wir melden uns kurzfristig mit einer fundierten Ersteinschätzung und konkreten nächsten Schritten.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
            {/* Contact Info Cards */}
            <div
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 smooth-transition group text-center fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Mail size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
              <a
                href="mailto:info@aurexgroup.de"
                className="text-accent hover:text-accent/80 smooth-transition font-medium text-xs sm:text-sm break-all"
              >
                info@aurexgroup.de
              </a>
            </div>

            <div
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 smooth-transition group text-center fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Phone size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Telefon</h3>
              <a
                href="tel:+4917592777097"
                className="text-accent hover:text-accent/80 smooth-transition font-medium text-xs sm:text-sm break-words"
              >
                +49 175 92 777 97
              </a>
            </div>

            <div
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 smooth-transition group text-center fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <MessageCircle size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/4917592777097"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 smooth-transition font-medium text-xs sm:text-sm break-words"
              >
                +49 175 92 777 97
              </a>
            </div>

            <div
              className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 smooth-transition group text-center fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <MapPin size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Adresse</h3>
              <p className="text-foreground/70 text-xs leading-relaxed">
                Am Irscher Hof 73
                <br />
                54294 Trier, Germany
              </p>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 smooth-transition fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-accent" />
                <h3 className="text-2xl font-bold text-primary">Schnelle Anfrage</h3>
              </div>
              <p className="text-foreground/70 mb-6">
                Kontaktieren Sie uns via WhatsApp oder direkt unter <strong>+49 175 92 777 97</strong>. Wir antworten in der Regel innerhalb von 30 Minuten.
              </p>
              <a
                href="https://wa.me/4917592777097"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto justify-center sm:inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:shadow-lg hover:shadow-accent/30 smooth-transition font-medium text-sm sm:text-base text-center"
              >
                <MessageCircle size={20} />
                WhatsApp Nachricht
              </a>
            </div>

            <div
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 smooth-transition fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Phone size={24} className="text-accent" />
                <h3 className="text-2xl font-bold text-primary">Rückruf anfordern</h3>
              </div>
              <p className="text-foreground/70 mb-6">
                Füllen Sie das Formular unten aus und wir rufen Sie zu einem vereinbarten Zeitpunkt zurück.
              </p>
              <button
                type="button"
                onClick={handleCallbackClick}
                className="flex w-full sm:w-auto justify-center sm:inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:shadow-lg hover:shadow-accent/30 smooth-transition font-medium text-sm sm:text-base text-center"
              >
                <Phone size={20} />
                Rückruf anfordern
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="bg-white p-8 md:p-14 rounded-3xl border border-gray-100 shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px] pointer-events-none"></div>
              <h2 className="text-3xl font-bold text-primary mb-2">
                Detaillierte Anfrage
              </h2>
              <p className="text-foreground/70 mb-8">
                Schildern Sie uns Ihr Projekt im Detail – je ausführlicher, desto besser können wir Ihnen helfen.
              </p>

              <form id="contact-form" className="space-y-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Unternehmensname *
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Ihr Unternehmensname"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Vor- und Nachname *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Ihr Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="ihre@email.de"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+49 (0) 123 456789"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Interessiert an *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                  >
                    <option value="">-- Bitte wählen --</option>
                    <option value="bau">Bau & Sanierung</option>
                    <option value="facility">Facility Services</option>
                    <option value="pm">Projektmanagement</option>
                    <option value="other">Sonstige Leistungen</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Projektbeschreibung *
                  </label>
                  <textarea
                    id="message"
                    placeholder="Beschreiben Sie Ihr Vorhaben, Ihre Anforderungen und Ziele..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none smooth-transition"
                  ></textarea>
                </div>

                <div className="space-y-3 p-4 bg-gradient-to-r from-accent/5 to-transparent rounded-lg border border-accent/20">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="callback"
                      checked={wantsCallback}
                      onChange={(e) => setWantsCallback(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 mt-1"
                    />
                    <label htmlFor="callback" className="text-sm text-foreground/70 cursor-pointer">
                      <span className="font-medium text-primary">Rückruf anfordern</span> – Wir rufen Sie zu einem vereinbarten Zeitpunkt zurück (optional)
                    </label>
                  </div>

                  {wantsCallback && (
                    <div id="callback-time" className="ml-0 md:ml-8 mt-3 md:mt-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <label htmlFor="preferred-time" className="block text-sm font-medium text-foreground mb-2">
                        Wann ist der beste Zeitpunkt für einen Rückruf?
                      </label>
                      <select
                        id="preferred-time"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300/50 bg-white text-foreground text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                      >
                        <option value="">-- Bitte wählen --</option>
                        <option value="morning">Morgens (8:00 - 12:00 Uhr)</option>
                        <option value="afternoon">Nachmittags (12:00 - 17:00 Uhr)</option>
                        <option value="flexible">Flexibel / jederzeit</option>
                      </select>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="w-5 h-5 rounded border-gray-300 mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-foreground/70">
                    Ich akzeptiere die Datenschutzerklärung und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3.5 bg-accent hover:shadow-xl hover:shadow-accent/30 text-accent-foreground text-lg font-semibold rounded-lg smooth-transition group flex items-center justify-center gap-2"
                  >
                    Anfrage senden
                  </button>
                  <a
                    href="https://wa.me/4917592777097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3.5 bg-accent hover:shadow-lg hover:shadow-accent/30 text-accent-foreground text-lg font-semibold rounded-lg smooth-transition group flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Via WhatsApp
                  </a>
                </div>
              </form>

              <p className="text-sm text-foreground/60 text-center mt-6">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
