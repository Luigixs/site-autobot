import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { ProductFeatures } from '@/components/ProductFeatures'
import { TrustAndFeatures } from '@/components/TrustAndFeatures'
import { Pricing } from '@/components/Pricing'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ProductFeatures />
        <TrustAndFeatures />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

