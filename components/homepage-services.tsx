import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'

export default function HomepageServices() {
  const services = [
    {
      title: 'Bau & Sanierung',
      description: 'Effiziente Umsetzung von Renovierungen und Modernisierungen im Bestand.',
      image: '/bau_sanierung_nachher.png'
    },
    {
      title: 'Facility Services',
      description: 'Zuverlässige Betreuung und Werterhalt Ihrer Immobilie.',
      image: '/facility_services_nachher.png'
    },
    {
      title: 'Projektmanagement',
      description: 'Strukturierte Steuerung aller Projektphasen.',
      image: '/projektmanagement_nachher.png'
    }
  ]

  return (
    <section className="py-32 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 fade-in-up text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-primary mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Wir bieten umfassende Dienstleistungen rund um Bau, Sanierung und Facility Management. Alle Kompetenzen aus einer Hand für den langfristigen Werterhalt Ihrer Immobilie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 flex flex-col h-full shadow-lg hover:shadow-2xl hover:-translate-y-2 smooth-transition duration-500 overflow-hidden fade-in-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white mb-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:-translate-y-2 smooth-transition">
                  {service.title}
                </h3>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/leistungen" className="inline-flex px-10 py-4 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 smooth-transition font-bold items-center gap-3 group text-lg tracking-wide">
            Mehr erfahren
            <ArrowRight size={20} className="group-hover:translate-x-2 smooth-transition" />
          </Link>
        </div>
      </div>
    </section>
  )
}
