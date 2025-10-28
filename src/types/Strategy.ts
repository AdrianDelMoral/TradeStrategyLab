export interface Strategy {
  id: string
  title: string
  mainPicture: string
  category: string
  description: string
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado'
  timeframe: string
  riskLevel: 'Bajo' | 'Medio' | 'Alto'
  images?: {
    thumbnail?: string
    examples?: string[]
    diagram?: string
  }
  detailedContent: {
    introduction: string
    howItWorks: string[]
    rules?: string[]
    examples?: string[]
    keyPoints?: string[]
  }
}