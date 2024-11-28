import Image from 'next/image'

export function TrustAndFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Trust Banner */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Confiado Por 10.000+ Empresas</h2>
          <p className="text-gray-600">mais de 100 milhões de conversas com clientes</p>
          
          <div className="max-w-3xl mx-auto mt-8 text-gray-600 text-sm">
            <p className="mb-8">
              Faço parte dessas empresas, e foi fácil! Fui encarregado de desenvolver o nosso BOT, meu chefe acreditou que com o BOT, iríamos poder mexer bem mais rápido, pelo simples motivo dele automatizar muitos processos que se tornam demorados, através do BOT consigo filtrar o nosso público e também determinamos nossos leads facilmente. Não chutei certo de investir no BOT, mas Acertei, com videos 24h hrs para desvendar ainda mais o nosso atendimento e não se tornar algo robótico. Acredito que tem ajudado não só a mim, mas para toda a minha equipe, estamos muito felizes com os resultados.
            </p>
          </div>

          {/* Testimonial */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-[40px] h-[40px] relative">
              <Image
                src="/placeholder.svg"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div className="text-left">
              <p className="font-medium">Jefferson Rodrigues - @mapeemultifix</p>
              <p className="text-sm text-gray-600">Proprietário - Mapee Multifix</p>
            </div>
          </div>
        </div>

        {/* Multiple Agents Feature */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative w-[400px] h-[400px] mx-auto">
            <Image
              src="/placeholder.svg"
              alt="Multiple Agents Interface"
              width={400}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Múltiplos</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Agentes</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">1 Número</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Coloque Todo Seu Time Comercial Para Atender Sem Confusão</h3>
            <p className="text-gray-600">
              Com o BotConversa você pode ter múltiplos agentes, sem nenhum custo adicional, atendendo e vendendo ao mesmo tempo utilizando um único número.
            </p>
          </div>
        </div>

        {/* Mass Messaging Feature */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Broadcasting Gratuito</p>
            <h3 className="text-2xl font-bold">Envie Ofertas, Cupons, Conteúdos Para Todos os Contatos</h3>
            <p className="text-gray-600">
              Você não precisa investir novamente para realizar campanhas com seus contatos. Tampouco precisa investir novamente em unicasts. Com a transmissão você pode realizar conversas que geram conversões.
            </p>
          </div>
          <div className="relative w-[400px] h-[400px] mx-auto">
            <Image
              src="/placeholder.svg"
              alt="Mass Messaging Interface"
              width={400}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
            <div className="absolute bottom-4 left-4 flex gap-2 z-10">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Envios</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Em Massa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

