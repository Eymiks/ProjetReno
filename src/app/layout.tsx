import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | RénoFacile',
    default: 'RénoFacile — Tutoriels de rénovation maison',
  },
  description: 'Des tutoriels clairs et pratiques pour réaliser vos travaux de rénovation en toute sécurité. Plomberie, électricité, peinture, sols et plus encore.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
