'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { strategies } from '../data/data'
import { ImageModal } from './ImageModal'
import {
  ArrowLeftIcon,
  TrendingUpIcon,
  CheckCircle2Icon,
  AlertCircleIcon,
  BookOpenIcon,
} from 'lucide-react'

interface StrategyDetailPageProps {
  params: {
    id: string
  }
}

export function StrategyDetailPage({ params }: StrategyDetailPageProps) {
  const router = useRouter()
  const strategy = strategies.find((s) => s.id === params.id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [modalImages, setModalImages] = useState<string[]>([])

  // Función para abrir modal con imágenes específicas de una sección
  const openModal = (images: string[], imageIndex: number) => {
    const fullImagePaths = images.map(imageName => {
      // Check if imageName already contains full path
      if (imageName.startsWith('/images/')) {
        return imageName;
      }
      return `/images/strategies/${strategy?.id}/${imageName}`;
    });
    setModalImages(fullImagePaths)
    setModalImageIndex(imageIndex)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImageIndex(0)
    setModalImages([])
  }

  if (!strategy) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <AlertCircleIcon className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Estrategia no encontrada
          </h2>
          <button
            onClick={() => router.push('/')}
            className="text-blue-400 hover:text-blue-300 mt-4"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Intermedio':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Avanzado':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Bajo':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'Medio':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
      case 'Alto':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 border-b border-slate-700/50 shadow-lg backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Volver a estrategias</span>
          </button>
          <div className="flex items-center gap-3">
            <TrendingUpIcon className="w-8 h-8 text-blue-400" />
            <div>
              <span className="text-sm text-slate-400 block">
                {strategy.category}
              </span>
              <h1 className="text-3xl font-bold text-white">
                {strategy.title}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Strategy Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
            <span className="text-sm text-slate-400 block mb-2">
              Dificultad
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium inline-block border ${getDifficultyColor(
                strategy.difficulty
              )}`}
            >
              {strategy.difficulty}
            </span>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
            <span className="text-sm text-slate-400 block mb-2">
              Nivel de Riesgo
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium inline-block border ${getRiskColor(
                strategy.riskLevel
              )}`}
            >
              {strategy.riskLevel}
            </span>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
            <span className="text-sm text-slate-400 block mb-2">Timeframe</span>
            <span className="text-lg font-semibold text-white">
              {strategy.timeframe}
            </span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BookOpenIcon className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Introducción</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {strategy.detailedContent.introduction}
          </p>
        </div>

        {/* Images Gallery */}
        {strategy.images && (strategy.images.examples || strategy.images.thumbnail) && (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Ejemplos Visuales</h2>
            
            {/* Thumbnail as main image */}
            {strategy.images.thumbnail && (
              <div className="mb-6">
                <Image
                  src={`/images/strategies/${strategy.id}/${strategy.images.thumbnail}`}
                  alt={`${strategy.title} - Imagen principal`}
                  width={800}
                  height={400}
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openModal([strategy.images?.thumbnail].filter(Boolean) as string[], 0)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            {/* Example images grid */}
            {strategy.images.examples && strategy.images.examples.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {strategy.images.examples.map((imageName, index) => (
                  <div key={index} className="group">
                    <Image
                      src={`/images/strategies/${strategy.id}/${imageName}`}
                      alt={`${strategy.title} - Ejemplo ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow cursor-pointer hover:opacity-80"
                      onClick={() => openModal(strategy.images?.examples || [], index)}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            
            {/* Diagram if exists */}
            {strategy.images.diagram && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">Diagrama</h3>
                <Image
                  src={`/images/strategies/${strategy.id}/${strategy.images.diagram}`}
                  alt={`${strategy.title} - Diagrama`}
                  width={600}
                  height={400}
                  className="w-full max-w-xl mx-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openModal([strategy.images?.diagram].filter(Boolean) as string[], 0)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* How It Works */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Cómo Funciona?
          </h2>
          <div className="space-y-3">
            {strategy.detailedContent.howItWorks.map((step, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold">
                  {index + 1}
                </div>
                <p className="text-slate-300 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules (if exists) */}
        {strategy.detailedContent.rules && (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              Reglas Específicas
            </h2>
            <div className="space-y-3">
              {strategy.detailedContent.rules.map((rule, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2Icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Examples (if exists) */}
        {strategy.detailedContent.examples && (
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Ejemplos</h2>
            <div className="space-y-3">
              {strategy.detailedContent.examples.map((example, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-slate-300">{example}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Points */}
        {strategy.detailedContent.keyPoints && (
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 mb-6">
            <h2 className="text-2xl font-bold text-white mb-4">Puntos Clave</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {strategy.detailedContent.keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-3 bg-slate-800/50 rounded-lg p-4"
                >
                  <AlertCircleIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30"
          >
            Ver Todas las Estrategias
          </button>
        </div>
      </main>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={modalImages}
        currentIndex={modalImageIndex}
        strategyTitle={strategy.title}
      />
    </div>
  )
}