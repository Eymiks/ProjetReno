import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Clock, ChevronRight, Package, Wrench, AlertTriangle, Lightbulb, XCircle, PhoneCall, CheckCircle, ArrowLeft } from 'lucide-react'
import { tutorials } from '@/data/tutorials'
import { getTutorialBySlug } from '@/data/tutorials'
import DifficultyBadge from '@/components/tutorials/DifficultyBadge'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return tutorials.map(t => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tutorial = getTutorialBySlug(params.slug)
  if (!tutorial) return {}
  return {
    title: tutorial.title,
    description: tutorial.description,
  }
}

const isSensitiveCategory = (slug: string) => ['electricite', 'plomberie'].includes(slug)

export default function TutorialDetailPage({ params }: Props) {
  const tutorial = getTutorialBySlug(params.slug)
  if (!tutorial) notFound()

  const sensitive = isSensitiveCategory(tutorial.categorySlug)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-wood transition-colors">Accueil</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/tutoriels" className="hover:text-wood transition-colors">Tutoriels</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/tutoriels?categorie=${tutorial.categorySlug}`} className="hover:text-wood transition-colors">{tutorial.category}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-charcoal truncate">{tutorial.title}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-sm font-medium text-wood bg-wood/10 px-3 py-1 rounded-full">{tutorial.category}</span>
          <DifficultyBadge difficulty={tutorial.difficulty} />
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            {tutorial.duration}
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">{tutorial.title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">{tutorial.introduction}</p>
      </div>

      {/* Safety warning for sensitive categories */}
      {sensitive && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-amber-800 mb-1">Consignes de sécurité importantes</h2>
              <ul className="space-y-1.5">
                {tutorial.safetyWarnings.map((w, i) => (
                  <li key={i} className="text-amber-900 text-sm flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">•</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Materials & Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-white border border-beige rounded-xl p-5">
          <div className="flex items-center gap-2 font-semibold text-charcoal mb-3">
            <Package className="w-5 h-5 text-wood" />
            Matériel nécessaire
          </div>
          <ul className="space-y-2">
            {tutorial.materials.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-beige rounded-xl p-5">
          <div className="flex items-center gap-2 font-semibold text-charcoal mb-3">
            <Wrench className="w-5 h-5 text-wood" />
            Outils nécessaires
          </div>
          <ul className="space-y-2">
            {tutorial.tools.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Safety warnings for non-sensitive (discrete) */}
      {!sensitive && tutorial.safetyWarnings.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1 text-sm">Précautions</p>
              <ul className="space-y-1">
                {tutorial.safetyWarnings.map((w, i) => (
                  <li key={i} className="text-amber-800 text-sm">• {w}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Steps */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
          <span className="bg-wood text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">✓</span>
          Étapes détaillées
        </h2>
        <div className="space-y-4">
          {tutorial.steps.map((step) => (
            <div key={step.number} className="bg-white border border-beige rounded-xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-wood/10 text-wood rounded-full flex items-center justify-center font-bold text-sm">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-charcoal mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.content}</p>
                {step.tip && (
                  <div className="mt-3 flex items-start gap-2 bg-sage/10 rounded-lg p-3">
                    <Lightbulb className="w-4 h-4 text-sage-light flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-sage-light font-medium">{step.tip}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips & Common mistakes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div className="bg-sage/10 border border-sage/20 rounded-xl p-5">
          <div className="flex items-center gap-2 font-semibold text-sage mb-3">
            <Lightbulb className="w-5 h-5" />
            Conseils pratiques
          </div>
          <ul className="space-y-2">
            {tutorial.tips.map((t, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-sage font-bold">→</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <div className="flex items-center gap-2 font-semibold text-red-700 mb-3">
            <XCircle className="w-5 h-5" />
            Erreurs fréquentes à éviter
          </div>
          <ul className="space-y-2">
            {tutorial.commonMistakes.map((m, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-red-400 font-bold">✗</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* When to call a pro */}
      {tutorial.whenToCallPro.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <div className="flex items-center gap-2 font-semibold text-blue-800 mb-3">
            <PhoneCall className="w-5 h-5" />
            Quand faire appel à un professionnel ?
          </div>
          <ul className="space-y-2">
            {tutorial.whenToCallPro.map((w, i) => (
              <li key={i} className="text-sm text-blue-900 flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                {w}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-wood/5 to-wood/10 border border-wood/20 rounded-xl p-6 mb-10">
        <h2 className="font-bold text-charcoal mb-2">En résumé</h2>
        <p className="text-gray-700 leading-relaxed">{tutorial.conclusion}</p>
      </div>

      {/* Back link */}
      <div className="flex items-center justify-between border-t border-beige pt-8">
        <Link href="/tutoriels" className="flex items-center gap-2 text-wood hover:text-wood-dark font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour aux tutoriels
        </Link>
        <Link href="/tutoriels" className="btn-primary text-sm py-2">
          Autres tutoriels
        </Link>
      </div>
    </div>
  )
}
