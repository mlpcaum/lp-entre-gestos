"use client"

import { Heart, MessageCircle, Brain, Shield } from "lucide-react"

const painPoints = [
  {
    icon: Heart,
    title: "Você sente, mas duvida",
    description: "Algo mudou no relacionamento. Não é uma briga, não é uma frase dura. É menor. Quase invisível. Mas dói."
  },
  {
    icon: MessageCircle,
    title: '"Eu estou exagerando?"',
    description: "Essa pergunta vem de uma história inteira de aprendizados que ensinaram que sentir demais é problema."
  },
  {
    icon: Brain,
    title: "O corpo já reagiu",
    description: "Antes de você organizar um pensamento, o peito apertou. A respiração mudou. O estômago ficou pesado."
  },
  {
    icon: Shield,
    title: "Você se fecha para se proteger",
    description: "Começa a escolher palavras com mais cuidado. A observar mais. A pensar duas vezes antes de falar."
  }
]

export function PainSection() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_50%_0%,rgba(107,92,255,0.08),transparent_60%)]" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Você se reconhece?</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Nem toda dor no relacionamento começa com uma grande quebra
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Muitas começam pequenas. Silenciosas. Quase educadas demais para serem questionadas.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(107,92,255,0.15)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight quote */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
          <blockquote className="text-center">
            <p className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-6 text-pretty">
              {"\"Quando pequenas atitudes começam a doer demais, normalmente não é porque elas são pequenas demais — é porque você já vinha tentando não sentir há algum tempo.\""}
            </p>
            <footer className="text-muted-foreground">
              — Matheus Caum
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
