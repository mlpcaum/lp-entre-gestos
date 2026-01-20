"use client"

import { Button } from "@/components/ui/button"
import { Check, Shield, Clock, BookOpen, ArrowRight } from "lucide-react"

const included = [
  "Acesso imediato ao primeiro capítulo",
  "7 capítulos liberados ao longo de 7 dias",
  "Livro completo em PDF no 7º dia",
  "Reflexões guiadas em cada capítulo",
  "Acesso vitalício ao conteúdo",
  "Atualizações futuras incluídas"
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_600px_at_50%_0%,rgba(107,92,255,0.12),transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Comece agora</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Clareza emocional tem preço?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
            O que você pagaria para parar de duvidar de si mesma? Para entender o que sente sem culpa?
          </p>
        </div>

        {/* Pricing card */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-[2rem] blur-2xl opacity-20" />
          
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border border-primary/30 shadow-[0_20px_80px_rgba(107,92,255,0.2)]">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left side - Price */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm text-accent">Oferta de lançamento</span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-2xl font-medium">R$</span>
                    <span className="font-[family-name:var(--font-display)] text-6xl md:text-7xl font-bold text-foreground tracking-tight">19,90</span>
                  </div>
                  <p className="text-muted-foreground mt-2">Pagamento único. Sem assinatura.</p>
                </div>

                <Button 
                  size="lg"
                  className="w-full group text-lg py-7 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-[0_10px_40px_rgba(107,92,255,0.3)] transition-all hover:shadow-[0_20px_60px_rgba(107,92,255,0.4)] hover:-translate-y-1"
                  asChild
                >
                  <a href="https://pay.digitalgoat.com.br/checkout/cmkj4e7n70015mz1kxm55klok?offer=MHRMU5C" target="_blank" rel="noopener noreferrer">
                    Quero começar agora
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Compra segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span>Acesso imediato</span>
                  </div>
                </div>
              </div>

              {/* Right side - What's included */}
              <div>
                <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  O que está incluído:
                </h3>
                <ul className="space-y-4">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Se dentro de 7 dias você sentir que o livro não fez diferença na sua clareza emocional, devolvemos 100% do seu investimento. Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  )
}
