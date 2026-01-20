"use client"

import { Award, BookOpen, Users } from "lucide-react"

export function AuthorSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_70%_50%,rgba(107,92,255,0.08),transparent_60%)]" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/50">
              <img 
                src="/images/eu.jpg"
                alt="Matheus Caum - Psicólogo CRP 08/40928"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-primary/10 border border-primary/20 -z-10" />
          </div>

          {/* Author info */}
          <div>
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">Sobre o autor</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Matheus Caum
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Psicólogo clínico (CRP 08/40928) especializado em relacionamentos e inteligência emocional. Com anos de prática clínica, ajudo pessoas a entenderem suas emoções sem se atacarem por senti-las.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              {"\"Este livro nasce da escuta atenta de pessoas que passaram tempo demais tentando se ajustar. Tentando ser compreensivas. Tentando não incomodar. E quanto mais tentavam, mais se afastavam de si.\""}
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-2xl bg-card border border-border/50">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">CRP 08/40928</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-card border border-border/50">
                <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Autor</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-card border border-border/50">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Clínica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
