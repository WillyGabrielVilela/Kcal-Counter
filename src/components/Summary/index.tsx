import { Barbell, ForkKnife, Calculator } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'
import { numberFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Consumidas</span>
          <ForkKnife size={32} color="#8047F8" />
        </header>
        <strong>{numberFormatter.format(summary.income)} Kcals</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Gastas</span>
          <Barbell size={32} color="#F75A68" />
        </header>
        <strong>{numberFormatter.format(summary.outcome)} Kcals</strong>
      </SummaryCard>
      <SummaryCard variant="purple">
        <header>
          <span>Total</span>
          <Calculator size={32} color="#EBE5F9" />
        </header>
        <strong>{numberFormatter.format(summary.total)} Kcals</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
