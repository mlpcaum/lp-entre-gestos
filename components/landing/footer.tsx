"use client"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-foreground mb-1">Entre Gestos e Silêncios</p>
            <p className="text-sm text-muted-foreground">Por Matheus Caum - CRP 08/40928</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            <a href="mailto:contato@entregestos.com" className="hover:text-foreground transition-colors">Contato</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Este conteúdo é protegido por direitos autorais e destinado exclusivamente ao uso pessoal do usuário.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Este material tem caráter educativo e não substitui acompanhamento psicológico profissional.
          </p>
        </div>
      </div>
    </footer>
  )
}
