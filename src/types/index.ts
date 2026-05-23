export type Difficulty = 'Débutant' | 'Intermédiaire' | 'Avancé'

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  color: string
  tutorialCount?: number
}

export interface TutorialStep {
  number: number
  title: string
  content: string
  tip?: string
}

export interface Tutorial {
  id: string
  slug: string
  title: string
  category: string
  categorySlug: string
  difficulty: Difficulty
  duration: string
  description: string
  introduction: string
  materials: string[]
  tools: string[]
  safetyWarnings: string[]
  steps: TutorialStep[]
  tips: string[]
  commonMistakes: string[]
  whenToCallPro: string[]
  conclusion: string
  popular?: boolean
  image?: string
}
