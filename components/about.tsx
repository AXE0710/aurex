export default function About() {
  return (
    <section id="über" className="py-32 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 fade-in-up">
          <h2 className="text-5xl font-bold text-primary text-center mb-4">
            Über uns
          </h2>
        </div>

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p>
            Die <strong className="text-primary">Aurex Group GmbH</strong> ist ein strukturierter Dienstleistungs- und Projektpartner für Bau, Sanierung und Facility Services.
          </p>

          <p>
            <strong className="text-primary">Unser Fokus</strong> liegt nicht auf der Ausführung einzelner Leistungen, sondern auf der effizienten Steuerung gesamter Projekte.
          </p>

          <div className="glass p-8 rounded-xl border border-gray-200/50">
            <p>
              Durch ein etabliertes Netzwerk an spezialisierten Partnern und klar definierte Prozesse stellen wir sicher, dass Projekte zuverlässig, termingerecht und in der gewünschten Qualität umgesetzt werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
