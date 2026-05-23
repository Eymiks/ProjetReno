import Link from 'next/link'
import { Zap, Droplets, Paintbrush, Grid3X3, Square, Hammer, Wrench, ShieldCheck, Settings, ChevronRight } from 'lucide-react'
import { Category } from '@/types'

const icons: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Paintbrush: <Paintbrush className="w-6 h-6" />,
  Grid3X3: <Grid3X3 className="w-6 h-6" />,
  Square: <Square className="w-6 h-6" />,
  Hammer: <Hammer className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
}

const colorMap: Record<string, string> = {
  amber: 'bg-amber-100 text-amber-700 group-hover:bg-amber-200',
  blue: 'bg-blue-100 text-blue-700 group-hover:bg-blue-200',
  rose: 'bg-rose-100 text-rose-700 group-hover:bg-rose-200',
  orange: 'bg-orange-100 text-orange-700 group-hover:bg-orange-200',
  stone: 'bg-stone-100 text-stone-700 group-hover:bg-stone-200',
  yellow: 'bg-yellow-100 text-yellow-700 group-hover:bg-yellow-200',
  gray: 'bg-gray-100 text-gray-700 group-hover:bg-gray-200',
  green: 'bg-green-100 text-green-700 group-hover:bg-green-200',
  teal: 'bg-teal-100 text-teal-700 group-hover:bg-teal-200',
}

interface Props {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  const icon = icons[category.icon] ?? <Hammer className="w-6 h-6" />
  const colorClass = colorMap[category.color] ?? 'bg-gray-100 text-gray-700'

  return (
    <Link
      href={`/tutoriels?categorie=${category.slug}`}
      className="group card p-5 flex items-start gap-4 hover:border-sand"
    >
      <div className={`p-3 rounded-xl ${colorClass} transition-colors flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-charcoal group-hover:text-wood transition-colors">{category.name}</h3>
        <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{category.description}</p>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-wood transition-colors flex-shrink-0 mt-1" />
    </Link>
  )
}
