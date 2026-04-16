import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'

export default function Hero() {
  return (
    <section className="min-h-[100vh] flex items-center justify-center relative overflow-hidden px-4 py-20 mt-[-64px]">
      {/* Background Image with Parallax & Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/50 to-background"></div>
      
      {/* Dynamic Animated Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10 pt-16">
        <FadeIn delay={0} direction="up">
          <h1 className="sr-only">Aurex Group</h1>
          <img
            src="/title.png"
            alt="Aurex Group"
            className="mx-auto w-[160px] sm:w-[220px] lg:w-[300px] xl:w-[360px] drop-shadow-[0_4px_24px_rgba(212,175,55,0.5)] select-none"
            draggable={false}
          />
        </FadeIn>
        
        <FadeIn delay={200} direction="up">
          <p className="text-2xl sm:text-3xl text-white/90 font-light tracking-widest uppercase pb-2 drop-shadow-md">
            Planung, Steuerung und Umsetzung – effizient, kontrolliert und aus einer Hand.  Wir übernehmen Planung, Steuerung und Umsetzung – effizient, kontrolliert und aus einer Hand.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full shadow-[0_0_15px_rgba(200,169,106,0.5)]"></div>
        </FadeIn>

        <FadeIn delay={400} direction="up">
        
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-white/80 font-medium">
            <span className="flex items-center gap-2"><span className="text-accent font-bold">✔</span> Bau &amp; Sanierung</span>
            <span className="flex items-center gap-2"><span className="text-accent font-bold">✔</span> Facility Services</span>
            <span className="flex items-center gap-2"><span className="text-accent font-bold">✔</span> Projektmanagement</span>
          </div>
        </FadeIn>

        <FadeIn delay={600} direction="up" className="pt-6">
          <a href="/kontakt" className="inline-flex px-10 py-5 bg-accent/90 backdrop-blur-md border border-accent/50 text-accent-foreground rounded-full hover:shadow-[0_0_40px_rgba(200,169,106,0.6)] hover:bg-accent smooth-transition font-bold items-center gap-3 mx-auto group text-lg tracking-wide hover:-translate-y-1">
            Projekt anfragen
            <ArrowRight size={22} className="group-hover:translate-x-2 smooth-transition" />
          </a>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce flex flex-col items-center opacity-70">
        <span className="text-white text-xs uppercase tracking-widest font-semibold mb-2">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  )
}
