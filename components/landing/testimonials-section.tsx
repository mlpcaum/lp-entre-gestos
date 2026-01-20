"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Finalmente entendi que não era frescura minha. O livro me ajudou a nomear o que eu sentia há tanto tempo.",
    author: "Carolina, 32 anos",
    rating: 5
  },
  {
    quote: "Li chorando, me reconhecendo em cada página. Senti que alguém finalmente me entendia.",
    author: "Juliana, 28 anos",
    rating: 5
  },
  {
    quote: "A forma como o livro é entregue, um capítulo por dia, fez toda diferença. Tive tempo para absorver cada insight.",
    author: "Mariana, 35 anos",
    rating: 5
  },
  {
    quote: "O capítulo sobre diferenciar reações de exageros foi um divisor de águas. Me deu coragem para tomar decisões que eu adiava há meses.",
    author: "Amanda, 29 anos",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-card/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(145,255,206,0.08),transparent_60%)]" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Depoimentos</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            O que outras leitoras sentiram
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/20 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                {`"${testimonial.quote}"`}
              </p>
              
              {/* Author */}
              <p className="text-sm text-muted-foreground">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
