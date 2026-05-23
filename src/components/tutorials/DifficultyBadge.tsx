import { Difficulty } from '@/types'

interface Props {
  difficulty: Difficulty
  size?: 'sm' | 'md'
}

export default function DifficultyBadge({ difficulty, size = 'md' }: Props) {
  const classes = {
    'Débutant': 'bg-green-100 text-green-800',
    'Intermédiaire': 'bg-amber-100 text-amber-800',
    'Avancé': 'bg-red-100 text-red-800',
  }
  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1'

  return (
    <span className={`${classes[difficulty]} ${sizeClass} rounded-full font-medium`}>
      {difficulty}
    </span>
  )
}
