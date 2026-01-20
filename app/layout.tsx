import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-display'
});

export const metadata: Metadata = {
  title: 'Entre Gestos e Silêncios | Clareza Emocional para Relacionamentos',
  description: 'Descubra como transformar confusão emocional em clareza. Um guia criado pelo psicólogo Matheus Caum para quem sente que algo está estranho no relacionamento.',
  keywords: ['relacionamentos', 'inteligência emocional', 'psicologia', 'autoconhecimento', 'clareza emocional'],
  authors: [{ name: 'Matheus Caum', url: 'https://entre-gestos.vercel.app' }],
  openGraph: {
    title: 'Entre Gestos e Silêncios | Clareza Emocional',
    description: 'Você não está exagerando. Você está reagindo. Descubra como transformar confusão em clareza emocional.',
    type: 'website',
    locale: 'pt_BR',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#07101e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="tiktok-pixel" strategy="beforeInteractive">
          {`!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('D5M6TD3C77U4MKNK4DN0');
  ttq.page();
}(window, document, 'ttq');`}
        </Script>
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
