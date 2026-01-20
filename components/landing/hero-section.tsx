"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export function HeroSection() {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_600px_at_20%_0%,rgba(107,92,255,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_500px_at_90%_20%,rgba(145,255,206,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#07101e_0%,#0b1320_40%,#07101e_100%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/80">Por Matheus Caum - CRP 08/40928</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
          <span className="text-foreground">Entre Gestos</span>
          <br />
          <span className="text-primary">e Silêncios</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4 text-pretty">
          Você sente que algo está estranho no relacionamento, mas não sabe explicar?
        </p>

        <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-10 text-pretty">
          Esse livro foi escrito para você que está cansada de duvidar de si mesma.
          <span className="text-accent font-medium"> Você não está exagerando. Você está reagindo.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToPrice}
            className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl shadow-[0_10px_40px_rgba(107,92,255,0.3)] transition-all hover:shadow-[0_20px_60px_rgba(107,92,255,0.4)] hover:-translate-y-1"
          >
            Quero clareza emocional
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-lg px-8 py-6 border-border/50 text-foreground hover:bg-secondary/50 rounded-2xl"
          >
            Saiba mais
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>7 dias de leitura guiada</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Reflexões personalizadas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Acesso vitalício</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-foreground/40 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
