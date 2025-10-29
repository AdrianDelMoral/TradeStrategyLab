import { Strategy } from '../types/Strategy'

export const strategies: Strategy[] = [
  {
    id: 'fibonacci-retracement',
    title: 'Retroceso de Fibonacci',
    mainPicture: 'fibonacci-levels.png',
    category: 'Análisis Técnico',
    description:
      'Herramienta que muestra líneas horizontales basadas en números de Fibonacci para identificar niveles clave de soporte y resistencia.',
    difficulty: 'Intermedio',
    timeframe: '1H - 4H',
    riskLevel: 'Medio',
    images: {
      thumbnail: 'swing-high-low.png',
      examples: [
        'fibonacci-principal-ejemplo.png',
        'fibonacci-tool.png',
        'pullback-level.png',
        'buy-entry.png'
      ],
    },
    detailedContent: {
      introduction:
        'Es una herramienta que muestra líneas horizontales basadas en los números de Fibonacci. Estas líneas pueden ser usadas como niveles clave de soporte y resistencia. Y también para identificar posibles puntos de entrada en una tendencia existente.',
      howItWorks: [
        'Es una herramienta que muestra líneas horizontales basadas en los números de Fibonacci.',
        'Estas líneas pueden utilizarse como niveles clave de soporte y resistencia. Para utilizar la herramienta de retroceso de Fibonacci. Primero, identifica un mínimo y un máximo en un gráfico y a continuación, arrastra la herramienta desde el mínimo hasta el máximo.',
        'A continuación, espera a que el precio retroceda hasta uno de estos niveles, idealmente el nivel de Fibonacci 0,382, ya que es el nivel más común.',
        'Cuando el precio tiende a revertirse desde ese nivel, si el precio alcanza ese nivel, podría ser una buena oportunidad de compra, pero hay que tener en cuenta que el precio también podría revertirse desde otros niveles de Fibonacci.'

      ],
      keyPoints: [
        'El nivel 0.382 es el más común donde el precio tiende a revertir',
        'El precio también puede revertir desde otros niveles de Fibonacci',
        'Útil para identificar puntos de entrada en tendencias establecidas',
        'Combinar con otros indicadores para mayor confirmación',
      ],
    },
  },
  {
    id: 'breakout-patterns',
    title: 'Patrones de Ruptura',
    mainPicture: 'breakout-concept.png',
    category: 'Ruptura',
    description:
      'Movimiento repentino y significativo del precio en una dirección, generalmente después de un período de consolidación.',
    difficulty: 'Intermedio',
    timeframe: '15M - 1H',
    riskLevel: 'Alto',
    images: {
      thumbnail: 'breakout-concept.png',
      examples: [
        'breakout-principal-ejemplo.png',
        'consolidation.png',
        'consolidation-example.png',
        'breakout-label.png',
      ],
      diagram: 'traders-guide.png'
    },
    detailedContent: {
      introduction:
        'Los patrones de ruptura en trading indican movimientos repentinos del precio tras períodos de consolidación. Estos patrones son cruciales para anticipar movimientos significativos en el mercado.',
      howItWorks: [
        'Es cuando el precio hace un movimiento repentino y significativo hacia una dirección.',
        'Esto generalmente se forma después de que el mercado hace un período de consolidación.',
        'Por ejemplo: aquí podemos ver que el precio se está consolidando. Entonces, de repente, se desplaza bruscamente hacia abajo.',
        'Esto se denomina Ruptura.',
      ],
      examples: [
        'Banderas',
        'Triángulos (ascendente, descendente, simétrico)',
        'Rectángulos',
        'Cuñas',
      ],
      keyPoints: [
        'Para aprovechar esto, los traders usan patrones específicos como guía',
        'Los patrones más notables de ruptura incluyen triángulos, banderas, patrones de consolidación y rectángulos',
        'Esperar confirmación de rotura con volumen',
        'Las falsas roturas son comunes',
      ],
    },
  },
  {
    id: 'reversal-patterns',
    title: 'Patrones de Reversión',
    mainPicture: 'reversal-concept.png',
    category: 'Reversión',
    description:
      'Patrones que indican cuando el precio puede moverse en dirección opuesta a la tendencia actual.',
    difficulty: 'Intermedio',
    timeframe: '4H - 1D',
    riskLevel: 'Medio',
    images: {
      thumbnail: 'reversal-concept.png',
      examples: ['opposite-direction.png', 'pattern-identification.png'],
      diagram: 'head-shoulders.png'
    },
    detailedContent: {
      introduction:
        'Es cuando el precio se mueve en dirección opuesta a la tendencia actual y forma una contra-tendencia. Patrones específicos pueden ser identificados en un gráfico que pueden ayudar a los traders a predecir reversiones antes de que ocurran.',
      howItWorks: [
        'Identificar la tendencia actual',
        'Buscar patrones específicos de reversión en el gráfico',
        'Esperar confirmación del patrón',
        'Entrar en la dirección de la nueva tendencia',
      ],
      examples: [
        'Doble techo / Doble suelo',
        'Cabeza y hombros',
        'Hombro-cabeza-hombro invertido',
        'Triple techo / Triple suelo',
      ],
      keyPoints: [
        'Los patrones más notables de reversión incluyen varios tipos de formaciones',
        'Requieren confirmación antes de operar',
        'Más confiables en timeframes mayores',
        'Combinar con indicadores de momentum',
      ],
    },
  },
  {
    id: 'elliott-wave',
    title: 'Ondas de Elliott',
    mainPicture: 'wave-theory.png',
    category: 'Análisis Técnico',
    description:
      'Teoría que sugiere que las tendencias del mercado se mueven en series de cinco ondas antes de revertir.',
    difficulty: 'Avanzado',
    timeframe: '4H - 1D',
    riskLevel: 'Alto',
    images: {
      thumbnail: 'wave-theory.png',
      examples: ['five-waves.png', 'wave-sequence.png', 'wave-4-rule.png', 'wave-example-123.png', 'wave-4-pullback.png', 'buy-entry-wave.png'],
      diagram: 'wave-2-rule.png'
    },
    detailedContent: {
      introduction:
        'Es una teoría que sugiere que las tendencias del mercado se mueven en una serie de cinco ondas antes de revertir y formar otro conjunto de ondas en dirección opuesta. Al entender la secuencia de ondas de Elliott, los traders pueden predecir hacia dónde se dirige el precio.',
      howItWorks: [
        'Siguiendo el patrón en un gráfico, podemos etiquetar cada punto de las ondas como 1-2-3-4-5 y A-B-C',
        'El patrón se compone de 5 ondas impulsivas (1-2-3-4-5)',
        'Seguidas de 3 ondas correctivas (A-B-C)',
        'La Onda 4 usualmente retrocede al nivel 0.382 de Fibonacci antes de continuar hacia arriba',
        'Podemos usar esto como una entrada potencial de compra cuando el precio hace un retroceso',
      ],
      rules: [
        'Primero: La Onda 2 no puede ser más larga que la Onda 1 y usualmente retrocede al nivel 0.618 de Fibonacci',
        'La Onda 3 debe ser la más larga entre las Ondas 1, 3 y 5',
        'La Onda 4 debe permanecer por encima del pico de la Onda 1, usualmente retrocede al nivel 0.382 de Fibonacci',
      ],
      keyPoints: [
        'Hay reglas específicas para asegurar que un movimiento se considere una Onda de Elliott válida',
        'Requiere práctica extensa para dominar',
        'Subjetivo en su aplicación',
        'Útil para identificar puntos de entrada/salida',
      ],
    },
  },
  {
    id: 'fair-value-gap',
    title: 'Fair Value Gap (FVG)',
    mainPicture: 'fvg-concept.png',
    category: 'Price Action',
    description:
      'Gaps significativos en el precio causados por desequilibrios de compra o venta que actúan como imanes de precio.',
    difficulty: 'Intermedio',
    timeframe: '15M - 4H',
    riskLevel: 'Medio',
    images: {
      thumbnail: 'fvg-concept.png',
      examples: ['imbalance-gap.png', 'wick-placement.png', 'magnet-level.png', 'price-revisit.png']
    },
    detailedContent: {
      introduction:
        'Un Fair Value Gap ocurre cuando una vela forma un gap significativo debido a un desequilibrio de compra o venta.',
      howItWorks: [
        'Primero necesitas encontrar una vela con un cuerpo grande',
        'Luego dibuja un rectángulo en el gap',
        'Colócalo entre la mecha de la vela anterior y la mecha de la vela siguiente',
        'Este nivel ahora actúa como un imán potencial donde el precio puede revisitar',
        'El precio puede regresar antes de continuar su movimiento',
      ],
      keyPoints: [
        'Los FVG actúan como zonas de soporte/resistencia',
        'El precio tiende a "rellenar" estos gaps',
        'Útil para identificar puntos de entrada',
        'Común en mercados volátiles',
      ],
    },
  },
  {
    id: 'candlestick-patterns',
    title: 'Patrones de Velas',
    mainPicture: 'candlestick-concept.png',
    category: 'Price Action',
    description:
      'Técnica de análisis basada en formas específicas de velas para predecir movimientos futuros del precio.',
    difficulty: 'Principiante',
    timeframe: '15M - 4H',
    riskLevel: 'Medio',
    images: {
      thumbnail: 'candlestick-concept.png',
      examples: ['analyze-shapes.png', 'engulfing-pattern.png', 'engulfing-momentum.png', 'hammer-shooting-star.png', 'doji-pattern.png']
    },
    detailedContent: {
      introduction:
        'Es una técnica que los traders usan para analizar movimientos futuros del precio observando formas específicas de velas.',
      howItWorks: [
        'Identificar formaciones específicas de velas',
        'Analizar el contexto del mercado',
        'Esperar confirmación en vela siguiente',
        'Entrar en dirección del patrón identificado',
      ],
      examples: [
        'Patrones Envolventes: señalan momentum fuerte hacia la dirección de la vela envolvente',
        'Patrones Martillo y Estrella Fugaz: indican rechazo como muestra la mecha larga en un lado',
        'Patrones Doji: señalan neutralidad en el mercado',
      ],
      keyPoints: [
        'Los patrones de velas notables incluyen varios tipos',
        'Fácil de aprender para principiantes',
        'Más efectivo en timeframes mayores',
        'Requiere confirmación con volumen',
      ],
    },
  },
  {
    id: 'heikin-ashi',
    title: 'Heikin Ashi',
    mainPicture: 'heikin-ashi-concept.png',
    category: 'Indicadores',
    description:
      'Indicador que reemplaza las velas tradicionales para filtrar ruido y visualizar tendencias más claramente.',
    difficulty: 'Principiante',
    timeframe: '1H - 4H',
    riskLevel: 'Bajo',
    images: {
      thumbnail: 'heikin-ashi-concept.png',
      examples: ['replaces-traditional.png', 'to-heikin-ashi.png', 'chart-comparison.png', 'less-noise.png', 'green-uptrend.png', 'red-downtrend.png', 'body-strength.png']
    },
    detailedContent: {
      introduction:
        'Es un indicador que reemplaza completamente un gráfico de velas tradicional a Heikin Ashi. Cuando se aplica, tiende a dar menos ruido que una vela tradicional.',
      howItWorks: [
        'Una vela verde de Heikin Ashi señala que el precio está en una tendencia alcista',
        'Una vela roja de Heikin Ashi señala que el precio está en una tendencia bajista',
        'El cuerpo de la vela también indica qué tan fuerte es una tendencia',
        'Mientras más grande sea la vela, más fuerte es la tendencia',
      ],
      keyPoints: [
        'Excelente para identificar tendencias',
        'Filtra el ruido del mercado',
        'Ten en cuenta que Heikin Ashi solo actúa como indicador, no muestra el precio real del mercado',
        'Usar como indicador complementario',
      ],
    },
  },
  {
    id: 'moon-phases',
    title: 'Fases Lunares',
    mainPicture: 'moon-phases-concept.png',
    category: 'Análisis Alternativo',
    description:
      'Concepto que utiliza ciclos lunares para temporizar el mercado basándose en correlaciones con emociones humanas.',
    difficulty: 'Principiante',
    timeframe: 'Diario - Semanal',
    riskLevel: 'Bajo',
    images: {
      thumbnail: 'moon-phases-concept.png',
      examples: ['moon-cycles.png', 'new-moon-bullish.png', 'full-moon-bearish.png']
    },
    detailedContent: {
      introduction:
        'Es un concepto que utiliza ciclos de la luna para temporizar el mercado. Los traders de fases lunares creen que los ciclos lunares están correlacionados con emociones y comportamiento humano.',
      howItWorks: [
        'Fases específicas de la luna se cree que son favorables hacia una cierta tendencia',
        'Una luna nueva significa que el mercado tiende a ser alcista',
        'Una luna llena significa que el mercado tiende a ser bajista',
      ],
      keyPoints: [
        'Hoy se usa principalmente como herramienta de confirmación',
        'Método controversial y no científico',
        'Usar solo como confirmación adicional',
        'No depender únicamente de este método',
      ],
    },
  },
  {
    id: 'renko',
    title: 'Gráficos Renko',
    mainPicture: 'renko-concept.png',
    category: 'Indicadores',
    description:
      'Tipo de gráfico que forma bloques basados en cambios de precio en lugar de tiempo, filtrando ruido del mercado.',
    difficulty: 'Intermedio',
    timeframe: 'Variable',
    riskLevel: 'Medio',
    images: {
      thumbnail: 'renko-concept.png',
      examples: ['replaces-candlestick.png', 'traditional-chart.png', 'renko-chart.png', 'time-based.png', 'price-based.png', 'percent-change.png', 'green-uptrend.png', 'red-downtrend.png']
    },
    detailedContent: {
      introduction:
        'Reemplaza un gráfico de velas tradicional a un gráfico Renko. A diferencia de una vela tradicional que forma una nueva vela basada en un cierto período de tiempo, un gráfico Renko forma sus bloques basándose en el cambio de precio.',
      howItWorks: [
        'Por ejemplo, cada 1% de cambio en el precio aparece un bloque Renko',
        'Esto significa que cada bloque Renko representa un 1% de cambio en el precio',
        'Por supuesto, puedes cambiar los parámetros de esto a través de la configuración del indicador',
        'Un bloque Renko verde señala una tendencia alcista',
        'Un bloque Renko rojo señala una tendencia bajista',
      ],
      keyPoints: [
        'Los traders pueden utilizar gráficos Renko para filtrar ruido e identificar tendencias',
        'Excelente para filtrar ruido',
        'Ten en cuenta que los gráficos Renko solo actúan como indicador, no muestran el precio real del mercado',
        'Útil para trading de tendencias',
      ],
    },
  },
  {
    id: 'harmonic-patterns',
    title: 'Patrones Armónicos',
    mainPicture: 'harmonic-concept.png',
    category: 'Análisis Técnico',
    description:
      'Patrones avanzados de precio que siguen formas específicas basadas en números de Fibonacci.',
    difficulty: 'Avanzado',
    timeframe: '4H - 1D',
    riskLevel: 'Alto',
    images: {
      thumbnail: 'harmonic-concept.png',
      examples: ['fibonacci-shapes.png', 'bat-pattern.png', 'real-chart.png', 'four-movements.png', 'pattern-tool.png', 'take-position.png'],
      diagram: 'multiple-patterns.png'
    },
    detailedContent: {
      introduction:
        'Estos son patrones avanzados de precio que siguen una forma específica basada en números de Fibonacci. Los traders pueden usar estas formas específicas para predecir movimientos futuros del precio.',
      howItWorks: [
        'Por ejemplo, un patrón Bat alcista se forma cuando el precio hace una serie de cuatro movimientos con forma de letra "M"',
        'Cada punto puede ser etiquetado como X-A-B-C-D y cada uno de estos puntos tiene una directriz específica',
        'Por ejemplo: Punto X a punto B necesita tener un valor entre 0.382 y 0.5',
        'Puntos A a C necesita tener un valor entre 0.382 y 0.886',
        'Estas directrices específicas pueden aplicarse en un gráfico real',
        'Si ves que el precio forma una serie de cuatro movimientos, puedes aplicar la herramienta de patrones armónicos para verificar si coincide',
        'Si coincide, entonces puedes tomar una posición basada en el patrón formado',
      ],
      examples: [
        'Patrón Bat (Murciélago)',
        'Patrón Gartley', 
        'Patrón Butterfly (Mariposa)',
        'Patrón Crab (Cangrejo)',
      ],
      keyPoints: [
        'Existen múltiples patrones armónicos, los más notables son varios tipos',
        'Requiere precisión en la medición',
        'Muy efectivo cuando se identifica correctamente',
        'Difícil de dominar',
      ],
    },
  },
  {
    id: 'support-resistance',
    title: 'Soporte y Resistencia',
    mainPicture: 'support-resistance-concept.png',
    category: 'Análisis Técnico',
    description:
      'Niveles clave horizontales donde el precio ha rebotado en el pasado y podría hacerlo nuevamente.',
    difficulty: 'Principiante',
    timeframe: 'Todos',
    riskLevel: 'Bajo',
    images: {
      thumbnail: 'key-levels.png',
      examples: ['bounce-future.png', 'support-buy.png', 'resistance-sell.png']
    },
    detailedContent: {
      introduction:
        'Estos son niveles clave que se forman horizontalmente donde el precio ha rebotado en el pasado y posiblemente puede rebotar nuevamente en el futuro.',
      howItWorks: [
        'Si el nivel está debajo del precio se llama soporte, donde puedes tomar una posición de compra si el precio se acerca',
        'Si el nivel está arriba del precio se llama resistencia, donde puedes tomar una posición de venta si el precio se acerca',
        'Identificar niveles donde el precio ha rebotado múltiples veces',
        'Esperar confirmación cuando el precio se acerca',
      ],
      keyPoints: [
        'Fundamental en análisis técnico',
        'Más fuerte con más toques',
        'Los niveles pueden romperse',
        'Usar con gestión de riesgo adecuada',
      ],
    },
  },
  {
    id: 'dynamic-support-resistance',
    title: 'Soporte y Resistencia Dinámica',
    mainPicture: 'dynamic-concept.png',
    category: 'Indicadores',
    description:
      'Niveles clave que se mueven con el precio usando indicadores como medias móviles.',
    difficulty: 'Principiante',
    timeframe: '1H - 4H',
    riskLevel: 'Bajo',
    detailedContent: {
      introduction:
        'Similar al soporte y resistencia tradicional, pero usa indicadores como medias móviles en lugar de líneas estáticas.',
      howItWorks: [
        'Aplicar media móvil al gráfico (ej: MA 50, MA 200)',
        'La línea actúa como soporte/resistencia dinámica',
        'Comprar cuando el precio toca la MA desde arriba',
        'Vender cuando el precio toca la MA desde abajo',
      ],
      keyPoints: [
        'Se adapta a las condiciones del mercado',
        'Útil en mercados con tendencia',
        'Combinar con otros indicadores',
        'Elegir período de MA según estrategia',
      ],
    },
  },
  {
    id: 'trend-lines',
    title: 'Líneas de Tendencia',
    mainPicture: 'trend-lines-concept.png',
    category: 'Análisis Técnico',
    description:
      'Niveles clave que se forman diagonalmente durante mercados con tendencia.',
    difficulty: 'Principiante',
    timeframe: 'Todos',
    riskLevel: 'Bajo',
    detailedContent: {
      introduction:
        'Las líneas de tendencia son niveles clave que se forman diagonalmente durante un mercado con tendencia.',
      howItWorks: [
        'Conectar dos o más puntos de swing lows (tendencia alcista)',
        'Conectar dos o más puntos de swing highs (tendencia bajista)',
        'Línea ascendente = alcista',
        'Línea descendente = bajista',
        'Usar para identificar puntos de entrada cuando el precio retrocede',
      ],
      keyPoints: [
        'Requiere al menos dos puntos para dibujar',
        'Más válida con más toques',
        'Puede romperse durante reversiones',
        'Ajustar según el precio se desarrolla',
      ],
    },
  },
  {
    id: 'gann-angles',
    title: 'Ángulos de Gann',
    mainPicture: 'gann-concept.png',
    category: 'Análisis Técnico',
    description:
      'Herramienta que muestra múltiples líneas en diferentes ángulos para medir la fuerza de la tendencia.',
    difficulty: 'Avanzado',
    timeframe: '4H - 1D',
    riskLevel: 'Alto',
    detailedContent: {
      introduction:
        'Los Ángulos de Gann muestran múltiples líneas que se extienden en diferentes ángulos, actuando como posibles niveles clave.',
      howItWorks: [
        'Activar "lock price to bar ratio" en configuración',
        'Identificar un rango de mercado',
        'Marcar swing low y swing high del rango',
        'Dibujar línea vertical al inicio del rango',
        'Medir ángulo de 45º',
        'Aplicar Gann Fan a 45º',
      ],
      rules: [
        'Precio en ángulos empinados = tendencia fuerte',
        'Precio en ángulos superficiales = tendencia débil',
        'Líneas actúan como soporte/resistencia',
      ],
      keyPoints: [
        'Herramienta compleja que requiere práctica',
        'Útil para medir fuerza de tendencia',
        'Combinar con otros métodos',
        'Requiere configuración precisa',
      ],
    },
  },
  {
    id: 'momentum-indicators',
    title: 'Indicadores de Momentum',
    mainPicture: 'momentum-concept.png',
    category: 'Indicadores',
    description:
      'Indicadores que miden la dirección y fuerza de una tendencia, efectivos en mercados con tendencia.',
    difficulty: 'Principiante',
    timeframe: '1H - 4H',
    riskLevel: 'Medio',
    images: {
      thumbnail: 'momentum-concept.png',
      examples: ['macd-indicator.png', 'macd-crossover.png', 'moving-average.png', 'above-bullish.png', 'parabolic-sar.png', 'supertrend.png']
    },
    detailedContent: {
      introduction:
        'Los indicadores de momentum miden la dirección y fuerza de una tendencia. Son más efectivos en mercados con tendencia.',
      howItWorks: [
        'Aplicar indicador de momentum al gráfico',
        'Identificar señales de cruce o cambio de dirección',
        'Confirmar con la tendencia general del mercado',
        'Entrar en dirección de la señal confirmada',
      ],
      examples: [
        'MACD: cruce ascendente indica alcista, cruce descendente indica bajista',
        'Media Móvil: precio arriba = alcista, precio abajo = bajista',
        'Parabolic SAR: punto debajo = alcista, punto arriba = bajista',
        'Supertrend: señal verde = alcista, señal roja = bajista',
      ],
      keyPoints: [
        'Mejores en mercados con tendencia',
        'Pueden dar señales falsas en laterales',
        'Combinar múltiples indicadores',
        'Usar con gestión de riesgo',
      ],
    },
  },
  {
    id: 'oscillators',
    title: 'Osciladores',
    mainPicture: 'oscillators-concept.png',
    category: 'Indicadores',
    description:
      'Indicadores que muestran la fuerza relativa del precio, efectivos en mercados laterales.',
    difficulty: 'Principiante',
    timeframe: '15M - 1H',
    riskLevel: 'Medio',
    detailedContent: {
      introduction:
        'Los osciladores muestran la fuerza relativa del precio. Son más efectivos en mercados laterales/choppy.',
      howItWorks: [
        'Aplicar oscilador al gráfico',
        'Identificar niveles de sobrecompra/sobreventa',
        'Esperar que el precio llegue a estos extremos',
        'Entrar en dirección opuesta cuando se confirme reversión',
      ],
      examples: [
        'RSI: sobreventa = posible reversión alcista, sobrecompra = posible reversión bajista',
        'Estocástico: ambas líneas en sobreventa = reversión alcista, en sobrecompra = reversión bajista',
      ],
      keyPoints: [
        'Mejores en mercados laterales',
        'Pueden permanecer en extremos durante tendencias',
        'Buscar divergencias para señales más fuertes',
        'Combinar con análisis de precio',
      ],
    },
  },
  {
    id: 'divergence',
    title: 'Divergencias',
    mainPicture: 'divergence-concept.png',
    category: 'Análisis Técnico',
    description:
      'Ocurre cuando un indicador muestra señal opuesta al movimiento real del precio, indicando posible reversión.',
    difficulty: 'Intermedio',
    timeframe: '1H - 4H',
    riskLevel: 'Medio',
    detailedContent: {
      introduction:
        'Las divergencias ocurren cuando un indicador muestra una señal opuesta al movimiento real del precio.',
      howItWorks: [
        'Identificar tendencia en el precio',
        'Comparar con indicador (MACD, RSI, Estocástico)',
        'Si el precio hace máximos más altos pero el indicador hace máximos más bajos = divergencia bajista',
        'Si el precio hace mínimos más bajos pero el indicador hace mínimos más altos = divergencia alcista',
      ],
      keyPoints: [
        'Señal potente de reversión',
        'Requiere confirmación adicional',
        'Más confiable en timeframes mayores',
        'No todas las divergencias resultan en reversiones',
      ],
    },
  },
  {
    id: 'volume',
    title: 'Indicadores de Volumen',
    mainPicture: 'volume-concept.png',
    category: 'Indicadores',
    description:
      'Indicadores que muestran la fuerza detrás del movimiento del precio rastreando el volumen de operaciones.',
    difficulty: 'Intermedio',
    timeframe: 'Todos',
    riskLevel: 'Bajo',
    detailedContent: {
      introduction:
        'Los indicadores de volumen muestran la fuerza detrás del movimiento del precio rastreando el volumen de operaciones.',
      howItWorks: [
        'Aplicar indicador de volumen al gráfico',
        'Analizar la relación entre precio y volumen',
        'Buscar confirmación de movimientos con alto volumen',
        'Evitar operar durante períodos de bajo volumen',
      ],
      examples: [
        'Volumen de Precio: muestra el volumen para cada vela, barra más larga = mayor volumen',
        'VWAP: muestra la relación entre precio y volumen total, puede usarse como MA dinámica',
        'Perfil de Volumen: muestra barras de volumen horizontalmente, tratadas como niveles clave',
      ],
      keyPoints: [
        'Volumen confirma movimientos de precio',
        'Alto volumen + breakout = señal más fuerte',
        'Bajo volumen = movimiento débil',
        'Útil para confirmar tendencias',
      ],
    },
  },
  {
    id: 'supply-demand',
    title: 'Oferta y Demanda',
    mainPicture: 'supply-demand-concept.png',
    category: 'Price Action',
    description:
      'Zonas donde han ocurrido movimientos significativos de precio, también conocidas como Order Blocks.',
    difficulty: 'Intermedio',
    timeframe: '1H - 4H',
    riskLevel: 'Medio',
    detailedContent: {
      introduction:
        'También conocidas como Order Blocks, son zonas donde han ocurrido movimientos significativos de precio.',
      howItWorks: [
        'Identificar movimientos bruscos del precio',
        'Marcar la zona de origen del movimiento',
        'Movimiento alcista significativo = zona de demanda',
        'Movimiento bajista significativo = zona de oferta',
        'Usar estas zonas como niveles para entradas',
      ],
      keyPoints: [
        'Más preciso que soporte/resistencia tradicional',
        'Zonas en lugar de líneas exactas',
        'Mejor en timeframes mayores',
        'Combinar con estructura de mercado',
      ],
    },
  },
  {
    id: 'market-structure',
    title: 'Estructura de Mercado',
    mainPicture: 'market-structure-concept.png',
    category: 'Price Action',
    description:
      'Análisis del comportamiento, condición y flujo del mercado mediante máximos y mínimos.',
    difficulty: 'Intermedio',
    timeframe: 'Todos',
    riskLevel: 'Bajo',
    detailedContent: {
      introduction:
        'La estructura de mercado es cuando los traders analizan el comportamiento, condición y flujo del mercado.',
      howItWorks: [
        'Tendencia alcista: máximos más altos y mínimos más altos',
        'Tendencia bajista: máximos más bajos y mínimos más bajos',
        'Identificar cambios en la estructura',
        'Operar en dirección de la estructura',
      ],
      keyPoints: [
        'Base fundamental del análisis técnico',
        'Ayuda a identificar tendencias',
        'Útil para todos los timeframes',
        'Combinar con BOS y CHoCH',
      ],
    },
  },
  {
    id: 'bos',
    title: 'Break of Structure (BOS)',
    mainPicture: 'bos-concept.png',
    category: 'Price Action',
    description:
      'Cuando el precio rompe el pico anterior durante una tendencia, confirmando continuación.',
    difficulty: 'Intermedio',
    timeframe: '15M - 4H',
    riskLevel: 'Medio',
    detailedContent: {
      introduction:
        'BOS ocurre cuando el precio rompe el pico de precio anterior durante una tendencia.',
      howItWorks: [
        'En tendencia alcista: precio hace máximos más altos y mínimos más altos',
        'Romper el máximo anterior = BOS alcista',
        'En tendencia bajista: precio hace máximos más bajos y mínimos más bajos',
        'Romper el mínimo anterior = BOS bajista',
      ],
      keyPoints: [
        'Confirma continuación de tendencia',
        'Punto de entrada cuando ocurre',
        'Usar con gestión de riesgo',
        'Combinar con estructura de mercado',
      ],
    },
  },
  {
    id: 'choch',
    title: 'Change of Character (CHoCH)',
    mainPicture: 'CHoCH-concept.png',
    category: 'Price Action',
    description:
      'Cuando el precio rompe la estructura anterior durante una tendencia, señalando posible reversión.',
    difficulty: 'Intermedio',
    timeframe: '15M - 4H',
    riskLevel: 'Medio',
    images: {
      thumbnail: 'higher-highs-lows.png',
      examples: [
        'choch-principal-ejemplo.png',
        'higher-highs-lows.png',
        'change-character.png'
      ]
    },
    detailedContent: {
      introduction:
        'CHoCH ocurre cuando el precio rompe la estructura anterior durante una tendencia, a menudo señalando una reversión.',
      howItWorks: [
        'Se produce cuando el precio rompe la estructura anterior durante una tendencia, lo que a menudo indica un cambio de tendencia con respecto a la tendencia actual.',
        'Por ejemplo, si el precio está formando máximos y mínimos cada vez más altos.',
        'Entonces rompe los mínimos anteriores formando mínimos más bajos, lo que se denomina un cambio de carácter.',
      ],
      keyPoints: [
        'Señal de posible reversión de tendencia',
        'Requiere confirmación adicional',
        'No todas las CHoCH resultan en reversiones',
        'Usar con otros indicadores',
      ],
    },
  },
]

export const categories = [
  'Todas',
  'Análisis Técnico',
  'Ruptura',
  'Reversión',
  'Price Action',
  'Indicadores',
  'Análisis Alternativo',
]