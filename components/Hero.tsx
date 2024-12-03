'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: "100+ Milhões", label: "Mensagens trocadas" },
  { value: "45+ Milhões", label: "Pessoas atendidas" },
  { value: "380+ Mil", label: "Robôs criados" },
  { value: "10+ Mil", label: "WhatsApp conectados" },
]

const features = [
  { icon: "👩‍💼", title: "Agentes ilimitados em um único WhatsApp" },
  { icon: "🤖", title: "Robôs de atendimento ilimitados" },
  { icon: "✈️", title: "Envio em massa ilimitado" },
  { icon: "🔄", title: "Integração com milhares de ferramentas via Zaper" },
  { icon: "🔌", title: "API para desenvolvedores" },
  { icon: "📊", title: "Contatos ilimitados" },
  { icon: "💬", title: "Palavras chaves ilimitadas" },
  { icon: "🔗", title: "Campanhas de link e QR Code ilimitadas" },
  { icon: "💻", title: "Webhook para plataformas de pagamentos" },
]

export function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    pricingSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Temos o funcionário ideal para você.
          </h1>
          
          <Button 
            onClick={scrollToPricing}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full text-lg mt-8"
          >
            Começar Agora
          </Button>
        </div>

        <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-black text-2xl md:text-3xl font-bold text-center mb-4">
            Mudando a vida de<br />
            empreendedores Em todo brasil
          </h2>
          
          <p className="text-gray-600 text-center mb-8">
            Junte-se a mais de 10.000 empresas que estão diariamente utilizando o BotConversa para automatizar seu atendimento e vendas no WhatsApp todos os dias.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-green-500 font-bold text-2xl">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que é Possível Fazer No BotConversa?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <p className="text-sm">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

