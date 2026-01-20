"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Este livro é para mim?",
    answer: "Se você já se pegou pensando 'será que estou exagerando?', se sente confusa sobre o que está acontecendo no seu relacionamento, ou percebe que algo mudou mas não consegue explicar, este livro foi escrito para você."
  },
  {
    question: "Por que os capítulos são liberados aos poucos?",
    answer: "A experiência foi desenhada para você ter tempo de absorver cada conceito antes de seguir adiante. Não é sobre ler rápido — é sobre ler com profundidade. Cada capítulo pede reflexão, e o tempo entre eles permite que você processe o que está sentindo."
  },
  {
    question: "Quando recebo o livro completo em PDF?",
    answer: "No 7º dia após a compra, você recebe acesso ao livro completo em PDF, além de continuar com acesso à plataforma de leitura com todas as funcionalidades."
  },
  {
    question: "Este livro substitui terapia?",
    answer: "Não. Este livro é um recurso de psicoeducação que pode complementar um processo terapêutico, mas não substitui o acompanhamento profissional individualizado. Se você está em sofrimento intenso, recomendo buscar ajuda de um psicólogo."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias para experimentar o conteúdo. Se sentir que não fez diferença para você, basta enviar um e-mail e devolvemos 100% do valor pago, sem questionamentos."
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim. Uma vez que você adquire o livro, o acesso é seu para sempre. Você pode reler quantas vezes quiser, e todas as atualizações futuras estão incluídas."
  }
]

export function FAQSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_20%_80%,rgba(145,255,206,0.06),transparent_60%)]" />
      
      <div className="relative max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Dúvidas frequentes</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Perguntas comuns
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-2xl px-6 bg-card/50 data-[state=open]:bg-card data-[state=open]:border-primary/30 transition-all"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
