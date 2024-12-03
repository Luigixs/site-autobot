import Image from 'next/image'

export function ProductFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">BotConversa é Marketing de Conversa</h2>
        
        {/* Marketing e Vendas Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative w-full flex justify-center">
            <div className="w-[300px] h-[500px] relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/Marketing.png"
                alt="Marketing de Conversa"
                width={300}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">Cresça seu negócio</p>
            <h3 className="text-2xl font-bold">BotConversa foi Criado para Marketing e Vendas</h3>
            <p className="text-gray-600">
              Aumente o número de vendas, engajamento com clientes, gere mais leads qualificados e entregue suporte instantâneo através de conversas personalizadas no WhatsApp.
            </p>
          </div>
        </div>

        {/* Conversas Automáticas Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-4 order-2 md:order-1">
            <p className="text-gray-600">Comece Rapidamente</p>
            <h3 className="text-2xl font-bold">Crie Conversas Automáticas Em Minutos</h3>
            <p className="text-gray-600">
              Com a nossa interface visual com tecnologia "arraste e solte", você pode facilmente construir e automatizar conversas interativas para o WhatsApp que geram mais conversões e vendas para o seu negócio.
            </p>
          </div>
          <div className="relative w-full flex justify-center order-1 md:order-2">
            <div className="w-[300px] h-[500px] bg-white rounded-lg shadow-xl p-4">
              <div className="bg-gray-50 rounded-lg p-4 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="flex-grow relative overflow-hidden rounded-lg">
                  <Image
                    src="/Flow-GIF.gif"
                    alt="Interface do Bot"
                    width={400}
                    height={400}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integração Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full flex justify-center">
            <div className="w-[300px] h-[500px] bg-[#ff4b03] rounded-lg shadow-xl overflow-hidden p-0 flex items-center justify-center">
              <Image
                src="/integraçoes.gif"
                alt="Logo Integração"
                width={300}
                height={500}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">Conecte com os melhores do mercado</p>
            <h3 className="text-2xl font-bold">Aumente Suas Vendas Recuperando Carrinhos, Boletos e Muito Mais</h3>
            <p className="text-gray-600">
              Você pode pode conectar a sua plataforma de vendas ao BotConversa para automatizar ainda mais as conversas personalizadas e aumentar suas vendas em pelo menos 30%.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

