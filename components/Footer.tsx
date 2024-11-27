import Link from 'next/link'

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
            <p className="text-sm">+55 62 8201-0347</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-400">LinkedIn</a>
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