import Header from '@/components/header'
import Footer from '@/components/footer'
import { CheckCircle2, HardHat, Wrench, ClipboardList, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Leistungen() {
  const services = [
    {
      title: 'Bau & Sanierung',
      description: 'Wir realisieren Renovierungs- und Bauprojekte im Bestand effizient und strukturiert. Von einzelnen Maßnahmen bis hin zur vollständigen Modernisierung.',
      icon: HardHat,
      image: '/bau_sanierung.png',
      features: [
        'Innenausbau',
        'Renovierung',
        'Modernisierung',
        'Koordination aller Gewerke'
      ]
    },
    {
      title: 'Facility Services',
      description: 'Wir sichern den laufenden Betrieb und den langfristigen Werterhalt Ihrer Immobilie.',
      icon: Wrench,
      image: '/facility_services.png',
      features: [
        'Reinigung',
        'Wartung',
        'Hausmeisterservice',
        'Objektbetreuung'
      ]
    },
    {
      title: 'Projektmanagement',
      description: 'Wir übernehmen die zentrale Steuerung Ihres Projekts – transparent und kontrolliert.',
      icon: ClipboardList,
      image: '/projektmanagement.png',
      features: [
        'Planung',
        'Koordination',
        'Qualitätskontrolle',
        'Budgetüberwachung'
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 md:py-32 px-4 bg-gray-50/50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-20 fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-3xl font-light">
              Wir bieten umfassende Dienstleistungen rund um Bau, Sanierung und Facility Management – alles aus einer Hand, mit klarer Struktur und zentraler Steuerung.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 smooth-transition group relative overflow-hidden">
                  
                  <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Content Side */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent to-accent/60 rounded-2xl mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 smooth-transition">
                        {(() => {
                          const IconComponent = service.icon
                          return <IconComponent size={32} className="text-accent-foreground" />
                        })()}
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 group-hover:text-accent smooth-transition">
                        {service.title}
                      </h2>

                      <p className="text-lg text-foreground/70 leading-relaxed mb-8 font-light">
                        {service.description}
                      </p>

                      <div>
                        <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-6">
                          Leistungsumfang
                        </p>
                        <ul className="space-y-4">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-4 text-foreground/80 font-medium">
                              <CheckCircle2 size={22} className="text-accent flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                       <img 
                          src={service.image} 
                          alt={service.title} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 smooth-transition duration-700" 
                       />
                       {/* Subtle overlay to ensure premium feel */}
                       <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent smooth-transition"></div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-primary text-white p-8 md:p-14 rounded-3xl border border-gray-100 shadow-2xl max-w-4xl mx-auto text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[60px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Interessiert an einer unserer Leistungen?
                </h3>
                <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
                  Kontaktieren Sie uns für ein unverbindliches Gespräch über Ihr Projekt.
                </p>
                <a href="/kontakt" className="inline-flex">
                  <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:shadow-xl hover:shadow-accent/40 smooth-transition font-bold tracking-wide flex items-center gap-3 group">
                    Anfrage stellen
                    <ArrowRight size={20} className="group-hover:translate-x-1 smooth-transition" />
                  </button>
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
