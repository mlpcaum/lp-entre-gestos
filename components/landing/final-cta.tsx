"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_500px_at_50%_50%,rgba(107,92,255,0.15),transparent_60%)]" />
      
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Clareza não dói.
          <br />
          <span className="text-primary">O que dói é viver sem ela.</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 text-pretty">
          Que este livro te ajude a ouvir o que você sente sem se atacar por isso. A observar antes de reagir. E, acima de tudo, a se manter inteira.
        </p>

        <Button 
          size="lg"
          className="group text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-[0_10px_40px_rgba(107,92,255,0.3)] transition-all hover:shadow-[0_20px_60px_rgba(107,92,255,0.4)] hover:-translate-y-1"
          asChild
        >
          <a href="https://pay.digitalgoat.com.br/checkout/cmkj4e7n70015mz1kxm55klok?offer=MHRMU5C" target="_blank" rel="noopener noreferrer">
            Começar minha jornada de clareza
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        <p className="text-sm text-muted-foreground mt-6">
          Por apenas R$ 19,90 - Acesso imediato
        </p>
      </div>
    </section>
  )
}
