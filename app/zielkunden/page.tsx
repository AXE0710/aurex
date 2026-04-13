import Header from '@/components/header'
import Footer from '@/components/footer'
import { Users2, Building2, Hotel, TrendingUp, Home } from 'lucide-react'

export default function Zielkunden() {
  const customers = [
    {
      title: 'Immobilienbesitzer & Investoren',
      description: 'Wir unterstützen Eigentümer und Investoren bei der gezielten Optimierung und Betreuung ihrer Immobilien.',
      icon: Home,
      image: '/ziel_realestate.png',
      leistungen: [
        'Renovierung und Modernisierung',
        'Wertsteigerungsmaßnahmen',
        'Laufende Betreuung und Instandhaltung'
      ],
      vorteil: 'Effiziente Umsetzung bei gleichzeitig minimalem eigenen Aufwand.'
    },
    {
      title: 'Hausverwaltungen',
      description: 'Wir übernehmen operative Aufgaben rund um die Betreuung und Instandhaltung von Immobilien.',
      icon: Building2,
      image: '/ziel_property_management.png',
      leistungen: [
        'Regelmäßige Objektbetreuung',
        'Koordination von Reparaturen',
        'Wartung und Instandhaltung'
      ],
      vorteil: 'Zuverlässige Umsetzung ohne zusätzlichen Koordinationsaufwand.'
    },
    {
      title: 'Hotels & Gewerbeobjekte',
      description: 'Wir realisieren Projekte im laufenden Betrieb und sorgen für einen reibungslosen Ablauf.',
      icon: Hotel,
      image: '/ziel_hotellobby.png',
      leistungen: [
        'Renovierungen im Bestand',
        'Reinigung und Wartung',
        'Laufende Betreuung'
      ],
      vorteil: 'Kontinuierlicher Betrieb bei gleichbleibend hoher Qualität.'
    },
    {
      title: 'Immobilienmakler',
      description: 'Wir unterstützen Immobilienmakler bei der optimalen Vorbereitung von Objekten für den Verkauf.',
      icon: TrendingUp,
      image: '/ziel_broker.png',
      leistungen: [
        'Aufwertung durch gezielte Renovierungsmaßnahmen',
        'Schnelle und strukturierte Umsetzung',
        'Koordination aller Gewerke'
      ],
      vorteil: 'Steigerung des Verkaufspreises und schnellere Vermarktung.'
    },
    {
      title: 'Projektentwickler',
      description: 'Wir unterstützen Projektentwickler bei der Umsetzung einzelner Projektphasen und der Koordination von Gewerken.',
      icon: Users2,
      image: '/ziel_development.png',
      leistungen: [
        'Unterstützung bei Ausbau- und Teilprojekten',
        'Koordination externer Dienstleister',
        'Strukturierte Projektbegleitung'
      ],
      vorteil: 'Flexible Umsetzung und Entlastung im operativen Projektgeschäft.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-20 fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
              Unsere Zielkunden
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">
              Die Aurex Group GmbH unterstützt unterschiedliche Kundengruppen bei der effizienten Umsetzung von Bau-, Sanierungs- und Facility-Projekten. Unser Fokus liegt auf strukturierten Abläufen, zuverlässiger Umsetzung und der nachhaltigen Sicherung von Immobilienwerten.
            </p>
          </div>

          {/* Customers Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {customers.map((customer, index) => {
              const IconComponent = customer.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200/50 shadow-lg smooth-transition hover:border-accent/50 hover:shadow-2xl hover:-translate-y-2 overflow-hidden fade-in-up group flex flex-col"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={customer.image} 
                      alt={customer.title} 
                      className="w-full h-full object-cover group-hover:scale-110 smooth-transition duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent size={24} className="text-accent-foreground" />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">

                  <h2 className="text-2xl font-bold text-primary mb-3">
                    {customer.title}
                  </h2>

                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {customer.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                        Leistungen
                      </p>
                      <ul className="space-y-2 mb-4">
                        {customer.leistungen.map((leistung, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="text-accent font-bold flex-shrink-0">→</span>
                            <span>{leistung}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                      <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Ihr Vorteil</p>
                      <p className="text-sm font-medium text-primary">{customer.vorteil}</p>
                    </div>
                  </div>
                </div>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass p-12 rounded-xl border border-gray-200/50 text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Sind Sie einer unserer Zielkunden?
              </h3>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Lassen Sie uns über Ihre Anforderungen sprechen und wie wir Sie unterstützen können.
              </p>
              <a href="/kontakt">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:shadow-xl hover:shadow-accent/40 smooth-transition font-medium">
                  Kontakt aufnehmen
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
