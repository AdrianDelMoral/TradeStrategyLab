import Image from 'next/image'

interface StrategyImageProps {
  strategyId: string
  imageType: 'thumbnail' | 'example-1' | 'example-2' | 'diagram' | 'chart-example'
  alt: string
  className?: string
  width?: number
  height?: number
}

export function StrategyImage({ 
  strategyId, 
  imageType, 
  alt, 
  className = '',
  width = 400,
  height = 300
}: StrategyImageProps) {
  const imagePath = `/images/strategies/${strategyId}/${imageType}.jpg`
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imagePath}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        onError={(e) => {
          // Fallback si la imagen no existe
          const target = e.target as HTMLImageElement
          target.src = '/images/strategies/placeholder.jpg'
        }}
      />
    </div>
  )
}

// Hook para verificar si una imagen existe
export function useStrategyImage(strategyId: string, imageType: string) {
  const imagePath = `/images/strategies/${strategyId}/${imageType}.jpg`
  
  // En un entorno real, podrías hacer una verificación más sofisticada
  // Por ahora, asumimos que las imágenes existen si se especifican
  return {
    imagePath,
    exists: true // Cambiar por verificación real si es necesario
  }
}