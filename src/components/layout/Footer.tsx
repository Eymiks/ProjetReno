import Link from 'next/link'
import { Hammer } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <Hammer className="w-5 h-5 text-wood-light" />
              <span>RénoFacile</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Des tutoriels clairs et pratiques pour réaliser vos travaux de rénovation en toute sécurité.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Catégories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tutoriels?categorie=electricite" className="hover:text-wood-light transition-colors">Électricité</Link></li>
              <li><Link href="/tutoriels?categorie=plomberie" className="hover:text-wood-light transition-colors">Plomberie</Link></li>
              <li><Link href="/tutoriels?categorie=peinture" className="hover:text-wood-light transition-colors">Peinture</Link></li>
              <li><Link href="/tutoriels?categorie=sols" className="hover:text-wood-light transition-colors">Sols</Link></li>
              <li><Link href="/tutoriels?categorie=menuiserie" className="hover:text-wood-light transition-colors">Menuiserie</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tutoriels" className="hover:text-wood-light transition-colors">Tous les tutoriels</Link></li>
            </ul>
            <div className="mt-4 p-3 bg-amber-900/30 rounded-lg border border-amber-700/30">
              <p className="text-xs text-amber-200">
                En cas de doute sur votre installation, consultez toujours un professionnel qualifié.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} RénoFacile — Les informations fournies sont à titre indicatif. Certains travaux nécessitent l&apos;intervention d&apos;un professionnel certifié.</p>
        </div>
      </div>
    </footer>
  )
}
