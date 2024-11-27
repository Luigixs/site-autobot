import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-black">
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
            <li><Link href="#pricing" className="text-white hover:text-gray-200">Preços</Link></li>
            <li><Link href="#faq" className="text-white hover:text-gray-200">FAQ</Link></li>
          </ul>
        </nav>
        <Button variant="secondary">Entrar</Button>
      </div>
    </header>
  )
}