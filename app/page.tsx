import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { ProductFeatures } from '@/components/ProductFeatures'
import { TrustAndFeatures } from '@/components/TrustAndFeatures'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <ProductFeatures />
        <TrustAndFeatures />
        <section id="pricing">
          <Pricing />
        </section>
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

