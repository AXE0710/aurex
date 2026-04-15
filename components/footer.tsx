import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="fade-in-up">
            <img
              src="/logo.png"
              alt="Aurex Group Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Strukturierte Steuerung von Bau-, Sanierungs- und Facility-Projekten.
            </p>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '0.05s' }}>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Leistungen</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#leistungen" className="hover:text-white smooth-transition">Bau & Sanierung</Link></li>
              <li><Link href="#leistungen" className="hover:text-white smooth-transition">Facility Services</Link></li>
              <li><Link href="#leistungen" className="hover:text-white smooth-transition">Projektmanagement</Link></li>
            </ul>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="#über" className="hover:text-white smooth-transition">Über uns</Link></li>
              <li><Link href="#prozess" className="hover:text-white smooth-transition">Prozess</Link></li>
              <li><Link href="#warum" className="hover:text-white smooth-transition">Warum Aurex</Link></li>
            </ul>
          </div>

          <div className="fade-in-up" style={{ animationDelay: '0.15s' }}>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Kontakt</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Email: <a href="mailto:info@aurexgroup.de" className="hover:text-white smooth-transition">info@aurexgroup.de</a></li>
              <li>Tel: <a href="tel:+49123456789" className="hover:text-white smooth-transition">+49 (0) 123 456789</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <p>&copy; 2024 Aurex Group GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white smooth-transition">Impressum</Link>
            <Link href="#" className="hover:text-white smooth-transition">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
