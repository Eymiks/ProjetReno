'use client'
import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { tutorials } from '@/data/tutorials'
import { categories } from '@/data/categories'
import TutorialCard from '@/components/tutorials/TutorialCard'
import { Difficulty } from '@/types'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const difficulties: Difficulty[] = ['Débutant', 'Intermédiaire', 'Avancé']

function TutorielsContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('categorie') ?? ''

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | ''>('')

  const filtered = useMemo(() => {
    return tutorials.filter(t => {
      const matchSearch = !search ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase())
      const matchCategory = !selectedCategory || t.categorySlug === selectedCategory
      const matchDifficulty = !selectedDifficulty || t.difficulty === selectedDifficulty
      return matchSearch && matchCategory && matchDifficulty
    })
  }, [search, selectedCategory, selectedDifficulty])

  const hasFilters = search || selectedCategory || selectedDifficulty
  const clearFilters = () => {
    setSearch('')
    setSelectedCategory('')
    setSelectedDifficulty('')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2">Tous les tutoriels</h1>
        <p className="text-gray-500">{tutorials.length} tutoriels disponibles pour vous aider dans vos travaux</p>
      </div>

      {/* Filters */}
      <div className="bg-white border border-beige rounded-xl p-5 mb-8 space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
          <SlidersHorizontal className="w-4 h-4" />
          Filtres
          {hasFilters && (
            <button onClick={clearFilters} className="ml-auto flex items-center gap-1 text-wood hover:text-wood-dark text-xs">
              <X className="w-3.5 h-3.5" /> Effacer les filtres
            </button>
          )}
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un tutoriel..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-beige rounded-lg text-sm focus:outline-none focus:border-wood focus:ring-1 focus:ring-wood bg-cream"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              !selectedCategory ? 'bg-wood text-white' : 'bg-beige text-gray-600 hover:bg-sand'
            }`}
          >
            Toutes les catégories
          </button>
          {categories.map(cat => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(selectedCategory === cat.slug ? '' : cat.slug)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat.slug ? 'bg-wood text-white' : 'bg-beige text-gray-600 hover:bg-sand'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedDifficulty('')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              !selectedDifficulty ? 'bg-charcoal text-white' : 'bg-beige text-gray-600 hover:bg-sand'
            }`}
          >
            Tous niveaux
          </button>
          {difficulties.map(d => (
            <button
              key={d}
              onClick={() => setSelectedDifficulty(selectedDifficulty === d ? '' : d)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedDifficulty === d ? 'bg-charcoal text-white' : 'bg-beige text-gray-600 hover:bg-sand'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">Aucun tutoriel ne correspond à votre recherche.</p>
          <button onClick={clearFilters} className="mt-4 text-wood hover:text-wood-dark font-medium">
            Effacer les filtres
          </button>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-400 mb-4">{filtered.length} tutoriel{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(tuto => (
              <TutorialCard key={tuto.id} tutorial={tuto} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function TutorielsPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-12 text-gray-500">Chargement...</div>}>
      <TutorielsContent />
    </Suspense>
  )
}
