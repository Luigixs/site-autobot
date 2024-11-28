import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image';

const plans = [
  {
    name: "Mensal STARTER",
    price: "199",
    period: "Por Mês",
    features: [
      "WhatsApp",
      "Contatos ilimitados",
      "Campanhas ilimitadas",
      "300 envios/mês",
      "5 Atendentes",
      "Robôs ilimitados",
      "Palavras Chave ilimitadas",
      "Sequências ilimitadas"
    ]
  },
  {
    name: "Mensal PRO",
    price: "297",
    period: "Por Mês",
    features: [
      "WhatsApp",
      "Contatos ilimitados",
      "Campanhas ilimitadas",
      "Envios ilimitados",
      "Agentes ilimitados",
      "Robôs ilimitados",
      "Palavras Chave ilimitadas",
      "Sequências ilimitadas",
      "Integração Zaper",
      "API para desenvolvedores",
      "Webhook"
    ]
  },
  {
    name: "Anual PRO",
    price: "899",
    period: "Por Ano",
    recommended: true,
    features: [
      "WhatsApp",
      "Contatos ilimitados",
      "Campanhas ilimitadas",
      "Envios ilimitados",
      "Agentes ilimitados",
      "Robôs ilimitados",
      "Palavras Chave ilimitadas",
      "Sequências ilimitadas",
      "Integração Zaper",
      "API para desenvolvedores",
      "Webhook"
    ]
  }
]

export function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Escolha o Plano Ideal</h2>
          <p className="text-gray-600">
            Não possui e-business automaticamente após o pagamento,
            <br />
            você também ganha todos os bônus abaixo imediatamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg p-8 ${
                plan.recommended ? 'shadow-xl border-green-500 border-2' : 'shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-1 rounded-full transform rotate-12">
                  Recomendado
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold">R$</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>
                <span className="text-gray-600">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/checkout?plan=${encodeURIComponent(plan.name)}`}>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  COMPRAR AGORA
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Money-back Guarantee Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Você Fica satisfeito ou seu dinheiro de volta</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600">
                A partir do momento que você adquire o seu acesso ao BotConversa, você precisa testar todas as funcionalidades, conectar seu WhatsApp, colocar os robôs prontos para funcionar e se dentro de 7 dias você não ficar satisfeito por qualquer motivo, é só nos enviar um email que você receberá 100% do seu dinheiro de volta.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/garantia-de-7-dias-1.png"
                alt="7 dias garantia ou seu dinheiro de volta"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

