"use client"

import { Check, Lightbulb, Eye, MessageSquare, Compass } from "lucide-react"

const benefits = [
  "Diferenciar sensibilidade de hipervigilância",
  "Reconhecer padrões onde antes só havia sensação difusa",
  "Entender por que o corpo reage antes da razão",
  "Sair do ciclo de sentir, reprimir e sofrer em silêncio",
  "Observar antes de reagir",
  "Falar sem se violentar",
  "Validar o que você sente sem criar conflito"
]

const chapters = [
  {
    icon: Eye,
    title: "Você não está exagerando",
    description: "A diferença entre exagero e reação. Por que seu corpo sinaliza antes da mente."
  },
  {
    icon: Lightbulb,
    title: "Os sinais pequenos",
    description: "Atenção, presença, curiosidade e continuidade: onde a segurança emocional começa."
  },
  {
    icon: MessageSquare,
    title: "O ciclo da confusão",
    description: "Por que você interpreta sozinha e sofre em silêncio. Como quebrar esse padrão."
  },
  {
    icon: Compass,
    title: "Clareza para decidir",
    description: "Quando seguir e quando parar. A clareza não dói — o que dói é permanecer confusa."
  }
]

export function SolutionSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_600px_at_80%_50%,rgba(145,255,206,0.06),transparent_60%)]" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">O que você vai encontrar</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Este livro não é sobre aprender a suportar mais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            É sobre aprender a se orientar melhor. Aqui você vai encontrar <span className="text-accent font-medium">critérios emocionais</span> para entender o que está acontecendo.
          </p>
        </div>

        {/* Two columns layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits list */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Você vai aprender a:
            </h3>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 border border-border/30"
              >
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Chapters preview */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              O que você vai ler:
            </h3>
            {chapters.map((chapter, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <chapter.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{chapter.title}</h4>
                    <p className="text-sm text-muted-foreground">{chapter.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
