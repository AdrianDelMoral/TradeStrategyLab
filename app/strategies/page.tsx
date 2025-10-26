import { Suspense } from 'react'
import { TradingStrategiesPage } from '../../src/components/TradingStrategiesPage'

function TradingStrategiesPageWrapper() {
  return <TradingStrategiesPage />
}

export default function StrategiesPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <TradingStrategiesPageWrapper />
    </Suspense>
  )
}