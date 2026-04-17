import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Datenschutz() {
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
              Datenschutzerklärung
            </h1>
          </div>

          <div className="glass p-6 sm:p-10 md:p-14 rounded-3xl border border-gray-200/50 shadow-xl fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-10 text-foreground/80 leading-relaxed font-light text-lg">
              
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold text-primary mb-2 mt-6">Allgemeine Hinweise</h3>
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-2 mt-6">Datenerfassung auf dieser Website</h3>
                <p className="mb-4"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
                </p>
                
                <p className="mb-4"><strong>Wie erfassen wir Ihre Daten?</strong></p>
                <p className="mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Allgemeine Hinweise und Pflicht­informationen</h2>
                <h3 className="text-xl font-semibold text-primary mb-2 mt-6">Datenschutz</h3>
                <p className="mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>

                <h3 className="text-xl font-semibold text-primary mb-2 mt-6">Hinweis zur verantwortlichen Stelle</h3>
                <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p className="mb-4">
                  Aurex Group GmbH<br />
                  Am Irscher Hof 73<br />
                  54294 Trier, Germany<br />
                  <br />
                  Telefon: +49 175 92 777 97<br />
                  E-Mail: info@aurexgroup.de
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
