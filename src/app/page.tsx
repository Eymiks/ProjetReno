import Link from 'next/link'
import { ArrowRight, Star, Shield, BookOpen } from 'lucide-react'
import { categories } from '@/data/categories'
import { getPopularTutorials } from '@/data/tutorials'
import TutorialCard from '@/components/tutorials/TutorialCard'
import CategoryCard from '@/components/tutorials/CategoryCard'

export default function HomePage() {
  const popularTutorials = getPopularTutorials()

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal via-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-wood/20 text-wood-light border border-wood/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Tutoriels pratiques et accessibles
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Rénovez votre maison,{' '}
              <span className="text-wood-light">étape par étape</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Des tutoriels clairs pour les particuliers qui veulent apprendre à réaliser leurs travaux eux-mêmes — en toute sécurité et avec confiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tutoriels" className="btn-primary text-base py-3.5 px-8 justify-center">
                Explorer les tutoriels
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/tutoriels?categorie=securite" className="inline-flex items-center gap-2 text-base py-3.5 px-8 justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-lg font-medium transition-colors duration-200">
                <Shield className="w-5 h-5" />
                Consignes de sécurité
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-beige border-b border-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: '8+', label: 'Tutoriels disponibles' },
              { value: '9', label: 'Catégories de travaux' },
              { value: '100%', label: 'Gratuit et accessible' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-wood">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Catégories de travaux</h2>
          <p className="text-gray-500 mt-1">Trouvez rapidement les tutoriels dont vous avez besoin</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(cat => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Popular tutorials */}
      <section className="bg-beige/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 text-wood fill-wood" />
                <span className="text-sm font-medium text-wood">Populaires</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Tutoriels les plus consultés</h2>
            </div>
            <Link href="/tutoriels" className="hidden sm:flex items-center gap-1 text-wood font-medium hover:text-wood-dark transition-colors">
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularTutorials.map(tuto => (
              <TutorialCard key={tuto.id} tutorial={tuto} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/tutoriels" className="btn-primary">
              Voir tous les tutoriels <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Safety callout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-amber-100 p-4 rounded-xl flex-shrink-0">
            <Shield className="w-8 h-8 text-amber-700" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-charcoal mb-2">La sécurité avant tout</h3>
            <p className="text-gray-600 leading-relaxed">
              {"Certains travaux comme l'électricité ou le gaz doivent respecter des normes strictes et nécessitent parfois l'intervention d'un professionnel certifié. Chaque tutoriel indique clairement les limites à ne pas dépasser et quand faire appel à un expert."}
            </p>
          </div>
          <Link href="/tutoriels?categorie=securite" className="btn-secondary flex-shrink-0">
            En savoir plus
          </Link>
        </div>
      </section>
    </div>
  )
}
