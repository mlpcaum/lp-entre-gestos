"use client"

import { Calendar, BookMarked, PenLine, Sparkles } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "7 dias de jornada",
    description: "Um capítulo por dia. Tempo para absorver, refletir e processar cada insight sem pressa."
  },
  {
    icon: BookMarked,
    title: "Leitura imersiva",
    description: "Interface pensada para você focar no conteúdo. Modo claro ou escuro, tamanho de fonte ajustável."
  },
  {
    icon: PenLine,
    title: "Reflexões guiadas",
    description: "Perguntas ao final de cada capítulo para você registrar seus pensamentos e descobertas."
  },
  {
    icon: Sparkles,
    title: "Acesso vitalício",
    description: "O conteúdo é seu para sempre. Leia e releia quantas vezes precisar, no seu tempo."
  }
]

export function ExperienceSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_500px_at_30%_100%,rgba(107,92,255,0.1),transparent_60%)]" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Mais que um ebook</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Uma experiência de leitura emocional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Criado para ser lido aos poucos, com tempo para você se conectar com cada capítulo antes de seguir adiante.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-3xl bg-background border border-border/50 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Preview mockup */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="p-8 rounded-3xl bg-card border border-border/50 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-foreground/10 rounded w-3/4" />
              <div className="h-4 bg-foreground/10 rounded w-full" />
              <div className="h-4 bg-foreground/10 rounded w-5/6" />
              <div className="h-4 bg-foreground/10 rounded w-2/3" />
              <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-sm text-muted-foreground italic text-center">
                  {"\"Clareza não dói. O que dói é viver sem ela.\""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
