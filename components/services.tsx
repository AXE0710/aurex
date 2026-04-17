export default function Services() {
  const services = [
    {
      title: 'Bau & Sanierung',
      description: 'Wir realisieren Projekte im Bestand effizient und strukturiert – vom einzelnen Raum bis zur kompletten Immobilie.',
      features: [
        'Renovierung und Modernisierung',
        'Innenausbau und Flächenoptimierung',
        'Koordination aller Gewerke',
        'Termingerechte Umsetzung'
      ]
    },
    {
      title: 'Facility Services',
      description: 'Wir sichern den laufenden Betrieb und den langfristigen Werterhalt Ihrer Immobilie durch strukturierte Abläufe und zuverlässige Umsetzung.',
      features: [
        'Gebäudereinigung',
        'Wartung und Instandhaltung',
        'Hausmeisterservices',
        'Regelmäßige Objektbetreuung'
      ]
    },
    {
      title: 'Projektmanagement',
      description: 'Wir übernehmen die zentrale Steuerung Ihres Projekts – von der Planung bis zur Umsetzung.',
      features: [
        'Planung und Strukturierung',
        'Steuerung aller Dienstleister',
        'Qualitätskontrolle',
        'Budget- und Zeitüberwachung'
      ]
    }
  ]

  return (
    <section id="leistungen" className="py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 fade-in-up">
          <h2 className="text-5xl font-bold text-primary mb-6">
            Leistungen
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl">
            Wir bieten umfassende Dienstleistungen rund um Bau, Sanierung und Facility Management – alles aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-xl border border-gray-200/50 smooth-transition hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-lg mb-6 group-hover:shadow-lg group-hover:shadow-accent/30 smooth-transition"></div>
              
              <h3 className="text-2xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="text-accent font-bold flex-shrink-0 mt-1">→</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
