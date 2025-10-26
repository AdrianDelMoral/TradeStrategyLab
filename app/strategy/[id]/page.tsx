import { StrategyDetailPage } from '../../../src/components/StrategyDetailPage'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  return <StrategyDetailPage params={resolvedParams} />
}