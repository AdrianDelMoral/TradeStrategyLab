'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { strategies, categories } from '../data/data'
import {
  TrendingUpIcon,
  BookOpenIcon,
  BarChart3Icon,
  GraduationCapIcon,
  StarIcon,
  ArrowRightIcon,
  CandlestickChartIcon,
} from 'lucide-react'

export function LandingPage() {
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Análisis Técnico':
        return BarChart3Icon
      case 'Price Action':
        return CandlestickChartIcon
      case 'Indicadores':
        return TrendingUpIcon
      default:
        return BookOpenIcon
    }
  }

  const featuredStrategies = strategies.slice(0, 6)
  const strategiesByCategory = categories.slice(1).map(category => ({
    name: category,
    count: strategies.filter(s => s.category === category).length,
    strategies: strategies.filter(s => s.category === category).slice(0, 3)
  }))

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-blue-500/10 rounded-2xl">
                <TrendingUpIcon className="w-16 h-16 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Trade Strategy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {' '}Lab
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Domina el arte del trading con nuestra colección completa de{' '}
              <span className="text-blue-400 font-semibold">estrategias probadas</span>{' '}
              y explicadas paso a paso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#estrategias"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105 cursor-pointer"
              >
                Explorar Estrategias
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                href="#categorias"
                className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-slate-800/50 cursor-pointer"
              >
                Ver Categorías
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{strategies.length}</div>
              <div className="text-slate-400">Estrategias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">{categories.length - 1}</div>
              <div className="text-slate-400">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                {strategies.filter(s => s.difficulty === 'Principiante').length}
              </div>
              <div className="text-slate-400">Para Principiantes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-slate-400">Gratuito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Strategies */}
      <section id="estrategias" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Estrategias Destacadas
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Descubre las estrategias más populares y efectivas del trading moderno
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredStrategies.map((strategy) => (
              <Link
                key={strategy.id}
                href={`/strategy/${strategy.id}`}
                className="group block"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all cursor-pointer border border-slate-700/50 overflow-hidden group-hover:border-blue-500/30 transform hover:scale-105">
                  {/* Strategy Image */}
                  <div className="h-48 relative overflow-hidden">
                    {strategy.images?.thumbnail ? (
                      <Image
                        src={`/images/strategies/${strategy.id}/${strategy.images.thumbnail}`}
                        alt={strategy.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient if image fails to load
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                          target.parentElement!.classList.add('bg-gradient-to-br', 'from-blue-500/20', 'to-purple-500/20');
                          const fallback = target.parentElement!.querySelector('.fallback-content');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : (
                      <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 h-full flex items-center justify-center">
                        <CandlestickChartIcon className="w-16 h-16 text-blue-400/50" />
                      </div>
                    )}
                    <div className="fallback-content hidden absolute inset-0 flex items-center justify-center">
                      <CandlestickChartIcon className="w-16 h-16 text-blue-400/50" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium text-slate-400 bg-slate-900/50 px-2 py-1 rounded-full">
                        {strategy.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {strategy.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {strategy.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(strategy.difficulty)}`}
                      >
                        {strategy.difficulty}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getRiskColor(strategy.riskLevel)}`}
                      >
                        Riesgo {strategy.riskLevel}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-slate-500">
                      <span>Timeframe: {strategy.timeframe}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/strategies"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
              Ver Todas las Estrategias
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categorias" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Explora por Categorías
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Organizado por tipo de análisis para facilitar tu aprendizaje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategiesByCategory.map((category) => {
              const IconComponent = getCategoryIcon(category.name)
              return (
                <div
                  key={category.name}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-slate-400 text-sm">{category.count} estrategias</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {category.strategies.map((strategy) => (
                      <Link
                        key={strategy.id}
                        href={`/strategy/${strategy.id}`}
                        className="block text-slate-300 hover:text-blue-400 text-sm transition-colors cursor-pointer"
                      >
                        • {strategy.title}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`/strategies?category=${encodeURIComponent(category.name)}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center cursor-pointer"
                  >
                    Ver todas
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/20">
            <GraduationCapIcon className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para Dominar el Trading?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Accede a conocimiento de trading de calidad profesional y lleva tus habilidades al siguiente nivel
            </p>
            <Link
              href="/strategies"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center cursor-pointer"
            >
              Comenzar Ahora
              <StarIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <TrendingUpIcon className="w-8 h-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold text-white">Trade Strategy Lab</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Tu plataforma educativa completa para dominar el arte del trading. 
                Estrategias probadas, análisis detallados y herramientas prácticas 
                para traders de todos los niveles.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/strategies" className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                    Todas las Estrategias
                  </Link>
                </li>
                <li>
                  <Link href="/strategies?category=Análisis Técnico" className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                    Análisis Técnico
                  </Link>
                </li>
                <li>
                  <Link href="/strategies?category=Price Action" className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer">
                    Price Action
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-white font-semibold mb-4">Categorías</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-slate-400">
                    {strategies.filter(s => s.difficulty === 'Principiante').length} Estrategias para Principiantes
                  </span>
                </li>
                <li>
                  <span className="text-slate-400">
                    {strategies.filter(s => s.difficulty === 'Intermedio').length} Estrategias Intermedias
                  </span>
                </li>
                <li>
                  <span className="text-slate-400">
                    {strategies.filter(s => s.difficulty === 'Avanzado').length} Estrategias Avanzadas
                  </span>
                </li>
                <li>
                  <span className="text-slate-400">
                    {categories.length - 1} Categorías Temáticas
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-700/50 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 Trade Strategy Lab. Plataforma educativa para trading. 
              Todo el contenido es con fines informativos y educativos únicamente.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              ⚠️ El trading conlleva riesgos. Nunca inviertas más de lo que puedas permitirte perder.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}