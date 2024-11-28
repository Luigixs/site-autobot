import Link from 'next/link'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">BotConversa</h3>
            <p className="text-sm">Automatizando conversas, conectando pessoas.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-blue-400">Recursos</Link></li>
              <li><Link href="#pricing" className="hover:text-blue-400">Preços</Link></li>
              <li><Link href="#faq" className="hover:text-blue-400">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <p className="text-sm">Suportelabs@gmail.com.br</p>
            <a 
              href="https://wa.me/556282010347"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-sm hover:text-blue-400 flex items-center gap-2"
            >
              +55 62 8201-0347
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/automatik_labs/profilecard/?igsh=Zzk4NmdhNWIydDA1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 AUTOMATIKLABS. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

