import { ArrowRight, MessageCircle, Clock } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'

export default function CTA() {
  return (
    <section className="py-32 px-4 bg-primary relative overflow-hidden text-white">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-background/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-20 text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Projekt anfragen
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
              Beschreiben Sie Ihr Vorhaben – wir melden uns kurzfristig mit einer fundierten Ersteinschätzung und konkreten nächsten Schritten.
            </p>
          </div>
        </FadeIn>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FadeIn delay={100} direction="up">
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 text-center hover:bg-white/10 hover:border-white/20 smooth-transition hover:-translate-y-2 group shadow-2xl h-full">
              <MessageCircle size={40} className="text-accent mx-auto mb-6 group-hover:scale-110 smooth-transition" />
              <h3 className="text-2xl font-bold text-white mb-3">Schnelle Anfrage</h3>
              <p className="text-white/70 mb-8 font-light">
                Kontaktieren Sie uns via WhatsApp oder rufen Sie direkt an: +49 175 92 777 97
              </p>
              <a
                href="https://wa.me/4917592777097"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-accent text-accent-foreground rounded-lg hover:shadow-[0_0_20px_rgba(200,169,106,0.4)] smooth-transition font-bold tracking-wide"
              >
                <MessageCircle size={18} className="text-accent-foreground" />
                WhatsApp
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 text-center hover:bg-white/10 hover:border-white/20 smooth-transition hover:-translate-y-2 group shadow-2xl h-full">
              <Clock size={40} className="text-accent mx-auto mb-6 group-hover:scale-110 smooth-transition" />
              <h3 className="text-2xl font-bold text-white mb-3">Rückruf anfordern</h3>
              <p className="text-white/70 mb-8 font-light">
                Wir rufen Sie zu einem vereinbarten Zeitpunkt zurück.
              </p>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 smooth-transition font-bold tracking-wide"
              >
                Zeitpunkt wählen
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={300} direction="up">
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-2xl border border-white/10 text-center hover:bg-white/10 hover:border-white/20 smooth-transition hover:-translate-y-2 group shadow-2xl h-full">
              <ArrowRight size={40} className="text-accent mx-auto mb-6 group-hover:scale-110 smooth-transition" />
              <h3 className="text-2xl font-bold text-white mb-3">Formular ausfüllen</h3>
              <p className="text-white/70 mb-8 font-light">
                Detailliertes Formular für umfassende Anfragen.
              </p>
              <button className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 smooth-transition font-bold tracking-wide">
                Zum Formular
                <ArrowRight size={18} />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <div className="glass p-12 rounded-xl border border-gray-200/50 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-primary mb-8">
            Detaillierte Anfrage stellen
          </h3>

          <form className="space-y-4">
            <div>
              <label htmlFor="company" className="block text-left text-sm font-medium text-foreground mb-2">
                Unternehmensname
              </label>
              <input
                type="text"
                id="company"
                placeholder="Ihr Unternehmensname"
                className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-foreground mb-2">
                  Vor- und Nachname
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Ihr Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="ihre@email.de"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-left text-sm font-medium text-foreground mb-2">
                Projektbeschreibung
              </label>
              <textarea
                id="message"
                placeholder="Beschreiben Sie Ihr Vorhaben..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300/50 bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none smooth-transition"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-accent hover:shadow-xl hover:shadow-accent/30 text-accent-foreground py-3 px-6 text-lg font-semibold flex items-center justify-center gap-2 rounded-lg smooth-transition group">
                Anfrage senden
                <ArrowRight size={20} className="group-hover:translate-x-1 smooth-transition" />
              </button>
              <a
                href="https://wa.me/4917592777097"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-accent hover:shadow-lg hover:shadow-accent/30 text-accent-foreground py-3 px-6 text-lg font-semibold flex items-center justify-center gap-2 rounded-lg smooth-transition"
              >
                <MessageCircle size={20} />
                Via WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
