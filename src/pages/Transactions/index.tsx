import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { KcalHighlight, TransationsContainer, TransationsTable } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, numberFormatter } from '../../utils/formatter'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransationsContainer>
        <SearchForm />

        <TransationsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td width="20%">
                    <KcalHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {numberFormatter.format(transaction.kcal)}
                      {' Calorias'}
                    </KcalHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransationsTable>
      </TransationsContainer>
    </div>
  )
}
