'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  strategyTitle: string
}

export function ImageModal({ 
  isOpen, 
  onClose, 
  images, 
  currentIndex, 
  strategyTitle
}: ImageModalProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex)

  useEffect(() => {
    setActiveIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, activeIndex, onClose, goToNext, goToPrevious])

  const goToImage = (index: number) => {
    setActiveIndex(index)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full flex flex-col max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 z-10">
          <div className="text-white">
            <h2 className="text-xl font-bold">{strategyTitle}</h2>
            <p className="text-slate-400 text-sm">
              {activeIndex + 1} de {images.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-slate-300 transition-colors bg-black/50 rounded-full"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Navigation Arrows - Desktop & Mobile */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 md:left-4 z-10 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full transition-all transform hover:scale-110 shadow-lg"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 z-10 p-3 bg-black/70 hover:bg-black/90 text-white rounded-full transition-all transform hover:scale-110 shadow-lg"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              >
                <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Image */}
          <Image
            src={images[activeIndex]}
            alt={`${strategyTitle} - Imagen ${activeIndex + 1}`}
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/strategies/placeholder/strategy-overview.png';
            }}
          />
        </div>

        {/* Thumbnail Carousel */}
        {images.length > 1 && (
          <div className="mt-4 px-4">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 relative rounded-lg overflow-hidden transition-all ${
                    index === activeIndex
                      ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-black transform scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/strategies/placeholder/strategy-overview.png';
                    }}
                  />
                  {index === activeIndex && (
                    <div className="absolute inset-0 bg-blue-400/20 border-2 border-blue-400 rounded-lg" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Swipe Indicators */}
        {images.length > 1 && (
          <div className="flex justify-center mt-2 md:hidden">
            <div className="flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-blue-400 w-6'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}