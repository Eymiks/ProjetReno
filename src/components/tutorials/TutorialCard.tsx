import Link from 'next/link'
import { Clock, ChevronRight, Zap, Droplets, Paintbrush, Grid3X3, Square, Hammer, Wrench, ShieldCheck, Settings } from 'lucide-react'
import { Tutorial } from '@/types'
import DifficultyBadge from './DifficultyBadge'

const categoryIcons: Record<string, React.ReactNode> = {
  electricite: <Zap className="w-5 h-5" />,
  plomberie: <Droplets className="w-5 h-5" />,
  peinture: <Paintbrush className="w-5 h-5" />,
  sols: <Grid3X3 className="w-5 h-5" />,
  'murs-plafonds': <Square className="w-5 h-5" />,
  menuiserie: <Hammer className="w-5 h-5" />,
  outillage: <Wrench className="w-5 h-5" />,
  securite: <ShieldCheck className="w-5 h-5" />,
  entretien: <Settings className="w-5 h-5" />,
}

const categoryColors: Record<string, string> = {
  electricite: 'bg-amber-100 text-amber-700',
  plomberie: 'bg-blue-100 text-blue-700',
  peinture: 'bg-rose-100 text-rose-700',
  sols: 'bg-orange-100 text-orange-700',
  'murs-plafonds': 'bg-stone-100 text-stone-700',
  menuiserie: 'bg-yellow-100 text-yellow-700',
  outillage: 'bg-gray-100 text-gray-700',
  securite: 'bg-green-100 text-green-700',
  entretien: 'bg-teal-100 text-teal-700',
}

interface Props {
  tutorial: Tutorial
}

export default function TutorialCard({ tutorial }: Props) {
  const icon = categoryIcons[tutorial.categorySlug] ?? <Hammer className="w-5 h-5" />
  const colorClass = categoryColors[tutorial.categorySlug] ?? 'bg-gray-100 text-gray-700'

  return (
    <div className="card p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className={`p-2.5 rounded-lg ${colorClass} flex-shrink-0`}>
          {icon}
        </div>
        <DifficultyBadge difficulty={tutorial.difficulty} size="sm" />
      </div>

      <div className="flex-1">
        <p className="text-xs font-medium text-wood mb-1">{tutorial.category}</p>
        <h3 className="font-semibold text-charcoal text-base leading-snug mb-2">{tutorial.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{tutorial.description}</p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-beige">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs">
          <Clock className="w-3.5 h-3.5" />
          <span>{tutorial.duration}</span>
        </div>
        <Link
          href={`/tutoriels/${tutorial.slug}`}
          className="flex items-center gap-1 text-sm font-medium text-wood hover:text-wood-dark transition-colors"
        >
          Voir le tutoriel
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
