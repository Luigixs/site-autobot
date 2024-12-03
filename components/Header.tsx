'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    pricingSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="bg-black fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="AutomatikLabs" 
            width={40} 
            height={40}
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="text-white hover:text-gray-200">Recursos</Link></li>
            <li>
              <button 
                onClick={scrollToPricing}
                className="text-white hover:text-gray-200"
              >
                Preços
              </button>
            </li>
            <li><Link href="#faq" className="text-white hover:text-gray-200">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

