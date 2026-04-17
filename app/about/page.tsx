import Header from '@/components/header'
import Footer from '@/components/footer'
import { Check } from 'lucide-react'

export default function About() {
  const values = [
    'Strukturierte Prozesse und klare Verantwortlichkeiten',
    'Zentraler Ansprechpartner für alle Belange',
    'Geprüftes Netzwerk an spezialisierten Partnern',
    'Transparente Kommunikation und volle Kostenkontrolle',
    'Schnelle Reaktionszeiten und zuverlässige Umsetzung',
    'Langfristige Kundenbeziehungen basierend auf Vertrauen'
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-20 fade-in-up text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/20 bg-accent/5 text-accent font-semibold tracking-wider uppercase">
              Über das Unternehmen
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Struktur statt Zufall.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              Die Aurex Group GmbH ist ein strukturierter Dienstleistungs- und Projektpartner für Bau, Sanierung und Facility Services.
            </p>
          </div>

          {/* Hero Image Section */}
          <div className="mb-24 fade-in-up w-full h-[60vh] rounded-3xl overflow-hidden relative shadow-2xl">
            <img
              src="/about_hero.png"
              alt="Aurex Group Boardroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          </div>

          {/* Main Content Split */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="fade-in-up space-y-6">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Ein Partner für alle Fälle
              </h2>
              <div className="glass p-8 rounded-2xl border border-gray-200/50 shadow-lg">
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Effiziente, strukturierte Umsetzung mit klarer Kontrolle über alle Projektphasen.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  Durch klare Prozesse, ein etabliertes Netzwerk an Fachpartnern und konsequente Qualitätskontrolle stellen wir sicher, dass Projekte zuverlässig und termingerecht umgesetzt werden.
                </p>
                <p className="text-lg text-primary leading-relaxed font-bold">
                  Wir verstehen uns nicht als klassisches Bauunternehmen, sondern als zentraler Ansprechpartner für die strukturierte Umsetzung komplexer Projekte.
                </p>
              </div>
            </div>

            <div className="relative fade-in-up md:block hidden h-[500px]" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
                <img
                  src="/about_planning.png"
                  alt="Aurex Group Planning"
                  className="w-full h-full object-cover hover:scale-105 smooth-transition duration-1000"
                />
              </div>
            </div>
          </div>

          {/* Values — Editorial Band Layout */}
          <div className="fade-in-up mb-24" style={{ animationDelay: '0.3s' }}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Das zeichnet uns aus</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Fundamente für eine erfolgreiche und langfristige Zusammenarbeit.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-gray-200/50 shadow-2xl">
              {values.map((value, index) => {
                const isDark = index % 2 === 1
                const isReversed = index % 2 === 1
                return (
                  <div
                    key={index}
                    className={`group relative flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} items-stretch overflow-hidden smooth-transition hover:brightness-105 ${isDark ? 'bg-primary text-white' : 'bg-white text-primary'}`}
                  >
                    {/* Giant number panel */}
                    <div className={`relative flex items-center justify-center w-40 md:w-56 flex-shrink-0 ${isDark ? 'bg-white/5' : 'bg-gray-50'} border-r border-l ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                      <span className={`text-[6rem] md:text-[8rem] font-black leading-none select-none ${isDark ? 'text-white/40 group-hover:text-accent/80' : 'text-gray-300 group-hover:text-accent/60'} smooth-transition`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content panel */}
                    <div className="flex-1 flex items-center gap-6 px-8 md:px-14 py-10">
                      {/* Gold accent dot */}
                      <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0 shadow-[0_0_10px_rgba(200,169,106,0.6)] group-hover:scale-150 smooth-transition" />
                      <p className={`text-lg md:text-xl font-semibold leading-snug ${isDark ? 'text-white/90' : 'text-primary'}`}>
                        {value}
                      </p>
                    </div>

                    {/* Hover gold shimmer line */}
                    <div className={`absolute ${isReversed ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 smooth-transition`} />
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-primary text-white p-8 md:p-16 rounded-3xl relative overflow-hidden text-center shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-6">
                  Erleben Sie Struktur und Effizienz
                </h3>
                <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
                  Kontaktieren Sie uns für ein persönliches Gespräch oder eine Präsentation unserer Dienstleistungen.
                </p>
                <a href="/kontakt" className="inline-block px-10 py-4 bg-accent text-accent-foreground rounded-xl hover:shadow-[0_0_30px_rgba(200,169,106,0.6)] hover:-translate-y-1 smooth-transition font-bold text-lg tracking-wide">
                  Jetzt Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
