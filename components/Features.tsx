import { Check } from 'lucide-react'

const features = [
  "Integração com WhatsApp",
  "Respostas automáticas",
  "Personalização avançada",
  "Análise de dados em tempo real",
  "Suporte 24/7",
  "Fácil configuração"
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Recursos Principais</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Check className="text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}