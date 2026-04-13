import { FadeIn } from '@/components/ui/fade-in'

export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Analyse',
      description: 'Wir verstehen Ihr Projekt, Ihre Anforderungen und Ihre Prioritäten.'
    },
    {
      number: '2',
      title: 'Struktur',
      description: 'Wir definieren einen klaren Ablauf mit festen Verantwortlichkeiten.'
    },
    {
      number: '3',
      title: 'Umsetzung',
      description: 'Wir koordinieren alle Gewerke und steuern die Durchführung.'
    },
    {
      number: '4',
      title: 'Kontrolle',
      description: 'Wir sichern Qualität, Termine und Budget.'
    }
  ]

  return (
    <section id="prozess" className="py-32 px-4 bg-background overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
              Wie wir arbeiten
            </h2>
            <p className="text-foreground/70 text-xl font-light max-w-2xl mx-auto">
              Ein strukturierter Prozess – ohne Chaos. Vom Erstgespräch bis zur Schlüsselübergabe.
            </p>
          </div>
        </FadeIn>

        {/* Desktop Vertical Alternating Timeline */}
        <div className="relative max-w-4xl mx-auto hidden md:block">
          {/* Glowing Vertical Center Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-accent to-transparent -translate-x-1/2 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isOnRight = index % 2 === 1; // 0=Left, 1=Right, 2=Left, 3=Right

              return (
                <div key={index} className="relative flex items-center justify-between w-full group">
                  
                  {/* Glowing Node Point precisely in center */}
                  <div className="absolute left-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-[0_0_20px_rgba(200,169,106,0.3)] -translate-x-1/2 z-20 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground smooth-transition duration-500">
                    <span className="relative z-10">{step.number}</span>
                    <div className="absolute inset-0 rounded-full border border-accent opacity-0 group-hover:animate-ping group-hover:opacity-100 duration-1000"></div>
                  </div>

                  {/* Left Side (empty if isOnRight, card if !isOnRight) */}
                  <div className="w-[45%]">
                    {!isOnRight && (
                      <FadeIn delay={index * 100} direction="right">
                        <div className="glass p-8 rounded-2xl border border-gray-200/50 shadow-xl smooth-transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 text-right">
                          <h3 className="text-3xl font-bold text-primary mb-4">{step.title}</h3>
                          <p className="text-foreground/70 text-lg leading-relaxed font-light">{step.description}</p>
                        </div>
                      </FadeIn>
                    )}
                  </div>

                  {/* Right Side (card if isOnRight, empty if !isOnRight) */}
                  <div className="w-[45%]">
                    {isOnRight && (
                      <FadeIn delay={index * 100} direction="left">
                        <div className="glass p-8 rounded-2xl border border-gray-200/50 shadow-xl smooth-transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 text-left">
                          <h3 className="text-3xl font-bold text-primary mb-4">{step.title}</h3>
                          <p className="text-foreground/70 text-lg leading-relaxed font-light">{step.description}</p>
                        </div>
                      </FadeIn>
                    )}
                  </div>

                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Simple Timeline (Standard Vertical List) */}
        <div className="md:hidden space-y-8 relative pl-12">
           {/* Line on the left */}
           <div className="absolute left-[21px] top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-accent to-transparent rounded-full opacity-30"></div>
           
           {steps.map((step, index) => (
             <div key={index} className="relative group">
               <div className="absolute -left-[53px] top-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-[0_0_20px_rgba(200,169,106,0.3)] z-20 group-hover:bg-accent group-hover:text-accent-foreground smooth-transition">
                 {step.number}
               </div>
               
               <div className="glass p-6 rounded-2xl border border-gray-200/50 shadow-lg">
                 <h3 className="text-2xl font-bold text-primary mb-2">{step.title}</h3>
                 <p className="text-foreground/70 text-base font-light">{step.description}</p>
               </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  )
}
