import { Users2 } from 'lucide-react'

export default function TargetCustomers() {
  const customers = [
    'Immobilienbesitzer',
    'Hausverwaltungen',
    'Hotels und gewerbliche Betreiber',
    'Investoren'
  ]

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-card to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl font-bold text-primary mb-4">
            Zielkunden
          </h2>
          <p className="text-foreground/70 text-lg">
            Wir arbeiten mit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="glass p-8 rounded-xl border border-gray-200/50 flex items-center gap-4 smooth-transition hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-accent/30 smooth-transition">
                <Users2 size={24} className="text-accent-foreground" />
              </div>
              <p className="text-lg font-medium text-foreground">{customer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
