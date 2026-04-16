import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomepageCustomers() {
  const topRow = [
    { label: 'Immobilienbesitzer & Investoren', image: '/cust_investor.png' },
    { label: 'Hausverwaltungen',               image: '/cust_hausverwaltung.png' },
  ]
  const bottomRow = [
    { label: 'Hotels & Gewerbe',  image: '/cust_hotel.png' },
    { label: 'Immobilienmakler',  image: '/cust_makler.png' },
  ]
  const centerCard = { label: 'Projektentwickler', image: '/cust_projektentwickler.png' }

  const Card = ({ label, image }: { label: string; image: string }) => (
    <div className="group relative rounded-2xl overflow-hidden border border-accent/10 hover:border-accent/40 smooth-transition shadow-md hover:shadow-[0_8px_40px_rgba(200,169,106,0.2)] cursor-pointer">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover group-hover:scale-105 smooth-transition duration-700"
        />
        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {/* Accent line at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
      </div>
      {/* Label */}
      <div className="bg-card px-5 py-4 flex items-center justify-between">
        <p className="text-base font-semibold text-foreground tracking-wide">{label}</p>
        <ArrowRight
          size={16}
          className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 smooth-transition flex-shrink-0"
        />
      </div>
    </div>
  )

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-card to-background">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold text-primary mb-4">Unsere Zielkunden</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Wir unterstützen unterschiedliche Kundengruppen bei der effizienten Umsetzung von Bau-, Sanierungs- und Facility-Projekten.
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {topRow.map((c, i) => <Card key={i} {...c} />)}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {bottomRow.map((c, i) => <Card key={i} {...c} />)}
        </div>

        {/* Row 3 — Centered single card */}
        <div className="flex justify-center mb-12">
          <div className="w-full sm:w-1/2">
            <Card {...centerCard} />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link href="/zielkunden" className="inline-flex px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:shadow-xl hover:shadow-accent/40 smooth-transition font-medium items-center gap-2 group">
            Alle Zielgruppen ansehen
            <ArrowRight size={18} className="group-hover:translate-x-1 smooth-transition" />
          </Link>
        </div>

      </div>
    </section>
  )
}

