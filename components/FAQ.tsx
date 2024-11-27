import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "O que é o BotConversa?",
      answer: "BotConversa é uma plataforma de chatbot que ajuda empresas a automatizar seu atendimento ao cliente através de inteligência artificial e integração com plataformas populares de mensagens."
    },
    {
      question: "Como o BotConversa pode ajudar minha empresa?",
      answer: "O BotConversa pode ajudar sua empresa a melhorar o atendimento ao cliente, aumentar as vendas e reduzir custos operacionais através da automação de respostas e processos de atendimento."
    },
    {
      question: "É difícil configurar o BotConversa?",
      answer: "Não, o BotConversa foi projetado para ser fácil de configurar e usar. Oferecemos tutoriais detalhados e suporte para ajudar você a começar rapidamente."
    },
    {
      question: "Posso personalizar as respostas do bot?",
      answer: "Sim, você pode personalizar completamente as respostas do bot para se adequar ao tom e à marca da sua empresa."
    },
    {
      question: "O BotConversa oferece integração com outros sistemas?",
      answer: "Sim, o BotConversa oferece integrações com várias plataformas populares de CRM, e-commerce e atendimento ao cliente."
    }
  ]
  
  export function FAQ() {
    return (
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }