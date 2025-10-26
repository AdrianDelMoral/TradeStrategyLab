# Guía de Imágenes para Estrategias de Trading

## 📋 Información Actualizada con Contenido de MagicPatterns

He actualizado todas las estrategias con la información traducida y organizada según las imágenes proporcionadas del contenido de MagicPatterns.

## Estructura de Carpetas Creada

Se ha creado una carpeta específica para cada estrategia en:
```
public/images/strategies/[strategy-id]/
```

## 🎯 Referencias de Imágenes del Contenido Original

Cada estrategia ahora tiene referencias específicas a las imágenes del contenido original:

### Tipos de Imágenes por Estrategia:

#### 1. **Fibonacci Retracement** (`fibonacci-retracement/`)
- `image-2.png` - Thumbnail principal
- `image-3.png` - Identificación de swing low/high
- `image-4.png` - Aplicación de la herramienta
- `image-5.png` - Retroceso al nivel 0.382
- `image-6.png` - Reversión desde nivel Fibonacci

#### 2. **Breakout Patterns** (`breakout-patterns/`)
- `image-7.png` - Thumbnail principal
- `image-8.png` - Movimiento súbito
- `image-9.png` - Período de consolidación
- `image-10.png` - Precio consolidando
- `image-11.png` - Movimiento brusco
- `image-12.png` - Breakout identificado

#### 3. **Reversal Patterns** (`reversal-patterns/`)
- `image-17.png` - Thumbnail principal
- `image-18.png` - Movimiento opuesto
- `image-19.png` - Identificación en gráfico
- `image-20.png` - Patrones notables

#### 4. **Elliott Wave** (`elliott-wave/`)
- `image-24.png` - Thumbnail principal
- `image-25.png` - Secuencia de ondas
- `image-26.png` - Etiquetado 1-2-3-4-5, A-B-C
- `image-27.png` - Reglas específicas
- `image-28.png` - Ejemplo en acción

#### 5. **Fair Value Gap** (`fair-value-gap/`)
- `image-33.png` - Thumbnail principal
- `image-34.png` - Gap significativo
- `image-35.png` - Dibujo del rectángulo
- `image-36.png` - Posicionamiento correcto
- `image-37.png` - Nivel como imán

## 📝 Nomenclatura de Archivos Actualizada

Basándome en el contenido proporcionado, las imágenes siguen esta nomenclatura:
- `image-[número].png` - Según la referencia del contenido original
- Todas las referencias están actualizadas en el código TypeScript

## Estrategias y Carpetas Creadas:

### Análisis Técnico:
- `fibonacci-retracement/` - Imágenes de retrocesos de Fibonacci
- `elliott-wave/` - Diagramas de ondas de Elliott
- `harmonic-patterns/` - Patrones armónicos (Bat, Gartley, etc.)
- `support-resistance/` - Niveles de soporte y resistencia
- `trend-lines/` - Líneas de tendencia
- `gann-angles/` - Ángulos de Gann
- `divergence/` - Ejemplos de divergencias

### Price Action:
- `fair-value-gap/` - Fair Value Gaps
- `candlestick-patterns/` - Patrones de velas japonesas
- `supply-demand/` - Zonas de oferta y demanda
- `market-structure/` - Estructura de mercado
- `bos/` - Break of Structure
- `choch/` - Change of Character

### Ruptura:
- `breakout-patterns/` - Patrones de ruptura

### Reversión:
- `reversal-patterns/` - Patrones de reversión

### Indicadores:
- `heikin-ashi/` - Gráficos Heikin Ashi
- `renko/` - Gráficos Renko
- `dynamic-support-resistance/` - Soporte/Resistencia dinámicos
- `momentum-indicators/` - Indicadores de momentum (MACD, etc.)
- `oscillators/` - Osciladores (RSI, Estocástico)
- `volume/` - Indicadores de volumen

### Análisis Alternativo:
- `moon-phases/` - Fases lunares (opcional)

## Cómo usar las imágenes en el código:

```tsx
// Ejemplo para mostrar imagen en la estrategia
<img 
  src={`/images/strategies/${strategy.id}/thumbnail.jpg`} 
  alt={strategy.title}
  className="w-full h-48 object-cover rounded-lg"
/>
```

## Tamaños Recomendados:
- **Thumbnail**: 400x300px (para cards de estrategias)
- **Examples**: 800x600px (para ejemplos detallados)
- **Diagrams**: 600x400px (para diagramas explicativos)

## Formatos Soportados:
- JPG (recomendado para fotografías/capturas)
- PNG (recomendado para diagramas con transparencia)
- WebP (para optimización avanzada)