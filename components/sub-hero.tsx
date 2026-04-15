export default function SubHero() {
  return (
    <section className="bg-background py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
      
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="fade-in-up">
          <h2 className="text-4xl font-bold text-primary text-center">
            Komplexe Bau- und Immobilienprojekte erfordern mehr als einzelne Dienstleister.
          </h2>
        </div>

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-center">
            Sie erfordern klare Prozesse, zentrale Steuerung und eine zuverlässige Umsetzung.
          </p>

          <div className="glass p-8 border border-gray-200/50 rounded-xl text-center">
            <p className="text-xl">
              <strong className="text-primary block mb-4">Die Aurex Group GmbH übernimmt die vollständige Koordination – von der ersten Planung bis zur finalen Umsetzung.</strong>
            </p>
            <p className="text-primary font-bold text-lg tracking-wide">
              Ein Ansprechpartner. Klare Prozesse. Verlässliche Ergebnisse.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
