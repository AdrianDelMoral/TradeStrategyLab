'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { strategies, categories } from '../data/data'
import {
  TrendingUpIcon,
  BarChart3Icon,
  CandlestickChartIcon,
  ArrowRightIcon,
  HomeIcon,
} from 'lucide-react'

export function TradingStrategiesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const getInitialCategory = () => {
    const category = searchParams.get('category')
    return category && categories.includes(category) ? category : 'Todas'
  }
  
  const [selectedCategory, setSelectedCategory] = useState(getInitialCategory)

  const filteredStrategies =
    selectedCategory === 'Todas'
      ? strategies
      : strategies.filter((s) => s.category === selectedCategory)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante':
        return 'bg-green-500/20 text-green-400'
      case 'Intermedio':
        return 'bg-yellow-500/20 text-yellow-400'
      case 'Avanzado':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Bajo':
        return 'bg-blue-500/20 text-blue-400'
      case 'Medio':
        return 'bg-orange-500/20 text-orange-400'
      case 'Alto':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-gray-500/20 text-gray-400'
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-slate-700/50 shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TrendingUpIcon className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Estrategias de Trading
                </h1>
                <p className="text-slate-400 mt-1">
                  Colección completa de estrategias probadas
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all cursor-pointer"
            >
              <HomeIcon className="w-4 h-4" />
              Inicio
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStrategies.map((strategy) => (
            <div
              key={strategy.id}
              onClick={() => router.push(`/strategy/${strategy.id}`)}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer border border-slate-700/50 overflow-hidden group flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <CandlestickChartIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {strategy.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {strategy.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {strategy.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Dificultad:</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(
                        strategy.difficulty
                      )}`}
                    >
                      {strategy.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Riesgo:</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getRiskColor(
                        strategy.riskLevel
                      )}`}
                    >
                      {strategy.riskLevel}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Timeframe:</span>
                    <span className="text-xs font-medium text-slate-300">
                      {strategy.timeframe}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/50 px-6 py-3 border-t border-slate-700/50 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-400 font-medium group-hover:text-blue-300">
                    Ver detalles
                  </span>
                  <ArrowRightIcon className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStrategies.length === 0 && (
          <div className="text-center py-12">
            <BarChart3Icon className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-400 text-lg">
              No hay estrategias en esta categoría
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <TrendingUpIcon className="w-8 h-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold text-white">Trade Strategy Lab</span>
              </div>
              <p className="text-slate-400 text-sm">
                Tu plataforma educativa completa para dominar el arte del trading.
              </p>
            </div>

            {/* Quick Stats */}
            <div>
              <h4 className="text-white font-semibold mb-4">Biblioteca</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-400">
                  📚 {strategies.length} Estrategias Documentadas
                </li>
                <li className="text-slate-400">
                  🎯 {categories.length - 1} Categorías Especializadas
                </li>
                <li className="text-slate-400">
                  🟢 {strategies.filter(s => s.difficulty === 'Principiante').length} Para Principiantes
                </li>
                <li className="text-slate-400">
                  🟡 {strategies.filter(s => s.difficulty === 'Intermedio').length} Nivel Intermedio
                </li>
                <li className="text-slate-400">
                  🔴 {strategies.filter(s => s.difficulty === 'Avanzado').length} Nivel Avanzado
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                    🏠 Página Principal
                  </Link>
                </li>
                <li>
                  <Link href="/strategies?category=Análisis Técnico" className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                    📊 Análisis Técnico
                  </Link>
                </li>
                <li>
                  <Link href="/strategies?category=Price Action" className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                    💹 Price Action
                  </Link>
                </li>
                <li>
                  <Link href="/strategies?category=Indicadores" className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                    📈 Indicadores
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-700/50 pt-6 text-center">
            <p className="text-slate-500 text-xs">
              © 2025 Trade Strategy Lab • Contenido educativo sobre trading • 
              ⚠️ El trading conlleva riesgos financieros
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}