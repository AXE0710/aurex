import Header from '@/components/header'
import Footer from '@/components/footer'
import { CheckCircle2, HardHat, Wrench, ClipboardList, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Leistungen() {
  const services = [
    {
      title: 'Bau & Sanierung',
      description: 'Wir realisieren Bau- und Renovierungsprojekte effizient und übernehmen die vollständige Koordination für Sie.',
      icon: HardHat,
      imageBefore: '/bau_sanierung_vorher.png',
      imageAfter: '/bau_sanierung_nachher.png',
      typicalProjects: [
        'Renovierung von Wohnungen und Häusern',
        'Bad- und Kühensanierungen',
        'Maler-, Boden- und Trockenbauarbeiten',
        'Modernisierung von Gewerbeeinheiten'
      ],
      features: [
        'Planung und Organisation',
        'Koordination aller Gewerke',
        'Steuerung der Umsetzung',
        'Qualitätskontrolle'
      ],
      result: 'Reibungslose Umsetzung mit klarer Koordination aller Gewerke – ohne zusätzlichen Abstimmungsaufwand für Sie.'
    },
    {
      title: 'Facility Services',
      description: 'Wir sichern den laufenden Betrieb und den langfristigen Werterhalt Ihrer Immobilie durch strukturierte Abläufe und zuverlässige Umsetzung.',
      icon: Wrench,
      imageBefore: '/facility_services_vorher.png',
      imageAfter: '/facility_services_nachher.png',
      typicalProjects: [
        'Gebäudereinigung (regelmäßig oder nach Bedarf)',
        'Hausmeisterservices',
        'Wartung und Instandhaltung',
        'Betreuung von Objekten und Anlagen'
      ],
      features: [
        'Regelmäßige Objektbetreuung',
        'Koordination von Reparaturen',
        'Schnelle Reaktionszeiten',
        'Strukturierte Abläufe'
      ],
      result: 'Zuverlässiger Betrieb Ihrer Immobilie durch strukturierte Abläufe und schnelle Reaktionszeiten – bei minimalem operativem Aufwand für Sie.'
    },
    {
      title: 'Projektmanagement',
      description: 'Wir übernehmen die zentrale Steuerung Ihres Projekts – von der Planung bis zur Umsetzung.',
      icon: ClipboardList,
      imageBefore: '/projektmanagement_vorher.png',
      imageAfter: '/projektmanagement_nachher.png',
      typicalProjects: null,
      features: [
        'Projektplanung und Strukturierung',
        'Koordination aller Dienstleister',
        'Budget- und Zeitüberwachung',
        'Qualitätskontrolle'
      ],
      result: 'Volle Kontrolle über Ihr Projekt durch transparente Steuerung, klare Prozesse und verlässliche Einhaltung von Zeit- und Budgetvorgaben.'
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
                        {service.typicalProjects && (
                          <>
                            <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-4">
                              Typische Projekte
                            </p>
                            <ul className="space-y-3 mb-8">
                              {service.typicalProjects.map((project, i) => (
                                <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm">
                                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">→</span>
                                  <span>{project}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-4">
                          Leistungen im Detail
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-4 text-foreground/80 font-medium">
                              <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-accent/8 border border-accent/20 rounded-xl p-5">
                          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Ergebnis</p>
                          <p className="text-foreground/80 text-sm leading-relaxed font-medium">{service.result}</p>
                        </div>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-[350px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col sm:flex-row gap-0 sm:gap-2 bg-transparent">
                       
                       {/* Before Image */}
                       <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full group/img overflow-hidden rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none">
                          <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-md z-10 shadow-lg">
                            Vorher
                          </div>
                          <img 
                            src={service.imageBefore} 
                            alt={`${service.title} Vorher`} 
                            className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 ease-in-out" 
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-500"></div>
                       </div>

                       {/* After Image */}
                       <div className="relative w-full sm:w-1/2 h-1/2 sm:h-full group/img overflow-hidden rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none">
                          <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-lg">
                            Nachher
                          </div>
                          <img 
                            src={service.imageAfter} 
                            alt={`${service.title} Nachher`} 
                            className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 ease-in-out" 
                          />
                          <div className="absolute inset-0 bg-primary/10 group-hover/img:bg-transparent transition-colors duration-500"></div>
                       </div>

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
                <a href="/kontakt" className="inline-flex px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:shadow-xl hover:shadow-accent/40 smooth-transition font-bold tracking-wide items-center gap-3 group">
                  Anfrage stellen
                  <ArrowRight size={20} className="group-hover:translate-x-1 smooth-transition" />
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
