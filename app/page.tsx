import Header from '@/components/header'
import Hero from '@/components/hero'
import SubHero from '@/components/sub-hero'
import HomepageServices from '@/components/homepage-services'
import Process from '@/components/process'
import WhyUs from '@/components/why-us'
import HomepageCustomers from '@/components/homepage-customers'
import About from '@/components/about'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SubHero />
      <HomepageServices />
      <Process />
      <WhyUs />
      <HomepageCustomers />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
