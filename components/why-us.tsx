import { Check } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'

export default function WhyUs() {
  const reasons = [
    { text: 'Ein zentraler Ansprechpartner', desc: 'Wir bündeln alle Leistungen und Gewerke.' },
    { text: 'Strukturierte Umsetzung', desc: 'Klare Prozesse garantieren Termintreue.' },
    { text: 'Geprüftes Netzwerk', desc: 'Wir arbeiten nur mit absoluten Profis.' },
    { text: 'Schnelle Reaktionszeiten', desc: 'Keine langen Wartezeiten, direkte Action.' },
    { text: 'Volle Transparenz', desc: 'Sie haben stets die volle Kostenkontrolle.' }
  ]

  return (
    <section id="warum" className="py-32 px-4 bg-gray-50/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-20 fade-in-up">
          <h2 className="text-5xl font-bold text-primary mb-6">
            Warum Aurex
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed font-light max-w-3xl mx-auto">
            Wir sind nicht nur ein Dienstleister, wir sind Ihr strategischer Partner. Durch unsere strukturierte Herangehensweise minimieren wir Risiken und maximieren den Wert Ihrer Immobilie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div
                className="bg-white p-8 rounded-2xl border border-gray-200/50 flex flex-col h-full smooth-transition hover:border-accent/50 hover:shadow-2xl hover:-translate-y-2 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mb-6 group-hover:scale-110 smooth-transition group-hover:bg-accent/20">
                  <Check size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent smooth-transition">
                  {reason.text}
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </FadeIn>
          ))}
          
          <FadeIn delay={reasons.length * 100} direction="up">
             <div className="bg-gradient-to-br from-primary to-primary/90 p-8 rounded-2xl border border-gray-200/50 flex flex-col items-center justify-center h-full text-center hover:-translate-y-2 smooth-transition hover:shadow-2xl shadow-xl">
               <h3 className="text-2xl font-bold text-white mb-2">100% Qualität</h3>
               <div className="w-16 h-1 bg-accent rounded-full mb-4"></div>
               <p className="text-white/80 font-light">Garantiert durch unsere Partner.</p>
             </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
