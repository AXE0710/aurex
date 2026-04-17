import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Impressum() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="py-32 px-4 bg-background flex-grow">
        <div className="max-w-4xl mx-auto mt-12">
          {/* Page Header */}
          <div className="mb-16 fade-in-up">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/20 bg-accent/5 text-accent font-semibold tracking-wider uppercase">
              Rechtliches
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
              Impressum
            </h1>
          </div>

          <div className="glass p-6 sm:p-10 md:p-14 rounded-3xl border border-gray-200/50 shadow-xl fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-10 text-foreground/80 leading-relaxed font-light text-lg">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-3">Angaben gemäß § 5 TMG</h2>
                <p>
                  Aurex Group GmbH<br />
                  Am Irscher Hof 73<br />
                  54294 Trier, Germany
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-3">Vertreten durch</h2>
                <p>Mubashar Ahmad Khan (CEO / Geschäftsführer)</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-3">Kontakt</h2>
                <p>
                  Telefon: <a href="tel:+4917592777097" className="text-accent hover:underline">+49 175 92 777 97</a><br />
                  E-Mail: <a href="mailto:info@aurexgroup.de" className="text-accent hover:underline">info@aurexgroup.de</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
